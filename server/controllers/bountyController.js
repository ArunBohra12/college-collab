// get all bunties -->
// post bounty
// post answer
// show answer  (UH - H)
// pick answer
//

import Answer from '../models/answerModel';
import Bounty from '../models/bountyModel';
import AppError from '../utils/AppError';
import { catchAsync } from '../utils/catchAsync';

export const getAllBounties = catchAsync(async (req, res, next) => {
  const bounties = await Bounty.find();

  res.json(200).json({
    status: 'success',
    bounties,
  });
});

export const postBounty = catchAsync(async (req, res, next) => {
  const { ques, level, price } = req.body;

  const newBounty = await Bounty.create({
    ques,
    price,
    level,
  });

  if (!newBounty) {
    return next(new AppError('Bounty couldnt be placed!!'));
  }

  res.status(201).json({
    status: 'success',
    newBounty,
  });
});

export const postAnswer = catchAsync(async (req, res, next) => {
  const bountyId = req.params.bounty;
  console.log(req.user);

  const answer = await Answer.create({
    ans: req.body.answer,
    user: req.user.id,
  });

  if (!answer) {
    return next(new AppError("Answer couldn't be added to the bounty"));
  }

  const updatedBounty = await Bounty.findByIdAndUpdate({ bountyId, $push: { answers: answer.id } });

  res.status(201).json({
    status: 'success',
    answer,
    updatedBounty,
  });
});
