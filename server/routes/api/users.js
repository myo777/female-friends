
const express = require("express");
const router = express.Router();
const passport = require("passport");
// const jwt = require("jsonwebtoken");

const userController = require("../../controllers/userController");

/**
 * @route GET api/users/test
 * @desc Tests users route
 * @access Public
 */
router.get("/test", userController.test);

////////////////////// register/Auth /////////////////////////////
/**
 * @route POST api/users/register
 * @desc Register user
 * @access Public
 */
router.post("/register", userController.regValidation, userController.register);

/**
 * @route POST api/users/login
 * @desc Login user / Returning JWT Token
 * @access Public
 */
router.post("/login", userController.login);

router.get("/logout", userController.logout);

////////////////////// Users /////////////////////////////
/**
 * @route GET api/users/getAlUsers
 * @desc GET all users
 * @access Public
 */
router.get("/getAllUsers", userController.getAllUsers);

// /**
//  * @route GET api/users/current
//  * @desc GET current user
//  * @access Private
//  */
// router.get(
//   "/getCurrentUser",
//   passport.authenticate("jwt", { session: false }),
//   userController.getCurrentUser
// );

router.get("/authorization", userController.authorization);

/**
 * @route GET api/users/getUsersCount
 * @desc GET users count
 * @access Private
 */
router.get(
  "/getUsersCount",
  userController.authenticateUser,
  userController.getUsersCount
);

////////////////////// Profile /////////////////////////////
/**
 * @route GET api/users/profile/:id
 * @desc GET specific user profile
 * @access Public
 */
router.get("/profile/:id", userController.getUserProfile); // pass user id as parameter

/**
 * @route GET api/users/profile/
 * @desc GET logged user profile
 * @access Private
 */
router.get("/profile", userController.getMyProfile); // pass user id as parameter

/**
 * @route PUT api/users/profile/:id/edit
 * @desc PUT edit user's profile
 * @access Public
 */
router.put("/profile/:id/edit", userController.updateProfile);

// ////////////////////// Friends /////////////////////////////
// /**
//  * @route GET api/users/:id/friends
//  * @desc GET specific user's friends
//  * @access Public
//  */
router.get("/:id/friends", userController.getFriends);

// /**
//  * @route GET api/users/friendsCount
//  * @desc GET specific user's friends' count
//  * @access Public
//  */
router.get("/:id/friendsCount", userController.friendsCount);

// /**
//  * @route PUT api/users/addFriend
//  * @desc PUT add friends
//  * @access Public
//  */
router.post("/:id/addfriend", userController.addFriend);
// /**
//  * @route DELETE api/users/removeFriend
//  * @desc DELETE friend from list
//  * @access Public
//  */
router.delete("/:userId/removefriend/:friendId", userController.removeFriend);

module.exports = router;