
const Ticket = require('../models/ticket')
const Flight = require('../models/flights');

module.exports = {
    new: newTicket,
    create,
}


function create(req, res){   
    // try {
    //     req.body.flight = req.params.id
    //     const newTicket = await Ticket.create(req.body)
    //     res.redirect(`/flights/${req.params.id}`)
    // } catch(err) {
    //     console.log(err)
    //     res.render('flights/show', {ticket: ticketDoc})
    //     res.redirect(`/flights/${req.params.id}/tickets/new`)
    // }
    console.log(req.body);
    console.log(req.params.id);

    req.body.flight = req.params.id
    
    Ticket.create(req.body, function (err, ticketDoc) {
        if (err) {
            console.log(err);
            return res.send("error, check the terminal");
        }
        console.log("=============== ticketDoc below ");
        console.log(ticketDoc);
        console.log("==========================================");

        res.redirect(`/flights/${ticketDoc.flight._id}`)

    });
}
    
// push the form contents into the flight info


function newTicket(req, res){
    res.render(`tickets/new`, {flightID: req.params.id});
}