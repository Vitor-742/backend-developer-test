const express = require('express');

const companiesRouter = express.Router();

const { listCompanies } = require('../services/companiesService')

companiesRouter.get('/', async (req, res) => {

    const response = await listCompanies();
    

    return res.status(200).json(response.companies);
});

module.exports = companiesRouter;