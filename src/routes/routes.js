const { Router } = require('express');

const router = Router();

// obtener las subrutas
const product = require('./producto.router');
router.use('/producto', product);

module.exports = router;