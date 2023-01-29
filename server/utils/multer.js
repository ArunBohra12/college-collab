import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

import checkPathExists from './file.js';

export const createMulterDiskStorage = (filePath, fileSuffix) => {
  const diskStorage = multer.diskStorage({
    destination: async (req, file, cb) => {
      const folderExists = await checkPathExists(filePath);

      if (!folderExists) {
        // eslint-disable-next-line no-console
        console.log('\x1b[31m%s\x1b[0m', "Folder you're trying to upload does not exist 🔥🔥");
        return cb(new Error('Unable to upload the file'));
      }

      cb(null, filePath);
    },
    filename: (req, file, cb) => {
      const extension = file.mimetype.split('/')[1];
      const uniqueId = uuidv4();

      cb(null, `${uniqueId}-${fileSuffix || ''}-${Date.now()}.${extension}`);
    },
  });

  return diskStorage;
};

export const createFileFilter = (filterOptions) => {
  const { suportedMimeTypes } = filterOptions;

  return (req, file, cb) => {
    if (!suportedMimeTypes.includes(file.mimetype)) {
      return cb(new Error(`Mimetype ${file.mimetype} not supported`, false));
    }

    cb(null, true);
  };
};
