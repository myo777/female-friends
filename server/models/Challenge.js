
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Challenge Schema
const ChallengeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },

  // likes: [
  //   {
  //     user: {
  //       type: Schema.Types.ObjectId,
  //       ref: "User"
  //     }
  //   }
  // ],

  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      comment: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Challenge", ChallengeSchema);