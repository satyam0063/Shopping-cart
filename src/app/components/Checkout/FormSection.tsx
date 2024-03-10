"use client";
import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/features/cartReducer";
const FormSection = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    companyName: "",
    country: "india",
    houseNumber: "",
    apartment: "",
    townCity: "",
    state: "",
    pinCode: "",
    phone: "",
    isShippingDifferent: false,
    firstNameShipping: "",
    lastNameShipping: "",
    companyNameShipping: "",
    countryShipping: "india",
    houseNumberShipping: "",
    apartmentShipping: "",
    townCityShipping: "",
    stateShipping: "",
    pinCodeShipping: "",
    phoneShipping: "",
  };
  const onSubmit = (values: any) => {
    console.log(values);
    dispatch(clearCart);
    router.push("/successful");
  };
  const validationSchema: any = Yup.object().shape({
    isShippingDifferent: Yup.boolean(),
    email: Yup.string().required("Email is a required field"),
    firstName: Yup.string().required("First name is a required field"),
    lastName: Yup.string().required("Last name is a required field"),
    companyName: Yup.string(),
    country: Yup.string().required("Country is a required field"),
    houseNumber: Yup.string(),
    apartment: Yup.string().required("Apartment is a required field"),
    townCity: Yup.string().required("Town/ City is a required field"),
    state: Yup.string().required("State is a required field"),
    pinCode: Yup.string().required("Pincode is a required field"),
    phone: Yup.string().required("Phone is a required field"),
    firstNameShipping: Yup.string().when(
      "isShippingDifferent",
      ([isShippingDifferent]) =>
        isShippingDifferent
          ? Yup.string().required("First name is a required field")
          : Yup.string()
    ),
    lastNameShipping: Yup.string().when(
      "isShippingDifferent",
      ([isShippingDifferent]) =>
        isShippingDifferent
          ? Yup.string().required("Last name is a required field")
          : Yup.string()
    ),
    companyNameShipping: Yup.string(),
    countryShipping: Yup.string().when(
      "isShippingDifferent",
      ([isShippingDifferent]) =>
        isShippingDifferent
          ? Yup.string().required("Country is a required field")
          : Yup.string()
    ),
    houseNumberShipping: Yup.string(),
    apartmentShipping: Yup.string().when(
      "isShippingDifferent",
      ([isShippingDifferent]) =>
        isShippingDifferent
          ? Yup.string().required("Apartment is a required field")
          : Yup.string()
    ),
    townCityShipping: Yup.string().when(
      "isShippingDifferent",
      ([isShippingDifferent]) =>
        isShippingDifferent
          ? Yup.string().required("Town/ City is a required field")
          : Yup.string()
    ),
    stateShipping: Yup.string().when(
      "isShippingDifferent",
      ([isShippingDifferent]) =>
        isShippingDifferent
          ? Yup.string().required("State is a required field")
          : Yup.string()
    ),
    pinCodeShipping: Yup.string().when(
      "isShippingDifferent",
      ([isShippingDifferent]) =>
        isShippingDifferent
          ? Yup.string().required("Pincode is a required field")
          : Yup.string()
    ),
    phoneShipping: Yup.string().when(
      "isShippingDifferent",
      ([isShippingDifferent]) =>
        isShippingDifferent
          ? Yup.string().required("Phone is a required field")
          : Yup.string()
    ),
  });
  return (
    <>
      <div className="flex justify-between items-end">
        <p className="font-barlow-condensed font-medium text-[28px]">
          Customer Information
        </p>
        <p className="font-sans font-semibold text-[18px] ">
          Already have an account? Log in
        </p>
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          enableReinitialize
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <section className="mt-6">
                <input
                  type="text"
                  name="email"
                  placeholder="Email address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                />
                {errors.email && touched.email && <span>{errors.email}</span>}
              </section>
              <section className="mt-6">
                <h2 className="font-barlow-condensed font-medium text-[28px] mb-6">
                  Billing Details
                </h2>
                <div className="flex mb-4">
                  <div className="w-full pr-1">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                    />
                    {errors.firstName && touched.firstName && (
                      <span>{errors.firstName}</span>
                    )}
                  </div>
                  <div className="w-full pl-1">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                    />
                    {errors.lastName && touched.lastName && (
                      <span>{errors.lastName}</span>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={values.companyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                  />
                  {errors.companyName && touched.companyName && (
                    <span>{errors.companyName}</span>
                  )}
                </div>
                <div className="mb-4">
                  <select
                    name="country"
                    className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                    value={values.country}
                    disabled
                  >
                    <option value="india">India</option>
                  </select>
                </div>
                <div className="flex mb-4">
                  <div className="w-full pr-1">
                    <input
                      type="text"
                      name="houseNumber"
                      placeholder="House number"
                      value={values.houseNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                    />
                    {errors.houseNumber && touched.houseNumber && (
                      <span>{errors.houseNumber}</span>
                    )}
                  </div>
                  <div className="w-full pl-1">
                    <input
                      type="text"
                      name="apartment"
                      placeholder="Apartment"
                      value={values.apartment}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                    />
                    {errors.apartment && touched.apartment && (
                      <span>{errors.apartment}</span>
                    )}
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-full pr-1">
                    <input
                      type="text"
                      name="townCity"
                      placeholder="Town / City"
                      value={values.townCity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                    />
                    {errors.townCity && touched.townCity && (
                      <span>{errors.townCity}</span>
                    )}
                  </div>
                  <div className="w-full pl-1 pr-1">
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={values.state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                    />
                    {errors.state && touched.state && (
                      <span>{errors.state}</span>
                    )}
                  </div>
                  <div className="w-full pl-1">
                    <input
                      type="text"
                      name="pinCode"
                      placeholder="PIN Code"
                      value={values.pinCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                    />
                    {errors.pinCode && touched.pinCode && (
                      <span>{errors.pinCode}</span>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                  />
                  {errors.phone && touched.phone && <span>{errors.phone}</span>}
                </div>
              </section>
              <section className="mt-6">
                <div className="flex items-center gap-x-4  mb-6">
                  <input
                    id="shippingDiff"
                    type="checkbox"
                    name="isShippingDifferent"
                    checked={values.isShippingDifferent}
                    onChange={handleChange}
                    className="h-4 w-4 relative top-[2px] accent-[#4f4f4f] bg-gray-100  rounded "
                  />
                  <label
                    htmlFor="shippingDiff"
                    className="font-barlow-condensed font-medium text-[28px] select-none"
                  >
                    Ship To A Different Address?
                  </label>
                </div>
                {values.isShippingDifferent && (
                  <>
                    <div className="flex mb-4">
                      <div className="w-full pr-1">
                        <input
                          type="text"
                          name="firstNameShipping"
                          placeholder="First name"
                          value={values.firstNameShipping}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                        />
                        {errors.firstNameShipping &&
                          touched.firstNameShipping && (
                            <span>{errors.firstNameShipping}</span>
                          )}
                      </div>
                      <div className="w-full pl-1">
                        <input
                          type="text"
                          name="lastNameShipping"
                          placeholder="Last name"
                          value={values.lastNameShipping}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                        />
                        {errors.lastNameShipping &&
                          touched.lastNameShipping && (
                            <span>{errors.lastNameShipping}</span>
                          )}
                      </div>
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="companyNameShipping"
                        placeholder="Company Name"
                        value={values.companyNameShipping}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                      />
                      {errors.companyNameShipping &&
                        touched.companyNameShipping && (
                          <span>{errors.companyNameShipping}</span>
                        )}
                    </div>
                    <div className="mb-4">
                      <select
                        name="countryShipping"
                        className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                        value={values.countryShipping}
                        disabled
                      >
                        <option value="india">India</option>
                      </select>
                    </div>
                    <div className="flex mb-4">
                      <div className="w-full pr-1">
                        <input
                          type="text"
                          name="houseNumberShipping"
                          placeholder="House number"
                          value={values.houseNumberShipping}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                        />
                        {errors.houseNumberShipping &&
                          touched.houseNumberShipping && (
                            <span>{errors.houseNumberShipping}</span>
                          )}
                      </div>
                      <div className="w-full pl-1">
                        <input
                          type="text"
                          name="apartmentShipping"
                          placeholder="Apartment"
                          value={values.apartmentShipping}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                        />
                        {errors.apartmentShipping &&
                          touched.apartmentShipping && (
                            <span>{errors.apartmentShipping}</span>
                          )}
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="w-full pr-1">
                        <input
                          type="text"
                          name="townCityShipping"
                          placeholder="Town / City"
                          value={values.townCityShipping}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                        />
                        {errors.townCityShipping &&
                          touched.townCityShipping && (
                            <span>{errors.townCityShipping}</span>
                          )}
                      </div>
                      <div className="w-full pl-1 pr-1">
                        <input
                          type="text"
                          name="stateShipping"
                          placeholder="State"
                          value={values.stateShipping}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                        />
                        {errors.stateShipping && touched.stateShipping && (
                          <span>{errors.stateShipping}</span>
                        )}
                      </div>
                      <div className="w-full pl-1">
                        <input
                          type="text"
                          name="pinCodeShipping"
                          placeholder="PIN Code"
                          value={values.pinCodeShipping}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                        />
                        {errors.pinCodeShipping && touched.pinCodeShipping && (
                          <span>{errors.pinCodeShipping}</span>
                        )}
                      </div>
                    </div>
                    <div className="mb-4">
                      <input
                        type="tel"
                        name="phoneShipping"
                        placeholder="Phone number"
                        value={values.phoneShipping}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                      />
                      {errors.phoneShipping && touched.phoneShipping && (
                        <span>{errors.phoneShipping}</span>
                      )}
                    </div>
                  </>
                )}
              </section>
              <button
                type="submit"
                className="bg-[#54595f] text-[#fefefe] hover:bg-[#000] px-[20px] py-[10px] my-[5px] mt-4 text-[15px] font-sans font-medium rounded-md uppercase tracking-widest w-full"
              >
                Place Order
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormSection;
