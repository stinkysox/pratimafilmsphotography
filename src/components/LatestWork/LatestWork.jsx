import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import "./LatestWork.css";

// Animation configurations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const initialCategories = {
  Wedding: [
    { imageUrl: "https://i.postimg.cc/qqsTFrPs/DSC3723.jpg" },
    {
      imageUrl: "https://i.postimg.cc/prYwZZjk/1-4.jpg",
    },
    { imageUrl: "https://i.postimg.cc/K8yK4vc2/A7404592.jpg" },
    { imageUrl: "https://i.postimg.cc/hj9P7NS5/A7405202.jpg" },
    { imageUrl: "https://i.postimg.cc/RZyMpvhY/A7405219.jpg" },
    { imageUrl: "https://i.postimg.cc/gc8Nns3L/DSC02897dd.jpg" },
    { imageUrl: "https://i.postimg.cc/G3ghTPrr/DSC08144.jpg" },
    { imageUrl: "https://i.postimg.cc/kgQmsWr2/DSC08130.jpg" },
  ],
  Prewedding: [
    { imageUrl: "https://i.postimg.cc/MpXLMx99/0O8A2935.jpg" },
    { imageUrl: "https://i.postimg.cc/cC4mpMjF/0O8A2964.jpg" },
    { imageUrl: "https://i.postimg.cc/nh7vwPrH/8-3.jpg" },
    { imageUrl: "https://i.postimg.cc/qqwJ1n6c/DSC-5670.jpg" },
    { imageUrl: "https://i.postimg.cc/qR0HWqT1/DSC04764.jpg" },
    { imageUrl: "https://i.postimg.cc/vZfQKpnH/DSC-6691.jpg" },

    { imageUrl: "https://i.postimg.cc/TYSwFVHQ/DSC-5194.jpg" },
    { imageUrl: "https://i.postimg.cc/B6V9bgFV/DSC-6615.jpg" },
    { imageUrl: "https://i.postimg.cc/Bn06JS41/DSC09689.jpg" },
    { imageUrl: "https://i.postimg.cc/8cvpV3YH/DSC09683.jpg" },
    { imageUrl: "https://i.postimg.cc/J4w7Qryd/DSC09587.jpg" },
    { imageUrl: "https://i.postimg.cc/ZKrb7GpY/DSC08265.jpg" },
  ],
  Engagement: [
    { imageUrl: "https://i.postimg.cc/9XRYspLN/DCM-0206.jpg" },
    { imageUrl: "https://i.postimg.cc/sXF5zF66/DSC-1927.jpg" },
    { imageUrl: "https://i.postimg.cc/zv2BJKDz/DSC08175.jpg" },
  ],
  Haldi: [
    { imageUrl: "https://i.postimg.cc/NF5X8NZv/0O8A3399.jpg" },
    { imageUrl: "https://i.postimg.cc/J05nSvvk/6-5.jpg" },
    { imageUrl: "https://i.postimg.cc/nLfLcHxD/DSC05570.jpg" },
  ],
  "Baby Shoot": [
    {
      imageUrl: "https://i.postimg.cc/bw3nZD6t/DSC-0704.jpg",
    },
    {
      imageUrl: "https://i.postimg.cc/1zVzyfbP/DSC-1467.jpg",
    },
    {
      imageUrl: "https://i.postimg.cc/pLhvF3CJ/DSC01623.jpg",
    },
  ],
};

const LatestWork = () => {
  const categoryKeys = Object.keys(initialCategories);
  const [activeCategory, setActiveCategory] = useState(categoryKeys[0] || "");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="latest-work">
      <h2>Our Latest Work</h2>

      <div className="category-buttons">
        {categoryKeys.map((category) => (
          <button
            key={category}
            className={category === activeCategory ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className="image-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          key={activeCategory}
        >
          {initialCategories[activeCategory] &&
          initialCategories[activeCategory].length > 0 ? (
            initialCategories[activeCategory].map((imageObj, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                variants={itemVariants}
                style={{ overflow: "hidden" }}
              >
                <img
                  src={imageObj.imageUrl}
                  alt={`${activeCategory} photo ${index + 1}`}
                  className="gallery-img"
                  onClick={() => setSelectedImage(imageObj.imageUrl)}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              className="empty-images"
              key="empty"
              variants={itemVariants}
            >
              <p className="no-images">No images available in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged view"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="modal-image"
            />
            <button
              className="modal-close-btn"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="instagram-icon">
        <a
          href="https://www.instagram.com/pratimafilmsphotography/?utm_source=qr&igsh=MW1iZWhndGg5YW5oaQ%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="glow-icon" />
        </a>
      </div>
    </div>
  );
};

export default LatestWork;
