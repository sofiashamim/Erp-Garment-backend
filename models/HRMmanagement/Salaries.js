const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salarySchema = new Schema({
    employee: {
        type: String,
        required: true,
    },
    month: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    salaryAmt: {
        type: String,
        required: true,
    },
    paidAmt: {
        type: String,
        required: true,
    },
    dueSalary: {
        type: String,
        required: true,
    },
    payMethod: {
        type: String,
        required: true,
    },
    payDate: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: true,
    }
  
}, { timestamps: true });

module.exports = mongoose.model('Sal',salarySchema);