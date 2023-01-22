import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  ans: {
    type: String,
    required: [true, 'Hunters are supposed to provide an answer for the bounty!!'],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  hidden: {
    type: Boolean,
    default: false,
  },
});

const Answer = mongoose.model('Bounty', answerSchema);

export default Answer;
