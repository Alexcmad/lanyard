const express = require('express');
const router = express.Router();
const controller = require('../controllers/UserController');

router.post('/', async (req, res) => {
    await controller.add_user(req, res);
})