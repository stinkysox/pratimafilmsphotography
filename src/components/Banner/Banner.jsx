import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate("/form");
  };

  const handleLearnMoreClick = () => {
    navigate("/services");
  };

  return (
    <div className="banner-wrapper">
      <div className="banner">
        <p className="banner-text">
          Pratima Films and Photography has been capturing timeless wedding
          memories since 2017. We specialize in documenting heartfelt moments —
          from intimate glances to grand celebrations — with authenticity and
          creativity. Our passionate team is dedicated to telling each couple’s
          unique love story through beautifully crafted visuals. At Pratima
          Films and Photography, we don’t just take pictures — we create lasting
          memories you'll cherish forever.
        </p>

        {/* Instagram logo */}
        <a
          href="https://www.instagram.com/pratimafilmsphotography?utm_source=qr&igsh=MW1iZWhndGg5YW5oaQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className="instagram-icon"
          />
        </a>
      </div>

      <div className="photo-college-one">
        <div className="top-image">
          <img
            src="https://i.postimg.cc/ZncQL84L/5-1.jpg"
            alt="Top wedding photo"
          />
        </div>
        <div className="bottom-images">
          <img
            src="https://i.postimg.cc/sDKP4VZy/1-3.jpg"
            alt="Left bridal portrait"
          />
          <img
            src="https://i.postimg.cc/YS7m5ZF8/3-2.jpg"
            alt="Right bridal moment"
          />
        </div>
        <div className="banner-button-container">
          <button onClick={handleBookNowClick}>Book Now</button>
          <button onClick={handleLearnMoreClick}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
