module.exports = app => {
    const customer = require("../controller/customer.controllers.js");
    app.post("/customer/create-customer", customer.createCustomer);  
    app.put("/customer/update-cstomer", customer.update);
    app.get("/customer/find-customer", customer.find);
  };