const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true
    }
});

RestaurantSchema.index({name: "text", location: "text"});

module.exports = mongoose.model('Restaurant', RestaurantSchema);