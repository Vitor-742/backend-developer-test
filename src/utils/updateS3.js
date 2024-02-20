import request from "request";

const updateS3 = async () => {
    console.log('updating aws S3')

    try {

        // faz requisicao de trigger ao aws lambda para atualizar o S3
        request.get('https://lhfi3twx72u7b2zdcu47bv7db40kefij.lambda-url.us-east-1.on.aws/', (error, response, body) => {

            // log sucesso
            console.log('S3 atualizado');
        })
    } catch (error) {
        // log erro
        console.log(error.message);
    }
}

export default updateS3;