module.exports = app =>{
    const order = require("../controller/order.controller.js");

    app.post("/order/crete-order", order.create)
    app.post("/order/find-order-by-customerId", order.findAll);
    app.post("/order/find-order-by-id", order.findOne);
    app.put("/order/update-order", order.update);
    app.delete("/order/delete", order.delete);

}