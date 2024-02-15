import express from 'express';

const companiesRouter = express.Router();
import { listCompanies, showCompanyById } from '../services/companiesService.js';

// rota - GET /companies
companiesRouter.get('/', async (req, res) => {
    console.log("GET /companies");

    // chama servico que retorna companias
    const { status, error, companies } = await listCompanies();

    // caso tenha ocorrido erro no processamento informa o usuario
    if (status === 400) return res.status(status).json(error);

    return res.status(status).json(companies);
});

// rota - GET /companies/:id
companiesRouter.get('/:company_id', async (req, res) => {
    console.log("GET /companies/:company_id");

    const { company_id } = req.params;

    // chama servico que retorna compania por id
    const { status, error, company } = await showCompanyById(company_id);

    // caso tenha ocorrido erro no processamento informa o usuario
    if (status === 400) return res.status(status).json(error);

    return res.status(status).json(company);
});

export { companiesRouter };