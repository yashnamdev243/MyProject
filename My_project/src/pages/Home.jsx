// File: src/pages/Home.jsx
import React from "react";
import { Button } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const offerings = [
  { icon: "🕉️", label: "Narmadeshwar Shivling" },
  { icon: "🙏", label: "Handcrafted Idols" },
  { icon: "🛕", label: "Temple Accessories" },
  { icon: "🔱", label: "Trishul & Damaru" },
  { icon: "🌺", label: "Spiritual Decor" },
  { icon: "🪔", label: "Puja Essentials" },
  { icon: "🧘‍♂️", label: "Meditation Tools" },
  { icon: "📿", label: "Rudraksha & Malas" },
];

const Home = () => (
  <section className="text-center bg-gradient-to-tr from-[#fefce8] to-[#ffedd5] p-6 min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
    
    {/* Brand Title */}
    {/* <motion.h2
      className="text-5xl md:text-6xl font-extrabold mb-4 text-[#332421] drop-shadow-xl"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      Namdev Shivling Art Puratan
    </motion.h2> */}
<motion.h2
      className="text-4xl md:text-5xl font-bold text-center text-[#332421] mb-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
    >
      Namdev Shivling Art Puratan
    </motion.h2>
    {/* Spiritual Tagline */}
      <motion.p
          className="text-center italic font-semibold text-[#472f1e]  py-6 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
        >
            “ॐ नमः शिवाय” — The divine spirit in every sculpture.
        </motion.p>
   

    {/* Description */}
    <motion.p
      className="text-lg md:text-xl max-w-2xl text-[#332421] mb-8 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
    >
      We are dedicated to preserving ancient spiritual artistry. Explore sacred handcrafted idols, Narmadeshwar Shivlings (1 inch to 24 feet), and divine temple accessories crafted with devotion and purity.
    </motion.p>

    {/* Buttons */}
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <Link to="/about">
        <Button
          size="large"
          className="px-6 py-2 rounded-full hover:!text-[#332421] shadow-md !border-[#332421]"
        >
          Learn More
        </Button>
      </Link>
      <Link to="/contact">
        <Button
          type="primary"
          size="large"
          className="px-6 py-2 rounded-full !bg-[#472f1e] !text-white hover:!bg-[#332421] shadow-md"
        >
          Contact Now
        </Button>
      </Link>
    </motion.div>

    {/* Offerings Section */}
    <motion.div
      className="mt-2 w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      {offerings.map(({ icon, label }, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center text-3xl text-[#1e40af] hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
        >
          <div className="text-4xl">{icon}</div>
          <p className="text-sm font-medium text-[#333] mt-2">{label}</p>
        </div>
      ))}
    </motion.div>

    {/* Decorative Element (Optional) */}
    <div className="absolute bottom-2 right-4 text-sm text-[#6b4c3b] opacity-50">
      Crafted with devotion in Bhopal 🕉️
    </div>
  </section>
);

export default Home;
