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
      type: mongoose.type.ObjectId,
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
  about: {
    type: String,
    required: [true, 'Tell us about the hackathon ypu are organising'],
  },
  problemStatement: {
    type: String,
    default: null,
  },
  startDate: {
    type: Date,
    required: [true, 'Specify a starting date for the hackathin'],
  },
  endDate: {
    type: Date,
    required: [true, 'Specify a end date for the hackathin'],
  },
  eligibility: [
    {
      criteria: {
        type: String,
        default: null,
      },
    },
  ],
  judges: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  judginfgCriteria: [
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
});

const Hackathon = mongoose.model('Hackathon', hackathonSchema);

export default Hackathon;
