import multer from 'multer';

import Notes from '../models/notesModel.js';
import User from '../models/userModel.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';
import { createFileFilter, createMulterDiskStorage } from '../utils/multer.js';
import Email from '../utils/email.js';

const fileUpload = multer({
  storage: createMulterDiskStorage('uploads/notes/', 'notes'),
  fileFilter: createFileFilter({ suportedMimeTypes: ['application/pdf'] }),
});

export const uploadNotesFile = fileUpload.single('notes-file');

/**
 * It uploads notes to the server and
 * saves the file's path to the database in notes collection
 */
export const uploadNotes = catchAsync(async (req, res, next) => {
  if (!req.file) {
    return next(new AppError('Please upload a file!', 400));
  }

  const { filename, path: filePath } = req.file;
  const { title, summary, price, tags } = req.body;

  if (!Number(price)) {
    return next(new AppError('Please provide a valid price', 400));
  }

  // Will get this variable from an authenticated middeware
  // which is not implemented yet
  const user = '6009c0eee65f6dce28fb3e50';

  let fileTags = Array.isArray(tags) ? tags : [];

  // This is to ensure if array is passed in string form, its added properly to the db
  if (typeof tags === 'string' && Array.isArray(JSON.parse(tags))) {
    fileTags = JSON.parse(tags);
  }

  fileTags = fileTags.map((tag) => tag.toLowerCase());

  const notesData = {
    uploadedBy: user,
    price,
    title,
    summary,
    notes: filePath,
    tags: fileTags,
    filename,
  };

  const uploadedNotes = await Notes.create(notesData);

  res.status(201).json({
    status: 'success',
    data: uploadedNotes,
  });
});

/**
 * Will search for the notes based on user's search criteria
 */
export const searchNotes = catchAsync(async (req, res, next) => {
  const { query: searchTerm, tags } = req.query;

  const searchTags = tags ? tags.split(',') : [];

  if (!searchTerm && !searchTags.length) {
    const notes = await Notes.find({});

    res.status(200).json({
      status: 'success',
      data: notes,
    });

    return;
  }

  const notes = await Notes.find({
    $or: [
      {
        title: { $regex: searchTerm || '', $options: 'i' },
      },
      {
        tags: { $in: searchTags },
      },
    ],
  });

  res.status(200).json({
    status: 'success',
    data: notes,
  });
});

/**
 * Gets the notes from the database.
 * If the notes is not found, it will return a 404 error.
 * If the notes is found, it will return the notes.
 */
export const getSingleNotes = catchAsync(async (req, res, next) => {
  const { id: notesId } = req.params;

  const notes = await Notes.findById(notesId);

  if (!notes) {
    return next(new AppError("Notes don't exist", 404));
  }

  res.status(200).json({
    status: 'success',
    data: notes,
  });
});

/**
 * Allows to buy notes for a user
 */
export const buyNotes = catchAsync(async (req, res, next) => {
  const { id: notesId } = req.body;
  const { id: userId } = req.user;

  const notes = await Notes.findById(notesId).select('notes');
  const buyer = await User.findById(userId);
  const creator = await User.findById(notes.uploadedBy);

  buyer.update({
    credits: buyer.credits - notes.price,
  });

  const applicationFees = Math.floor((notes.price * 5) / 100);
  const creditsForCreator = notes.price - applicationFees;

  // Send 5% to application
  // TODO: SEND FEES TO THE APPLICATION

  creator.update({
    credits: creator.credits + creditsForCreator,
  });

  // 6. send email to user with file
  const email = new Email(buyer, `${req.protocol}://${req.get('host')}/${notes.notes}`);
  email.sendNotesAccessEmail();
});
