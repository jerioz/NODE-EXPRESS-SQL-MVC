const express = require('express');
const router = express.Router();
const db = require('../config/database');

const UserController = require('../Controllers/UserController');

router.post('/newUser', UserController.newUser)

module.exports = router