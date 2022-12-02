
const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create,
}


function create(req, res){    
    console.log(req.body);
    // console.log(req.params.id);


    // Ticket.findById(req.params.id, function(err, ticketDoc){
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log('==================================');
    //     console.log(ticketDoc, '<------- Ticket Doc!');
    //     console.log('==================================');
    // })

    res.redirect(`/flights/${req.params.id}`);
}

function newTicket(req, res){
    res.render('tickets/new');
}