const connection = require('../config/connection');
const { User, Thought} = require('../models');
// const { reactionSchema } = require('../models/Reaction')

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the entries in the collection
  await User.deleteMany({});
  // await Thought.deleteMany({});

  // const reactions = [{reactionBody: 'This is a test reaction', username: 'test'}, {reactionBody: 'This is a test reaction', username: 'test2'}];
  // const thoughts = [{thoughtText: 'This is a test thought', username: 'test', reactions: reactions}];
  const users = [{username: 'test', email: 'test@test.com'}, {username: 'test2', email: 'test2@test.com'}, {username: 'test3', email: 'test3@test.com'}];

  await User.collection.insertMany(users);

  // await Thought.collection.insertMany(thoughts);
  

  // Log out a pretty table for comments and thoughts
  console.table(users);
  // console.table(thoughts);
//   console.table(reactions);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});

// TODO:
// add getter function to format dates in thoughts and reaction schema
// take screenshots and video
// update readme and polish
// fix seeds if needed
