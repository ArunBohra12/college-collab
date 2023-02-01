import fs from 'node:fs';

/**
 * It checks if a path exists and returns true if it does, false if it doesn't
 * @param pathToCheck - The path (absolute path not relative) to check if it exists.
 * @returns A boolean value.
 */
const checkPathExists = async (pathToCheck) => {
  try {
    await fs.promises.access(pathToCheck);
    return true;
  } catch (error) {
    return false;
  }
};

export default checkPathExists;
