
//////////////////////// Require modules //////////////////////////////////
// Model
const User = require("../models/User");
const Book = require("../models/Book");

/////////////// Router-handler callback functions ////////////////////////
const test = (req, res) => res.json({ msg: "Books router works" });

const addBook = (req, res) => {
  const book = new Book(req.body);
  // challenge.user = req.session.user._id;
  book
    .save()
    .then(book => {
      res.json({ success: true, book: book });
    })
    .catch(err => {
      return res.json({
        errors: { book: { msg: "Unable to save to database" } }
      });
    });
};

const getAllBooks = (req, res) => {
  Book.find().then((err, books) => {
    if (err) return res.status(500).send(err);
    return res.send(books);
  });
};

const updateBook = (req, res, next) => {
  const bookId = req.params.id;
  const updatedBook = req.body;
  const options = { new: true }; // return the newly updated data
  Book.findByIdAndUpdate(bookId, updatedBook, options, (err, book) => {
    // Handle any possible database error when updating book
    if (err) {
      return res.status(500).send(err);
    }
    return res.send(book);
  });
};

const deleteBook = (req, res) => {
  // const { userId, challengeId } = req.params;
  const userId = req.params.userId;
  const bookId = req.params.bookId;
  Book.findByIdAndDelete(bookId).then((err, doc) => {
    if (err) return res.status(500).send(err);
    return res.send(doc);
  });
};

module.exports = {
  test,
  addBook,
  getAllBooks,
  updateBook,
  deleteBook
};