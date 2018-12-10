//////////////////////// Require modules //////////////////////////////////
// Model
const User = require("../models/User");
const Suggestion = require("../models/Suggestion");

/////////////// Router-handler callback functions ////////////////////////
const test = (req, res) => res.json({ msg: "Suggestions router works" });

const addSuggestion = (req, res) => {
  const suggestion = new Suggestion(req.body);
  // suggestion.user = req.session.user._id;
  suggestion
    .save()
    .then(suggestion => {
      res.json({ success: true, suggestion: suggestion });
    })
    .catch(err => {
      return res.json({
        errors: { suggestion: { msg: "Unable to save to database" } }
      });
    });
};

const getAllSuggestions = (req, res) => {
  Suggestion.find().then((err, suggestion) => {
    if (err) return res.status(500).send(err);
    return res.send(suggestion);
  });
};

const updateSuggestion = (req, res, next) => {
  const suggestionId = req.params.id;
  const updatedSuggestion = req.body;
  const options = { new: true }; // return the newly updated data
  Suggestion.findByIdAndUpdate(
    suggestionId,
    updatedSuggestion,
    options,
    (err, suggestion) => {
      // Handle any possible database error when updating suggestion
      if (err) {
        return res.status(500).send(err);
      }
      return res.send(suggestion);
    }
  );
};

const deleteSuggestion = (req, res) => {
  // const { userId, challengeId } = req.params;
  const userId = req.params.userId;
  const suggestionId = req.params.suggestionId;
  Suggestion.findByIdAndDelete(suggestionId).then((err, doc) => {
    if (err) return res.status(500).send(err);
    return res.send(doc);
  });
};

// ////////////////////// Likes and comments /////////////
const addComment = (req, res) => {
  const suggestionId = req.params.id;
  const option = { safe: true, upsert: true };
  Suggestion.findByIdAndUpdate(
    suggestionId,
    { $push: { comments: req.body } }, // push an object to an sub document array
    option,
    (err, doc) => {
      if (err) console.log(err);
      return res.send("Comment successfully added");
    }
  );
};

const getAllComments = (req, res) => {
  const suggestionId = req.params.id;
  Suggestion.findOne({ _id: suggestionId }).then(suggestion => {
    const commentsArr = suggestion.comments;
    return res.json(commentsArr);
  });
};

const updateComment = (req, res) => {
  const suggestionId = req.params.suggestionId;
  const commentId = req.params.commentId;

  Suggestion.findById(suggestionId, (err, suggestion) => {
    let comment = suggestion.comments.id(commentId);
    comment.set(req.body);
    suggestion
      .save()
      .then(savedSuggestion => {
        res.send(savedSuggestion);
      })
      .catch(err => res.status(500).send(err));
  });
};

const deleteComment = (req, res) => {
  const suggestionId = req.params.suggestionId;
  const commentId = req.params.commentId;
  const options = { new: true };

  Suggestion.findByIdAndUpdate(
    suggestionId,
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
  addSuggestion,
  getAllSuggestions,
  updateSuggestion,
  deleteSuggestion,
  addComment,
  getAllComments,
  updateComment,
  deleteComment
};