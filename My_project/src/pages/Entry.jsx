// File: src/pages/Entry.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Entry = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // redirect after animation
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-black text-white h-screen flex items-center justify-center flex-col gap-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        Namdev Shivling Art Show
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.2 }}
      >
        Experience the Divine Craft of Narmadeshwar Shivlings
      </motion.p>
      <motion.div
        className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      />
    </div>
  );
};

export default Entry;
