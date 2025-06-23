// Gallery.jsx
import React from "react";
import "./Gallery.css";
import Navbar from "../Navbar/Navbar";
import LatestWork from "../LatestWork/LatestWork";

const photos = [
  "https://i.postimg.cc/sD0y0GHt/IMG-6156.jpg",
  "https://i.postimg.cc/fRtZ4W6k/IMG-6137.jpg",
  "https://i.postimg.cc/fRGsMnNC/IMG-4407.jpg",
  "https://i.postimg.cc/QMc3t4N3/IMG-4347.jpg",
  "https://i.postimg.cc/MTx8j7Xj/IMG-3642.jpg",
  "https://i.postimg.cc/vBzw7462/IMG-3479.jpg",
  "https://i.postimg.cc/zvGZxqCz/IMG-3647.jpg",
  "https://i.postimg.cc/gjt951sv/IMG-3639.jpg",
  "https://i.postimg.cc/sD1CSDfK/IMG-0809.jpg",
  "https://i.postimg.cc/MTzhGzr7/IMG-0921.jpg",

  "https://i.postimg.cc/brJWQ3Pd/IMG-9688.jpg",

  "https://i.postimg.cc/C5QtJkM7/IMG-9685.jpg",

  "https://i.postimg.cc/kM1kn3NS/IMG-9387.jpg",
  "https://i.postimg.cc/NjTV7K38/IMG-9262.jpg",
  "https://i.postimg.cc/YSzsZJqh/IMG-9258.jpg",

  "https://i.postimg.cc/xCj42tcg/IMG-9210.jpg",
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
