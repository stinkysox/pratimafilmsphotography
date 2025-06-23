import React, { useState } from "react";
import "./Navbar.css";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
  };

  return (
    <>
      <section className="navbar">
        <div className="navbar-one">
          <motion.img
            src="https://i.postimg.cc/76RXVK2D/Pratima-films-Logo-Moc.jpg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="navbar-logo"
          />
        </div>

        {/* Desktop Social icons */}
        <div className="navbar-socials desktop-socials">
          <motion.div
            className="nav-social-media-icon instagram"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{
              rotate: [0, -10, 10, -10, 10, 0],
              transition: { duration: 0.4 },
            }}
          >
            <a
              href="https://www.instagram.com/thechitras?igsh=MXRsMTgxaHQ0OXEwYg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram />
            </a>
          </motion.div>

          <motion.div
            className="nav-social-media-icon facebook"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{
              rotate: [0, -10, 10, -10, 10, 0],
              transition: { duration: 0.4 },
            }}
          >
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </motion.div>
        </div>

        {/* Hamburger Menu */}
        <motion.button
          className="menu-toggle"
          onClick={toggleMenu}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaBars />
        </motion.button>
      </section>

      {/* Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Sliding Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="sliding-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          >
            <div className="menu-header">
              <motion.img
                src="https://i.postimg.cc/76RXVK2D/Pratima-films-Logo-Moc.jpg"
                className="menu-logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              />
              <motion.button
                className="close-btn"
                onClick={closeMenu}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
            </div>

            <div className="menu-content">
              <motion.div
                className="menu-links"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <motion.a
                  className="menu-link"
                  whileHover={{ x: 10, color: "#d4926a" }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleNavigation("/")}
                >
                  Home
                </motion.a>
                <motion.a
                  className="menu-link"
                  whileHover={{ x: 10, color: "#d4926a" }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleNavigation("/services")}
                >
                  Services
                </motion.a>
                <motion.a
                  className="menu-link"
                  whileHover={{ x: 10, color: "#d4926a" }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleNavigation("/gallery")}
                >
                  Gallery
                </motion.a>
                <motion.a
                  className="menu-link"
                  whileHover={{ x: 10, color: "#d4926a" }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleNavigation("/teasers")}
                >
                  Films
                </motion.a>

                <motion.a
                  className="menu-link"
                  whileHover={{ x: 10, color: "#d4926a" }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleNavigation("/testimonials")}
                >
                  Testimonials
                </motion.a>
                <motion.a
                  className="menu-link"
                  whileHover={{ x: 10, color: "#d4926a" }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleNavigation("/pricing")}
                >
                  Prices
                </motion.a>

                <motion.a
                  className="menu-link"
                  whileHover={{ x: 10, color: "#d4926a" }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleNavigation("/contact")}
                >
                  Contact
                </motion.a>
              </motion.div>

              <motion.div
                className="menu-tagline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <p>
                  Capturing the little beautiful tokens of love through lens
                </p>
              </motion.div>

              <motion.div
                className="menu-socials"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <motion.a
                  href="https://www.instagram.com/pratimafilmsphotography?utm_source=qr&igsh=MW1iZWhndGg5YW5oaQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    rotate: [0, -10, 10, -10, 10, 0],
                    scale: 1.2,
                    color: "#e1306c",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <IoLogoInstagram />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/share/1Bykd5mQym/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    rotate: [0, -10, 10, -10, 10, 0],
                    scale: 1.2,
                    color: "#1877f2",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <FaFacebookF />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
