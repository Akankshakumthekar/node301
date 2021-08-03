const db = require("../models");
const Restaurant = db.restaurants;

exports.create = (req, res) =>{
    if(!req.body.rating){
        res.status(400).send({message: "content can not be empty"});
        return;
    }

    const restaurant = new Restaurant ({
        name: req.body.name,
        phone: req.body.phone,
        location: req.body.location,
        address: req.body.address,
        cuisine: req.body.cuisine,
        budget: req.body.budget,
        menus: req.body.menus
    });

    restaurant
    .save(restaurant)
    .then(data =>{
        res.send(data)
    }).catch(err =>{
        res.status(500).send({
            message:
            err.message || "error occure while creting review"
          
        })
    })
}

exports.findAll = (req, res) => { 
    Restaurant.find()
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found data with" });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error while retrieving data" });
      });
};

exports.findOne = (req, res) => {
    const id = req.body.id;
  
    Restaurant.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found restaurant with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving restaurant with id=" + id });
      });
  };

