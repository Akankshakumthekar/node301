module.exports = app => {
    const customer = require("../controller/customer.controllers.js");
    const token = require("../controller/token.controller.js");
    app.post("/customer/create-customer", token.verifyToken, customer.createCustomer);  
    app.put("/customer/update-customer", token.verifyToken, customer.update);
    app.get("/customer/find-customer", token.verifyToken, customer.find);
    app.delete("/customer/delete-cutomer", token.verifyToken, customer.remove);
    app.post("/customer/login", token.verifyToken, customer.customerLogin);
  };