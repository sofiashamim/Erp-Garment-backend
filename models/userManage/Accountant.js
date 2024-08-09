const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        uniquae: true,
    },
    phone: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    
}, { timestamps: true });

module.exports = mongoose.model('Accountant', accountantSchema);