'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaYoutube, FaBars, FaTimes, FaLeaf, FaPhoneAlt, FaEnvelope, FaHandshake, FaGlobe, FaHeart, FaBook, FaRibbon, FaUsers, FaArrowRight } from 'react-icons/fa';

export default function AboutUs() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
          <Link href="/about" className="text-[#C5A880] hover:opacity-80 transition">ABOUT US</Link>
          <Link href="/products" className="hover:text-white transition">PRODUCTS</Link>
        </nav>

        <div className="flex justify-start xl:justify-center">
          <Link href="/" className="font-serif italic text-xl lg:text-2xl tracking-wide text-[#E6D5C3] hover:opacity-95 transition">
            Vardaan Enterprises
          </Link>
        </div>

        <div className="hidden xl:flex items-center justify-end space-x-6 text-xs font-semibold tracking-wider text-[#D1C9BE]">
          <Link href="/achievements" className="hover:text-white transition">ACHIEVEMENTS</Link>
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
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-[#C5A880] font-semibold text-sm">ABOUT US</Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">PRODUCTS</Link>
          <Link href="/achievements" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">ACHIEVEMENTS</Link>
          <Link href="/founders" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">FOUNDERS</Link>
          <Link href="/impact" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">IMPACT</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">BLOG</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">CONTACT</Link>
        </div>
      </header>

      {/* ================= 2. HERO / "OUR STORY" SECTION ================= */}
      <section className="bg-[#1A2421] text-[#F4F1EA] py-20 lg:py-28 px-6 lg:px-16 text-center space-y-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <span className="text-[11px] lg:text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
            OUR STORY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#F4F1EA]">
            A Brand Born from <br /> Devotion &amp; Purpose
          </h1>
          <p className="text-[#D1C9BE] text-xs sm:text-sm lg:text-base font-light max-w-xl mx-auto leading-relaxed pt-2">
            Rooted in the sacred tradition of Gau Seva, we transform cow-based resources into premium eco-friendly products that nourish homes, farms, and communities.
          </p>
        </motion.div>
      </section>

      {/* ================= 3. "OUR MISSION" SECTION ================= */}
      <section className="bg-[#FAF8F5] py-20 lg:py-28 px-6 lg:px-16 border-t border-b border-[#E6E0D5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="space-y-3">
                <span className="text-[11px] lg:text-xs uppercase tracking-widest text-[#8C6D48] font-bold">
                  OUR MISSION
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#1A2421] leading-[1.15]">
                  Promoting Gau Seva, Circular Economy &amp; Rural Livelihoods
                </h2>
                <div className="w-12 h-[1px] bg-[#C5A880] my-2"></div>
              </div>

              <p className="text-gray-700 text-xs sm:text-sm font-light leading-relaxed">
                Vardaan Enterprises operates its own gaushala with <strong className="font-medium text-[#1A2421]">400+ rescued indigenous cows</strong> and collaborates with <strong className="font-medium text-[#1A2421]">1,000+ gaushalas across India</strong>. We believe in the sacred bond between humans and cows — and we channel that belief into every product we create.
              </p>

              <p className="text-gray-700 text-xs sm:text-sm font-light leading-relaxed">
                From Ayurvedic and Panchagavya products to natural farming inputs, home décor, incense, diyas, compost, and sustainable lifestyle products — every item carries the purity of nature and the wisdom of tradition.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="bg-[#F4F1EA] border border-[#EBE5D8] p-8 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#C5A880] text-xl"><FaLeaf /></div>
                <h3 className="font-serif text-xl text-[#1A2421]">Gau Seva</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Dedicated to the welfare of indigenous cows — the backbone of Indian culture and agriculture.
                </p>
              </div>

              <div className="bg-[#F4F1EA] border border-[#EBE5D8] p-8 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#C5A880] text-xl"><FaGlobe /></div>
                <h3 className="font-serif text-xl text-[#1A2421]">Circular Economy</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Transforming cow-based resources into valuable products, creating zero-waste cycles.
                </p>
              </div>

              <div className="bg-[#F4F1EA] border border-[#EBE5D8] p-8 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#C5A880] text-xl"><FaHandshake /></div>
                <h3 className="font-serif text-xl text-[#1A2421]">Rural Livelihoods</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Empowering rural artisans and farmers with sustainable income through traditional crafts.
                </p>
              </div>

              <div className="bg-[#F4F1EA] border border-[#EBE5D8] p-8 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#C5A880] text-xl"><FaHeart /></div>
                <h3 className="font-serif text-xl text-[#1A2421]">Natural Farming</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Promoting chemical-free, Panchagavya-based farming for a healthier planet.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= 4. "OUR JOURNEY" MILESTONES SECTION ================= */}
      <section className="bg-[#EFECE6] py-20 lg:py-28 px-6 lg:px-16 border-b border-[#E2DDD3]">
        <div className="max-w-4xl mx-auto space-y-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <span className="text-[11px] lg:text-xs uppercase tracking-widest text-[#8C6D48] font-bold">
              OUR JOURNEY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A2421]">
              Milestones That Define Us
            </h2>
          </motion.div>

          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-[#FAF8F5] border border-[#E6E0D5] p-6 lg:p-8 rounded-2xl shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-[#1A2421] text-[#C5A880] flex items-center justify-center font-serif font-bold text-lg shrink-0">
                2018
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl text-[#1A2421]">Founded</h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  Vardaan Enterprises was established with a mission to promote Gau Seva and eco-friendly living.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-[#FAF8F5] border border-[#E6E0D5] p-6 lg:p-8 rounded-2xl shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-[#1A2421] text-[#C5A880] flex items-center justify-center font-serif font-bold text-lg shrink-0">
                2020
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl text-[#1A2421]">400+ Cows Rescued</h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  Our gaushala grew to shelter and care for over 400 indigenous cow breeds.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-[#FAF8F5] border border-[#E6E0D5] p-6 lg:p-8 rounded-2xl shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-[#1A2421] text-[#C5A880] flex items-center justify-center font-serif font-bold text-lg shrink-0">
                2022
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl text-[#1A2421]">1000+ Gaushala Partners</h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  We expanded our network to collaborate with over 1,000 gaushalas across India.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ================= 5. "SOCIAL IMPACT" SECTION ================= */}
      <section className="bg-[#FAF8F5] py-20 lg:py-28 px-6 lg:px-16 border-b border-[#E6E0D5]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 max-w-2xl mx-auto"
          >
            <span className="text-[11px] lg:text-xs uppercase tracking-widest text-[#8C6D48] font-bold">
              SOCIAL IMPACT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A2421]">
              Women &amp; Rural Empowerment
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed pt-2">
              At Vardaan Enterprises, our mission goes beyond products. We are committed to uplifting rural women and communities — giving them skills, dignity, and sustainable livelihoods rooted in India&apos;s ancient traditions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#F4F1EA] border border-[#EBE5D8] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="bg-[#1A2421] text-[#C5A880] p-8 space-y-4">
                  <div className="text-2xl"><FaUsers /></div>
                  <h3 className="font-serif text-2xl text-[#F4F1EA]">Rural Empowerment</h3>
                </div>
                <div className="p-8">
                  <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                    We partner with rural communities across India, creating dignified employment for women artisans who handcraft our cow dung products, diyas, idols, and incense sticks. Every purchase directly supports a rural family.
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8 pt-4 border-t border-[#EBE5D8]">
                <span className="text-xs font-bold text-[#8C6D48] tracking-wider uppercase block">
                  50+ RURAL ARTISANS EMPLOYED
                </span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#F4F1EA] border border-[#EBE5D8] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="bg-[#1A2421] text-[#C5A880] p-8 space-y-4">
                  <div className="text-2xl"><FaBook /></div>
                  <h3 className="font-serif text-2xl text-[#F4F1EA]">Skill Training</h3>
                </div>
                <div className="p-8">
                  <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                    We run hands-on training programs teaching women the art of Panchagavya product making, natural farming techniques, and eco-friendly craft production — turning traditional knowledge into economic opportunity.
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8 pt-4 border-t border-[#EBE5D8]">
                <span className="text-xs font-bold text-[#8C6D48] tracking-wider uppercase block">
                  200+ WOMEN TRAINED
                </span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#F4F1EA] border border-[#EBE5D8] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="bg-[#1A2421] text-[#C5A880] p-8 space-y-4">
                  <div className="text-2xl"><FaRibbon /></div>
                  <h3 className="font-serif text-2xl text-[#F4F1EA]">Achievements</h3>
                </div>
                <div className="p-8">
                  <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                    Our women artisans have been recognised at state and national levels for their craftsmanship. We have helped establish self-help groups (SHGs) that are now independently producing and selling Vardaan products.
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8 pt-4 border-t border-[#EBE5D8]">
                <span className="text-xs font-bold text-[#8C6D48] tracking-wider uppercase block">
                  10+ SHGS SUPPORTED
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ================= 6. "OUR COMMITMENT" FEATURE BANNER ================= */}
      <section className="bg-[#EAE4D9] py-20 lg:py-28 px-6 lg:px-16 border-b border-[#DDD5C7]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#FAF8F5] border border-[#DDD5C7] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <span className="text-[11px] lg:text-xs uppercase tracking-widest text-[#8C6D48] font-bold flex items-center gap-2">
                    <span>✨</span> OUR COMMITMENT
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#1A2421] leading-[1.15]">
                    Turning Tradition into Opportunity for Rural Women
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                  India&apos;s rural women are the custodians of ancient knowledge — from Panchagavya preparation to handcrafted cow dung art. At Vardaan, we believe this knowledge deserves recognition and reward.
                </p>

                <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                  Through our training centres and gaushala network, we equip women with skills, connect them to markets, and ensure fair wages — building a circular economy that benefits both people and the planet.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F4F1EA] border border-[#E6E0D5] p-6 rounded-2xl text-center space-y-1 shadow-sm">
                  <div className="font-serif font-bold text-2xl lg:text-3xl text-[#1A2421]">50+</div>
                  <div className="text-[10px] lg:text-xs uppercase tracking-wider text-[#8C6D48] font-semibold">Artisans Employed</div>
                </div>

                <div className="bg-[#F4F1EA] border border-[#E6E0D5] p-6 rounded-2xl text-center space-y-1 shadow-sm">
                  <div className="font-serif font-bold text-2xl lg:text-3xl text-[#1A2421]">200+</div>
                  <div className="text-[10px] lg:text-xs uppercase tracking-wider text-[#8C6D48] font-semibold">Women Trained</div>
                </div>

                <div className="bg-[#F4F1EA] border border-[#E6E0D5] p-6 rounded-2xl text-center space-y-1 shadow-sm">
                  <div className="font-serif font-bold text-2xl lg:text-3xl text-[#1A2421]">10+</div>
                  <div className="text-[10px] lg:text-xs uppercase tracking-wider text-[#8C6D48] font-semibold">SHGs Supported</div>
                </div>

                <div className="bg-[#F4F1EA] border border-[#E6E0D5] p-6 rounded-2xl text-center space-y-1 shadow-sm">
                  <div className="font-serif font-bold text-2xl lg:text-3xl text-[#1A2421]">5+</div>
                  <div className="text-[10px] lg:text-xs uppercase tracking-wider text-[#8C6D48] font-semibold">Training Centres</div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= 7. CTA SECTION ================= */}
      <section className="bg-[#EFECE6] py-20 lg:py-28 px-6 lg:px-16 border-b border-[#E2DDD3] text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A2421]">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed max-w-lg mx-auto">
              Explore our range of eco-friendly, cow-based products crafted with love and tradition.
            </p>
          </div>

          <div className="pt-2">
            <Link 
              href="/products" 
              className="inline-flex items-center space-x-3 bg-[#1A2421] hover:bg-[#2C3834] text-[#F4F1EA] font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-full shadow-lg transition-all duration-300 group"
            >
              <span>Shop Now</span>
              <FaArrowRight className="text-xs text-[#C5A880] transform group-hover:translate-x-1 transition-transform" />
            </Link>
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
      <a 
        href="https://whatsapp.com" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

    </main>
  );
}