const { Router } = require('express');
const { create, findById } = require('../controllers/clientController');

const router = Router()

router.get('/:id',findById)
router.post('/',create);

module.exports = router