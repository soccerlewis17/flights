let express = require('express');
let router = express.Router();
let ticketCtrl = require('../controllers/ticket');

router.get('/flights/:id/tickets/new', ticketCtrl.new);
router.post('/flights/:id/tickets', ticketCtrl.create);

module.exports = router;