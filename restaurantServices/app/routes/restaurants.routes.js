module.exports = app =>{
    const restaurant = require("../controller/restaurants.controller.js");

    app.post("/restaurant/crete-restaurant", restaurant.create)
    app.get("/restaurant/find-all-restaurant", restaurant.findAll);
    app.get("/restaurant/find-restaurant-by-id", restaurant.findOne);

}