const { Router } = require('express');
const { create, findPayment_methods } = require('../controllers/paymentController');

const router = Router()

router.get('/methods',findPayment_methods);
router.post('/',create);

module.exports = router