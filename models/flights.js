
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        default: 'DEN'
    },
    departs: {
        type: Date,
        // default: (Date + 1),
    },
});

module.exports = mongoose.model('Flight', flightSchema);


