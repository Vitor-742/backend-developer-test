import { pool } from './connectionPool.js'

const readAll = async () => {

    // cria conexao com banco usando dados do pool
    const client = await pool.connect();
    console.log('reading database')

    let result;

    try {
        // requisicao ao banco de dados
        result = await client.query('SELECT * FROM companies');

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

export { readAll }