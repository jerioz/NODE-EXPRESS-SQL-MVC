const express = require('express');
const router = express.Router();
const db = require('../config/database');

const ProductController = require('../Controllers/ProductController');

router.post('/newProduct', ProductController.newProduct);

router.put('/updateProduct/:id', ProductController.updateProduct);

router.get('/allProducts', ProductController.selectProduct);

router.get('/productCategory', ProductController.productCategory);

router.get('/selectProduct/:id', ProductController.selectProductId);

router.get('/productDesc', ProductController.productDesc);

router.get('/selectProductName/:name_product', ProductController.selectProductName);

router.delete('/deleteProduct/:id', ProductController.deleteProduct);
  

module.exports = router;