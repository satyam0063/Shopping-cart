"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  // const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get("/api/uploadProduct")
      .then((res: any) => {
        setProducts(res.data.result);
        // setImages(res.data.preSignedUrl);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);
  const getImage = (path: string) => {
    const params = { url: path };
    let imgUri = "";
    axios
      .post("/api/viewFile", params)
      .then((res: any) => {
        console.log(res.data.url);
        imgUri = res.data.url;
      })
      .catch((err: any) => {
        console.log(err);
        return <></>;
      });
    return;
  };
  return (
    <div>
      {products &&
        products.length > 0 &&
        products.map((item: any, idx: number) => (
          <div key={idx}>
            <h2>{item.title}</h2>
            <h3>{item.brand}</h3>
            <p>{item.description}</p>
            <Image src={item.thumbnail} alt="noImage" height={200} width={200} priority/>
          </div>
        ))}
    </div>
  );
};

export default ViewProducts;
