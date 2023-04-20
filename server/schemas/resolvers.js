const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Product, Category, Order, Post } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    getAllPosts: async () => { 
      return await Post.find();
    },
    getPost: async (_, {postId}) => {
      return await Post.findById(postId);
    },
   
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate('products');

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
    async createPost(_, { body} , user, args, username, context){
    
      const newPost = new Post({
        body,
        user:user.id,
        username:user.username,
        createdAt: new Date().toDateString()
      });
      const post = await newPost.save();
      return post;
    },
    deletePost: async (_, {postId}, user, username, context) => {
      const post = await Post.findById(postId);
      if(user.username === post.username) {
        await Post.findByIdAndDelete(postId, user)
        return "You have successfully deleted this post";
      } else {
     throw Error('No post was found')
      } 
    },

    updatePost: async (parent, args, user,username) => {
      const {postId} = args
      const {body} = args.post;
      const updates = {}
      if (body !== undefined) {
        updates.body = body;
      }
      const post = await Post.findByIdAndUpdate(postId,
        updates,
        {new: true}
        );
      return post;
    },
  

    createComment: async (_, {postId, body, username}, context) => {
      if (body.trim() === '') {
        throw new UserInputError('Invalid comment')
    }
    const post = await Post.findByIdAndUpdate(postId);
      if(post){
        post.comments.unshift({
            body,
            username,
            createdAt: new Date().toDateString(),
        })
        await post.save();
        return post;
      }else throw new UserInputError('No post was found')
  },


  deleteComment: async (_, {postId, commentId, username}, context) => {

  const post = await Post.findById(postId);
    if(post){
      const commentIndex = post.comments.findIndex(c => c.id === commentId);
      if(post.comments[commentIndex].username === username) {
        post.comments.splice(commentIndex, 1)
        await post.save();
        return post;
      } else {
        throw new AuthenticationError('No action allowed');
    } 
  }else {
      throw new UserInputError('No post was found');
    }   
},

likePost: async (_, {postId, username}, context) => {

  const post = await Post.findById(postId);
    if(post) {
      if(post.likes.find(like => like.username === username)) {
        // POST has already received likes but, was unliked
          post.likes = post.likes.filter(like => like.username !== username);
      } else {
        post.likes.push({
          username,
          createdAt: new Date().toDateString(),
        });
      } 
        await post.save();
        return post;
      } else
          throw new UserInputError('No post was found');

},


    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };

    }
  }
};

module.exports = resolvers;
