const mongoose = require('mongoose');
// require('dotenv').config()

const connectToDb= async()=>{
     mongoose.connect('mongodb://0.0.0.0:27017/erpGarment')
    .then(() => console.log('Connected!'))
    .catch(() => console.log('error in connecting to mongodb '));
}

module.exports = connectToDb;