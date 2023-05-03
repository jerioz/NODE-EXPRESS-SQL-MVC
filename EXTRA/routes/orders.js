const express = require('express');
const router = express.Router();
const db = require('../config/database');

const OrderController = require('../Controllers/OrderController');

router.post('/newOrder', OrderController.newOrder);

router.get('/allOrders', OrderController.allOrders);



module.exports = router