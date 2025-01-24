// routes/course.js
const express = require('express');
const router = express.Router();
const { getCourses, enrollInCourse, getCourseDetails } = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getCourses);
router.get('/:id', authMiddleware, getCourseDetails);
router.post('/enroll/:id', authMiddleware, enrollInCourse);

module.exports = router;
