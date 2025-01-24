// backend/routes/forumRoutes.js
const express = require('express');
const router = express.Router();
const Forum = require('../models/Forum');
const { protect } = require('../middleware/authMiddleware');

// Create a new post
router.post('/new', protect, async (req, res) => {
  const { title, content } = req.body;
  const post = await Forum.create({ title, content, user: req.user.id });
  res.status(201).json(post);
});

// Get all posts
router.get('/', async (req, res) => {
  const posts = await Forum.find().populate('user', 'name');
  res.json(posts);
});

module.exports = router;
