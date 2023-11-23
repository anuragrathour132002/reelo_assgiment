// const client = require('../database/db');
const questions = require('../models/question_store');

const add_question = async (req, res) => {
    const { question, subject, topic, difficulty, marks } = req.body;
    console.log(req.body);

    try {
        const question_temp = new questions(req.body)

        const result = await question_temp.save()

        res.status(201).send(`${result}`);
        // res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user', error);
        res.status(500).json({ "error": error.message });
    }
};

module.exports = add_question
