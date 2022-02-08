const mongoose = require("mongoose");

// Add a virtual called reactionCount

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    maxLength: 280,
    minLength: 1,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // use getter method to format
  },
  reactions: [
    reactionSchema
  ],
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
