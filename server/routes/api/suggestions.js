
const express = require("express");
const router = express.Router();
const suggestionController = require("../../controllers/suggestionController");

/**
 * @route GET api/suggestions/test
 * @desc Tests users route
 * @access Public
 */
router.get("/test", suggestionController.test);

// ////////////////////// Suggestions /////////////

/**
 * @route GET api/suggestions/all
 * @desc GET all suggestions
 * @access Public
 */
router.get("/all", suggestionController.getAllSuggestions);

/**
 * @route POST api/suggestions/add
 * @desc POST add a new suggestion
 * @access Public
 */
router.post("/add", suggestionController.addSuggestion);

/**
 * @route PUT api/suggestions/edit
 * @desc PUT edit a suggestion
 * @access Public
 */
router.put("/:id/edit", suggestionController.updateSuggestion);

/**
 * @route DELETE api/suggestions/delete
 * @desc DELETE remove a suggestion
 * @access Public
 */
router.delete(
  "/:userId/deletesuggestion/:suggestionId",
  suggestionController.deleteSuggestion
);

// ////////////////////// Likes and comments /////////////

// /**
//  * @route POST api/suggestions/like
//  * @desc POST like a suggestion
//  * @access Public
//  */
// router.post("/like", suggestionController.likeSuggestion);

/**
 * @route GET api/suggestions/:id/allComments
 * @desc GET all comment
 * @access Public
 */
router.get("/:id/allComments", suggestionController.getAllComments);

/**
 * @route PUT api/suggestions//:id/addcomment
 * @desc PUT add a comment
 * @access Public
 */
router.put("/:id/addcomment", suggestionController.addComment);

/**
 * @route PUT api/suggestions/editcomment
 * @desc PUT edit a comment
 * @access Public
 */
router.put(
  "/:suggestionId/updatecomment/:commentId",
  suggestionController.updateComment
);

/**
 * @route  PUT api/suggestions/deletecomment
 * @desc PUT remove a comment
 * @access Public
 */
router.put(
  "/:suggestionId/deletecomment/:commentId",
  suggestionController.deleteComment
);

module.exports = router;