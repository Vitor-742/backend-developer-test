import express from 'express'
const app = express()

import { companiesRouter } from './controllers/companiesController.js';
import { jobsRouter } from './controllers/jobsController.js';
import { feedRouter } from './controllers/feedController.js';

app.use(express.json());

// Rotas

app.use('/companies', companiesRouter);

app.use('/jobs', jobsRouter);

app.use('/feed', feedRouter);

// Importando app para que index.js possa usa-lo
export { app };
