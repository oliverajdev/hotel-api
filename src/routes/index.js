const { Router } = require('express');

const router = Router();

const bookingRouter = require('./bookingRouter');
const paymentRouter = require('./paymentRouter');
const roomRouter = require('./roomRouter')
const clientRouter = require('./clientRouter')

router.use('/booking',bookingRouter);
router.use('/payment',paymentRouter);
router.use('/room',roomRouter);
router.use('/client',clientRouter);

module.exports = router;