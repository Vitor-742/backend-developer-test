import { readPublishedJobs } from '../models/feedModel.js';

// servico que requisita feed e retorna ao controller
const listPublishedJobs = async () => {
    console.log("listing published jobs");

    // chama leitura dos dados a camada de modelo
    const publishedJobs = await readPublishedJobs();

    console.log(publishedJobs)

    return publishedJobs;
};

export { listPublishedJobs };