import express, { json } from 'express';
import cors from 'cors';
import moviesRoute from './routes/movies.route.js';

const app = express();
app.use(json());
app.use(cors());
app.use(moviesRoute);

const port = process.env.PORT || '4000';
app.listen(port, () => {
  console.log(`Server running at port ${port}...`);
});