import express from 'express';

const jobsRouter = express.Router();
import { newJob } from '../services/jobsService.js';

// rota - POST /jobs
jobsRouter.post('/', async (req, res) => {
    console.log("POST /jobs");

    const { body } = req;

    // chama servico que insere job
    const { status, error } = await newJob(body);

    // caso tenha ocorrido erro no processamento informa o usuario
    if (status === 400) return res.status(status).json(error);

    return res.status(status).json("Job Created!");
});

export { jobsRouter };