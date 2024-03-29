import {
    S3Client,
    GetObjectCommand,

  } from "@aws-sdk/client-s3";
  import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
  import { NextResponse } from "next/server";
  import {secret_access_key,access_key} from '../../apiComponents/db'

  const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
      accessKeyId: `${access_key}`,
      secretAccessKey: `${secret_access_key}`,
    },
  });
  
  export async function POST(req: any) {
    const payload = await req.json();
    // console.log(payload.thumbnail);
    
    const command = new GetObjectCommand({
      Bucket: "ecommerce0063",
      Key: payload.thumbnail,
    });
    const url = await getSignedUrl(s3Client, command);
    //   console.log("get signed url", url);
    return NextResponse.json({ url: url });
  }