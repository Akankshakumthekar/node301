// module.exports = mongoose =>{
//     const Review = mongoose.model(
//         "review",
//         mongoose.Schema(
//             {
//                     custId: String,
//                     datetime: Date,
//                     restaurentId: String,
//                     orderId: String,
//                     rating: Number,
//                     review: String
                
//             },
//                 {timestamps: true}
            
//         )
//     )
//     return Review;
// }

module.exports = mongoose => {
    const schema = mongoose.Schema(
      {
        custId: String,
        datetime: Date,
        restaurentId: String,
        orderId: String,
        rating: Number,
        review: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Review = mongoose.model("review", schema);
    return Review;
  }