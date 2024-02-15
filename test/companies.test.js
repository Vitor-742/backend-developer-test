import * as chai from 'chai';
import request from 'request';

const expect = chai.expect;

describe('Companies test', () => {
  describe('GET /companies', () => {
    context('successful request', () => {

      // requisicao http    
      request('http://localhost:3000/companies', (error, response, body) => {

      it('no error', (done) => {

        // verifica se há erro
        expect(error).to.equal(null);

        done()
      })

      it('return status 200', (done) => {

        // verifica se o status da requisicao e OK
        expect(response.statusCode).to.equal(200);
        
        done()
      })

      it('return correct type', (done) => {

        // verifica se o body esta no formato esperado
        expect(JSON.parse(body)).to.be.an('array');
        
        done()
      })

      it('expected length', (done) => {

        // verifica se o body tem o tamanho esperado
        expect(JSON.parse(body)).to.have.lengthOf(3);
        
        done()
      })

      it('expected properties', (done) => {

        // verifica se o body tem as propriedades esperadas
        expect(JSON.parse(body)[0]).to.have.property('id');
        expect(JSON.parse(body)[0]).to.have.property('name');
        expect(JSON.parse(body)[0]).to.have.property('created_at');
        expect(JSON.parse(body)[0]).to.have.property('updated_at');
        
        done()
      })
      })
    });
  });
  describe('GET /companies/:company_id', () => {
    context('successful request', () => {

      // requisicao http    
      request('http://localhost:3000/companies/7034a6b4-99d4-4e34-8fb5-527ac6eeffe4', (error, response, body) => {

      it('no error', (done) => {

        // verifica se há erro
        expect(error).to.equal(null);

        done()
      })

      it('return status 200', (done) => {

        // verifica se o status da requisicao e OK
        expect(response.statusCode).to.equal(200);
        
        done()
      })

      it('return correct type', (done) => {

        // verifica se o body esta no formato esperado
        expect(JSON.parse(body)).to.be.an('array');
        
        done()
      })

      console.log(body)

      it('expected length', (done) => {

        // verifica se o body tem o tamanho esperado
        expect(JSON.parse(body)).to.have.lengthOf(1);
        
        done()
      })

      it('expected properties', (done) => {

        // verifica se o body tem as propriedades esperadas
        expect(JSON.parse(body)[0]).to.have.property('id');
        expect(JSON.parse(body)[0]).to.have.property('name');
        expect(JSON.parse(body)[0]).to.have.property('created_at');
        expect(JSON.parse(body)[0]).to.have.property('updated_at');
        
        done()
      })
      })
    });
  });
});