module.exports = mongoose =>{
    const Review = mongoose.model(
        "review",
        mongoose.Schema(
            {
                    custId: String,
                    datetime: Date,
                    restaurentId: String,
                    orderId: String,
                    rating: Number,
                    review: String
                
            }
        )
    )
    return Review;
}