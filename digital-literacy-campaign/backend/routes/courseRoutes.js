// backend/routes/courseRoutes.js

const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware'); // Middleware to protect routes
const Course = require('../models/Course');
const User = require('../models/User');

// Enroll in a course
router.post('/enroll/:courseId', protect, async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    const user = await User.findById(req.user.id);

    if (!course) return res.status(404).json({ message: 'Course not found' });

    user.courses.push({ courseId: course._id, progress: 0 });
    await user.save();

    res.status(200).json({ message: 'Enrolled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Update course progress
router.put('/progress/:courseId', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const course = user.courses.find((course) => course.courseId.toString() === req.params.courseId);

    if (!course) return res.status(404).json({ message: 'Course not found' });

    course.progress = req.body.progress;
    await user.save();

    res.status(200).json({ message: 'Progress updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
