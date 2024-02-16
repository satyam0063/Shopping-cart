"use client";
import Image from "next/image";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import ReactImageZoom from 'react-image-zoom';

const ImageViewer = () => {
  const [showFullImage, setshowFullImage] = useState(false);
  const [styleOnZoom, setStyleOnZoom] = useState({
    backgroundImage: `url(/static/images/sports-shoe5.jpg)`,
    backgroundPosition: "0% 0%",
  } as any);
  const handleMouseMove = (e: any) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setStyleOnZoom({
      backgroundImage: `url(/static/images/sports-shoe5.jpg)`,
      backgroundPosition: `${x}% ${y}%`,
    });
  };
  return (
    <div>
      <div
        onMouseMove={handleMouseMove}
        className="img-wrapper"
        style={styleOnZoom}
      >
        <Image
          src="/static/images/sports-shoe5.jpg"
          alt=""
          height={1200}
          width={1200}
          className="hover-zoom"
          onClick={() => setshowFullImage(true)}
        />
      </div>
      <Lightbox
        open={showFullImage}
        close={() => setshowFullImage(false)}
        slides={[{ src: "/static/images/sports-shoe5.jpg" }]}
        plugins={[Fullscreen, Zoom]}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .7)" } }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </div>
  );
};

export default ImageViewer;
