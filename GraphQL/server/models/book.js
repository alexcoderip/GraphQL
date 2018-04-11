// book model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
  //Mongo Creates MongoID automagically
});

module.exports = mongoose.model("Book", bookSchema);
