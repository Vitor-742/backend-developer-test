const pool = require('./connectionPool')

const readAll = async () => {

    const client = await pool.connect();

    let result;

    try {
        result = await client.query('SELECT * FROM companies');
        console.log(result.rows);
    } catch (error) {
        console.error(error);
        console.log('retornar erro');
    } finally {
        await client.end();
    }

    console.log('chegou aqui');


    return result.rows;

};

module.exports = {
    readAll,
};