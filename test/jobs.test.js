import * as chai from 'chai';
import request from 'request';

const expect = chai.expect;

describe('Jobs test', () => {
  describe('POST /jobs', () => {
    context('successful request', () => {

        // configuracao da requisicao
        const options = {
        url: 'http://localhost:3000/jobs',
        method: 'POST',
        json: true,
        body: {
            "company_id": "7034a6b4-99d4-4e34-8fb5-527ac6eeffe4",
            "title": "dev",
            "description": "programar",
            "location": "SP"
        }
        };

        // requisicao http    
        request.post(options, (error, response, body) => {

        it('no error', (done) => {

            // verifica se há erro
            expect(error).to.equal(null);

            done()
        })

        it('return status 201', (done) => {

            // verifica se o status da requisicao e Created
            expect(response.statusCode).to.equal(201);
            
            done()
        })

        it('return correct type', (done) => {

            // verifica se o body esta no formato esperado
            expect(body).to.be.an('string');
            
            done()
        })

        it('return correct response', (done) => {

            // verifica se o body esta respondendo o que deveria
            expect(body).to.equal('Job Created!');
            
            done()
        })
      })
    });
    context('fail request', () => {

        // configuracao da requisicao
        const options = {
            url: 'http://localhost:3000/jobs',
            method: 'POST',
            json: true,
            body: {
                "company_id": "7034a6b4-99d4-4e34-8fb5-527ac6eeffe4",
                "title": "dev",
                "description": "programar",
                "location": "SP"
            }
        };

        it('return error if id is not in UUID format', (done) => {

            // insere valor incorreto no id
            options.body.company_id = 1234;

            request.post(options, (error, response, body) => {
                expect(response.statusCode).to.equal(400);
                expect(body).to.have.property('message');
                expect(body.message).to.equal('id isnt in the expected UUID format');
                
            })            
            done()
        })

        it('return error if body is not in expected format', (done) => {

            // insere valor incorreto no id
            options.body.title = 1;

            request.post(options, (error, response, body) => {
                expect(response.statusCode).to.equal(400);
                expect(body).to.have.property('message');
                expect(body.message).to.equal('body isnt in the expected format');
                
            })            
            done()
        })





        
    })
  });
});