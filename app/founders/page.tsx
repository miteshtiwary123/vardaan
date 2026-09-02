'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, type Variants } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaYoutube, FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaArrowRight, FaLeaf, FaShieldAlt, FaUsers, FaChartLine } from 'react-icons/fa';

export default function Founders() {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
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

      {/* ================= 1. NAVBAR SECTION ================= */}
      <header className="sticky top-0 w-full border-b border-[#2C3834] z-40 bg-[#1A2421]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-6 lg:px-12 py-4">
          <nav className="hidden xl:flex items-center space-x-6 text-xs font-semibold tracking-wider text-[#D1C9BE]">
            <Link href="/" className="hover:text-white transition">HOME</Link>
            <Link href="/about" className="hover:text-white transition">ABOUT US</Link>
            <Link href="/products" className="hover:text-white transition">PRODUCTS</Link>
          </nav>

          <div className="flex justify-start xl:justify-center">
            <Link href="/" className="font-serif italic text-xl lg:text-2xl tracking-wide text-[#E6D5C3] hover:opacity-95 transition">
              Vardaan Enterprises
            </Link>
          </div>

          <div className="hidden xl:flex items-center justify-end space-x-5 text-xs font-semibold tracking-wider text-[#D1C9BE]">
            <Link href="/achievements" className="hover:text-white transition">ACHIEVEMENTS</Link>
            <Link href="/founders" className="text-[#C5A880] hover:opacity-80 transition">FOUNDERS</Link>
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
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 w-full bg-[#1A2421] border-b border-[#2C3834] py-6 px-8 flex flex-col space-y-4 xl:hidden z-50 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible h-0 py-0 overflow-hidden'
        }`}>
          <Link href="/" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">HOME</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">ABOUT US</Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">PRODUCTS</Link>
          <Link href="/achievements" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">ACHIEVEMENTS</Link>
          <Link href="/founders" onClick={() => setIsOpen(false)} className="text-[#C5A880] font-semibold text-sm">FOUNDERS</Link>
          <Link href="/impact" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">IMPACT</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">BLOG</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">CONTACT</Link>
          <div className="pt-2 flex items-center space-x-4">
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-[#C5A880] text-xl"><FaYoutube /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#C5A880] text-xl"><FaInstagram /></a>
          </div>
        </div>
      </header>

      {/* ================= 2. HERO / MEET THE FOUNDER SECTION (Dark Green) ================= */}
      <section className="bg-[#1A2421] text-[#F4F1EA] py-20 lg:py-28 px-6 lg:px-16 relative overflow-hidden border-b border-[#2C3834]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-3">
              <span className="text-[11px] lg:text-xs uppercase tracking-widest text-[#C5A880] font-bold block">
                MEET THE FOUNDER
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F4F1EA] leading-tight">
                Anisha Pandey
              </h1>
              <div className="space-y-1">
                <p className="text-sm lg:text-base text-[#C5A880] font-medium">
                  Founder &amp; CEO, Vardaan Enterprises
                </p>
                <div className="w-12 h-0.5 bg-[#C5A880]/60 mt-2"></div>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm lg:text-base text-[#D1C9BE] font-light leading-relaxed">
              <p>
                Anisha Pandey is a young entrepreneur, Gau Seva activist, and rural empowerment champion from India. She founded Vardaan Enterprises with a singular vision: to build India&apos;s most trusted sustainable household brand — one rooted in the sacred tradition of the cow, powered by rural women, and driven by a circular economy.
              </p>
              <p>
                Her journey began not in a boardroom, but in a gaushala — surrounded by abandoned indigenous cows and the rural communities that depended on them. She saw not a problem, but an opportunity to transform ancient wisdom into modern livelihoods.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center space-x-2 border border-[#2C3834] hover:bg-[#263430] text-[#F4F1EA] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all"
              >
                <FaYoutube className="text-[#C5A880]" />
                <span>YOUTUBE</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center space-x-2 border border-[#2C3834] hover:bg-[#263430] text-[#F4F1EA] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all"
              >
                <FaInstagram className="text-[#C5A880]" />
                <span>INSTAGRAM</span>
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center space-x-2 bg-[#C5A880] hover:bg-[#b5956e] text-[#1A2421] px-6 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all shadow-md"
              >
                <FaWhatsapp />
                <span>CONNECT</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-[#C5A880]/30 pointer-events-none z-20"></div>

              <div className="bg-[#1F2C28] border border-[#2C3834] p-4 rounded-3xl shadow-2xl relative overflow-hidden group">
                <div className="aspect-[4/5] bg-[#263430] rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2421]/80 via-transparent to-transparent z-10"></div>
                  
                  {/* Founder Profile Photo */}
                  <img 
                    src="/founder1.jpg" 
                    alt="Anisha Pandey - Founder & CEO" 
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute bottom-4 left-4 bg-[#C5A880] text-[#1A2421] p-4 rounded-2xl shadow-lg z-20 space-y-0.5"
                  >
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">FOUNDER &amp; CEO</p>
                    <p className="font-serif text-sm font-bold">Vardaan Enterprises</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= 3. VISION QUOTE BANNER (Soft Sage Green) ================= */}
      <section className="bg-[#E4EAE5] py-16 px-6 lg:px-16 border-b border-[#D3DDD5] text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#1A2421] leading-relaxed">
            &ldquo;To build India&apos;s most trusted sustainable household brand — rooted in Gau Seva, powered by rural women, and built for every Indian home.&rdquo;
          </p>
          <p className="text-[11px] uppercase tracking-widest text-[#6B7B71] font-bold">
            — ANISHA PANDEY, FOUNDER
          </p>
        </motion.div>
      </section>

      {/* ================= 4. WHAT DRIVES ANISHA (Warm Cream) ================= */}
      <section className="bg-[#FAF8F5] py-16 lg:py-24 px-6 lg:px-16 border-b border-[#E6E0D5]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <span className="text-[11px] lg:text-xs uppercase tracking-widest text-[#8C6D48] font-bold">
              GUIDING PRINCIPLES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A2421]">
              What Drives Anisha
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Gau Seva First",
                desc: "Every decision at Vardaan is guided by one question: does this serve the cow and the community?",
                icon: <FaLeaf />
              },
              {
                title: "Zero Compromise on Purity",
                desc: "No synthetic chemicals, no shortcuts. Every product must meet the standard of nature.",
                icon: <FaShieldAlt />
              },
              {
                title: "Rural Women at the Center",
                desc: "The artisans and farmers are not suppliers — they are co-creators and the heart of Vardaan.",
                icon: <FaUsers />
              },
              {
                title: "Circular Economy Vision",
                desc: "Building a world where nothing from the cow is wasted and everything creates value.",
                icon: <FaChartLine />
              }
            ].map((principle, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-[#E6E0D5] p-6 rounded-2xl space-y-4 shadow-sm cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F4F1EA] text-[#8C6D48] flex items-center justify-center text-base border border-[#E6E0D5]">
                  {principle.icon}
                </div>
                <h3 className="font-serif text-xl text-[#1A2421]">{principle.title}</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= 5. ANISHA'S JOURNEY TIMELINE (Soft Pale Green) ================= */}
      <section className="bg-[#EEF1EE] py-20 lg:py-28 px-6 lg:px-16 border-b border-[#DCE3DF]">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <span className="text-[11px] lg:text-xs uppercase tracking-widest text-[#6B7B71] font-bold">
              THE STORY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A2421]">
              Founder&apos;s Journey
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 relative before:absolute before:left-[19px] before:top-3 before:bottom-3 before:w-0.5 before:bg-[#C9D4CE]"
          >
            {[
              {
                year: "2020",
                title: "The Spark",
                desc: "Anisha Pandey, deeply moved by the plight of abandoned indigenous cows, began researching Gaumay products and their potential to create sustainable livelihoods."
              },
              {
                year: "2021",
                title: "First Gaushala",
                desc: "Established the first gaushala with 50 rescued indigenous cows. Began producing Panchagavya products and cow dung crafts with a small team of rural women."
              },
              {
                year: "2022",
                title: "Growing the Network",
                desc: "Expanded to 400+ cows and partnered with 500+ gaushalas across India. Launched the women's skill training programme, training 100+ artisans."
              },
              {
                year: "2024",
                title: "National Recognition",
                desc: "Featured at national startup summits and exhibitions. Reached 30+ villages and 1,000+ gaushala partnerships. Women Entrepreneur Award received."
              },
              {
                year: "2026",
                title: "Scaling the Mission",
                desc: "Launched online presence, expanded product range to 20+ Gaumay products, and set sights on natural and global expansion of India's most trusted sustainable household brand."
              }
            ].map((milestone, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.01, x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-start space-x-6 relative group"
              >
                {/* Year Badge */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#263430] text-[#F4F1EA] font-serif text-xs font-bold flex items-center justify-center shadow-md relative z-10">
                  {milestone.year}
                </div>

                {/* Content Card */}
                <div className="grow bg-white border border-[#DCE3DF] p-6 rounded-2xl space-y-2 shadow-sm">
                  <h3 className="font-serif text-xl text-[#1A2421]">{milestone.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= 6. BUILDING AT THE INTERSECTION (Rich Beige/Cream) ================= */}
      <section className="bg-[#F6F4F0] py-20 lg:py-28 px-6 lg:px-16 border-b border-[#E6E0D5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-[11px] lg:text-xs uppercase tracking-widest text-[#8C6D48] font-bold">
                THE VISION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A2421] leading-tight">
                Building at the Intersection of India&apos;s Fastest-Growing Markets
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
              <p>
                Anisha identified four powerful tailwinds converging at exactly the same moment: a consumer shift toward natural products, government push for organic farming, growing market for sustainable goods, and a cultural renaissance around Indian heritage.
              </p>
              <p>
                Vardaan Enterprises sits at the intersection of all four — a brand that is not just riding these trends, but helping create them. The goal: national and global expansion of India&apos;s most trusted Gaumay household brand.
              </p>
            </div>

            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white border border-[#E6E0D5] p-5 rounded-2xl shadow-sm space-y-1">
                <p className="font-serif text-xl sm:text-2xl text-[#1A2421] font-bold">₹1,000 Cr+</p>
                <p className="text-[10px] uppercase tracking-wider text-[#8C6D48] font-semibold">MARKET OPPORTUNITY</p>
              </div>
              <div className="bg-white border border-[#E6E0D5] p-5 rounded-2xl shadow-sm space-y-1">
                <p className="font-serif text-xl sm:text-2xl text-[#1A2421] font-bold">10M+</p>
                <p className="text-[10px] uppercase tracking-wider text-[#8C6D48] font-semibold">HOUSEHOLDS TARGETED</p>
              </div>
              <div className="bg-white border border-[#E6E0D5] p-5 rounded-2xl shadow-sm space-y-1">
                <p className="font-serif text-xl sm:text-2xl text-[#1A2421] font-bold">20+ SKUs</p>
                <p className="text-[10px] uppercase tracking-wider text-[#8C6D48] font-semibold">PRODUCT RANGE</p>
              </div>
              <div className="bg-white border border-[#E6E0D5] p-5 rounded-2xl shadow-sm space-y-1">
                <p className="font-serif text-xl sm:text-2xl text-[#1A2421] font-bold">3 Channels</p>
                <p className="text-[10px] uppercase tracking-wider text-[#8C6D48] font-semibold">REVENUE STREAMS</p>
              </div>
            </div>
          </motion.div>

          {/* Right GTM Strategy Card with Founder Image Slot */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-white border border-[#E6E0D5] p-5 rounded-3xl shadow-xl space-y-4">
              
              {/* FIXED IMAGE CONTAINER: Removed rigid aspect ratio and object-cover to prevent cropping */}
              <div className="rounded-2xl overflow-hidden bg-[#E5DFD3] flex items-center justify-center">
                <img 
                  src="/founder.jpg" 
                  alt="Anisha Pandey speaking at summit" 
                  className="w-full h-auto block" 
                />
              </div>

              {/* Go-To-Market Strategy List */}
              <div className="space-y-3 pt-2">
                <p className="text-[10px] uppercase tracking-widest text-[#8C6D48] font-bold">
                  GO-TO-MARKET STRATEGY
                </p>
                <ul className="space-y-2 text-xs text-gray-700 font-light">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D48]"></span>
                    <span><strong>Festive &amp; Gifting</strong> — temples, households, corporate gifting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D48]"></span>
                    <span><strong>Exhibitions &amp; Melas</strong> — direct consumer reach</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D48]"></span>
                    <span><strong>B2B &amp; Institutional</strong> — gaushalas, NGOs, wellness centres</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D48]"></span>
                    <span><strong>Online &amp; Retail</strong> — organic stores, modern trade</span>
                  </li>
                </ul>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= 7. JOIN ANISHA'S MISSION (Deep Forest Green CTA) ================= */}
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
              Join Our Mission
            </h2>
            <p className="text-xs sm:text-sm text-[#D1C9BE] font-light leading-relaxed max-w-lg mx-auto">
              Every purchase supports Gau Seva, rural women artisans, and a sustainable India.
            </p>
          </div>

          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/products" 
                className="inline-flex items-center space-x-2 bg-[#C5A880] hover:bg-[#b5956e] text-[#1A2421] font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-full shadow-lg transition-colors"
              >
                <span>SHOP OUR PRODUCTS</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/achievements" 
                className="inline-flex items-center space-x-2 bg-transparent hover:bg-[#263430] text-[#F4F1EA] border border-[#2C3834] font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-full transition-colors"
              >
                <span>OUR ACHIEVEMENTS</span>
                <FaArrowRight className="text-xs text-[#C5A880]" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= 8. FOOTER SECTION ================= */}
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