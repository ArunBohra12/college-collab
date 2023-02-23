import mongoose from 'mongoose';

const proposalSchema = new mongoose.Schema({
  collegename: {
    type: String,
    required: [true, 'Must spoecify the college name'],
  },
  collegeWebsite: {
    type: String,
    required: [true, 'Must spoecify the college name'],
  },
  collegeLogo: {
    type: String,
    required: [true, 'jrhb'],
  },
  enrolledStudents: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
  collegeRepresentatives: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const College = mongoose.model('College', proposalSchema);

export default College;
