import * as chai from 'chai';
import request from 'request';

const expect = chai.expect;

describe('Companies test', () => {
  describe('GET /companies', () => {
    context('successful request', () => {

      // configuracao da requisicao
      const options = {
        url: 'http://localhost:3000/companies',
        method: 'GET',
        json: true
      };

      it('no error', (done) => {

        request.get(options, (error, response, body) => {
          // verifica se há erro
          expect(error).to.equal(null);

          done()
        })
      })

      it('return status 200', (done) => {

        request.get(options, (error, response, body) => {
          // verifica se o status da requisicao e OK
          expect(response.statusCode).to.equal(200);

          done()
        })
      })

      it('return correct type', (done) => {

        request.get(options, (error, response, body) => {
          // verifica se o body esta no formato esperado
          expect(body).to.be.an('array');

          done()
        })
      })

      it('expected length', (done) => {

        request.get(options, (error, response, body) => {
          // verifica se o body tem o tamanho esperado
          expect(body).to.have.lengthOf(3);

          done()
        })
      })

      it('expected properties', (done) => {

        request.get(options, (error, response, body) => {

          // verifica se o body tem as propriedades esperadas
          expect(body[0]).to.have.property('id');
          expect(body[0]).to.have.property('name');
          expect(body[0]).to.have.property('created_at');
          expect(body[0]).to.have.property('updated_at');

          done()
        })
      })

      
    });
  });
  describe('GET /companies/:company_id', () => {
    context('successful request', () => {

      const options = {
        url: 'http://localhost:3000/companies/7034a6b4-99d4-4e34-8fb5-527ac6eeffe4',
        method: 'GET',
        json: true
      };

      it('no error', (done) => {

        request.get(options, (error, response, body) => {
        // verifica se há erro
        expect(error).to.equal(null);

          done()
        })
      })

      it('return status 200', (done) => {

        request.get(options, (error, response, body) => {
        // verifica se o status da requisicao e OK
        expect(response.statusCode).to.equal(200);

          done()
        })
      })

      it('return correct type', (done) => {

        request.get(options, (error, response, body) => {
        // verifica se o body esta no formato esperado
        expect(body).to.be.an('array');

          done()
        })
      })

      it('expected length', (done) => {

        request.get(options, (error, response, body) => {

        // verifica se o body tem o tamanho esperado
        expect(body).to.have.lengthOf(1);

          done()
        })
      })
    });
  });
});