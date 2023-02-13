import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    trim: true,
    maxlength: [30, 'A project name must have less or equal then 30 characters'],
    required: [true, 'A project name is must'],
  },
  tagline: {
    typr: String,
    default: null,
  },
  imageGallery: [
    {
      image: {
        type: String,
        default: null,
      },
    },
  ],
  videoLink: {
    type: String,
    required: [true, 'you must provide a valid video link'],
  },
  proofOfWork: [
    {
      url: String,
      required: [true, 'Add a link which shows your proof of work'],
    },
  ],
  projectMembers: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
  coverImage: {
    typr: String,
    default: null,
  },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
