
// let Order = require('../app/services');
let app = require('../app.js');
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
// let server = require('../server.js');
let should = chai.should();

chai.use(chaiHttp);

describe("Account", () => {
    var token;
    
    describe("/POST token", () => {
        it("it should gives the token", (done) => {
            chai.request(app)
                .post('/token/create-token')
                .set('Accept', 'application/json')
                .send({ "email": "admin@gmail.com", "password": "admin@1234" })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("token");
                    token = res.body.token //----------------TOKEN SET
                    
                    done();
                });
        });
    });
    
    
    describe("/GET account", () => {
        it("it should get the user account", (done) => {
            chai.request(app)
                .get('api/v1/account')
                .set('Bearer token', token)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
    });

    // ----------


describe('/GET customer ', () => {
    it('it should GET customer with id', (done) => {
        chai.request(app)
            .get('/customer/find-customer')
            .set('Bearer token', token)
            .send({ id: "1" })
            .end((err, res) => {
                if (err) {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('message').eql('Not found customer');
                    done(err);
                } else {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                }
                done();
            });
    });
});

describe('/POST customer', () => {
    it('it should POST a customer', (done) => {
        let customer = {
            name: "test",
            gender: "F",
            city: "pune",
            phone: 6787655678, 
            email: "test@gmail.com",
            address: "pune, chinchwad",
            password: "test@1234"
        }
        chai.request(app)
            .post('/customer/create-customer')
            .set('x-auth-token', token)
            .send(
                customer
            )
            .end((err, res) => {
                if (err) {
                    done(err)
                } else {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                }
            });
    });

});

describe('/PUT customer', () => {
    it('it should UPDATE a customer', (done) => {
        let customer = {
            name: "test",
            gender: "F",
            city: "pune",
            phone: 6787655678, 
            email: "test@gmail.com",
            address: "pune, chinchwad",
            password: "test@1234",
            id: "1"
        }
        chai.request(app)
            .put('/customer/update-customer')
            .set('x-auth-token', token)
            .send({
                name: "test",
                gender: "F",
                city: "pune",
                phone: 6787655678, 
                email: "test@gmail.com",
                address: "pune, chinchwad",
                password: "test@1234",
                id: "1"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});















