import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Soubhagya Laxmi",
    feedback:
      "Thank you Ajit bhai & team for capturing our wedding so beautifully. All the rituals and special moments were documented with such artistry and attention to detail. The photos perfectly reflect the emotions and essence of our big day. Highly professional, talented, and a joy to work with—thank you for making our memories last forever!",
  },
  {
    name: "Pinky Pradhan",
    feedback:
      "Fabulous team, very cooperative and understanding and always make you smile on your big day. Heartfelt thanks to the whole team for making my wedding memories. Can never go wrong with them. Book them without a single doubt. One of the best teams in Odisha.",
  },
  {
    name: "Rakesh",
    feedback:
      "Thank you Pratima Films and Photography Team for my wedding shoot. The photos are beautiful and exactly what I was hoping for. Keep growing and keep shining... Highly recommended for any kind of photography!",
  },
  {
    name: "Rishi Prakash",
    feedback:
      "Best experience working with you guys. Your creative thoughts are really incredible. You all are amazing. Best photo and videographers in BBSR. Keep it up, love you guys!",
  },
  {
    name: "Chinmaya Ranjan Patra",
    feedback:
      "Very nice and humble team. Very cooperative and supportive as well. Specifically, owner Ajit describes all the features neatly and came up with an extraordinary plan for my marriage. Cost-effective too. Thanks Ajit and team — always recommend. One of the best photography teams in Odisha.",
  },
];

const Testimonials = () => {
  const handleGoogleReviewClick = () => {
    window.open(
      "https://www.google.com/maps/place/Pratima+films+%26+photography/@20.2635474,85.8175094,17z/data=!3m1!4b1!4m6!3m5!1s0x3a19a70068ffd0d7:0x511f0f1505958f33!8m2!3d20.2635474!4d85.8175094!16s%2Fg%2F11y8w3nx5w?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  return (
    <div className="testimonials-section">
      <h2>
        What our customers say
        <br />
        about us
      </h2>
      <div className="testimonial-list">
        {testimonials.map((t, i) => (
          <motion.div
            className="testimonial-card"
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <p className="feedback">“{t.feedback}”</p>
            <p className="name">– {t.name}</p>
          </motion.div>
        ))}
      </div>

      <button className="google-review-btn" onClick={handleGoogleReviewClick}>
        Check Google Reviews
      </button>
    </div>
  );
};

export default Testimonials;
