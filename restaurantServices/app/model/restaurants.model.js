module.exports = mongoose => {
    const schema = mongoose.Schema(
      {
        name: String,
        phone: Number,
        location: Object,
        address: String,
        cuisine: [String],
        rating: Number
        },
        { timestamps: true }
      );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Restaurants = mongoose.model("Restaurant", schema);
    return Restaurants;
  }
