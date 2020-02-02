const mongoose = require('mongoose');
const slugify = require('slugify');


const { Schema } = mongoose;

// Define schema for todo items
const quizSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The todo must have a name.']
  },
  category: {
    type: String,
    required: [true, 'The todo must have a category. [Mathematics, English and Language Arts, Social Studies, World Languages, Science, Computer Science and Skills, Career and Technical Education, Creative Arts, Health and Physical Education]']
  },
  // difficulty: {
  //   type: String,
  //   required: [true, 'A tour must have a difficulty'],
  //   enum: {
  //     values: ['easy', 'medium', 'difficult'],
  //     message: 'Difficulty is either: easy, medium, difficult'
  //   }
  // },
  slug: String,
  secretQuiz: {
    type: Boolean,
    default: false
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  //   // select: false
  // }
},{
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual populate
quizSchema.virtual('questions', {
    ref: 'Question',
    foreignField: 'quiz',
    localField: '_id'
});

quizSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

quizSchema.pre(/^find/, function(next) {
  this.find({ secretQuiz: { $ne: true } });

  // this.start = Date.now();
  next();
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;