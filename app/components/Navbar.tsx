'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Facebook, Youtube, Instagram } from 'lucide-react';

export default function Navbar() {
  // This is the "brain" that remembers if the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // A quick helper function to close the menu when someone clicks a link
  const closeMenu = () => setIsOpen(false);

  return (
    // The dark forest green background from your design
    <nav className="w-full bg-[#1A3626] text-[#F4EFE6] fixed top-0 left-0 right-0 z-50 shadow-lg font-[family-name:var(--font-playfair)]">
      
      {/* ==================== DESKTOP & TOP BAR ==================== */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left Side: Brand Name */}
        <Link href="/" className="text-2xl md:text-3xl font-bold italic tracking-wide z-50">
          Vardaan Enterprises
        </Link>

        {/* Center: Desktop Links & Logo (Hidden on Mobile!) */}
        <div className="hidden md:flex items-center gap-10 text-sm font-[family-name:var(--font-inter)] tracking-wider font-medium">
          <Link href="/" className="hover:text-[#D0C5B5] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#D0C5B5] transition-colors">About Us</Link>

          {/* The Center Floating Logo */}
          <Link href="/" className="relative w-24 h-24 bg-white rounded-full border-4 border-[#1A3626] shadow-xl flex items-center justify-center translate-y-6 hover:scale-105 transition-transform duration-300">
            {/* Make sure logo.png is in your public folder! */}
            <Image src="/logo.png" alt="Vardaan Enterprises Logo" fill className="object-cover rounded-full p-1" />
          </Link>

          <Link href="/products" className="hover:text-[#D0C5B5] transition-colors">Products</Link>
          <Link href="/contact" className="hover:text-[#D0C5B5] transition-colors">Contact Us</Link>
        </div>

        {/* Right Side: Desktop Social Icons (Hidden on Mobile!) */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform">
            <Facebook size={16} />
          </a>
          <a href="https://www.youtube.com/@Vardaanenterprises" className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:scale-110 transition-transform">
            <Youtube size={16} />
          </a>
          <a href="https://www.instagram.com/vardaan.enterprises?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white hover:scale-110 transition-transform">
            <Instagram size={16} />
          </a>
        </div>

        {/* Mobile Hamburger Button (Hidden on Desktop!) */}
        <button 
          className="md:hidden text-[#F4EFE6] p-2 focus:outline-none z-50" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* ==================== MOBILE SLIDE-DOWN MENU ==================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#1A3626] border-t border-white/10 overflow-hidden flex flex-col"
          >
            <div className="flex flex-col items-center justify-center flex-grow gap-8 font-[family-name:var(--font-inter)] pt-10 pb-32">
              <Link href="/" onClick={closeMenu} className="text-2xl font-medium tracking-wide hover:text-[#D0C5B5] transition-colors">Home</Link>
              <Link href="/about" onClick={closeMenu} className="text-2xl font-medium tracking-wide hover:text-[#D0C5B5] transition-colors">About Us</Link>
              <Link href="/products" onClick={closeMenu} className="text-2xl font-medium tracking-wide hover:text-[#D0C5B5] transition-colors">Products</Link>
              <Link href="/contact" onClick={closeMenu} className="text-2xl font-medium tracking-wide hover:text-[#D0C5B5] transition-colors">Contact Us</Link>
              
              {/* Mobile Social Icons */}
              <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-white/20 w-3/4">
                <a href="#" className="p-3 rounded-full bg-[#1877F2] text-white">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-3 rounded-full bg-[#FF0000] text-white">
                  <Youtube size={20} />
                </a>
                <a href="#" className="p-3 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}