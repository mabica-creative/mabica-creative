// app/api/upload/route.ts

import { NextResponse } from "next/server";
import { cloudinary } from "@/lib/utils/cloudinary";

export async function POST(req: Request) {
  try {
    // Log incoming request
    console.log("Received request for file upload.");

    const formData = await req.formData();
    const image = formData.get("image") as File;

    // Check if the image exists in formData
    if (!image) {
      console.error("No image provided");
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    console.log("Uploading image:", image.name);

    const arrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const uploadResult: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            reject(error);
            return;
          }
          console.log("Cloudinary upload successful:", result);
          resolve(result);
        })
        .end(buffer);
    });

    return NextResponse.json({ url: uploadResult?.url }, { status: 200 });
  } catch (error) {
    console.error("Error in upload route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
