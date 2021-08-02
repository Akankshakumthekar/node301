module.exports = app =>{
    const review = require("../controller/review.controller.js");
    // const router = require("express").Router();

    app.post("/review/crete-review", review.create)

    // app.use("/api/review", router)

}