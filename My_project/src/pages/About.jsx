// File: src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <section className="bg-gradient-to-tr from-[#fefce8] to-[#ffedd5] py-10 px-4 md:px-10 ">
    <motion.h2
      className="text-4xl md:text-5xl font-bold text-center text-[#332421] mb-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
    >
      About Us
    </motion.h2>

    <motion.p
      className="text-center italic font-semibold text-[#472f1e]  py-6 text-sm md:text-base"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
    >
      “नर्मदायै नमः” — Our stones come from the sacred Narmada, our hands from
      divine tradition.
    </motion.p>

    <motion.div
      className="max-w-6xl mx-auto   p-6 md:p-10 rounded-xl shadow-lg space-y-6 leading-relaxed text-justify"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
    >
    <motion.div
      className="max-w-6xl mx-auto bg-[#472f1e]  p-6 md:p-10 rounded-xl shadow-lg space-y-6 leading-relaxed text-justify"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      
    >
      <p className="tracking-wide text-white" >
        <strong style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
          Namdev Shivling Art Puratan
        </strong>{" "}
        is an esteemed spiritual art workshop founded by{" "}
        <strong style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
          Deepak Kumar Bhai Shivnarayan
        </strong>
        , son of Shri Mangilal Namdev (Tailor). Nestled in the spiritual village
        of Bakawan, Madhya Pradesh, our family has been crafting divine
        Narmadeshwar Shivlings with devotion and skill for generations.
      </p>
      <p className="tracking-wide text-white">
        With over{" "}
        <strong style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
          20+ years of sacred artistry
        </strong>
        , we've hand-crafted more than{" "}
        <strong style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
          500+ Narmadeshwar Shivlings
        </strong>
        , from palm-sized 1-inch idols to awe-inspiring 24-foot sculptures for
        temples across India. Each stone, sourced from the holy Narmada River,
        carries not just weight — but divine vibration.
      </p>
</motion.div>
    {/* Vision & Values */}
    <motion.div
      className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      {[
        {
          title: "🧘 Spiritual Vision",
          text: "We don’t just sculpt stone — we sculpt sacred energy into form, helping devotees connect with Lord Shiva in temples and homes.",
        },
        {
          title: "🌿 Our Values",
          text: "Devotion, purity, honesty, and heritage — these are the four pillars on which every creation stands.",
        },
      ].map((box, i) => (
        <motion.div
          key={i}
          className="border-l-4 border-[#472f1e] text-[#472f1e] p-6 rounded-xl shadow-md"
          whileHover={{ scale: 1.03 }}
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
        >
          <h4 className="text-lg font-semibold mb-2">{box.title}</h4>
          <p className="text-sm text-[#332421]">{box.text}</p>
        </motion.div>
      ))}
    </motion.div>

    {/* Unique Offerings */}
    <motion.div
      className="max-w-6xl mx-auto mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
    >
      <h3 className="text-2xl font-bold text-[#332421] mb-6 text-center">
        Why We’re Unique
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {[
          { icon: "🌊", text: "Narmada-sourced Stone" },
          { icon: "🛕", text: "Temple-grade Craftsmanship" },
          { icon: "🔱", text: "Pure Vedic Rituals" },
          { icon: "📦", text: "Safe Nationwide Delivery" },
        ].map(({ icon, text }, idx) => (
          <motion.div
            key={idx}
            className=" border-b-2 border-[#472f1e] p-6 rounded-lg shadow-md hover:shadow-xl flex flex-col items-center text-center hover:scale-105 transition"
          >
            <div className="text-4xl">{icon}</div>
            <p className="mt-2 text-sm font-medium text-[#332421]">{text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <motion.div
      className="relative max-w-6xl mx-auto mt-20 p-6 md:p-10 rounded-xl overflow-hidden bg-[#472f1e] shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-4 right-4 text-6xl opacity-20 pointer-events-none select-none">
        🔱
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-[#E98948] shadow-lg overflow-hidden">
          <img
            src="/images/founder.jpg"
            alt="Founder Deepak Kumar"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 rounded-full border-4 !border-[#E98948] animate-pulse opacity-30"></div>
        </div>

        <div className="flex-1 text-center md:text-left space-y-3" >
          <h3 className="text-2xl font-bold text-white">
            Deepak Kumar Bhai Shivnarayan
          </h3>
          <p className="text-sm text-gray-100">Founder & Spiritual Artist</p>
          <p className="text-gray-200 text-base leading-relaxed">
            From the sacred banks of the Narmada, I carry forward a legacy not
            just of art, but of devotion. Each Shivling we craft holds the
            vibrations of Lord Shiva — a bond between the divine and the
            devotee.
          </p>
          <p className="italic text-white text-sm border-l-4 border-[#E98948] pl-4 mt-4">
            "Art is our offering. Stone is our scripture. Lord Shiva is our
            soul."
          </p>
        </div>
      </div>
    </motion.div>

    <motion.div
      className="max-w-5xl mx-auto mt-20 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
    >
      <h3 className="text-2xl font-bold text-center text-[#332421] mb-10 relative">
        Our Legacy Timeline
        {/* <span className="block w-16 h-1 bg-[#332421] mx-auto mt-2 rounded"></span> */}
      </h3>

      <div className="relative border-l-4 border-[#332421] pl-6 rounded-lg space-y-12 ">
        {[
          { year: "2000", detail: "Workshop founded in Bakawan.", icon: "🌱" },
          {
            year: "2005",
            detail: "First 12-foot Shivling delivered to Gujarat.",
            icon: "🛕",
          },
          {
            year: "2014",
            detail: "Crossed 300+ creations milestone.",
            icon: "📿",
          },
          {
            year: "2024",
            detail: "Served across 15+ Indian states.",
            icon: "🇮🇳",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="relative  p-4 rounded-lg shadow-md border-l-4 border-[#E98948] hover:shadow-xl transition-all"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div className="absolute -left-12 top-1 text-2xl bg-[#332421] text-white rounded-full w-9 h-9 flex items-center justify-center shadow mt-1 ">
              {item.icon}
            </div>
            <p className="text-sm text-[#472f1e]">
              <span className="font-bold text-[#332421]">{item.year}:</span>{" "}
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <motion.div
      className="max-w-4xl mx-auto mt-20 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
    >
      <h3 className="text-2xl font-bold text-center text-[#332421] mb-10 relative">
        Customer Blessings
        {/* <span className="block w-16 h-1 bg-[#332421] mx-auto mt-2 rounded"></span> */}
      </h3>

      <motion.div
        className="  border-l-4 border-[#E98948] p-6 rounded-xl shadow-xl relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-2 right-4 text-4xl text-[#fcd34d] opacity-30 pointer-events-none select-none">
          🔱
        </div>

        <div className="text-5xl text-[#332421] mb-2 leading-none">“</div>

        <p className="italic text-[#332421] text-lg leading-relaxed">
          Our temple received a 6-foot Narmadeshwar Shivling, and it radiates
          divinity. Jai Bholenath!
        </p>

        <div className="text-5xl text-[#332421] text-right mt-1 leading-none">
          ”
        </div>

        <p className="text-sm text-right text-gray-500 mt-4">
          — Namdev Shivling Art Puratan
        </p>
      </motion.div>
    </motion.div>
        </motion.div>

  </section>
);

export default About;
