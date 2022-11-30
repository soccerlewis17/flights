var express = require('express');
var router = express.Router();
let flightsCtrl = require('../controllers/flights');
const flight = require('../models/flights');

/* GET users listing. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);



module.exports = router;
