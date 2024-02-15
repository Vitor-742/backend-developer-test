import { createJob } from '../models/jobsModel.js';

// servico que cria job
const newJob = async ({ company_id, title, description, location }) => {
    console.log("creating job");

    // chama inserção no banco e retorna status
    const isJobCreated = await createJob(company_id, title, description, location);

    return isJobCreated;
};


export { newJob };