# Backend Developer Technical Assessment

Projeto desenvolvido por Vitor Campos, para desafio técnico

## Tecnologias aplicadas

Neste projeto foi utilizado:
- Node.js 20.11
- express 4.18
- pg 8.11 - lib para requisicoes ao banco de dados postgresql
- request 2.88 - lib para requisicoes http
- chai 5.1 - lib para assercoes de testes
- mocha 10.3 - framework de testes
- nodemon 3.0 - ferramenta auxiliar para desenvolvimento
- aws-sdk 2.1561 - sdk da aws para funcao lambda

## Para iniciar a aplicação

1. Clone o projeto para sua pasta
2. Checkout para branch do desenvolvimento `git checkout vitor-campos-development-challenge`
3. Entre no diretório, abra o terminal e digite `npm i`
4. Insira as variaveis do banco de dados
    1. Crie um arquivo `.env` na pasta
    2. Insira os dados de conexão do banco de dados (aqui seriam as suas credenciais, porém o banco de dados postgres ja está online com aws RDS)
        1. Variáveis para conexão com aws RDS: [.env.example](https://github.com/Vitor-742/backend-developer-test/blob/vitor-campos-development-challenge/.env.example)
5. Para iniciar a aplicação basta digitar no terminal `npm start`
6. Pronto! A aplicação já está funcionando, agora você já pode fazer requisições

## Endpoints

1. GET /companies -> Lista as companies cadastradas

`GET http://localhost:3000/companies`

---

2. GET /companies/:company_id -> Busca company com id específico
    1. company_id se refere ao id da company no banco de dados

`GET http://localhost:3000/companies/:company_id`

---

3. POST /jobs -> Cria job com status 'draft'
    1. body de exemplo:
        {<br>
            "company_id": "3660a3df-e408-4046-9426-2d95f67035da",<br>
            "title": "dev",<br>
            "description": "programar",<br>
            "location": "SP"<br>
    }

`POST http://localhost:3000/jobs/`

---

4. PUT /jobs/:job_id/publish -> atualiza status do job para 'published'
    1. job_id indica qual id do job que será publicado

`PUT http://localhost:3000/jobs/:job_id/publish`

---

5. PUT /jobs/:job_id -> Edita dados do job como title, location e description
    1. job_id indica qual id do job que será editado
    2. body de exemplo:
        {<br>
            "title": "escritor",<br>
            "description": "escrever",<br>
            "location": "MG"<br>
    }

`PUT http://localhost:3000/jobs/:job_id`

---

6. DELETE /jobs/:job_id -> Deleta job
    1. job_id indica qual id do job que será deletado

`DELETE http://localhost:3000/jobs/:job_id`

---

7. PUT /jobs/:job_id/archive -> Altera o status do job para 'archived'
    1. job_id indica qual id do job que será arquivado

`PUT http://localhost:3000/jobs/:job_id/archive`

---

8. GET /feed -> Retorna jobs publicados (lidos do aws S3)

`GET http://localhost:3000/feed`


## Banco de dados AWS Relational Database Service

Depois de pesquisa, foi visto que um banco de dados em cloud seria favorável ao projeto. Como já são utilizados outros serviços da aws, que teriam que ser integrados com o banco de dados relacional, usar o AWS RDS facilita e melhora o desenvolvimento, além de outros benefícios, como poder ser acessado de qualquer lugar com seus dados íntegros. Por esse motivo as configurações do banco já estão prontas.

## Testes

Os testes foram feitos com mocha e chai, usado a lib request para requisições (aqui o caso ideal seria montar um banco separado para testes, mas para facilitar o uso do programa os dois estão juntos).
Para rodar os testes da API somente use `npm start` em um terminal e abra outro para rodar os seguintes comandos:
- `npm run test-companies`
- `npm run test-jobs`
- `npm run test-feed`

## Modelo de camadas MSC

O programa foi construído com base no modelo MSC, que apresenta:
- Controller: Camada que recebe requisições da rota e controla destino e retorno
- Service: Camada para regras de negócio e validação que serve o controller
- Model: Camada que acessa todos os tipos de dados e os trata inicialmente

## AWS Lambda, AWS S3 e feed
- A função lambda já está configurada para receber o trigger quando o `npm start` acontecer, então para atualizar o lambda basta reiniciar o sistema, simulando o EventBridge triggando o lambda.
- O endpoint lê o meu bucket com o objeto feed.json
- A função lambda que foi configurada está dentro do repositório: [Função Lambda](https://github.com/Vitor-742/backend-developer-test/tree/vitor-campos-development-challenge/lambdaFunction)
- Imagem da função no AWS Lambda:
  ![lambdafunction](https://github.com/Vitor-742/backend-developer-test/assets/72372471/afaef538-54a7-4cc1-8126-e4e5c79a471e)

## Questions


## Notas
### Segurança
- É importante ressaltar que essa não a forma segura de consumir os dados, como foi feito para avaliação, acredito que facilite deixar elementos com acesso público, caso queiram avalia-lo também.
- Após o parecer dos avaliadores todos os elementos públicos serão deletados.

 ### Melhorias
 - Com o desenvolvimento e autoanálise vi que há pontos faltantes que eu gostaria de incluir ao projeto, como containerização, segurança, integração com aws, entre outros. Os pontos serão desenvolvidos e aprimorados depois do processo.


## Contato
Para quaisquer duvidas ou esclarecimentos:
- email: vitorcampos742@gmail.com
- telefone: 12 982170402
- linkedin: https://www.linkedin.com/in/vitorcampos742/
