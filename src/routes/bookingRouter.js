const { Router } = require('express');
const { create, updateRemoveStatus } = require('../controllers/bookingController');

const router = Router()


router.post('/',create);
router.put('/', updateRemoveStatus)

module.exports = router