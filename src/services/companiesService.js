import { readAll, readById } from '../models/companiesModel.js';

// servico que requisita companias e retorna ao controller
const listCompanies = async () => {
    console.log("listing companies");

    // chama leitura dos dados a camada de modelo
    const allCompanies = await readAll();

    return allCompanies;
};

// servico que requisita compania pelo id e retorna ao controller
const showCompanyById = async (companyId) => {
    console.log("showing company by id");

    // chama leitura dos dados a camada de modelo
    const Company = await readById(companyId);

    return Company;
};

export { showCompanyById, listCompanies };