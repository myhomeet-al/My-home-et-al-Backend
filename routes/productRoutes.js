const express = require('express');
const {Router} = express;
const router = Router();
const productController = require('../controllers/productController');
const authenticateAdmin = require('../middlewares/authenticateAdmin')

//Private Routes
router.post('/create-product', authenticateAdmin, productController.createSingleProduct);
router.post('/bulk-create', authenticateAdmin, productController.bulkCreateProduct);
router.post('/bulk-publish', authenticateAdmin, productController.bulkPublishProduct)
router.put('/:id', authenticateAdmin, productController.editProduct);
router.delete('/:id', authenticateAdmin, productController.deleteProduct)


//Public Routes
router.get('/:id', productController.viewProductsByCategory);
router.get('/:id', productController.getSingleProductDetails);



module.exports = router;