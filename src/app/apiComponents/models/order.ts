import mongoose from "mongoose";


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
})
export const Order = mongoose.models.orders || mongoose.model("orders",orderModel);