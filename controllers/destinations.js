
const Flight = require('../models/flights');




module.exports = {
    create,
}

function create(req, res){
    console.log(req.body);
    console.log(req.params.id);

    Flight.findById(req.params.id, function(err, flightDoc){
        if(err){
            console.log(err);
            res.send('error in destination create function');
        }

        flightDoc.destinations.push(req.body);

        console.log(flightDoc, '<---- flightDoc from database');

        flightDoc.save(function(err){
            console.log(err);
           console.log(flightDoc, '<---- saved flightDoc from database');
           res.redirect(`/flights/${req.params.id}`);
        });
    })
}