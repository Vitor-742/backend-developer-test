import { readAll } from '../models/companiesModel.js';

// servico que requisita companias e retorna ao controller
const listCompanies = async () => {

    // chama leitura dos dados a camada de modelo
    const allCompanies = await readAll();

    return allCompanies;
};

export default listCompanies;