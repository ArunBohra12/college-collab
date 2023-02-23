import mongoose from 'mongoose';
import validator from 'validator';

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
  proposedBy: {
    type: String,
    required: [true, 'Please tell us your name as registered in your college'],
    trim: true,
    maxlength: [20, 'A user name must have less or equal then 20 characters'],
    minlength: [2, 'A user name must have more or equal then 2 characters'],
  },
  collegeEmail: {
    type: String,
    required: [true, 'Please provide your college email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  personalEmail: {
    type: String,
    required: [true, 'Please provide your personal email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
});

const Proposal = mongoose.model('Proposal', proposalSchema);

export default Proposal;
