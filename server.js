// Import required modules
const express = require('express'); // Express.js framework
const mongoose = require('mongoose'); // MongoDB ORM
const dotenv = require('dotenv'); // Environment variables

// Load environment variables from .env file
dotenv.config();

// Create Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB')) // Success message
.catch(err => console.error('Failed to connect to MongoDB', err)); // Error message if connection fails

// Route middleware for authentication routes
const authRoutes = require('./routes/user.routes'); // Authentication routes
app.use('/auth', authRoutes);

// Define server port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
