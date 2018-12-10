//////////////////////// Require modules //////////////////////////////////
const User = require("../models/User");
// const keys = require("../config/keys");
// const validateRegisterInput = require("../validations/register");
// const validateLoginInput = require("../validations/login");
const { check, validationResult } = require("express-validator/check");

// Library
const gravatar = require("gravatar");
// const jwt = require("jsonwebtoken");

/////////////// Router-handler callback functions ////////////////////////
const test = (req, res) => res.json({ msg: "Users router works" });

const regValidation = [
  check("email")
    .not()
    .isEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email should be an email address")
    .custom(function(value, { req }) {
      if (value !== req.body.email) {
        throw new Error("Email don't match");
      }
      return value;
    }),
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name is required")
    .isLength({ min: 4 })
    .withMessage("Name should be at least 4 letters")
    .matches(/^([A-z]|\s)+$/)
    .withMessage("Name cannot have numbers"),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password should be at least 6 characters"),
  check(
    "confirmpassword",
    "Password confirmation is required or should be the same as password"
    // custom check function
  ).custom(function(value, { req }) {
    if (value !== req.body.password) {
      throw new Error("Passwords don't match");
    }
    return value;
  }),
  // check if email has already been registered before
  check("email").custom(value => {
    return User.findOne({ email: value }).then(function(user) {
      if (user) {
        throw new Error("This email is already in use");
      }
    });
  })
];

const register = (req, res) => {
  var errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.mapped() });
  }

  const avatar = gravatar.url(req.body.email, {
    s: "200", // Size
    r: "pg", // Rating
    d: "mm" // Default
  });

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    avatar,
    password: req.body.password
  });
  user.password = user.hashPassword(user.password);

  user
    .save()
    .then(user => {
      return res.json({
        ok: true,
        message: "You are successfully registered."
      });
    })
    .catch(error => {
      return res.json({ errors: { auth: { msg: "Something went wrong!" } } });
    });
};

///after payment to be able to login
const loginValidation = [
  check("email")
    .not()
    .isEmpty()
    .withMessage("Email is required!"),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Password can not be empty!")
];

const login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({
    email: req.body.email
  })
    .then(function(user) {
      if (!user) {
        return res
          .status(400)
          .send({ errors: { auth: { msg: "User does not exist!" } } });
      }
      if (!user.comparePassword(req.body.password, user.password)) {
        return res.status(400).send({
          errors: { auth: { msg: "Wrong password! Please try again." } }
        });
      }
      req.session.user = user;
      return res.send({ message: "You are signed in" });
    })
    .catch(function(error) {
      console.log(error);
    });
};

const logout = (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      console.log("Error logging out: ", err);
      return next();
    }
    res.json({ lisLoggedOut: true });
  });
};

const getAllUsers = (req, res, next) => {
  User.find({}, ["name", "email", "password", "avatar", "friends"]) //
    .then(User => {
      res.send({
        User: User
      });
    })
    .catch(err => {
      res.send(err);
    });
};

const getCurrentUser = (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
  // res.json(req.user);
};

const getUsersCount = (req, res, next) => {
  User.find()
    .then(users => {
      res.send({
        usersCount: users.length
      });
    })
    .catch(err => {
      res.send(err);
    });
};

const authorization = (req, res) => {
  if (req.session.user) {
    // return res.send({ isLoggedIn: true });
    return res.send({ user: req.session.user });
  }
  return res.status(404).send({ isLoggedIn: false });
};

const authenticateUser = (req, res, next) => {
  if (req.session.user) return next();
  return res.status(401).send({ isLoggedIn: false });
};

///////////////////// Profile ////////////////////////
const getUserProfile = (req, res) => {
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      console.log("Error finding the profile: ");
    }
    res.json(user.profile);
  });
};

const getMyProfile = (req, res) => {
  const id = req.session.user._id;
  User.findOne({ _id: id }, (err, user) => {
    if (err) {
      console.log("Error finding the profile: ");
    }
    res.json(user.profile);
  });
};

const updateProfile = (req, res, next) => {
  const id = req.params.id;
  const updatedProfile = req.body;
  const options = { new: true }; // return the newly updated data
  User.findByIdAndUpdate(
    id,
    { profile: updatedProfile }, // to update the nested object (profile within user)
    options,
    (err, profile) => {
      // Handle any possible database error when updating profile
      if (err) {
        return res.status(500).send(err);
      }
      return res.send(profile);
    }
  );
};

// ////////////////////// Friends /////////////////////////////
// should be two ways: request and accept to become friends?
const addFriend = (req, res) => {
  // get the id of new friend
  // push new friend to your existing friends
  const userId = req.params.id;
  const friend = req.body.friendId;
  User.findByIdAndUpdate(userId, { $push: { friends: friend } }, (err, doc) => {
    if (err) console.log(err);
    return res.send("Friend successfully added");
  });
};

const getFriends = (req, res, next) => {
  const userId = req.params.id;
  User.findById(userId).then(user => {
    const friendsArr = user.friends;
    User.find(
      {
        _id: friendsArr
      },
      function(err, docs) {
        return res.send(docs);
      }
    );
  });
};

// refactor the code later
const friendsCount = (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .then(user => {
      const friendsArr = user.friends;
      User.find(
        {
          _id: friendsArr
        },
        function(err, docs) {
          return res.json({ "friends count": docs.length });
        }
      );
    })
    .catch(err => {
      res.send(err);
    });
};

const removeFriend = (req, res) => {
  // const { userId, friendId } = req.params;
  const userId = req.params.userId;
  const friend = req.params.friendId;
  User.findByIdAndUpdate(userId, { $pull: { friends: friend } }, (err, doc) => {
    if (err) return res.status(500).send(err);
    return res.send(doc);
  });
};

module.exports = {
  test,
  register,
  login,
  logout,
  regValidation,
  loginValidation,
  authorization,
  authenticateUser,
  getAllUsers,
  getCurrentUser,
  getUsersCount,
  getUserProfile,
  getMyProfile,
  updateProfile,
  getFriends,
  friendsCount,
  addFriend,
  removeFriend
};
