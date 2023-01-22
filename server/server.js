import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import AppError from './utils/AppError';

import authRouter from './routes/authRoutes';
// import bountyRouter from './routes/bountyRoutes';
// import AppError from './utils/AppError';
// import globalErrorHandler from './controllers/errorController';

const app = express();
dotenv.config();

app.use('/api/v1/auth', authRouter);
// app.use('/api/v1/bounties', bountyRouter);

app.get('/', (req, res) => {
  res.send('arun bohra');
});

// app.all('*', (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

// app.use(globalErrorHandler);

const port = process.env.PORT || 8000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is running on port ${port}`));

mongoose.set('strictQuery', true);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Connected to Database');
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  });
