import Image from "next/image";
import React from "react";

const ImageViewer = () => {
  return (
    <div>
      <Image
        src="/static/images/sports-shoe5-400x400.jpg"
        alt=""
        height={1200}
        width={1200}
      />
    </div>
  );
};

export default ImageViewer;
