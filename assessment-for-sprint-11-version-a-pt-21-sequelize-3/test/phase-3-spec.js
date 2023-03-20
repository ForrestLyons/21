const chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
chai.use(chaiHttp);
const expect = chai.expect;

const { Bread } = require('../db/models');
const { resetDB, seedAllDB } = require('./utils/test-utils');

describe('Phase 3 Specs - Breads', () => {
  before(async function () {
    await resetDB();
    return seedAllDB();
  });

  it('passes the API specs for GET /breads', async () => {
    await chai.request(server)
      .get('/breads')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body.length).to.eq(2);
      });
    await Bread.create({
      name: 'Test Bread',
      needsRise: true,
    });
    return await chai.request(server)
      .get('/breads')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body.length).to.eq(3);
      });
  });

  it('passes the API specs for POST /breads', async () => {
    return await chai.request(server)
      .post('/breads')
      .send({ name: 'Test Bread', needsRise: true })
      .then((res) => {
        expect(res.status).to.be.within(200, 201);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.own.property('name');
        expect(res.body.name).to.be.a('string');
        expect(res.body.name).to.eq('Test Bread');
        expect(res.body).to.have.own.property('needsRise');
        expect(res.body.needsRise).to.be.a('boolean');
        expect(res.body.needsRise).to.be.true;
        expect(res.body).to.have.own.property('id');
        expect(res.body.id).to.eq(4);
      });
  });
})