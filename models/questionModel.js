const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const quetionSchema = new Schema({
    title: {
        type: String,
        required: [true, 'The todo must have a title.']
    },
    responses: [
        {
            text: {
                type: String,
                required: [true, 'The todo must have a response title.'],
                unique: true
            },
            correct: {
                type: Boolean,
                default: false
            },
            level: {
                type: Number,
                default: 0
            }
        }
    ],
    quiz: {
        type: mongoose.Schema.ObjectId,
        ref: 'Quiz',
        required: [true, 'Review mist belong to a quiz _id.']
    },
},{
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

const Question = mongoose.model('Question', quetionSchema);

module.exports = Question;