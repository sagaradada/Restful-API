const mongoose =  require('mongoose');

//Creating Schemas for Book
const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String
  },
  pages: {
    type: String,
  },
  image_url: {
    type: String,
  },
  buy_url: {
    type: String,
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});


//Creating const so that this book object can be accessible from anywhere else
const Book = module.exports = mongoose.model('Book', bookSchema);

//Function to get Books
module.exports.getBooks = function (callback, limit) {
  Book.find(callback).limit(limit);
};

//Function to get book by id
module.exports.getBookById = function (id, callback) {
  Book.findById(id, callback);
};



