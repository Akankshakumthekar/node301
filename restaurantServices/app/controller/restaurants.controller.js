const db = require("../model");
const Restaurant = db.restaurants;
const logger = require('../../utils/logger.js')

exports.create = (req, res) =>{
    if(!req.body.name){
      logger.error('body content is empty');
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
      logger.error(err);
        res.status(500).send({
            message:
            err.message || "error occure while creting review"
          
        })
    })
}

exports.findAll = (req, res) => { 
    Restaurant.find()
      .then(data => {
        if (!data){
          logger.error('data not found')
          res.status(404).send({ message: "Not found data" });
        } else res.send(data);
      })
      .catch(err => {
        logger.error(err);
        res
          .status(500)
          .send({ message: "Error while retrieving data" });
      });
};

exports.serchRestaurant = (req, res) => {
    const name = req.body.name;
    const location = req.body.location;
    const rating = req.body.rating;
    Restaurant.find({ $or: [ {name: name}, {location: location}, {rating: rating}]})
      .then(data => {
        if (!data){
          logger.error('restaurant not found ')
          res.status(404).send({ message: "Not found restaurant"  });
        } else {
          res.send(data);
        }
      })
      .catch(err => {
        logger.error(err)
        res
          .status(500)
          .send({ message: "Error retrieving restaurant "});
      });
};

exports.update = (req, res) => {
  if (!req.body) {
    logger.error('data to be updated not be empty')
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.body.id;

  Restaurant.findByIdAndUpdate(id, req.body)
    .then(data => {
      if (!data) {
        logger.error('restaurant not updated')
        res.status(404).send({
          message: `Cannot update restaurant.`
        });
      } else res.send({ message: "restaurant was updated successfully." });
    })
    .catch(err => {
      logger.error(err)
      res.status(500).send({
        message: "Error updating restaurant with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.body.id;

  Restaurant.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        logger.error('restaurant not deleted')
        res.status(404).send({
          message: `Cannot delete Restaurant.`
        });
      } else {
        res.send({
          message: "Restaurant was deleted successfully!"
        });
      }
    })
    .catch(err => {
      logger.error(err)
      res.status(500).send({
        message: "Could not delete Restaurant" 
      });
    });
};