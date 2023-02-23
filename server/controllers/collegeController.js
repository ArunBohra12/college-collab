import College from '../models/collegeModel.js';
// import catchAsync from '../utils/catchAsync.js';
import * as factory from './handlerFactory.js';

export const getColleges = factory.getAll(College);

export const getCollege = factory.getOne(College);

// getALlColleges, getCollege, updateCollegeDetails - pic | details
