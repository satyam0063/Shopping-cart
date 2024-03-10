import mongoose from "mongoose";
const productModel = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: Array,
  quantity: Number,
});
export const Product =
  mongoose.models.products || mongoose.model("products", productModel);

const orderModel = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  companyName: String,
  country: String,
  houseNumber: String,
  apartment: String,
  townCity: String,
  state: String,
  pinCode: String,
  phone: String,
  isShippingDifferent: Boolean,
  firstNameShipping: String,
  lastNameShipping: String,
  companyNameShipping: String,
  countryShipping: String,
  houseNumberShipping: String,
  apartmentShipping: String,
  townCityShipping: String,
  stateShipping: String,
  pinCodeShipping: String,
  phoneShipping: String,
  products: [productModel],
});
export const Order =
  mongoose.models.orders || mongoose.model("orders", orderModel);
