const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');
const { expect } = chai;

chai.use(chaiHttp);

describe('Index page', () => {
  it('should return the correct status code for GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});

describe('Cart page', () => {
  it('should return the correct status code and message when :id is a number', (done) => {
    chai.request(app)
      .get('/cart/123')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Payment methods for cart 123');
        done();
      });
  });

  it('should return 404 when :id is NOT a number', (done) => {
    chai.request(app)
      .get('/cart/abc')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.text).to.equal('Not found');
        done();
      });
  });

  it('should return 404 for non-existent routes', (done) => {
    chai.request(app)
      .get('/nonexistentroute')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.text).to.equal('Not found');
        done();
      });
  });
});
