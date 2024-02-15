// import dotenv from 'dotenv';
// dotenv.config({ path: '../.env' });

import 'dotenv/config'

import { app } from './api.js'
//import app from './api';

const port = 3000;

app.get('/', (req, res) => {
  res.send();
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})