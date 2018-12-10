
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

//////////////////////////// Create Schema ////////////////////////////////////
const UserSchema = new Schema({
  // Login info
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    // Gravatar, for instance
    type: String
  },

  // billing
  billing: {
    // billing is not yet tested
    firstName: {
      type: String,
      // required: true
      default: ""
    },
    lastName: {
      type: String,
      // required: true
      default: ""
    },
    companyName: {
      type: String,
      // required: true
      default: ""
    },
    country: {
      type: String,
      // required: true
      default: ""
    },
    streetAddress: {
      type: String,
      // required: true
      default: ""
    },
    postcodeZip: {
      type: String,
      // required: true
      default: ""
    },
    city: {
      type: String,
      // required: true
      default: ""
    },
    phone: {
      type: String,
      // required: true
      default: ""
    }
  },

  // Profile info
  profile: {
    dateOfBirth: {
      type: Date,
      // required: true
      default: null
    },
    linkedin: {
      type: String,
      // required: true
      default: ""
    },
    biography: {
      type: String,
      // required: true
      default: ""
    },
    university: {
      type: String,
      // required: true
      default: ""
    },
    expertise: {
      type: String,
      // required: true
      default: ""
    },
    experience: {
      type: String,
      // required: true
      default: ""
    },
    industry: {
      type: String,
      // required: true
      default: ""
    },
    supportSeek: {
      type: String,
      // required: true
      default: ""
    },
    supportGive: {
      type: String,
      // required: true
      default: ""
    },
    role: {
      type: String,
      // required: true
      default: ""
      // possibleValues: ['mentor','mentee']
    },
    recruitment: {
      type: String,
      // required: true
      default: ""
      // possibleValues: ['interested','not interested']
    }
  },

  // Social links
  social: {
    twitter: {
      type: String,
      // required: true
      default: ""
    },
    facebook: {
      type: String,
      // required: true
      default: ""
    },
    youtube: {
      type: String,
      // required: true
      default: ""
    },
    github: {
      type: String,
      // required: true
      default: ""
    }
  },

  // friends
  friends: [],

  // books: [
  //   {
  //     book: {
  //       type: Schema.Types.ObjectId,
  //       ref: "Book"
  //     }
  //   }
  // ],

  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

///////////Encrypt User password//////////////
UserSchema.methods.hashPassword = function(password) {
  return bcrypt.hashSync(password, 12);
};
UserSchema.methods.comparePassword = function(password, hashPassword) {
  return bcrypt.compareSync(password, hashPassword);
};

module.exports = mongoose.model("User", UserSchema);