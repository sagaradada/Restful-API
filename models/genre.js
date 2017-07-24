const mongoose = require('mongoose');

//Creating schemas for genre
const genreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});


//Creating const so that this Genre object can be accessible from anywhere else
const Genre = module.exports = mongoose.model('Genre',genreSchema);

//Function to get Genres
module.exports.getGenres = function (callback, limit) {
  Genre.find(callback).limit(limit);
};

