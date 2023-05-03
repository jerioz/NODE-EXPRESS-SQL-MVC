const express = require('express');
const router = express.Router();
const db = require('../config/database');

const UserController = require('../Controllers/UserController');

router.post('/newUser', UserController.newUser);

router.put('/updateUser/:id', UserController.updateUser);

router.get('/allUsers', UserController.allUsers);

router.get('/userOrder', UserController.userOrder);

router.get('/selectUserId/:id', UserController.selectUserId);

router.delete('/deleteUser/:id', UserController.deleteUser);

module.exports = router