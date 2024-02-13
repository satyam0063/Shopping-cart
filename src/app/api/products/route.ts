import { NextResponse } from "next/server";

export async function GET(req:any) {
    const searchParams = req.nextUrl.searchParams;
    console.log(searchParams.get('id'));
    return NextResponse.json({msg:'sdf'})
}