module.exports = app => {
    const customer = require("../controller/customer.controllers.js");
    app.post("/customer/create-customer", customer.createCustomer);  
  };