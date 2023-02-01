const { Router } = require('express');
const { create } = require('../controllers/bookingController');
const { findById, findAll, findByDates } = require('../controllers/roomController');

const router = Router()

router.get('/',findByDates,findAll);
router.get('/:id',findById);




module.exports = router