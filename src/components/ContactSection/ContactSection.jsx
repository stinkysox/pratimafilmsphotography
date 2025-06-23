import React from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./ContactSection.css";

const ContactSection = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/form");
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">
        Let’s talk about your <br /> event!
      </h2>

      <button className="book-now-btn" onClick={handleBookNow}>
        Book Now
      </button>

      <div className="icon-grid">
        <a href="mailto:thechitras@gmail.com" className="icon-btn email">
          <MdEmail size={30} />
        </a>
        <a
          href="https://youtube.com/@pratimafilmsphotography?si=X7k9qCNl6ywdhZcE"
          className="icon-btn youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={30} />
        </a>
        <a
          href="https://www.instagram.com/pratimafilmsphotography?utm_source=qr&igsh=MW1iZWhndGg5YW5oaQ=="
          className="icon-btn instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://wa.me/919937823058"
          className="icon-btn whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} />
        </a>
      </div>

      <p className="contact-text">+91 99378 23058</p>

      <div className="map-container">
        <iframe
          title="Pratima Films & Photography Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29927.60331924665!2d85.8175094!3d20.2635474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a70068ffd0d7%3A0x511f0f1505958f33!2sPratima%20films%20%26%20photography!5e0!3m2!1sen!2sin!4v1719123456789!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "12px", marginTop: "30px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
