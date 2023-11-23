const mongoose = require('mongoose')

const question_store_Schema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    }, 
    subject: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    difficulty:{
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        required: true
    },
    marks: {
        type: Number,
        required: true
    }

})

const question_store = mongoose.model('question_store', question_store_Schema);
module.exports = question_store