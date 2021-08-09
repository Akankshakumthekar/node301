const db = require("../model");
const Order = db.orders;

exports.create = (req, res) =>{
    if(!req.body.customerId){
        res.status(400).send({message: "content can not be empty"});
        return;
    }
      const order = new Order({
        customerId: req.body.customerId,
        restaurentId: req.body.restaurentId,
        itemName: req.body.itemName,
        qty: req.body.qty,
        price: req.body.price,
        amountToPay: req.body.qty * req.body.price,
        paid: req.body.paid
      }) ;
      order
    .save(order) 
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
    const customerId = req.params.customerId;
    Order.find(customerId)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found data " });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error while retrieving data" });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    
    Order.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found oder"});
        else res.send(data);
      })
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .send({ message: "Error retrieving order with id=" + id });
      });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.body.id;

  Order.findByIdAndUpdate(id, req.body)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update order with id=${id}. Maybe review was not found!`
        });
      } else res.send({ message: "Order was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating order with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.body.id;

  Order.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Order.`
        });
      } else {
        res.send({
          message: "Order was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Order" 
      });
    });
};