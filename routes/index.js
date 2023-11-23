const express = require('express');
const question_paper = require('../controller/question-paper');
const question_store = require('../models/question_store');
const add_question = require('../controller/add_question');
const router = express.Router();

router.post('/question-paper', question_paper)
router.post('/add-question', add_question)


module.exports = router;