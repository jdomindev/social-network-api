const router = require('express').Router();
const {
    // controller routes go here
    getUsers,
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post();

// /api/users/:userId
router
  .route('/:userId')
  .get()
  .put()
  .delete();

module.exports = router;

// fill in routes from controller into their respective spots