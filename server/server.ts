import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('arun bohra');
});

const port = process.env.PORT || 8000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is running on port ${port}`));
