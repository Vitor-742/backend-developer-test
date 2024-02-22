# Backend Developer Technical Assessment

- projeto desenvolvido por Vitor Campos, para desafio técnico

## Tecnologias aplicadas

Neste projeto foi utilizado:
- Node.js 20.11
- express 4.18
- pg 8.11 | lib para requisicoes ao banco de dados postgresql
- request 2.88 | lib para requisicoes http
- chai 5.1 | lib para assercoes de testes
- mocha 10.3 | framework de testes
- nodemon 3.0 | ferramenta auxiliar para desenvolvimento
- aws-sdk 2.1561 | sdk da aws para funcao lambda

## Para iniciar a aplicação

1. Clone o projeto para sua pasta
2. Entre no diretório, abra o terminal e digite `npm i`
3. Insira as variaveis do banco de dados
    3.1 Crie um arquivo `.env` na pasta
    3.2 Insira os dados de conexão do banco de dados (aqui seriam as suas credenciais, porém o banco de dados postgres ja está online com aws RDS)
        3.2.1 Variáveis para conexão com aws RDS:
        `DB_USER=postgres
        DB_HOST=jobs-and-companies.cf6iw0q0o38z.us-east-2.rds.amazonaws.com
        DB_NAME=postgres
        DB_PASSWORD=jobsandcompanies
        DB_PORT=5432`
4. Para iniciar a aplicação basta digitar no terminal `npm start`
5. Pronto! A aplicação já está funcionando, agora você já pode fazer requisições

## Endpoints

1. GET /companies - Lista as companies cadastradas

`GET http://localhost:3000/companies`

2. GET /companies/:company_id - Busca company com id específico
    2.1 company_id se refere ao id da company no banco de dados

`GET http://localhost:3000/companies/:company_id`

3. POST /jobs - Cria job com status 'draft'
    3.1 body de exemplo:
        {
            "company_id": "3660a3df-e408-4046-9426-2d95f67035da",
            "title": "dev",
            "description": "programar",
            "location": "SP"
    }

`POST http://localhost:3000/jobs/`

4. PUT /jobs/:job_id/publish - atualiza status do job para 'published'
    4.1 job_id indica qual id do job que será publicado

`PUT http://localhost:3000/jobs/:job_id/publish`

5. PUT /jobs/:job_id - Edita dados do job como title, location e description
    5.1 job_id indica qual id do job que será editado
    5.2 body de exemplo:
        {
            "title": "escritor",
            "description": "escrever",
            "location": "MG"
    }

`PUT http://localhost:3000/jobs/:job_id`

6. DELETE /jobs/:job_id - Deleta job
    6.1 job_id indica qual id do job que será deletado

`DELETE http://localhost:3000/jobs/:job_id`

7. PUT /jobs/:job_id/archive - Altera o status do job para 'archived'
    7.1 job_id indica qual id do job que será arquivado

`PUT http://localhost:3000/jobs/:job_id/archive`

8. GET /feed - Retorna jobs publicados (lidos do aws S3)

`GET http://localhost:3000/feed`

## Banco de dados AWS Relational Database Service

Depois de pesquisa, foi visto que um banco de dados em cloud seria favorável ao projeto. Como já são utilizados outros serviços da aws, que teriam que ser integrados com o banco de dados relacional, usar o AWS RDS facilita e melhora o desenvolvimento, além de outros benefícios, como poder ser acessado de qualquer lugar com seus dados íntegros. Por esse motivo as configurações do banco já estão prontas.