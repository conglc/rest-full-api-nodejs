const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order.controller');

router.get('/', orderController.orders_get_all);

router.post('/', orderController.orders_create);

router.get('/:orderId', orderController.orders_get_by_id);

router.delete('/:orderId', orderController.orders_delete);

module.exports = router;
