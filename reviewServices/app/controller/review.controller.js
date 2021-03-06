const db = require("../models");
const Review = db.reviews;
const publisher = require("../../publisher.js");
const logger = require('../../utils/logger.js');


exports.create = (req, res) =>{
    if(!req.body.rating){
      logger.error('review body can not be empty')
        res.status(400).send({message: "content can not be empty"});
        return;
    }

    const review = new Review ({
        custId: req.body.custId,
        datetime: req.body.datetime,
        restaurentId: req.body.restaurentId,
        orderId: req.body.orderId,
        rating: req.body.rating,
        review: req.body.review
    });

    review
    .save(review)
    .then(data =>{
      publisher.publishToQueue("new-rating", JSON.stringify(review));
        res.send(data)

    }).catch(err =>{
      logger.error(err)
        res.status(500).send({ 
            message:
            err.message || "error occure while creting review"
          
        })
    })
}

exports.findAll = (req, res) => { 

    Review.find()
      .then(data => {
        if (!data){
          logger.error('data not found')
          res.status(404).send({ message: "Not found data with" });
        } else{
           res.send(data);
        }
      })
      .catch(err => {
        logger.error(err)
        res
          .status(500)
          .send({ message: "Error while retrieving data with restarent Id" });
      });
};

exports.findOne = (req, res) => {
    const id =  req.body.id;
    Review.findById(id) 
      .then(data => {
        if (!data){
          logger.error("Not found review with id " + id )
          res.status(404).send({ message: "Not found review with id " + id });
        } else res.send(data);
      })
      .catch(err => {
        logger.error(err)
        res
          .status(500)
          .send({ message: "Error retrieving review with id=" + id });
      });
  };

  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.body.id;
  
    Review.findByIdAndUpdate(id, req.body)
      .then(data => {
        if (!data) {
          logger.error('Cannot update review with id=${id}. Maybe review was not found!')
          res.status(404).send({
            message: `Cannot update review with id=${id}. Maybe review was not found!`
          });
        } else res.send({ message: "Review was updated successfully." });
      })
      .catch(err => {
        logger.error(err)
        res.status(500).send({
          message: "Error updating review with id=" + id
        });
      });
  };

  exports.findAggrigateRating = (req, res) => { 
    Review.aggregate([{$group: {_id:"$restaurentId", avgRating: {$avg:"$rating"} } }])
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found data with" });
        else{
          console.log(data);
           res.send(data);
        }
      })
      .catch(err => { 
        res
          .status(500)
          .send({ message: "Error while retrieving data with restarent Id" });
      });
};

exports.delete = (req, res) => {
  const id = req.body.id;

  Review.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        logger.error('review not deleted')
        res.status(404).send({
          message: `Cannot delete Review.`
        });
      } else {
        res.send({
          message: "Review was deleted successfully!"
        });
      }
    })
    .catch(err => {
      logger.error(err)
      res.status(500).send({
        message: "Could not delete Review" 
      });
    });
};