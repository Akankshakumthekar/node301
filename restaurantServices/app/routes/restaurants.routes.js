module.exports = app =>{
    const restaurant = require("../controller/restaurants.controller.js");

    app.post("/restaurant/crete-restaurant", restaurant.create)
    app.get("/restaurant/find-all-restaurant", restaurant.findAll);
    app.get("/restaurant/search", restaurant.serchRestaurant);
    app.put("/restaurant/update-restaurant", restaurant.update);
    app.delete("/restaurant/delete", restaurant.delete);

}