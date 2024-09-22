const express = require('express');
const router = express.Router();
const controller = require('../controllers/userProgressController');
const auth = require('../middleware/auth');

// Route to update user progress
router.post('/:id', auth, controller.updateUserProgress);

module.exports = router
