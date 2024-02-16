import { createJob, updateJobStatus, updateJobData, deleteJob } from '../models/jobsModel.js';
import verifyUUID from '../utils/verifyUUID.js';

// servico que cria job
const newJob = async ({ company_id, title, description, location }) => {
    console.log("creating job");

    // verifica se estao como deveriam
    if (typeof(title) != 'string' || typeof(description) != 'string' || typeof(location) != 'string') {
        const message = 'body isnt in the expected format';

        // retorna mensagem de erro
        console.log(message);
        return { status: 400, error: { message } };
    }

    // verifica se id esta no formato esperado
    if (!verifyUUID(company_id)) {
        const message = 'id isnt in the expected UUID format';

        // retorna mensagem de erro
        console.log(message);
        return { status: 400, error: { message } };
    }

    // chama inserção no banco e retorna status
    const jobCreated = await createJob(company_id, title, description, location);

    return jobCreated;
};

// servico que atualiza status
const updateStatus = async (status, job_id) => {
    console.log(`changing job status to ${status}`);

    // verifica se id esta no formato esperado
    if (!verifyUUID(job_id)) {
        const message = 'id isnt in the expected UUID format';

        // retorna mensagem de erro
        console.log(message);
        return { status: 400, error: { message } };
    }

    // chama atualizacao do banco e retorna
    const jobUpdated = await updateJobStatus(status, job_id);

    return jobUpdated;
};

// servico que atualiza dados do job
const editJob = async ({ title, description, location }, job_id) => {
    console.log("changing job data");

    // verifica se id esta no formato esperado
    if (!verifyUUID(job_id)) {
        const message = 'id isnt in the expected UUID format';

        // retorna mensagem de erro
        console.log(message);
        return { status: 400, error: { message } };
    }

    // verifica se body esta no formato correto
    if (typeof(title) != 'string' || typeof(description) != 'string' || typeof(location) != 'string') {
        const message = 'body isnt in the expected format';

        // retorna mensagem de erro
        console.log(message);
        return { status: 400, error: { message } };
    }

    // chama atualizacao do banco e retorna
    const jobUpdated = await updateJobData({ title, description, location }, job_id);

    return jobUpdated;
};

// servico que deleta job
const removeJob = async (job_id) => {
    console.log("removing job");

    // verifica se id esta no formato esperado
    if (!verifyUUID(job_id)) {
        const message = 'id isnt in the expected UUID format';

        // retorna mensagem de erro
        console.log(message);
        return { status: 400, error: { message } };
    }

    // chama remove do banco e retorna
    const jobRemoved = await deleteJob(job_id);

    return jobRemoved;
};

export { newJob, updateStatus, editJob, removeJob };