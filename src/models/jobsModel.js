import { pool } from './connectionPool.js'

const createJob = async (company_id, title, description, location) => {

    // cria conexao com banco usando dados do pool
    const client = await pool.connect();
    console.log('inserting in database')

    let result;

    try {
        // constroi query
        const query = `insert into jobs (company_id, title, description, location, notes) 
        values ('${company_id}', '${title}', '${description}', '${location}', '');`;

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


    return { status: 201 };
};

const updateJobStatus = async (status, job_id) => {

    // cria conexao com banco usando dados do pool
    const client = await pool.connect();
    console.log('updating database')

    let result;

    try {
        // constroi query
        const query = `UPDATE jobs SET status = '${status}' WHERE id = '${job_id}';`;

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


    return { status: 200 };
};

const updateJobData = async ({ title, description, location }, job_id) => {

    // cria conexao com banco usando dados do pool
    const client = await pool.connect();
    console.log('updating database')

    let result;

    try {
        // constroi query
        const query = `UPDATE jobs SET title = '${title}', description = '${description}', location = '${location}' WHERE id = '${job_id}';`;

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


    return { status: 200 };
};

const deleteJob = async (job_id) => {

    // cria conexao com banco usando dados do pool
    const client = await pool.connect();
    console.log('removing job from database')

    let result;

    try {
        // constroi query
        const query = `DELETE FROM jobs WHERE id = '${job_id}';`;

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


    return { status: 200 };
};

export { createJob, updateJobStatus, updateJobData, deleteJob }