import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
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

export async function GET(req: any) {
  const payload = await req.json();
  console.log(req);
  
  const command = new GetObjectCommand({
    Bucket: "ecommerce0063",
    Key: payload.url,
  });
  const url = await getSignedUrl(s3Client, command);
  //   console.log("get signed url", url);
  return NextResponse.json({ url: url });
}

// export async function PUT(req: any) {
//   // const body = await req.text();
//   // const payload = JSON.parse(body);
//   const payload = await req.json();

//   const s3 = new S3({
//
//   });
//   console.log(payload,'payloadpayload');
//   const fileContent = createReadStream(payload);
//   console.log(fileContent,'file');
//   const params = {
//     Bucket: "ecommerce0063",
//     Key: `uploads/products/dvdsd.jpg`,
//     ContentType: 'image/jpeg',
//     Body: fileContent,
//   };
//   s3.upload(params, (err: any, data: any) => {
//     if (err) {
//       console.error("Error uploading file:", err);
//     } else {
//       console.log(`File uploaded successfully. ${data.Location}`);
//     }
//   });
//   return NextResponse.json({ message: "Success" });
// }

export async function PUT(req: any) {
  try {
    const formData = await req.formData();

    const file = formData.get("file");
    const filename = file.name.replace(/\.[^/.]+$/, "");
    const contentType = file.type;
    const fileExtn = file.name.split(".").pop();

    // Parse the formData but This file has no filePath --- if I have the filePath, the file could be upload anywhere.
    const command = new PutObjectCommand({
      Bucket: "ecommerce0063",
      Key: `uploads/products/${filename}-${Date.now()}.${fileExtn}`,
      ContentType: contentType,
      
    });
    const url = await getSignedUrl(s3Client, command, { expiresIn: 120 });
  
    // console.log(url);
    return NextResponse.json({ uploadUrl: url, message: "success" });
  
  } catch (err) {
    return NextResponse.json({ error: err });
  }
 
}