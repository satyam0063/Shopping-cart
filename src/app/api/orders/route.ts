import { connectionStr } from "@/app/apiComponents/db";
import { Order } from "@/app/apiComponents/models/order";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  // const searchParams = req.nextUrl.searchParams;
  // console.log(searchParams.get('id'));
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    data = await Order.find();
  } catch (error) {
    data = [{ success: false }];
  }

  return NextResponse.json({ result: data });
}

export async function POST(req: any) {
  const payload = await req.json();
  try {
      
      await mongoose.connect(connectionStr);
      let order = new Order(payload);
    const result = await order.save();
    return NextResponse.json({ result: result, success: true });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
