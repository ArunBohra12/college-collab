import User from '../models/userModel.js';
import catchAsync from '../utils/catchAsync.js';
import * as factory from './handlerFactory.js';

export const getMe = catchAsync(async (req, res, next) => {
  req.params.id = req.user.id;
  next();
});

export const getAllUsers = factory.getAll(User);
export const getUser = factory.getOne(User);
