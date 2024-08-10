const mongoose = require('mongoose')
require('dotenv').config()
// console.log(process.env.MONGO_URI)

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB