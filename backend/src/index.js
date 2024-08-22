const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Import the authController
const authController = require('../controllers/authController');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/signup', authController.signup);
app.get('/login', authController.login);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
