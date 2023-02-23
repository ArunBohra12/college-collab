import url from 'url';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import AppError from './utils/appError.js';
import authRouter from './routes/authRoutes.js';
import bountyRouter from './routes/bountyRoutes.js';
import notesRouter from './routes/notesRoutes.js';
import userRouter from './routes/userRoutes.js';
import hackathonRouter from './routes/hackathonRoutes.js';

import globalErrorHandler from './controllers/errorController.js';

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
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Allow other origins to interact with the API
app.use(cors({ credentials: true, origin: process.env.CLIENT_BASE_URL || 'http://localhost:3000' }));

app.use(express.json({ limit: '10kb' }));
app.use(morgan('dev'));

app.use('/uploads', express.static(`${__dirname}/uploads`));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/hackathon', hackathonRouter);
app.use('/api/v1/bounties', bountyRouter);
app.use('/notes', notesRouter);

// Routes --> auth, user, college, hackathons, bounties, notes, seminars

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

const port = process.env.PORT || 8000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is running on port ${port}`));
