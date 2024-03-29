import mongoose from "mongoose";

// const fileModel = new mongoose.Schema({
//   name: String,
//   path: String,
//   type: String,
// });

const productModel = new mongoose.Schema({
  // id: {
  //     type: Number,
  //     unique:true,
  // },
  brand: String,
  category: String,
  description: String,
  discountPercentage: String,
  price: String,
  rating: String,
  title: String,
  thumbnail: String,
  stock: String,
});
export const Product =
  mongoose.models.products || mongoose.model("products", productModel);
