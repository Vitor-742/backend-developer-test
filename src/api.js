import express from 'express'
const app = express()

import { companiesRouter } from './controllers/companiesController.js';

app.use(express.json());

//rotas

app.use('/companies', companiesRouter);

// Importando app para que index.js possa usa-lo
export { app };
