const express = require('express');
const router = express.Router();
const db = require('../config/database')

const CategoryController = require('../Controllers/CategoryController');

router.post('/newCategory', CategoryController.newCategory);

router.put('/updateCategory/:id', CategoryController.updateCategory);

router.get('/allCategories', CategoryController.selectCategory);

router.get('/selectCategory/:id', CategoryController.selectCategoryId);

module.exports = router;