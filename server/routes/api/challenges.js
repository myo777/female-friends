
const express = require("express");
const router = express.Router();
const challengeController = require("../../controllers/challengeController");

// /**
//  * @route GET api/challenges/test
//  * @desc Tests users route
//  * @access Public
//  */
router.get("/test", challengeController.test);

// ////////////////////// Challenges /////////////

// /**
//  * @route GET api/challenges/all
//  * @desc GET all challenges
//  * @access Public
//  */
router.get("/all", challengeController.getAllChallenges);

/**
 * @route GET api/challenges/:id
 * @desc GET one challenge
 * @access Public
 */
router.get("/:id", challengeController.getOneChallenge);

/**
 * @route POST api/challenges/add
 * @desc POST add a new challenge
 * @access Public
 */
router.post("/add", challengeController.addChallenge);

/**
 * @route PUT api/challenges/update
 * @desc PUT update a challenge
 * @access Public
 */
router.put("/:id/edit", challengeController.updateChallenge);

/**
 * @route DELETE api/challenges/delete
 * @desc DELETE remove a challenge
 * @access Public
 */
router.delete(
  "/:userId/deleteChallenge/:challengeId",
  challengeController.deleteChallenge
);

// ////////////////////// Likes and comments /////////////

/**
 * @route POST api/challenges/like
 * @desc POST like a challenge
 * @access Public
 */
// router.post("/like", challengeController.likeChallenge);

/**
 * @route GET api/challenges/:id/allComments
 * @desc GET all comment
 * @access Public
 */
router.get("/:id/allComments", challengeController.getAllComments);

/**
 * @route PUT api/challenges/:id/addcomment
 * @desc PUT update challenge by adding a comment
 * @access Public
 */
router.put("/:id/addComment", challengeController.addComment);

/**
 * @route PUT api/challenges/editcomment
 * @desc PUT edit a comment
 * @access Public
 */
router.put(
  "/:challengeId/updatecomment/:commentId",
  challengeController.updateComment
);

/**
 * @route PUT api/challenges/deletecomment
 * @desc PUT remove a comment
 * @access Public
 */
router.put(
  "/:challengeId/deletecomment/:commentId",
  challengeController.deleteComment
);

module.exports = router;