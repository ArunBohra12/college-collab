import mongoose from 'mongoose';

const hackathonSchema = new mongoose.Schema({
  hackathonName: {
    type: String,
    required: [true, 'Give a valid name to your hackathon'],
  },
  hackathonBanner: {
    type: String,
    required: [true, 'Pick a banner for your hackathons'],
  },
  collaborators: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'College',
    },
  ],
  sponsors: [
    {
      sponsorName: {
        type: String,
        required: [true, 'Specify the sponsor name'],
      },
      sponsorLogo: {
        type: String,
        required: [true, 'add a sponor logo to show on hackathon dashborad'],
      },
    },
  ],
  prizes: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Prize',
    },
  ],
  startDate: {
    type: Date,
    required: [true, 'Specify a starting date for the hackathin'],
  },
  endDate: {
    type: Date,
    required: [true, 'Specify a end date for the hackathin'],
  },
  participationEndDate: {
    type: Date,
    // default: Date.now(),
  },
  eligibility: [
    {
      criteria: {
        type: String,
        default: null,
      },
    },
  ],
  problemStatement: {
    type: String,
    default: null,
  },
  about: {
    type: String,
    required: [true, 'Tell us about the hackathon ypu are organising'],
  },
  judges: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  judgingCriteria: [
    {
      criteria: {
        type: String,
        default: null,
      },
      description: {
        type: String,
        default: null,
      },
    },
  ],
  projects: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Project',
    },
  ],
  participants: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Hackathon = mongoose.model('Hackathon', hackathonSchema);

export default Hackathon;
