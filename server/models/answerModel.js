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
    default: true,
  },
});

// poulate users name,img, bounty level and tagline

const Answer = mongoose.model('Answer', answerSchema);

export default Answer;
