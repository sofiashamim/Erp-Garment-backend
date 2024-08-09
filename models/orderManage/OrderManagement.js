const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderListSchema = new Schema({
    orderNo: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    party: {
        type: String,
        required: true,
    },
    merchandiser: {
        type: String,
        required: true,
    },
    gsm: {
        type: Boolean,
        required: true,
    },
    shipMode: {
        type: String,
        required: true,
    },
    payMode: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    season: {
        type: String,
        required: true,
    },
    totalQty: {
        type: String,
        required: true,
    },
    totalUnitPrice: {
        type: String,
        required: true,
    },
    totalValue: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
  
}, { timestamps: true });

module.exports = mongoose.model('Order', orderListSchema);