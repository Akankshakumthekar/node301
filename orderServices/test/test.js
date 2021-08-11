
let Order = require('../app/model');
let app = require('../app.js');
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
// let server = require('../server.js');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET order', () => {
    it('it should GET all the order by customerId', (done) => {
        chai.request(app)
            .post('/order/find-order-by-customerId')
            .send({  "customerId": "cust2" })
            .end((err, res) => {
                if (err) {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql(' Not found data');
                    done();
                } else{
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
                }
            });
    });
});

describe('/GET order ', () => {
    it('it should GET order with id', (done) => {
        chai.request(app)
            .post('/order/find-order-by-id')
            .send({id: "6110d8b0f3b0421874f53f2e"} )
            .end((err, res) => {
                if (err) {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('message').eql('Not found oder');
                    done(err);
                } else {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                }
                done();
            });
    });
});

describe('/POST order', () => {
    it('it should not POST a order', (done) => {
        let order = {
            customerId: "cust2",
            restaurentId: "rest2",
            item: "pizza",
            qty: 3,
            price: 100,
            amountToPay: 300,
            paid: "googlePay"
        }
        chai.request(app)
            .post('/order/crete-order')
            .send(
                order
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

describe('/PUT order', () => {
    it('it should UPDATE a order', (done) => {
        chai.request(app)
            .put('/order/update-order')
            .send({
                customerId: "cust3",
                restaurentId: "rest3",
                item: "pizza",
                qty: 3,
                price: 100,
                amountToPay: 300,
                paid: "googlePay",
                createdAt: "2021-08-04T09:53:18.361Z",
                updatedAt: "2021-08-04T09:53:18.361Z",
                id: "6110d8b0f3b0421874f53f2e"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Order was updated successfully.');
                done();
            });
    });
});

describe('/DELETE order', () => {
    it('it should DELETE a order ', (done) => {
              chai.request(app)
              .delete('/order/delete' )
              .send({ id: "611251ee0e839d32b446a409" })
              .end((err, res) => {
                  if(err) done(err);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Order was deleted successfully!');
                done();
              });
        });
    });
















