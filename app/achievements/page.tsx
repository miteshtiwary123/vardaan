'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaYoutube, FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaAward, FaTrophy, FaUsers, FaStar, FaLeaf, FaChartLine, FaShieldAlt, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';

export default function Achievements() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Animation variants for staggered containers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden selection:bg-[#C5A880] selection:text-[#1A2421] font-sans relative bg-[#F4F1EA] text-[#2C3834]">
      
      {/* ================= STYLES & FONTS ================= */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>

      {/* ================= 1. UPDATED NAVBAR SECTION ================= */}
      <header className="relative grid grid-cols-3 items-center px-6 lg:px-12 py-5 border-b border-[#2C3834] z-30 bg-[#1A2421]">
        <nav className="hidden xl:flex items-center space-x-6 text-xs font-semibold tracking-wider text-[#D1C9BE]">
          <Link href="/" className="hover:text-white transition">HOME</Link>
          <Link href="/about" className="hover:text-white transition">ABOUT US</Link>
          <Link href="/products" className="hover:text-white transition">PRODUCTS</Link>
          <Link href="/farming" className="hover:text-white transition">FARMING</Link>
        </nav>

        <div className="flex justify-start xl:justify-center">
          <Link href="/" className="font-serif italic text-xl lg:text-2xl tracking-wide text-[#E6D5C3] hover:opacity-95 transition">
            Vardaan Enterprises
          </Link>
        </div>

        <div className="hidden xl:flex items-center justify-end space-x-6 text-xs font-semibold tracking-wider text-[#D1C9BE]">
          <Link href="/achievements" className="text-[#C5A880] hover:opacity-80 transition">ACHIEVEMENTS</Link>
          <Link href="/founders" className="hover:text-white transition">FOUNDERS</Link>
          <Link href="/impact" className="hover:text-white transition">IMPACT</Link>
          <Link href="/blog" className="hover:text-white transition">BLOG</Link>
          <Link href="/contact" className="hover:text-white transition">CONTACT</Link>
          
          <div className="flex items-center space-x-3 text-base text-[#C5A880]">
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition transform hover:scale-110"><FaYoutube /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition transform hover:scale-110"><FaInstagram /></a>
          </div>

          <Link 
            href="/order" 
            className="bg-[#C5A880] text-[#1A2421] px-4 py-2 rounded-full font-bold text-xs flex items-center space-x-2 hover:bg-[#b5956e] transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
          >
            <FaWhatsapp />
            <span>ORDER</span>
          </Link>
        </div>

        <div className="col-span-2 flex justify-end xl:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-2xl text-[#C5A880] p-2 rounded-lg hover:bg-[#2C3834]/50 transition-all duration-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Updated Mobile Menu */}
        <div className={`absolute top-full left-0 w-full bg-[#1A2421] border-b border-[#2C3834] py-6 px-8 flex flex-col space-y-4 xl:hidden z-50 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible h-0 py-0 overflow-hidden'
        }`}>
          <Link href="/" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">HOME</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">ABOUT US</Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">PRODUCTS</Link>
          <Link href="/achievements" onClick={() => setIsOpen(false)} className="text-[#C5A880] font-semibold text-sm">ACHIEVEMENTS</Link>
          <Link href="/founders" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">FOUNDERS</Link>
          <Link href="/impact" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">IMPACT</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">BLOG</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">CONTACT</Link>
        </div>
      </header>

      {/* ================= 2. HERO SECTION ================= */}
      <section className="bg-[#1A2421] text-[#F4F1EA] py-24 lg:py-32 px-6 lg:px-16 text-center relative overflow-hidden border-b border-[#2C3834]">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 -top-32 w-96 h-96 rounded-full border border-[#263430] pointer-events-none"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1, 1.08, 1], rotate: [0, -2, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 -bottom-32 w-[500px] h-[500px] rounded-full border border-[#263430] pointer-events-none"
        ></motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-4 relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#C5A880]/40 text-[#C5A880] text-[11px] lg:text-xs uppercase tracking-widest font-semibold bg-[#1F2C28]"
          >
            <FaAward className="text-xs" />
            <span>OUR ACHIEVEMENTS</span>
          </motion.div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#F4F1EA]">
            Recognised for Impact, <br /> Rooted in Purpose
          </h1>

          <p className="text-[#D1C9BE] text-xs sm:text-sm lg:text-base font-light max-w-xl mx-auto leading-relaxed pt-2">
            From national startup summits to rural melas, Vardaan Enterprises has been recognised for building a sustainable, women-led enterprise that honours India&apos;s Gau Seva tradition.
          </p>
        </motion.div>
      </section>

      {/* ================= 3. BY THE NUMBERS / IMPACT DELIVERED SECTION ================= */}
      <section className="bg-[#EFECE6] py-20 lg:py-28 px-6 lg:px-16 border-b border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <span className="text-[11px] lg:text-xs uppercase tracking-widest text-[#8C6D48] font-bold">
              BY THE NUMBERS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A2421]">
              Impact Delivered
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6"
          >
            {[
              { num: "1,000+", title: "Gaushala Partners", sub: "Across India" },
              { num: "400+", title: "Indigenous Cows", sub: "In our gaushala" },
              { num: "30+", title: "Villages Reached", sub: "Rural impact" },
              { num: "200+", title: "Women Trained", sub: "Skill development" },
              { num: "50+", title: "Artisans Employed", sub: "Direct livelihoods" },
              { num: "10M+", title: "Lives Touched", sub: "Through our products" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FAF8F5] border border-[#E6E0D5] p-6 rounded-2xl text-center space-y-2 shadow-sm cursor-pointer"
              >
                <div className="font-serif font-bold text-3xl lg:text-[34px] text-[#1A2421]">{stat.num}</div>
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-[#1A2421]">{stat.title}</div>
                  <div className="text-[11px] text-gray-500 font-light">{stat.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= 4. AWARDS & HONOURS TIMELINE SECTION ================= */}
      <section className="bg-[#FAF8F5] py-20 lg:py-28 px-6 lg:px-16 border-b border-[#E6E0D5]">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <span className="text-[11px] lg:text-xs uppercase tracking-widest text-[#8C6D48] font-bold">
              RECOGNITION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A2421]">
              Awards &amp; Honours
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                year: "2026",
                category: "National Startup Ecosystem",
                icon: <FaTrophy />,
                title: "Startup Summit Recognition",
                desc: "Recognised at a national startup summit for innovation in sustainable rural enterprise and circular economy model built around Gau Seva.",
                highlight: true
              },
              {
                year: "2026",
                category: "Rural Empowerment Initiative",
                icon: <FaUsers />,
                title: "Community Events Excellence",
                desc: "Honoured for outstanding contribution to rural women empowerment through skill training and sustainable livelihood creation across 30+ villages."
              },
              {
                year: "2025",
                category: "National Craft & Sustainability Expo",
                icon: <FaStar />,
                title: "Exhibitions & Melas Showcase",
                desc: "Featured at national exhibitions and local melas for Goumay product innovation — bringing cow dung crafts to mainstream consumer markets."
              },
              {
                year: "2025",
                category: "Zero Budget Natural Farming Network",
                icon: <FaLeaf />,
                title: "Natural Farming Champion",
                desc: "Recognised for promoting Jeevamrut and Panchagavya-based natural farming inputs that have helped farmers reduce chemical dependency."
              },
              {
                year: "2024",
                category: "State Women Empowerment Council",
                icon: <FaChartLine />,
                title: "Women Entrepreneur Award",
                desc: "Founder Anisha Pandey recognised for building a women-led enterprise that creates dignified employment for rural artisans across Bihar and Jharkhand."
              },
              {
                year: "2024",
                category: "National Gaushala Federation",
                icon: <FaShieldAlt />,
                title: "Gaushala Partnership Network",
                desc: "Established partnerships with 1,000+ gaushalas across India, creating a robust supply chain for authentic Gaumay raw materials."
              }
            ].map((award, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.01, x: 4 }}
                transition={{ duration: 0.2 }}
                className={`${award.highlight ? 'bg-[#EFECE6] border-[#E2DDD3]' : 'bg-[#FAF8F5] border-[#E6E0D5]'} border p-8 rounded-2xl space-y-4 shadow-sm`}
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#8C6D48] font-bold uppercase tracking-wider">
                  <motion.span 
                    whileHover={{ rotate: 15 }}
                    className="w-9 h-9 rounded-xl bg-[#D6CCA9] text-[#1A2421] flex items-center justify-center text-sm shadow-xs"
                  >
                    {award.icon}
                  </motion.span>
                  <span>{award.year}</span>
                  <span className="text-gray-400">•</span>
                  <span>{award.category}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl lg:text-3xl text-[#1A2421]">{award.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                    {award.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= 5. WHAT THEY'RE SAYING SECTION ================= */}
      <section className="bg-[#EAE4D9] py-20 lg:py-28 px-6 lg:px-16 border-b border-[#DCD3C5]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <span className="text-[11px] lg:text-xs uppercase tracking-widest text-[#8C6D48] font-bold">
              FEATURED IN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A2421]">
              What They&apos;re Saying
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                quote: "A rare intersection of culture, sustainability, and rural empowerment — Vardaan is building India's most trusted Gaumay brand.",
                tag: "STARTUP SUMMITS"
              },
              {
                quote: "Vardaan Enterprises demonstrates how traditional Indian knowledge can be transformed into a modern, scalable business.",
                tag: "COMMUNITY EVENTS"
              },
              {
                quote: "The response from consumers at every mela and exhibition has been overwhelming — people are hungry for authentic, natural products.",
                tag: "LOCAL FAIR PARTICIPATION"
              }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.85, y: 40 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-[#FAF8F5] border border-[#E6E0D5] p-8 rounded-2xl flex flex-col justify-between space-y-8 shadow-md cursor-pointer transition-shadow"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ rotate: -10 }}
                    whileInView={{ rotate: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <FaQuoteLeft className="text-[#C5A880] text-2xl opacity-60" />
                  </motion.div>
                  <p className="font-serif italic text-base lg:text-lg text-[#1A2421] leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-[#EBE5D8] text-[11px] font-bold tracking-widest uppercase text-[#8C6D48]">
                  {testimonial.tag}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= 6. CALL TO ACTION SECTION ================= */}
      <section className="bg-[#1A2421] text-[#F4F1EA] py-24 px-6 lg:px-16 text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto space-y-6 relative z-10"
        >
          <div className="space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F4F1EA]">
              Be Part of Our Journey
            </h2>
            <p className="text-xs sm:text-sm text-[#D1C9BE] font-light leading-relaxed max-w-lg mx-auto">
              Every product you buy supports our mission — Gau Seva, rural livelihoods, and a sustainable India.
            </p>
          </div>

          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/products" 
                className="inline-flex items-center space-x-2 bg-[#C5A880] hover:bg-[#b5956e] text-[#1A2421] font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-full shadow-lg transition-colors"
              >
                <span>SHOP NOW</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/founders" 
                className="inline-flex items-center space-x-2 bg-transparent hover:bg-[#263430] text-[#F4F1EA] border border-[#2C3834] font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-full transition-colors"
              >
                <span>MEET THE FOUNDER</span>
                <FaArrowRight className="text-xs text-[#C5A880]" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= 7. FOOTER SECTION ================= */}
      <footer className="bg-[#140E0A] text-[#C9BFB3] pt-16 pb-8 px-6 lg:px-16 border-t border-[#2A201A] mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#2A201A]">
          <div className="space-y-4">
            <h3 className="font-serif italic text-2xl text-[#EADCCF]">Vardaan Enterprises</h3>
            <p className="text-xs text-[#A89F91] leading-relaxed font-light">Rooted in tradition, we create natural and eco-friendly products inspired by Indian culture, purity, and sustainability.</p>
            <div className="flex space-x-4 text-sm text-[#C5A880] pt-2">
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaYoutube /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaInstagram /></a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">Quick Links</h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
              <li><Link href="/achievements" className="hover:text-white transition">Achievements</Link></li>
              <li><Link href="/founders" className="hover:text-white transition">Founders</Link></li>
              <li><Link href="/impact" className="hover:text-white transition">Impact</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">Categories</h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li><Link href="/products" className="hover:text-white transition">Gau Crafts</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Herbal Products</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Traditional Laddus</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">Contact Us</h4>
            <div className="space-y-3 text-xs font-light text-[#A89F91]">
              <div className="flex items-start space-x-3">
                <FaPhoneAlt className="text-[#C5A880] mt-0.5 shrink-0" />
                <div><p>+91 78590 07833</p><p>+91 79790 44753</p></div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#C5A880] shrink-0" />
                <p>vardaan.enterprises31@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8C8275] font-light">
          <p>© 2026 Vardaan Enterprises. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Promoting Gau Seva · Circular Economy · Rural Livelihoods</p>
        </div>
      </footer>

      {/* ================= FLOATING WHATSAPP BUTTON ================= */}
      <motion.a 
        href="https://whatsapp.com" 
        target="_blank" 
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, type: "spring" }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </motion.a>

    </main>
  );
}