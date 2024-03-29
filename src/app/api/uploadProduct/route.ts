import { connectionStr } from "@/app/apiComponents/db";
import { Product } from "@/app/apiComponents/models/product";
import axios from "axios";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  let dataWithsignedUrl = [];
  try {
    await mongoose.connect(connectionStr);
    data = await Product.find();
    dataWithsignedUrl = await Promise.all(
      data.map(async (item) => {
        const response = await axios.post(
          "https://shopping-cart-pied-two.vercel.app/api/viewFile",
          item
        ); // it coverts all thumbnail urls to pre-signed urls
        item.thumbnail = response.data.url;
        return item;
      })
    );
    return NextResponse.json({ result: dataWithsignedUrl,success:true });
  } catch (error) {
    data = [];
    return NextResponse.json({ success:false,message:error });
  }
}

export async function POST(req: any) {
  const payload = await req.json();
  console.log(payload, "payload");

  try {
    await mongoose.connect(connectionStr);
    let product = new Product(payload);
    const result = await product.save();
    return NextResponse.json({ success: true, result: result });
  } catch (error) {
    return NextResponse.json({ success:false,message:error });
  }
}
