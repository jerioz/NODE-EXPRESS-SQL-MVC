const express = require('express');
const router = express.Router();
const db = require('../config/database');

const OrderController = require('../Controllers/OrderController');

router.post('/newOrder', OrderController.newOrder);

module.exports = router