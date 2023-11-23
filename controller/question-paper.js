// const client = require('../database/db');
const questions = require('../models/question_store');

const question_paper = async (req, res) => {
    const { marks, difficulty } = req.body;
    console.log(req.body);

    try {
        const diff_arr = ['Easy', 'Medium', 'Hard']; 
        var i = 0
        console.log(diff_arr[i])

        var q = [ {} ];
        while (i < 3){
            const total_n = difficulty[i] * (0.001 * marks)
            console.log(total_n)
            
            // for (const j in total_n){
            const segment = await questions.find({ difficulty: diff_arr[i] }).limit(total_n)
            q = q.concat(segment)

            console.log(segment.length)
            i++;
        }

        console.log(`The total questions are ${q}`)
        res.send(`marks: ${marks}\ndifficulty: ${difficulty[0]}`);
        // res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user', error);
        res.status(500).json({ "error": error.message });
    }
};

module.exports = question_paper
