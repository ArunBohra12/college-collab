import Answer from '../models/answerModel.js';
import Bounty from '../models/bountyModel.js';
import User from '../models/userModel.js';
import AppError from '../utils/AppError.js';
import catchAsync from '../utils/catchAsync.js';

export const getAllBounties = catchAsync(async (req, res, next) => {
  const bounties = await Bounty.find();

  res.status(200).json({
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

export const unhideAnswer = catchAsync(async (req, res, next) => {
  const answerId = req.body.answer;

  const updatedAnswer = await Answer.findByIdAndUpdate(answerId, {
    hidden: false,
  });

  res.status(201).json({
    status: 'success',
    updatedAnswer,
  });
});

export const showAnswer = catchAsync(async (req, res, next) => {
  // cut credit and show first answer
  const bountyId = req.params.bounty;
  const userId = req.user.id;
  const userCredits = req.user.credits;

  const bounty = await Bounty.findById(bountyId).populate('answers', 'hidden');

  // check if any answer is viewed
  if (bounty.answers.filter((answer) => answer.hidden)) {
    return next(new AppError('User has already viewed an answer!!'));
  }

  const bountyPrice = bounty.price;
  const safeFee = 0.4 * bountyPrice;

  if (userCredits < safeFee) {
    return next(new AppError('User must have 40% addditional credits for making a bounty'));
  }

  const updateUserCredits = await User.findByIdAndUpdate(userId, {
    credits: userCredits - safeFee,
  });

  if (updateUserCredits) {
    return next(new AppError('User credits couldnt be credited due to some error!!'));
  }

  unhideAnswer();
});

export const pickAnswer = catchAsync(async (req, res, next) => {
  // set ans to best in bounty
  // send credits to picked ans user
  // give user back safeFee

  const userId = req.user.id;
  const bountyId = req.params.bounty;
  const { hunterId, answer } = req.body;

  const bounty = await Bounty.findById(bountyId);

  const bountyPrice = bounty.price;
  const safeFee = 0.4 * bountyPrice;

  const updatedBounty = await Bounty.findByIdAndUpdate(bountyId, {
    bestAnswer: answer,
  });

  if (!updatedBounty) {
    return next(new AppError('Best Answer couldnt be picked!!'));
  }

  const updatedHunter = await User.findByIdAndUpdate(hunterId, {
    credits: { $inc: bounty.price },
  });

  if (!updatedHunter) {
    return next(new AppError('Credits couldnt be transferred to the'));
  }

  const updatedUser = await User.findByIdAndUpdate(userId, {
    credits: { $inc: safeFee },
  });

  if (!updatedUser) {
    return next(new AppError('SafeFede couldnt be added to added to Users account'));
  }

  res.status(201).json({
    sttaus: 'success',
    updatedBounty,
    updatedHunter,
    updatedUser,
  });
});
