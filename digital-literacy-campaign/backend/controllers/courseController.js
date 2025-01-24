// controllers/courseController.js
const Course = require('../models/Course');
const User = require('../models/User');

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

// Get course details by ID
exports.getCourseDetails = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch course details' });
  }
};

// Enroll in a course
exports.enrollInCourse = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });

    user.courses.push(course);
    await user.save();

    res.json({ message: 'Enrolled successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to enroll in course' });
  }
};
