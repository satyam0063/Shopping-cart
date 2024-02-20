"use client";
import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { StarIcon } from "@heroicons/react/20/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

const Reviews = (props:any) => {
  const initialValues = { review: "", name: "", email: "", rating: "" };
  const onSubmit = (values: any) => {
    console.log(values);
  };
  const validationSchema = Yup.object().shape({
    rating: Yup.string().required("Rating is required"),
    review: Yup.string().required("Review is a required field"),
    name: Yup.string().required("Name is a required field"),
    email: Yup.string().required("Email is a required field"),
  });
  return (
    <div className="border border-[#d5d5d5] p-5">
      <div>
        <h2 className="text-[#4f4f4f] text-[1.34rem] font-sans font-normal leading-[1.3]">
          Be the first to review “{props.product.title}”
        </h2>
        <p className="text-[#4f4f4f] leading-[2]">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({
            values,
            handleChange,
            handleBlur,
            errors,
            touched,
            setFieldValue,
          }) => (
            <Form>
              <div className="flex items-center mt-4">
                <h2>Your Rating *</h2>
                <div className="flex pl-4">
                  {[...Array(5)].map((_, index) => (
                    <label
                      key={index}
                      htmlFor={`star${index + 1}`}
                      className=" cursor-pointer"
                    >
                      <input
                        type="radio"
                        id={`star${index + 1}`}
                        name="rating"
                        value={index + 1}
                        className="hidden"
                        onChange={handleChange}
                        checked={parseInt(values.rating) === index + 1}
                      />
                      {index < parseInt(values.rating) ? (
                        <StarIcon className="h-5 w-5" />
                      ) : (
                        <StarOutline className="h-5 w-5" />
                      )}
                    </label>
                  ))}
                </div>
                {errors.rating && touched.rating && (
                  <span className="ml-5">{errors.rating}</span>
                )}
              </div>
              <div className="mt-4">
                <h2>Your review *</h2>
                <textarea
                  name="review"
                  value={values.review}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id=""
                  rows={4}
                  className="border border-[#d5d5d5] w-full"
                />
                {errors.review && touched.review && (
                  <span>{errors.review}</span>
                )}
              </div>
              <div className="flex mt-4">
                <div className="w-full sm-w-1/2 pr-1">
                  <h2>Name *</h2>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border border-[#d5d5d5] w-full"
                  />
                  {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className="w-full sm-w-1/2 pl-2">
                  <h2>Email *</h2>
                  <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border border-[#d5d5d5] w-full"
                  />
                  {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#54595f] text-[#fefefe] hover:bg-[#000] px-[20px] py-[10px] my-[5px] mt-4 text-[15px] font-sans font-medium rounded-md uppercase tracking-widest"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Reviews;
