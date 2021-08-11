
let Review = require('../app/models');
let app = require('../app.js');
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
// let server = require('../server.js');
let should = chai.should();

chai.use(chaiHttp);

// describe('review', () => {
//     beforeEach((done) => {
//         Review.remove({}, (err) => {
//            done();
//         });
//     });
// });

describe('/GET review', () => {
    it('it should GET all the review', (done) => {
        chai.request(app)
            .get('/review/find-all-review')
            .end((err, res) => {
                if (err) done(err);
                res.should.have.status(200);
                done();
            });
    });
});

describe('/GET review ', () => {
    it('it should GET review with id', (done) => {
        chai.request(app)
            .post('/review/find-review-by-id')
            .send({ id: "610ffe2aa3508748ccccd61d" })
            .end((err, res) => {
                if (err) {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('message').eql(' Id is missing');
                    done(err);
                } else {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('review');
                }
                done();
            });
    });
});

describe('/POST review', () => {
    it('it should not POST a review', (done) => {
        let review = {
            custId: "12A",
            datetime: "2021-02-02",
            restaurentId: "PPPP",
            orderId: "123",
            rating: "5",
            review: "good"
        }
        chai.request(app)
            .post('/review/crete-review')
            .send(
                review
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

describe('/PUT review', () => {
    it('it should UPDATE a review given the id', (done) => {
        chai.request(app)
            .put('/review/update-review')
            .send({
                id: "610ffe2aa3508748ccccd61d",
                custId: "12A",
                datetime: "2021-02-02",
                restaurentId: "PPPP",
                orderId: "123",
                rating: "5",
                review: "good"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Review was updated successfully.');
                done();
            });
    });
});

describe('/DELETE review', () => {
    it('it should DELETE a review ', (done) => {        
              chai.request(app)
              .delete('/review/delete' )
              .send({ id: "610ffe9148bea81cc8e5b94b" })
              .end((err, res) => {
                  if(err) done(err);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Review was deleted successfully!');
                done();
              });
        });
});