import React from "react";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import MarqueeImages from "../../components/MarqueeImages/MarqueeImages";

const Home = () => {
  return (
    <section className="home-container">
      <Banner />
      <MarqueeImages />
    </section>
  );
};

export default Home;
