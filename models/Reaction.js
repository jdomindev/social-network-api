const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
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
  },
//   {
//     toJSON: {
//       getters: true,
//     },
//     id: false,
//   }
);

const Reaction = mongoose.model("Reaction", reactionSchema);

module.exports = Reaction;
