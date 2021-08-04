module.exports = app =>{
    const order = require("../controller/order.controller.js");

    app.post("/order/crete-order", order.create)
    app.get("/order/find-order-by-customerId", order.findAll);
    app.get("/order/find-order-by-id", order.findOne);
    app.put("/order/update-order", order.update);

}