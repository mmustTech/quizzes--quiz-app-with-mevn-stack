const factory = require('./hundlerFactory');
const Question = require('../models/questionModel');

exports.getAllQuestions = factory.getAll(Question);
exports.createQuestion = factory.createOne(Question);

exports.getQuestion = factory.getOne(Question);
exports.updateQuestion = factory.updateOne(Question);
exports.deleteQuestion = factory.deleteOne(Question);