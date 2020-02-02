const express = require('express');

const router = express.Router();

const quizController = require('../controllers/quizController');

router
    .route('/')
    .get(quizController.getAllQuizes)
    .post(quizController.createQuiz);

router
    .route('/:TodoId')
    .get(quizController.getQuiz)
    .patch(quizController.updateQuiz)
    .delete(quizController.deleteQuiz);

module.exports = router;