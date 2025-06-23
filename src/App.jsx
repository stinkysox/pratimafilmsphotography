import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Formsection from "./components/FormSection/FormSection";
import OurServices from "./components/OurServices/OurServices";
import Gallery from "./components/Gallery/Gallery";
import TeasersSection from "./components/TeasersSection/TeasersSection";
import Testimonials from "./components/Testimonials/Testimonials";
import PriceDetails from "./components/PriceDetails/PriceDetails";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/form" element={<Formsection />} />
        <Route path="/pricing" element={<PriceDetails />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/teasers" element={<TeasersSection />} />
      </Routes>
      <Footer /> {/* This will be rendered on all pages */}
    </>
  );
};

export default App;
