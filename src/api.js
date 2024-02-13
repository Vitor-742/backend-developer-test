const express = require('express')
const app = express()

const companiesController = require('./controllers/companiesController');

app.use(express.json());

//rotas

app.use('/companies', companiesController);

// Importando app para que index.js possa usa-lo
module.exports = app;
