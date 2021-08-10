module.exports = app =>{
    const review = require("../controller/review.controller.js");

    app.post("/review/crete-review", review.create)
    app.get("/review/find-all-review", review.findAll);
    app.post("/review/find-review-by-id", review.findOne);
    app.put("/review/update-review", review.update);
    app.get("/review/aggregate-rating", review.findAggrigateRating);
    app.delete("/review/delete", review.delete);

}