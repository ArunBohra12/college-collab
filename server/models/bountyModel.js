import mongoose from 'mongoose';

const bountySchema = new mongoose.Schema({
  level: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium',
  },
  price: {
    type: Number,
    required: [true, 'Bounty should have a price for hunters!!'],
  },
  ques: {
    type: String,
    required: [true, 'Please specify the bounty for the hunters!!'],
  },
  askedBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  answers: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Answer',
    },
  ],
  bestAnswer: {
    type: mongoose.Types.ObjectId,
    ref: 'Answer',
    default: null,
  },
});

// active, due date

// a pre hook populating answers which are not hidden

const Bounty = mongoose.model('Bounty', bountySchema);

export default Bounty;

// level, price, ques, answers
