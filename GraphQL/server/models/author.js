// author model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number,
  //Mongo Creates MongoID automagically
});

module.exports = mongoose.model('Author', authorSchema);
