import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/', (req, res) => {
  res.send('arun bohra');
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

mongoose.set('strictQuery', true);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.log(err);
  });
