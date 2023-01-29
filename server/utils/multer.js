import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

import checkPathExists from './file.js';

/**
 * It creates a multer disk storage object that checks if the folder you're trying to upload to exists
 * and returns a diskStorage object for multer
 * @param filePath - The path where you want to upload the file.
 * @param fileSuffix - Optional parameter to add a suffix to the file name.
 * For example, if you're uploading a profile picture, you can pass the user's id as the suffix.
 *
 * @returns A function that takes in two arguments, filePath and fileSuffix.
 */
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

      cb(null, `${uniqueId}-${Date.now()}-${fileSuffix || ''}.${extension}`);
    },
  });

  return diskStorage;
};

/**
 * This function creates a file filter callback function to be used with multer
 * @param filterOptions - An object containing filter options for multer
 * @returns A function that takes in req, file, and cb as params
 */
export const createFileFilter = (filterOptions) => {
  const { suportedMimeTypes } = filterOptions;

  return (req, file, cb) => {
    if (!suportedMimeTypes.includes(file.mimetype)) {
      return cb(new Error(`Mimetype ${file.mimetype} not supported`, false));
    }

    cb(null, true);
  };
};
