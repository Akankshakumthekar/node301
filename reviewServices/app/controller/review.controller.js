const db = require("../services");
const Review = db.Review;

exports.create = (req, res) =>{
    if(!req.body.review){
        res.status(400).send({message: "content can not be empty"});
        return;
    }

    const review = new Review({
        custId: req.body.custId,
        datetime: req.body.datetime,
        restaurentId: req.body.restaurentId,
        orderId: req.body.orderId,
        rating: req.body.rating,
        review: req.body.review
    })

    review.save(review).then(data =>{
        res.send(data)
        console.log("data", data)
    }).catch(err =>{
        console.log(err);  console.log(err)
        res.status(500).send({
            message:
            err.message || "error occure while creting review"
          
        })
    })
}