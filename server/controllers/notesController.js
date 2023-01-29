import multer from 'multer';
import path from 'node:path';

import Notes from '../models/notesModel.js';
import { createFileFilter, createMulterDiskStorage } from '../utils/multer.js';

const fileUpload = multer({
  storage: createMulterDiskStorage('uploads/notes/', 'notes'),
  fileFilter: createFileFilter({ suportedMimeTypes: ['application/pdf'] }),
});

export const uploadNotesFile = fileUpload.single('notes-file');

export const uploadNotes = async (req, res) => {
  const { filename, path: filePath } = req.file;
  const { title, summary, price } = req.body;

  if (!Number(price)) {
    return res.status(400).json({
      status: 'fail',
      message: 'Please provide a valid price',
    });
  }

  // Will get this variable from an authenticated middeware
  // which is not implemented yet
  const user = '6009c0eee65f6dce28fb3e50';

  const notesData = {
    uploadedBy: user,
    price,
    title,
    summary,
    notes: path.normalize(filePath),
    filename,
  };

  const uploadedNotes = await Notes.create(notesData);

  res.status(201).json({
    status: 'success',
    data: uploadedNotes,
  });
};
