import React, { useState } from "react";
import { motion } from "framer-motion";
import "./OurServices.css";
import StatsCounter from "../StatsCounter/StatsCounter";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const services = [
  {
    title: "Wedding Photography",
    image: "https://i.postimg.cc/4dD5d78g/DSC02093.jpg",
  },
  {
    title: "Pre-wedding Photography",
    image: "https://i.postimg.cc/cC4mpMjF/0O8A2964.jpg",
  },
  {
    title: "Birthday Party",
    image:
      "https://i.pinimg.com/736x/d6/91/15/d69115d9fffc17aeae973c395308f59b.jpg",
  },
  {
    title: "Maternity Photoshoot",
    image:
      "https://i.pinimg.com/736x/62/95/21/629521a568f1ef062fb8258b18e4feb9.jpg",
  },
  {
    title: "All Type of Events",
    image:
      "https://i.pinimg.com/736x/1f/5d/b8/1f5db87871c617ae438262c1e9e59199.jpg",
  },
  {
    title: "Product Photoshoot",
    image:
      "https://i.pinimg.com/736x/e6/88/27/e68827d29e5dea1f8b222f15ccb58adf.jpg",
  },
];

const OurServices = () => {
  const navigate = useNavigate();
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const toggleZoom = (index) => {
    setZoomedIndex(zoomedIndex === index ? null : index);
  };

  return (
    <>
      <StatsCounter />
      <div className="services__container" id="services">
        <p className="services__subheading">OUR SERVICES</p>
        <h2 className="services__heading">
          Where every <span>picture</span> <br /> tells a story
        </h2>
        <div className="services__grid">
          {services.map((service, index) => (
            <motion.div
              className="services__card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={service.image}
                alt={service.title}
                onClick={() => toggleZoom(index)}
                className={
                  zoomedIndex === index
                    ? "services__img zoomed"
                    : "services__img"
                }
              />
              <p className="services__title">{service.title}</p>
            </motion.div>
          ))}
        </div>
        <button onClick={() => navigate("/gallery")} className="visit-gallery">
          Visit Gallery
        </button>
      </div>
    </>
  );
};

export default OurServices;
