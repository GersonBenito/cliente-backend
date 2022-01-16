const { Router } = require('express');

const router = Router();

// obtener los metodos del controlador
const product = require('../controllers/producto.controller');

router.post('/', product.addProduct);
router.get('/', product.getProduct);
router.get('/:id', product.getProductById);
router.put('/:id', product.updateProduct);
router.delete('/:id', product.deleteProduct);

module.exports = router;