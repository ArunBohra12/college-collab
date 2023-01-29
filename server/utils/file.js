import fs from 'node:fs';

const checkPathExists = async (pathToCheck) => {
  try {
    await fs.promises.access(pathToCheck);
    return true;
  } catch (error) {
    return false;
  }
};

export default checkPathExists;
