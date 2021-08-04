module.exports = mongoose => {
    const schema = mongoose.Schema(
      {
        customerId: String,
        restaurentId: String,
        item: String,
        qty: Number,
        price: Number,
        amountToPay: Number,
        paid: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Order = mongoose.model("order", schema);
    return Order;
  }