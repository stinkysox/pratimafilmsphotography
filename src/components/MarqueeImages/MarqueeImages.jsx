import React from "react";
import Marquee from "react-fast-marquee";
import "./MarqueeImages.css";

const MarqueeImages = () => {
  const categories = {
    "Right Images": [
      {
        imageUrl: "https://i.postimg.cc/k45R49DX/1-1.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/B6XDpDHG/2-1.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/kgg5WCW0/1-2.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/ZnLTysnY/LAST-PAGE.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/LXtSrQzk/11-1.jpg",
      },
    ],
    "Left Images": [
      {
        imageUrl: "https://i.postimg.cc/BbK6Lv3s/12-1.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/15pFvyn4/6-2.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/0yYL5K6x/6-3.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/t45Stgcm/DSC-5303.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/Sj0vkmkJ/7-1.jpg",
      },
    ],
  };

  const rightImages = categories["Right Images"];
  const leftImages = categories["Left Images"];

  // Generate empty placeholders if no images present
  const generateEmptyImages = (count = 5) =>
    Array.from({ length: count }, (_, i) => (
      <div key={`empty-${i}`} className="empty-img" />
    ));

  // Render images with lazy loading & descriptive alt text
  const renderImages = (imagesArray, direction) => {
    if (!imagesArray || imagesArray.length === 0) return generateEmptyImages();

    return imagesArray.map((imgObj, idx) => (
      <img
        key={`${direction}-${idx}`}
        className="marquee-img"
        src={imgObj.imageUrl}
        alt={`${direction === "right" ? "Right" : "Left"} Slide Image ${
          idx + 1
        }`}
        loading="lazy"
        draggable={false}
      />
    ));
  };

  return (
    <>
      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="right"
        >
          {renderImages(rightImages, "right")}
        </Marquee>
      </div>

      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="left"
        >
          {renderImages(leftImages, "left")}
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeImages;
