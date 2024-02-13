const companiesModel = require('../models/companiesModel');

const listCompanies = async () => {
    const allCompanies = await companiesModel.readAll();


    return { status: 200, companies: { allCompanies } };
};

module.exports = {
    listCompanies,
};