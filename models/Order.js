import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customerName: String,
    customerEmail: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
    productId: String,
    productTitle: String,
    productPrice: Number,
    productImage: String,

    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order ||
  mongoose.model("Order", OrderSchema);