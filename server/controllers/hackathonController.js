import Hackathon from '../models/hackathonModel.js';
import catchAsync from '../utils/catchAsync.js';
import * as factory from './handlerFactory.js';

export const getAllHackathon = factory.getAll(Hackathon);
export const getHackathon = factory.getOne(Hackathon);

// initialise hackathon draft
// collab hackathon proposal

export const hostHackathon = catchAsync(async (req, res, next) => {
  res.send('hack created');
});

export const collabHackathon = catchAsync(async (req, res, next) => {
  res.send('collab hack created');
});

export const participate = catchAsync(async (req, res, next) => {
  // check participation time
  // add user to participants
});

// get recommended hackathons
// manage hackathon --> hack dashboard APIS

// participate in hackathon
// submit project in hackathon
