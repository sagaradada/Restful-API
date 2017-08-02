
//Including packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

//app is the object to represent the express application
const app = express();

//Creating object for genre
const Genre = require('./models/genre');

//Creating object for book
const Book = require('./models/book');

//Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
console.log("1. Listening to port 27017 to connect with MongoDB");

//Database object
const db = mongoose.connection;

//Specifying the folder where all the angular code is placed
app.use(express.static(path.join(__dirname, 'dist')));

//Specifying some code for body parser middleware
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

//Specifying the port
const port = 3000;

//Creating routes
//app.get() is used to handle the request
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
  console.log("Sucessfully rendendered index.html page from dist folder");
});

//adding routes for genres
app.get('/api/genres', function (req, res) {
  Genre.getGenres(function (err, genres) {
    if(err) {
      console.log(err);
    }
    console.log("Fetching daata from BookStore database and Genres collection ");
    res.json(genres);
    console.log("Succesfull");
  })
});

//adding routes for books
app.get('/api/books', function (req, res) {
  Book.getBooks(function (err, books) {
    if(err) {
      console.log(err);
    }
    console.log("Fetching data from Bookstore database and Books Collection");
    res.json(books);
    console.log("Successfull");
  })
});

//adding routes for books to get with the id
app.get('/api/books/:_id', function (req, res) {
  Book.getBookById (req.params._id, function (err, book) {
    if(err) {
      console.log(err);
    }
    console.log("Fetching data from Bookstore database and Books Collection with given id");
    res.json(book);
    console.log("Successfull fetch data with given id");
  })
});

//adding routes for genres to get with the id
app.get('/api/genres/:_id', function (req, res) {
  Genre.getGenreById (req.params._id, function (err, genre) {
    if(err) {
      console.log(err);
    }
    console.log("Fetching data from Bookstore database and Genres collection with given id");
    res.json(genre);
    console.log("Successfully fetch data with given id");
  })
});

//To ask express to listen
app.listen(port, function () {
  console.log("Server is running on port " + port);
});




