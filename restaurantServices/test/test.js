
let Restaurant = require('../app/model');
let app = require('../app.js');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET restaurant', () => {
    it('it should GET all the restaurant', (done) => {
        chai.request(app)
            .get('/restaurant/find-all-restaurant')
            .end((err, res) => {
                if (err) done(err);
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});


describe('/POST restaurant', () => {
    it('it should not POST a restaurant', (done) => {
        let restaurant = {
            id: "6108f2a804457a3f14d57c6e",
            name: "new- wood",
            phone: 7889897889,
            location: {
                "lat": "224342",
                "long": "432323"
            },
            address: " pune",
            cuisine: [
                "veg"
            ],
            menu: [
                {
                    "id": "111",
                    "name": "malvani fish",
                    "price": "500"
                }
            ],
            rating: 4
        }
        chai.request(app)
            .post('/restaurant/crete-restaurant')
            .send(
                restaurant
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

describe('/PUT restaurant', () => {
    it('it should UPDATE a restaurant given the id', (done) => {
        chai.request(app)
            .put('/restaurant/update-restaurant')
            .send({
                    id: "6108f2a804457a3f14d57c6e",
                    name: "new-wood",
                    phone: 7800897889,
                    location: {
                        lat: "224342",
                        long: "432323"
                    },
                    address: "mumbai",
                    cuisine: [
                        "non-veg"
                    ],
                    menu: [
                        {
                            id: "111",
                            name: "malvani fish",
                            price: "500"
                        }
                    ],
                    rating: 5
                })
            .end((err, res) => {
                if (err) {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Cannot update restaurant.');
                    done()
                }  else{
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('restaurant was updated successfully.');
                    done();
                }
            });
    });
});















