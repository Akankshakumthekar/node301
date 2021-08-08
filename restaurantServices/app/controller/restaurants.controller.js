const db = require("../model");
const Restaurant = db.restaurants;

exports.create = (req, res) =>{
    if(!req.body.name){
        res.status(400).send({message: "content can not be empty"});
        return;
    }
      const restaurant = new Restaurant({
        name: req.body.name,
        phone: req.body.phone,
        location: req.body.location,
        address: req.body.address,
        cuisine: req.body.cuisine,
        rating: req.body.rating
      }) ;
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

exports.serchRestaurant = (req, res) => {
    const id = req.body.id;
    const location = req.body.location;
    const name = req.body.name;
    const rating = req.body.rating;
    
    Restaurant.find({id} || {location} || {name} || {rating})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found restaurant with id " + id });
        else res.send(data);
      })
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .send({ message: "Error retrieving restaurant with id=" + id });
      });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.body.id;

  Restaurant.findByIdAndUpdate(id, req.body)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update restaurant.`
        });
      } else res.send({ message: "restaurant was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating restaurant with id=" + id
      });
    });
};