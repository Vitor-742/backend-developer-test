import express from 'express'
const app = express()

//const companiesController = require('./controllers/companiesController');
import { companiesRouter } from './controllers/companiesController.js';

app.use(express.json());

//rotas

app.use('/companies', companiesRouter);

// Importando app para que index.js possa usa-lo
//module.exports = app;
export { app };
