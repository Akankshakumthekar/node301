var chai = require('chai');
var assert = chai.assert;
// Using Assert style 
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let request = require('supertest');

let server = require('../server.js');

describe('/GET review', () => {
    it('it should GET a review', (done) => {
        chai.request(server)
            .get('/review/find-all-review')
            .end((err, res) => {
                (res).should.have.status(200);
                (res.body).should.be.a('object');
                done();
            });
    });
});
