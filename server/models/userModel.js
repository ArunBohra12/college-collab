import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
  name: {
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
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!',
    },
  },
  credits: {
    type: Number,
    default: 100000,
  },
  photo: {
    type: String,
    default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
  },
  college: {
    type: mongoose.Types.ObjectId,
    ref: 'College',
  },
  tagline: {
    type: String,
    default: null,
  },
});

const User = mongoose.model('User', userSchema);

export default User;

// name, email, college email, password, socials, credits, bounty level, karma, past projects
