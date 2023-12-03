const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: false
    },

    message: {
        type: String
    }

})

const User = mongoose.model('USER', userSchema);

module.exports = User;