import React from "react";
import "./TeasersSection.css";
import { FaYoutube } from "react-icons/fa";

const TeasersSection = () => {
  // Dummy embedded YouTube video URLs
  const videos = [
    "https://www.youtube.com/embed/iEn7HvlN7lM",
    "https://www.youtube.com/embed/tj2T-tU1uZs",
    "https://www.youtube.com/embed/0OVHer5zgMI",
    "https://www.youtube.com/embed/096IJ80J8rY",
    "https://www.youtube.com/embed/wzeu_rFC0C4",
    "https://www.youtube.com/embed/IUMXe5dM0jM",
    "https://www.youtube.com/embed/f6B8tGrZIow",
    "https://www.youtube.com/embed/QZDAzqAdjyM",
    "https://www.youtube.com/embed/4sMzRarcPxY",
  ];

  return (
    <div className="teasers-section">
      <h2>Teasers</h2>

      {videos.length === 0 ? (
        <p>No videos to show</p>
      ) : (
        <div className="video-grid">
          {videos.map((src, index) => (
            <div className="video-container" key={index}>
              <iframe
                src={src}
                title={`Teaser ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}

      <div className="youtube-icon">
        <a
          href="https://www.youtube.com/@pratimafilmsphotography"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="glow-youtube" />
        </a>
      </div>
    </div>
  );
};

export default TeasersSection;
