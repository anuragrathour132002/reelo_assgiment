const uri = "mongodb://0.0.0.0:27017/Reelo";
const mongoose = require('mongoose');

const connectDB = () => {
  console.log("hello world")
    return mongoose.connect(uri);

}

module.exports = connectDB;