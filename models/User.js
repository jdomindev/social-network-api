// Define Mongoose
const mongoose = require("mongoose");

// Create a new instance of the Mongoose schema to define shape of each document
const userSchema = new mongoose.Schema({
  // Add individual properties and their types
  // Setting required to true will disallow null values
  username: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validation: [validateEmail, "Please fill a valid email address"],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

// Using mongoose.model() to compile a model based on the schema
// 'Item' is the name of the model
// user is the name of the schema we are using to create a new instance of the model
const User = mongoose.model("User", userSchema);

// Error handler function to be called when an error occurs when trying to save a document
// const handleError = (err) => console.error(err);

// User.create(
//   {
//     item: 'banana',
//     stockCount: 10,
//     price: 1,
//     inStock: true,
//   },
//   (err) => (err ? handleError(err) : console.log('Created new document'))
// );

module.exports = User;
