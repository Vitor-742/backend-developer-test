import request from 'request';

const readPublishedJobs = async () => {
    console.log('reading aws S3')

    let result;

    try {

        // faz requisicao ao aws S3
        result = await new Promise((resolve, _reject) => {
            request.get('https://vitor-campos-bucket.s3.amazonaws.com/feed.json', (error, response, body) => {

            // retorna promise
            resolve(JSON.parse(body))
        })})
        

    } catch (error) {
        // lanca erro
        console.log(error.message);

        return { status: 400, error: { message: error.message } };
    }

    return { status: 200, feed: result };
};

export { readPublishedJobs }