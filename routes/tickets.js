var express = require('express');
var router = express.Router();
let ticketCtrl = require('../controllers/ticket');

router.get('/tickets/new', ticketCtrl.new)
router.post('/new/:id/tickets', ticketCtrl.create);

module.exports = router;