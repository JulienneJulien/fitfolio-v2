const mongoose = require('mongoose');

const { Schema } = mongoose;

const exerciseSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  title: String,
  bodyPart:String, 
  gifUrl: String, 
  name:String,
  target:String, 
  equipment:String,
  
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;