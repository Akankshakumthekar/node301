const Customer = require("../services/customer.services.js");
exports.createCustomer = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
 
    Customer.createCustomer(req.body.name, req.body.gender, req.body.city, req.body.phone, req.body.email, req.body.address, req.body.password, (err, data) => {
      if (err) {
        if (err.kind === "duplicate_record") {
          res.status(404).send({
            data:{
              success: false, 
              message: "Record already found"
            }
          });
        } else {
          res.status(500).send({
            data:{
              success: false, 
            message:
              err.message || "Some error occurred while creating the customer."
            }
          });
        }
      } else {
        res.send({
          data: {
          success: true,
          data: data
          }
        });
      }
    });
  };