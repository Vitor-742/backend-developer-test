const companiesModel = require('../models/companiesModel');

// servico que requisita companias e retorna ao controller
const listCompanies = async () => {

    // chama leitura dos dados a camada de modelo
    const allCompanies = await companiesModel.readAll();

    return allCompanies;
};

module.exports = {
    listCompanies,
};