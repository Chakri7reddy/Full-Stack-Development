// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Initialize dotenv and express app
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import Routes
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/course');

// Routes Middleware
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

// Connect to Database and start server
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
