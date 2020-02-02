const factory = require('./hundlerFactory');
const Quiz = require('../models/quizModel');

exports.getAllQuizes = factory.getAll(Quiz);
exports.createQuiz = factory.createOne(Quiz);

exports.getQuiz = factory.getOne(Quiz);
exports.updateQuiz = factory.updateOne(Quiz);
exports.deleteQuiz = factory.deleteOne(Quiz);