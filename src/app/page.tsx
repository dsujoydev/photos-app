"use client";
import { useState } from "react";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";

type UploadResult = {
  info: {
    public_id: string;
  };
  // event: string;
};

export default function Home() {
  const [publicID, setPublicID] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: any) => {
          setPublicID(result.info.public_id);
        }}
        uploadPreset="kazykc3u"
      />

      {publicID && <CldImage width="960" height="600" src={publicID} sizes="100vw" alt="Description of my image" />}
    </main>
  );
}
