import * as chai from 'chai';
import request from 'request';

const expect = chai.expect;

describe('Feed test', () => {
    describe('GET /feed', () => {
        context('successful request', () => {
    
            // configuracao da requisicao
            const options = {
                url: 'http://localhost:3000/feed',
                method: 'GET',
                json: true,
            };
    
            it('return status 200', (done) => {
    
                request.get(options, (error, response, body) => {
                    expect(response.statusCode).to.equal(200);
                    done()
                })            
            })
    
            it('return correct body', (done) => {
    
                request.get(options, (error, response, body) => {
                    expect(body).to.be.an('array');
                    done()
                })  
                
            })
            
        })
      })
});