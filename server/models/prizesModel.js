import mongoose from 'mongoose';

const prizesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Prizes should have a title'],
  },
  description: {
    type: String,
    required: [true, 'prizes should have a description'],
  },
});

const Prize = mongoose.model('Prize', prizesSchema);

export default Prize;
