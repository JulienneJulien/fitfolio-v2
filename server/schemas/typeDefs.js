const { gql } = require('apollo-server-express');



const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    username: String
    createdAt: String!
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int
    commentCount: Int
  }

  type Comment{
    id: ID!
    createdAt: String!
    username: String
    body: String!
  }

type Like{
    id: ID!
    createdAt: String!
    username: String
}

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Query {
    getAllPosts: [Post]
    getPost(postId: ID!): Post
  }


  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    createPost(body:String!): Post!
    deletePost(postId:ID): String!
    updatePost(postId:String!, body:String): Post!
    createComment(postId: String!, body:String!): Post!
    deleteComment(postId: ID!, commentId:ID!): Post!
    likePost(postId: ID!): Post!
  }
`;

module.exports = typeDefs;
