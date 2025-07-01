// Gallery.jsx
import React from "react";
import "./Gallery.css";
import Navbar from "../Navbar/Navbar";
import LatestWork from "../LatestWork/LatestWork";

const photos = [
  "https://i.postimg.cc/1RV7QPWS/DSC00227.jpg",
  "https://i.postimg.cc/4dD5d78g/DSC02093.jpg",
  "https://i.postimg.cc/pLsJj10k/DSC07561-1.jpg",
  "https://i.postimg.cc/P5V1JvxR/DSC-4864-1.jpg",
  "https://i.postimg.cc/NG8TTzFT/DSC-4898-1.jpg",
  "https://i.postimg.cc/4x0hsC2C/DSC-7626-1.jpg",
  "https://i.postimg.cc/6qzyPF4m/DSC-7620-1.jpg",
];

const Gallery = () => {
  return (
    <>
      <LatestWork />
      <section className="gallery-section">
        <h2 className="gallery-heading">Gallery</h2>
        <div className="gallery-grid">
          {photos.map((url, index) => (
            <div className="gallery-item" key={index}>
              <img src={url} alt={`gallery-${index}`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
