const router = require('express').Router();
const {
    getUsers,
    createUser,
    getOneUser,
    updateUser,
    deleteUser

} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;