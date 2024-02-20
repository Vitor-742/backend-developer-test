import express from 'express';

const feedRouter = express.Router();
import { listPublishedJobs } from '../services/feedService.js';

// rota - GET /feed
feedRouter.get('/', async (req, res) => {
    console.log("GET /feed");

    // chama servico que retorna jobs publicados
    const { status, error, feed } = await listPublishedJobs();

    // caso tenha ocorrido erro no processamento informa o usuario
    if (status === 400) return res.status(status).json(error);

    return res.status(status).json(feed);
});

export { feedRouter };