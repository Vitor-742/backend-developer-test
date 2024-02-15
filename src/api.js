import express from 'express'
const app = express()

import { companiesRouter } from './controllers/companiesController.js';
import { jobsRouter } from './controllers/jobsController.js';

app.use(express.json());

// Rotas

app.use('/companies', companiesRouter);

app.use('/jobs', jobsRouter);

// Importando app para que index.js possa usa-lo
export { app };
