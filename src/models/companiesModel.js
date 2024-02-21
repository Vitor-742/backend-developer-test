import { pool } from '../utils/connectionPool.js'

const readAll = async () => {

    // cria conexao com banco usando dados do pool
    const client = await pool.connect();
    console.log('reading database')

    let result;

    try {
        // constroi query
        const query = 'SELECT * FROM companies';

        // requisicao ao banco de dados
        result = await client.query(query);

    } catch (error) {
        // lanca erro
        console.log(error.message);

        return { status: 400, error: { message: error.message } };
    } finally {
        // finaliza cliente
        await client.end();
    }


    return { status: 200, companies: result.rows };
};

const readById = async (companyId) => {

    // cria conexao com banco usando dados do pool
    const client = await pool.connect();
    console.log('reading database')

    let result;

    try {
        // constroi query
        const query = `SELECT * FROM companies WHERE companies.id = '${companyId}'`;
        
        // requisicao ao banco de dados
        result = await client.query(query);

    } catch (error) {
        // lanca erro
        console.log(error.message);

        return { status: 400, error: { message: error.message } };
    } finally {
        // finaliza cliente
        await client.end();
    }


    return { status: 200, company: result.rows };
};

export { readAll, readById }