const express = require("express");
const router = express.Router();
const bookController = require("../../controllers/bookController");

/**
 * @route GET api/books/test
 * @desc Tests book route
 * @access Public
 */
router.get("/test", bookController.test);

/**
 * @route GET api/books/all
 * @desc GET all books
 * @access Public
 */
router.get("/all", bookController.getAllBooks);

/**
 * @route POST api/books/add
 * @desc POST add a new book
 * @access Public
 */
router.post("/add", bookController.addBook);

/**
 * @route PUT api/books/edit
 * @desc PUT edit book entry
 * @access Public
 */
router.put("/:id/edit", bookController.updateBook);

/**
 * @route DELETE api/books/delete
 * @desc DELETE remove book entry
 * @access Public
 */
router.delete("/:userId/delete/:bookId", bookController.deleteBook);

module.exports = router;