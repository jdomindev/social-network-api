const router = require('express').Router();
const {
    // controller routes go here
    //   getCourses,
    //   getSingleCourse,
    //   createCourse,
    //   updateCourse,
    //   deleteCourse,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get().post();

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get()
  .put()
  .delete();

module.exports = router;

// fill in routes from controller into their respective spots