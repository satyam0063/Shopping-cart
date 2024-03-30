"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionLoader from "../UI/SectionLoader";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/uploadProduct")
      .then((res: any) => {
        setProducts(res.data.result);
      })
      .catch((err: any) => {
        toast.error(err, {
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
  }, []);
  return (
    <>
      <ToastContainer />
      {products && products.length === 0 && <div className="flex justify-center items-center h-full w-full"><SectionLoader /></div>}
      {products &&
        products.length > 0 &&
        products.map((item: any, idx: number) => (
          <div key={idx}>
            <h2>{item.title}</h2>
            <h3>{item.brand}</h3>
            <p>{item.description}</p>
            <Image
              src={item.thumbnail}
              alt="noImage"
              height={200}
              width={200}
              priority
            />
          </div>
        ))}
    </>
  );
};

export default ViewProducts;
