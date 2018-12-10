
//////////////////////// Require modules //////////////////////////////////
// Model
const Challenge = require("../models/Challenge");

/////////////// Router-handler callback functions ////////////////////////
const test = (req, res) => res.json({ msg: "Challenges router works" });

const addChallenge = (req, res) => {
  const challenge = new Challenge(req.body);
  challenge.user = req.session.user._id;
  challenge
    .save()
    .then(challenge => {
      res.json({ success: true, challenge: challenge });
    })
    .catch(err => {
      return res.json({
        errors: { challenge: { msg: "Unable to save to database" } }
      });
    });
};

const getAllChallenges = (req, res) => {
  Challenge.find()
    .populate("user", { password: 0 })
    .sort({ createdAt: "desc" })
    .then(challenges => {
      res.json(challenges);
    })
    .catch(err =>
      res.json({
        errors: { challenge: { msg: "Unable to get challenges from database" } }
      })
    );
};

const getOneChallenge = (req, res) => {
  Challenge.find({ _id: req.params.id })
    .then(challenge => {
      return res.send(challenge[0]);
    })
    .catch(err => {
      res.json({
        errors: {
          challenge: { msg: "Unable to get one challenge from database" }
        }
      });
    });
};

const updateChallenge = (req, res, next) => {
  const challengeId = req.params.id;
  const updatedChallenge = req.body;
  const options = { new: true }; // return the newly updated data
  Challenge.findByIdAndUpdate(
    challengeId,
    updatedChallenge,
    options,
    (err, challenge) => {
      // Handle any possible database error when updating profile
      if (err) {
        return res.status(500).send(err);
      }
      return res.send(challenge);
    }
  );
};

const deleteChallenge = (req, res) => {
  // const { userId, challengeId } = req.params;
  const userId = req.params.userId;
  const challengeId = req.params.challengeId;
  Challenge.findByIdAndDelete(challengeId).then((err, doc) => {
    if (err) return res.status(500).send(err);
    return res.send(doc);
  });
};

// ////////////////////// Likes and comments /////////////
const addComment = (req, res) => {
  const challengeId = req.params.id;
  const option = { safe: true, upsert: true };
  Challenge.findByIdAndUpdate(
    challengeId,
    { $push: { comments: req.body } }, // push an object to an sub document array
    option,
    (err, doc) => {
      if (err) console.log(err);
      return res.send("Comment successfully added");
    }
  );
};

const getAllComments = (req, res) => {
  const challengeId = req.params.id;
  Challenge.findOne({ _id: challengeId }).then(challenge => {
    const commentsArr = challenge.comments;
    return res.json(commentsArr);
  });
};

const updateComment = (req, res) => {
  const challengeId = req.params.challengeId;
  const commentId = req.params.commentId;

  Challenge.findById(challengeId, (err, challenge) => {
    let comment = challenge.comments.id(commentId);
    comment.set(req.body);
    challenge
      .save()
      .then(savedChallenge => {
        res.send(savedChallenge);
      })
      .catch(err => res.status(500).send(err));
  });
};

const deleteComment = (req, res) => {
  const challengeId = req.params.challengeId;
  const commentId = req.params.commentId;
  const options = { new: true };

  Challenge.findByIdAndUpdate(
    challengeId,
    {
      $pull: { comments: { _id: commentId } }
    },
    options,
    (err, doc) => {
      if (err) return res.status(500).send(err);
      return res.send(doc);
    }
  );
};

module.exports = {
  test,
  addChallenge,
  getAllChallenges,
  getOneChallenge,
  updateChallenge,
  deleteChallenge,
  getAllComments,
  addComment,
  updateComment,
  deleteComment
};