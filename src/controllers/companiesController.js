//const express = require('express');
import express from 'express';

const companiesRouter = express.Router();
import listCompanies from '../services/companiesService.js';

// rota - GET /companies
companiesRouter.get('/', async (req, res) => {
    console.log("listing companies");

    // chama servico que retorna companias
    const response = await listCompanies();

    // caso tenha ocorrido erro no processamento informa o usuario
    if (response.status === 400) return res.status(response.status).json(response.error);

    return res.status(response.status).json(response.companies);
});

//module.exports = companiesRouter;
export { companiesRouter };