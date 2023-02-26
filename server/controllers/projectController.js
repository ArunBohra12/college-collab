import Hackathon from '../models/hackathonModel.js';
import Project from '../models/projectModel.js';
import AppError from '../utils/AppError.js';
import catchAsync from '../utils/catchAsync.js';

export const submitProject = catchAsync(async (req, res, next) => {
  // get hackathonId
  //  addd project to hackathon
  // create a project

  const { hackathonId } = req.params;

  const project = await Project.create(req.body);

  const updateHackathon = Hackathon.findByIdAndUpdate(hackathonId, {
    $push: { projects: project.id },
  });

  res.status(201).json({
    status: 'success',
    project,
    updateHackathon,
  });
});

export const updateProject = catchAsync(async (req, res, next) => {
  // check hackaathon end date
  //  if within end time, can update
  const { hackathonId, projectId } = req.params;

  const hackathon = await Hackathon.findById(hackathonId);

  if (!hackathon) {
    return next(new AppError('The hackathon doesnt exist'));
  }

  // const hackEndDate = hackathon.endDate;
  // const currentDate =

  const updatedProject = await Project.findByIdAndUpdate(projectId, req.body);

  res.status(201).json({
    status: 'success',
    updatedProject,
  });
});
