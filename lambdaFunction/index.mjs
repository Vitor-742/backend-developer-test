import pkg from 'pg';
const { Pool } = pkg;
import AWS from 'aws-sdk';
const s3 = new AWS.S3();
export const handler = async () => {
  
    // pool de conexao com banco de dados
    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        ssl: {
            rejectUnauthorized: false
        }
    });

    // conexao com client
    const client = await pool.connect();

    // constroi e executa query
    const query = `SELECT * FROM jobs WHERE status = 'published';`;
    const result = await client.query(query);

    // dados do bucket
    const params = {
        Bucket: 'vitor-campos-bucket',
        Key: 's3://vitor-campos-bucket/feed.json',
        Body: result,
    };

    try {
        // Reescrever o arquivo no S3
        const result = await s3.putObject(params).promise();

        console.log('Arquivo reescrito com sucesso');

        return {
          statusCode: 200,
          body: 'Arquivo reescrito com sucesso.',
        };

      } catch (error) {

        console.error('Erro ao reescrever o arquivo:', error);
        
        return {
          statusCode: 500,
          body: 'Erro ao reescrever o arquivo.',
        };
      }
}



