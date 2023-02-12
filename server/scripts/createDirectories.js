import url from 'url';
import { mkdir } from 'fs';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Create upload directory and its children
mkdir(`${__dirname}/../uploads/notes/`, { recursive: true }, (err) => {
  if (err) throw err;
});

// eslint-disable-next-line
console.log('Directories created successfully');
