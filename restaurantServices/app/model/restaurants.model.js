module.exports = mongoose => {
    const schema = mongoose.Schema(
      {
        name: String,
        phone: Number,
        location: String,
        address: String,
        cuisine: Number,
        budget: String,
        menus: String
      }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Restaurants = mongoose.model("Restaurant", schema);
    return Restaurants;
  }