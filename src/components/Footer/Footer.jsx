import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo + Tagline */}
        <div className="footer-brand">
          <img
            src="https://i.postimg.cc/76RXVK2D/Pratima-films-Logo-Moc.jpg"
            alt="Photography Logo"
            className="footer-logo"
          />
          <p className="footer-tagline">
            Capturing the Little beautiful tokens of love through lens
          </p>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/pratimafilmsphotography?utm_source=qr&igsh=MW1iZWhndGg5YW5oaQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/1Bykd5mQym/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://wa.me/+919937823058"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Pratima Films and Photography. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
