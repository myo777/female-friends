////////////////////////// Require packages/modules ///////////////////////////
// libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const session = require("express-session");
const passport = require("passport"); // JWT is just part of 'passport'
var cors = require("cors");

// routes
const users = require("./routes/api/users");
const books = require("./routes/api/books");
const challenges = require("./routes/api/challenges");
const suggestions = require("./routes/api/suggestions");

//////////////////////////// Initiate our app /////////////////////////////////
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    credentials: true
  })
);

/////////////////////////////////// Config /////////////////////////////////////
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false })); // returns middleware that only parses urlencoded bodies
app.use(bodyParser.json()); // returns middleware that only parses json

////// SESSION /////////
const session = require("express-session");
app.use(
  session({
    secret: "Super duper secret", // any unique string
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 1000 }
  })
);

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB through moogoose
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport Config
require("./config/passport")(passport);

////////////////////////// Test our server ////////////////////////////////////
// Check the server running or not
app.get("/", (req, res) => res.send("hello world"));

////////////////////////// Mount the mini apps  ///////////////////////////////
app.use("/api/users", users); //miniapp
app.use("/api/books", books);
app.use("/api/challenges", challenges);
app.use("/api/suggestions", suggestions);

////////////////////////// Configure server //////////////////////////////////
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));