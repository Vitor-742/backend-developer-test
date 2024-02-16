import express from 'express';

const jobsRouter = express.Router();
import { newJob, updateStatus, editJob, removeJob } from '../services/jobsService.js';

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

// rota - PUT /job/:job_id/publish
jobsRouter.put('/:job_id/publish', async (req, res) => {
    console.log("PUT /job/:job_id/publish");

    const { job_id } = req.params;

    // chama servico que publica job
    const { status, error } = await updateStatus('published', job_id);

    // caso tenha ocorrido erro no processamento informa o usuario
    if (status === 400) return res.status(status).json(error);

    return res.status(status).json("Job Published!");
});

// rota - PUT /job/:job_id
jobsRouter.put('/:job_id', async (req, res) => {
    console.log("PUT /job/:job_id");

    const { body, params: { job_id } } = req;

    // chama servico que edita job
    const { status, error } = await editJob(body, job_id);

    // caso tenha ocorrido erro no processamento informa o usuario
    if (status === 400) return res.status(status).json(error);

    return res.status(status).json("Job Edited!");
});

// rota - DELETE /job/:job_id
jobsRouter.delete('/:job_id', async (req, res) => {
    console.log("DELETE /job/:job_id");

    const { job_id } = req.params;

    // chama servico que remove job
    const { status, error } = await removeJob(job_id);

    // caso tenha ocorrido erro no processamento informa o usuario
    if (status === 400) return res.status(status).json(error);

    return res.status(status).json("Job Deleted!");
});

// rota - PUT /job/:job_id/archive
jobsRouter.put('/:job_id/archive', async (req, res) => {
    console.log("PUT /job/:job_id/archive");

    const { job_id } = req.params;

    // chama servico que arquiva job
    const { status, error } = await updateStatus('archived', job_id);

    // caso tenha ocorrido erro no processamento informa o usuario
    if (status === 400) return res.status(status).json(error);

    return res.status(status).json("Job Archived!");
});

export { jobsRouter };