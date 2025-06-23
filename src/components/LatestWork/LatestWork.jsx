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
    { imageUrl: "https://i.postimg.cc/XYjfckd9/DSC01372.jpg" },
    {
      imageUrl: "https://i.postimg.cc/XYwxNv3Y/DSC04182.jpg",
    },
    { imageUrl: "https://i.postimg.cc/66PgPTY7/DSC01496.jpg" },
    { imageUrl: "https://i.postimg.cc/j573048L/DSC03781.jpg" },
    { imageUrl: "https://i.postimg.cc/L5r6H1Zy/CKU-1553.jpg" },
  ],
  Prewedding: [
    { imageUrl: "https://i.postimg.cc/wvGDQ1DH/DSC08736.jpg" },
    { imageUrl: "https://i.postimg.cc/j573048L/DSC03781.jpg" },
    { imageUrl: "https://i.postimg.cc/cLvjZ3Ly/TDB-4512.jpg" },
    { imageUrl: "https://i.postimg.cc/DfMfcqDR/DSC-4772.jpg" },
    { imageUrl: "https://i.postimg.cc/2S36D0Wk/DSC-6036.jpg" },
    { imageUrl: "https://i.postimg.cc/wM9cBC5R/DSC09412.jpg" },

    { imageUrl: "https://i.postimg.cc/fbcPPKk5/DSC00696.jpg" },
    { imageUrl: "https://i.postimg.cc/kGR5ScQN/DSC-6870.jpg" },
  ],
  Engagement: [
    { imageUrl: "https://i.postimg.cc/3RyGLK8T/DSC-0642.jpg" },
    { imageUrl: "https://i.postimg.cc/zfYXm8FN/ABD-8852.jpg" },
    { imageUrl: "https://i.postimg.cc/Pr6Ysty0/DSC-1673.jpg" },
    { imageUrl: "https://i.postimg.cc/Xv2YXJG0/DSC-4187.jpg" },
    { imageUrl: "https://i.postimg.cc/3x8hphHr/DSC-3925.jpg" },
    { imageUrl: "https://i.postimg.cc/d0ZxZNDt/DSC-2535.jpg" },
  ],
  Haldi: [
    { imageUrl: "https://i.postimg.cc/sxD4wPZB/DSC-5124.jpg" },
    { imageUrl: "https://i.postimg.cc/7Y3MpMzQ/DSC-5523.jpg" },
    { imageUrl: "https://i.postimg.cc/Z5vsByv8/DSC-4435.jpg" },
    { imageUrl: "https://i.postimg.cc/Y0vGtFbV/DSC03180.jpg" },
    { imageUrl: "https://i.postimg.cc/7PjMfP07/DSC03577.jpg" },
    { imageUrl: "https://i.postimg.cc/zfM30vJF/DSC-6544.jpg" },
  ],
  "Baby Shoot": [
    {
      imageUrl:
        "https://i.pinimg.com/736x/5a/87/af/5a87af322162d541f74d7a762fc98543.jpg",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/28/47/d6/2847d640a6f7a3eb98244e98e0a171b3.jpg",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/5a/87/af/5a87af322162d541f74d7a762fc98543.jpg",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/7d/95/6a/7d956a18a2e4fa572a95206efc4fe3a0.jpg",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/a6/33/db/a633db1344685ae434bb7672f5a84d52.jpg",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/a9/12/35/a91235fbbbeae6a77447cf339b6c3491.jpg",
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
