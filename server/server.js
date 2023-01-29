import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';

import notesRouter from './routes/notesRoutes.js';

dotenv.config({ path: './.env' });

try {
  mongoose.set('strictQuery', true);
  mongoose.connect(process.env.MONGO_URL);
  // eslint-disable-next-line no-console
  console.log('CONNECTED TO DB');
} catch (error) {
  // eslint-disable-next-line no-console
  console.log(error);
}

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use('/notes', notesRouter);

const port = process.env.PORT || 8000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is running on port ${port}`));
