// File: src/pages/Gallery.jsx
import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
  "/images/gallery7.jpg",
  "/images/gallery8.jpg",
];

const Gallery = () => (
  <section className="min-h-screen bg-gradient-to-tr from-[#fefce8] to-[#ffedd5] py-16 px-4 md:px-10">
    {/* Page Title */}
   
<motion.h2
      className="text-4xl md:text-5xl font-bold text-center text-[#332421] mb-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
    >
      Divine Gallery
    </motion.h2>
    {/* Subheading */}
   
  <motion.p
      className="text-center italic font-semibold text-[#472f1e]  py-6 text-sm md:text-base"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
    >
      “नर्मदायै नमः” — A visual journey of our sacred sculptures, from devotion to stone.
    </motion.p>

    {/* Grid Gallery */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-6 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {galleryImages.map((src, idx) => (
        <motion.div
          key={idx}
          className="relative overflow-hidden rounded-xl shadow-lg group"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={src}
            alt={`Shivling Art ${idx + 1}`}
            className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <p className="text-white text-sm font-medium">View Detail</p>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Call-to-action */}
    <div className="text-center mt-16">
      <motion.p
        className="text-[#332421] mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Want to see more custom artworks?
      </motion.p>
      <motion.a
        href="/contact"
        className="inline-block bg-[#332421] text-white px-6 py-3 rounded-full hover:bg-[#472f1e] transition"
        whileHover={{ scale: 1.05 }}
      >
        Contact Us for Custom Orders
      </motion.a>
    </div>
  </section>
);

export default Gallery;
