// File: src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative">
        
        {/* Logo */}
       
        <Link to="/" className="flex items-center gap-2">
           <div className="w-18 h-18 flex items-center justify-center p-1 border border-[#e98948] rounded-full bg-[#e98948] "cls>
          <img
            src="/logo2.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          </div>
          {/* <h1 className="text-xl md:text-2xl font-bold text-[#4f342f] tracking-tight">
           Namdev Narmadeshwar Shivling 

            <span className="text-[#e98948]"> Arts</span>
          </h1> */}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {["Home", "About", "Gallery", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="relative group text-[#4f342f] font-medium text-lg transition"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#e98948] transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* Optional CTA button */}
          <Link
            to="/contact"
            className="bg-[#e98948] text-white px-4 py-2 rounded-full hover:bg-[#e98948] transition shadow"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <CloseOutlined className="text-2xl text-[#4f342f]" />
            ) : (
              <MenuOutlined className="text-2xl text-[#4f342f]" />
            )}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden flex flex-col gap-4 p-6 z-40 animate-fade-in">
            {["Home", "About", "Gallery", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-[#4f342f] border-b pb-2 hover:text-[#7c3aed] transition"
              >
                {item}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#7c3aed] text-white text-center px-4 py-2 rounded-full hover:bg-[#6d28d9] transition shadow"
            >
              Get In Touch
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
