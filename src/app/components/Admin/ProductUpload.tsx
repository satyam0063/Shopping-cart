"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductUpload = () => {
  const [filePath, setFilePath] = useState("");
  const [fileLoad, setFileLoad] = useState(false);

  const initialValues = {
    brand: "",
    category: "",
    description: "",
    discountPercentage: "0",
    price: "",
    rating: "",
    title: "",
    thumbnail: "",
    stock: "",
  };
  const validationSchema: any = Yup.object().shape({
    brand: Yup.string().required("Brand is a required field"),
    category: Yup.string().required("Category is a required field"),
    description: Yup.string().required("Description is a required field"),
    discountPercentage: Yup.string(),
    price: Yup.string().required("Pricr is a required field"),
    rating: Yup.string(),
    title: Yup.string().required("Title is a required field"),
    thumbnail: Yup.string().required("Please upload a image"),
    stock: Yup.string().required("Stock is a required field"),
  });
  const onFilechange = (e: any, setFieldValue: any) => {
    setFieldValue("thumbnail", e.target.value ?? "");

    if (e?.target?.value) {
      setFileLoad(true);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      const fileType = e.target.files[0].type;
      axios
        .put("/api/uploadFile", formData)
        .then((result: any) => {
          axios
            .put(`${result.data.uploadUrl}`, e.target.files[0], {
              headers: { "Content-Type": fileType },
            })
            .then((res: any) => {
              if (res.status === 200) {
                const path = result.data.uploadUrl
                  .split("?")[0]
                  .replace(
                    "https://ecommerce0063.s3.ap-south-1.amazonaws.com/",
                    ""
                  );
                setFilePath(path);
                setFileLoad(false);
              }
            })
            .catch((error: any) => {
              console.log(error, "e1");
              setFileLoad(false);
            });
        })
        .catch((error: any) => {
          console.log(error);
          setFileLoad(false);
        });
    }
  };
  const onSubmit = (values: any, { resetForm }: any) => {
    const params = { ...values, thumbnail: filePath };
    axios
      .post("/api/uploadProduct", params)
      .then((res: any) => {
        if (res.data.success) {
          resetForm();
          toast.success("Product uploaded successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        }
      })
      .catch((error: any) => {
        toast.error(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="flex justify-between items-baseline">
        <p className="font-barlow-condensed font-medium text-[28px]">
          Add a new product
        </p>
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          enableReinitialize
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
              <section className="mt-6">
                <h2 className="font-barlow-condensed font-medium text-[28px] mb-6">
                  Product Details
                </h2>
                <div className="flex mb-4">
                  <div className="w-full pr-1">
                    <input
                      type="text"
                      name="title"
                      placeholder="Title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                    />
                    {errors.title && touched.title && (
                      <span>{errors.title}</span>
                    )}
                  </div>
                  <div className="w-full pl-1">
                    <input
                      type="text"
                      name="brand"
                      placeholder="Brand"
                      value={values.brand}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                    />
                    {errors.brand && touched.brand && (
                      <span>{errors.brand}</span>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                  />
                  {errors.description && touched.description && (
                    <span>{errors.description}</span>
                  )}
                </div>

                <div className="flex mb-4">
                  <div className="w-full pr-1">
                    <input
                      type="text"
                      name="price"
                      placeholder="Price"
                      value={values.price}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                    />
                    {errors.price && touched.price && (
                      <span>{errors.price}</span>
                    )}
                  </div>
                  <div className="w-full pl-1">
                    <input
                      type="text"
                      name="category"
                      placeholder="Category"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                    />
                    {errors.category && touched.category && (
                      <span>{errors.category}</span>
                    )}
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-full pr-1">
                    <input
                      type="text"
                      name="stock"
                      placeholder="Stock"
                      value={values.stock}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                    />
                    {errors.stock && touched.stock && (
                      <span>{errors.stock}</span>
                    )}
                  </div>

                  <div className="w-full pr-1">
                    <input
                      type="text"
                      name="rating"
                      placeholder="rating"
                      value={values.rating}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                    />
                    {errors.rating && touched.rating && (
                      <span>{errors.rating}</span>
                    )}
                  </div>
                  <div className="w-full pr-1">
                    <input
                      type="text"
                      name="discountPercentage"
                      placeholder="Discount Percentage"
                      value={values.discountPercentage}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="border border-[#d5d5d5] w-full h-[50px] placeholder:pl-3 pl-3"
                    />
                    {errors.discountPercentage &&
                      touched.discountPercentage && (
                        <span>{errors.discountPercentage}</span>
                      )}
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="file"
                    name="thumbnail"
                    value={values.thumbnail}
                    onChange={(e) => onFilechange(e, setFieldValue)}
                    onBlur={handleBlur}
                    accept="image/png, image/jpeg"
                  />
                  {errors.thumbnail && touched.thumbnail && (
                    <span>{errors.thumbnail}</span>
                  )}
                </div>
              </section>
              <button
                type="submit"
                className="bg-[#54595f] text-[#fefefe] hover:bg-[#000] px-[20px] py-[10px] my-[5px] mt-4 text-[15px] font-sans font-medium rounded-md uppercase tracking-widest w-full"
                disabled={fileLoad}
              >
                Upload
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ProductUpload;
