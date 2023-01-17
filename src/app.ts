import express, { json } from 'express';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

const port = process.env.PORT || '4000';
app.listen(port, () => {
  console.log(`Server running at port ${port}...`);
});