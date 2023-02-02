/* eslint-disable no-console */
import * as readline from 'readline';
import College from '../models/collegeModel';
import Proposal from '../models/proposalModel';
// import User from '../models/userModel';
import AppError from '../utils/AppError';
import catchAsync from '../utils/catchAsync';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let proposalId;

rl.question('Enter the College Id to be added', (answer) => {
  console.log(`Provided College ID is ${answer}`);
  proposalId = answer;
  rl.close();
});

const acceptDraft = catchAsync(async (req, res, next) => {
  const proposedCollege = await Proposal.findById(proposalId);

  const { collegename, collegeWebsite, collegeLogo } = req.body;

  if (!proposedCollege) {
    return next(new AppError('Theres no such proposal for this proposal ID'));
  }

  const newCollege = await College.create({
    collegename,
    collegeWebsite,
    collegeLogo,
  });

  //    send mail

  if (!newCollege) {
    return next(new AppError('College couldnt be created'));
  }
});

acceptDraft();
