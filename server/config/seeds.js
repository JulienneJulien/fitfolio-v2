const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Sporting' },
    { name: 'Excercise' },
    { name: 'Apparel' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Nike - Jump Rope',
      category: categories[1]._id,
      description:
        'Jump Rope, the Nike way',
      image: 'NikeRope.jpg',
      price: 34.99,
      quantity: 50
    },
    {
      name: 'Resistance Bands',
      category: categories[1]._id,
      description:
        'train hard with new resistance bands!',
      image: 'Bands.jpg',
      price: 24.99,
      quantity: 45
    },
    {
      name: 'EA SPORTS - FIFA 2023',
      category: categories[0]._id,
      description:
        'Its in the game',
      image: 'FIFA.jpg',
      price: 69.99,
      quantity: 100
    },
    {
      name: 'Nike - Socks',
      category: categories[2]._id,
      description:
        'Nikes most impressive socks!',
      image: 'NikeSocks1.jpg',
      price: 19.99,
      quantity: 15
    },
    {
      name: 'Puma - Gym Bag',
      category: categories[0]._id,
      description:
        'Gear up with a Puma Gym Bag!',
      image: 'PumaBag.jpeg',
      price: 49.99,
      quantity: 50
    },
    {
      name: 'Simple Modern - 24oz Water Bottle',
      category: categories[1]._id,
      description:
        'Water, but simple and modern',
      image: 'SMbottle.png',
      price: 28.99,
      quantity: 25
    },
    {
      name: 'Spalding - Steph Curry Limited Edition Basketball',
      category: categories[0]._id,
      description:
        'Shoot like Steph!',
      image: 'StephCurryBall.png',
      price: 39.99,
      quantity: 5
    },
    {
      name: 'Canyon Aero - Road Bike',
      category: categories[0]._id,
      description: 'Can you handle the Canyon?',
      image: 'CanyonAeroadBike.png',
      price: 6995.99,
      quantity: 10
    },
    {
      name: '3-piece Weight Set',
      category: categories[1]._id,
      description:
        'Weights, theyre heavy...or not...',
      image: 'Weights.jpg',
      price: 59.99,
      quantity: 300
    },
    {
      name: 'Everlast - MMA Heavy Bag',
      category: categories[1]._id,
      description:
        'Channel your inner Jon Jones with the Everlast MMA Heavy Bag',
      image: 'MMAbag.jpg',
      price: 149.99,
      quantity: 20
    },
    {
      name: 'Adidas - Nite Jogger Shoes',
      category: categories[2]._id,
      description:
        'Tackle your night jog with your new Adidas Nite Joggers!',
      image: 'NiteJogger.jpg',
      price: 139.99,
      quantity: 600
    },
    {
      name: 'FitFolio Hat',
      category: categories[2]._id,
      description:
        'Train, Compete, Grow! with our new logo hat.',
      image: 'logoHat.png',
      price: 29.89,
      quantity: 350
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Kevin',
    lastName: 'Arguello',
    email: 'kevin@gmail.com',
    password: 'password'
  });



  await User.create({
    firstName: 'Julienne',
    lastName: 'Julien',
    email: 'juliennejulien15@gmail.com',
    password: 'password'
  });



  console.log('users seeded');

  process.exit();
});
