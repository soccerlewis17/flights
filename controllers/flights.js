
const Flight = require('../models/flights');
const Ticket = require('../models/ticket');
const ticket = require('./ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
}

function show(req, res){
    Flight.findById(req.params.id, function(err, flightDoc){
        console.log(flightDoc); // works!
        Ticket.find({flight: flightDoc._id}, function(err, ticketDoc) {
        res.render('flights/show', {flight: flightDoc, ticket: ticketDoc});
        })
    });
}

function index(req, res){
    Flight.find({}, function(err, flightDocs){
        // console.log(flightDocs);
        res.render('flights/index', {flights: flightDocs});
    });
}

function newFlight(req, res){
    res.render('flights/new')
}

function create(req, res){
    console.log('=============== req body below');
    console.log(req.body);

    Flight.create(req.body, function(err, flightDoc){
        if(err){
            console.log(err);
            res.send('err creating check the terminal');
        } else {
            console.log(flightDoc);
            res.redirect('/flights');
        }
    });
}