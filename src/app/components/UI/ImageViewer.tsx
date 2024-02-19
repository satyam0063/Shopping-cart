"use client";
import Image from "next/image";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import ReactImageZoom from 'react-image-zoom';

const ImageViewer = (props: any) => {
  const [showFullImage, setshowFullImage] = useState(false);
  const [styleOnZoom, setStyleOnZoom] = useState({
    backgroundImage: `url(/static/images/sports-shoe5.jpg)`,
    backgroundPosition: "0% 0%",
  } as any);
  const handleMouseMove = (e: any) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y =
      ((e.pageY - top) / height) * 100 < 100
        ? ((e.pageY - top) / height) * 100
        : 100;
    setStyleOnZoom({
      backgroundImage: `url(/static/images/sports-shoe5.jpg)`,
      backgroundPosition: `${x}% ${y}%`,
    });
  };
  return (
    <div className="">
      <div className="img-wrapper bg-no-repeat" style={styleOnZoom}>
        <span
          className="text-[#54595f] bg-[#fefefe] hover:bg-[#f5f5f5] absolute top-0 right-0 left-auto rounded-full min-h-[3em] min-w-[3em] leading-[3em] text-center px-[2px] text-[0.8em] mt-[1em] mr-[1em] flex justify-center items-center z-30"
          onClick={() => setshowFullImage(true)}
        >
          <Image
            src="/static/images/magnifying-glass.svg"
            alt=""
            height={20}
            width={20}
          />
        </span>
        <Image
          src="/static/images/sports-shoe5.jpg"
          alt=""
          height={1200}
          width={1200}
          className="hover-zoom hover:opacity-0"
          onMouseMove={handleMouseMove}
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
