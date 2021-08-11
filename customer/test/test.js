
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
                .send({ "email":"admin@gmail.com", "password": "test12" })
                .end((err, res) => {
                    res.should.have.status(200);
                    token = res.body.token //----------------TOKEN SET
                    
                    done();
                });
        });
    });
})
    
    
    // describe("/GET account", () => {
    //     it("it should get the user account", (done) => {
    //         chai.request(app)
    //             .get('api/v1/account')
    //             .set('Bearer token', token)
    //             .end((err, res) => {
    //                 res.should.have.status(200);
    //                 done();
    //             });
    //     });
    // });
    // });

    // ----------


describe('/GET customer ', () => {
    it('it should GET customer with id', (done) => {
        chai.request(app) 
            .get('/customer/find-customer?customerId=1')
            .set({Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyZGF0YSI6IntcIklkXCI6MSxcIm5hbWVcIjpcImFkbWluXCIsXCJlbWFpbFwiOlwiYWRtaW5AZ21haWwuY29tXCIsXCJwYXNzd29yZFwiOlwiJDJhJDA4JFhSbVIuTzhJdWQxdnhyQjhMUGEyc3VnS1hZSy91VDJwMmh6NXV4NXlncUV6blVGbjU1eEQ2XCIsXCJyb2xlXCI6XCJhZG1pblwifSIsImlhdCI6MTYyNzU0NTIyMCwiZXhwIjoxNjI3NjMxNjIwfQ.OnnXeQmbDK0mfMXrpsktxKPQzEjzM8t6jgTc193JgeA'})
            // .send({ customerId: '2' })
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
            .set({Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyZGF0YSI6IntcIklkXCI6MSxcIm5hbWVcIjpcImFkbWluXCIsXCJlbWFpbFwiOlwiYWRtaW5AZ21haWwuY29tXCIsXCJwYXNzd29yZFwiOlwiJDJhJDA4JFhSbVIuTzhJdWQxdnhyQjhMUGEyc3VnS1hZSy91VDJwMmh6NXV4NXlncUV6blVGbjU1eEQ2XCIsXCJyb2xlXCI6XCJhZG1pblwifSIsImlhdCI6MTYyNzU0NTIyMCwiZXhwIjoxNjI3NjMxNjIwfQ.OnnXeQmbDK0mfMXrpsktxKPQzEjzM8t6jgTc193JgeA'})
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
        chai.request(app)
            .put('/customer/update-customer')
            .set({Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyZGF0YSI6IntcIklkXCI6MSxcIm5hbWVcIjpcImFkbWluXCIsXCJlbWFpbFwiOlwiYWRtaW5AZ21haWwuY29tXCIsXCJwYXNzd29yZFwiOlwiJDJhJDA4JFhSbVIuTzhJdWQxdnhyQjhMUGEyc3VnS1hZSy91VDJwMmh6NXV4NXlncUV6blVGbjU1eEQ2XCIsXCJyb2xlXCI6XCJhZG1pblwifSIsImlhdCI6MTYyNzU0NTIyMCwiZXhwIjoxNjI3NjMxNjIwfQ.OnnXeQmbDK0mfMXrpsktxKPQzEjzM8t6jgTc193JgeA'})
            .send({
                name: "test",
                gender: "F",
                city: "pune",
                phone: 6787655677, 
                email: "test@gmail.com",
                address: "pune, chinchwad",
                id: "7"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('/DELETE customer', () => {
    it('it should DELETE a customer ', (done) => {        
              chai.request(app)
              .delete('/customer/delete-cutomer')
              .set({Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyZGF0YSI6IntcIklkXCI6MSxcIm5hbWVcIjpcImFkbWluXCIsXCJlbWFpbFwiOlwiYWRtaW5AZ21haWwuY29tXCIsXCJwYXNzd29yZFwiOlwiJDJhJDA4JFhSbVIuTzhJdWQxdnhyQjhMUGEyc3VnS1hZSy91VDJwMmh6NXV4NXlncUV6blVGbjU1eEQ2XCIsXCJyb2xlXCI6XCJhZG1pblwifSIsImlhdCI6MTYyNzU0NTIyMCwiZXhwIjoxNjI3NjMxNjIwfQ.OnnXeQmbDK0mfMXrpsktxKPQzEjzM8t6jgTc193JgeA'})
              .send({customerId : 25})
              .end((err, res) => {
                  if(err) done(err);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('data').property('message').eql('Customer deleted successfullt!');
                done();
              });
        });
});


describe('/POST login', () => {
    it('it should login ', (done) => {        
              chai.request(app)
              .post('/customer/login' )
              .set({Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyZGF0YSI6IntcIklkXCI6MSxcIm5hbWVcIjpcImFkbWluXCIsXCJlbWFpbFwiOlwiYWRtaW5AZ21haWwuY29tXCIsXCJwYXNzd29yZFwiOlwiJDJhJDA4JFhSbVIuTzhJdWQxdnhyQjhMUGEyc3VnS1hZSy91VDJwMmh6NXV4NXlncUV6blVGbjU1eEQ2XCIsXCJyb2xlXCI6XCJhZG1pblwifSIsImlhdCI6MTYyNzU0NTIyMCwiZXhwIjoxNjI3NjMxNjIwfQ.OnnXeQmbDK0mfMXrpsktxKPQzEjzM8t6jgTc193JgeA'})
              .send({   
                    email: "john12@gmail.com",
                    password: "Test@31"
             })
              .end((err, res) => {
                  if(err) done(err);
                    res.should.have.status(200);
                   
                done();
              });
        });
});














