const { Router } = require('express');
const { create } = require('../controllers/paymentController');

const router = Router()


router.post('/',create);

module.exports = router