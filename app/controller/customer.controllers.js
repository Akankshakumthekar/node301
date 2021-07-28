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
        // if (err.kind === "duplicate_record") {
        //   res.status(404).send({
        //     data:{
        //       success: false, 
        //       message: "Record already found"
        //     }
        //   });
        // } else {
          res.status(500).send({
            data:{
              success: false, 
            message:
              err.message || "Some error occurred while creating the customer."
            }
          });
        // }
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

exports.update = (req, res) => {
  Customer.updateCustomer(req.body.name, req.body.gender, req.body.city, req.body.phone, req.body.email, req.body.address, req.body.id, (err, data) => {
    if(err){
      if(err.kind === "not_found"){
        res.status(404).send({
          data: {
            success: false,
            message:`not found customer with id ${req.body.id}.`
          }
        })
      } else {
        res.status(500).send({
          data: {
            success: false,
            message: "something is incorrect"
          }
        })
      }
    } else{
      res.send({
        data:{
          success: true,
          data: data
        }
      })
    }
  })
}

exports.find = (req, res) =>{
  Customer.findCustomer(req.query.customerId, (err, data) =>{
    if(err) {
      if(err.kind === "not_found"){
        res.status(404).send({
          data:{
            success : false,
            message:`customer not found`
          }
        })
      } else{
        res.status(500).send({
          data:{
            success: false,
            message: "something is incorect"
          }
        })
      }
    } else{
      res.send({
        data:{
          success: true,
          data: data
        }
      })
    }
  })
}

exports. remove = (req, res) => {
  Customer.removeCustomer(req.body.customerId,(err, data) => {
    if(err){
      if(err.kind === "not_found") {
        res.status(404).send({
          data:{
            success: false,
            message: `Customer not found with ${req.body.customerId}.`
          }
        })
      } else {
        res.status(500).send({
          data:{
            success: false,
            message:"Customer not deleted with Id" +req.body.customerId
          }   
        })
      }
    } else {
      res.send({
        data:{
          success: true,
          message: `Customer deleted successfullt!`
        }
      })
    }
  })
}

exports.customerLogin= (req, res)=>{
  Customer.findEmailandPassword(req.body.email, req.body.password, (err, data)=>{
    if(err){
      if(err.kinf === "not_found") {
        res.status(404).send({
          data:{
            success: false,
            message: `customer data not found with email and password`
          }
        })
      } else if( err.kind === "incorrect_password"){
        res.status(404). send({
          data:{
            success: false,
            messgae: ` password is incorrect`
          }
        })
      } else {
        res.status(500).send({
          data:{
            success: false,
            messgae: `something is incorrect`
          }
        })
      }
   
    } else{
      res.send({
        data:{
          success: true,
          data: data
        }
      })
    }
  }) 
}