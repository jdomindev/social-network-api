const { User, Thought, Reaction } = require("../models");

module.exports = {
  // Get all users
  getUsers(req, res) {
    try {
      User.find().toArray(res.send(results));
    } catch (error) {
      res.send(error);
    }
  },
};
