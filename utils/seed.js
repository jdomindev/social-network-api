const connection = require('../config/connection');
const { User, Thought} = require('../models');
// const { reactionSchema } = require('../models/Reaction')

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the entries in the collection
  await User.deleteMany({});
  await Thought.deleteMany({});

  const reactions = [{reactionBody: 'This is a test reaction', username: 'test'}, {reactionBody: 'This is a test reaction', username: 'test2'}];
  const thoughts = [{thoughtText: 'This is a test thought', username: 'test', reactions: reactions}];
  const users = [{username: 'test', email: 'test@test.com', thoughts: thoughts}, {username: 'test2', email: 'test2@test.com'}, {username: 'test3', email: 'test3@test.com'}];
  
  

  // Wait for the comments to be inserted into the database
  await User.collection.insertMany(users);

  // Wait for the thoughts array to be inserted into the database
  await Thought.collection.insertMany(thoughts);
  
//   await reactionSchema.collection.insertMany(reactions);

  // Log out a pretty table for comments and thoughts
  console.table(users);
  console.table(thoughts);
//   console.table(reactions);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});
