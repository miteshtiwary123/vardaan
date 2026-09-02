'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, type Variants } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaYoutube, FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaArrowRight, FaPlay, FaRegCalendarAlt } from 'react-icons/fa';

export default function Blog() {
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

  const blogPosts = [
    {
      category: "AYURVEDA",
      date: "August 5, 2026",
      title: "The Sacred Science of Panchagavya",
      excerpt: "Panchagavya — the five sacred products of the cow — has been used in Ayurveda for thousands of years. Discover its healing properties and modern applications.",
      link: "/blog/sacred-science-panchagavya"
    },
    {
      category: "ECO LIVING",
      date: "July 22, 2026",
      title: "Why Cow Dung Diyas Are Better Than Paraffin Candles",
      excerpt: "Traditional cow dung diyas not only purify the air but also carry spiritual significance. Learn why making the switch is good for you and the planet.",
      link: "/blog/cow-dung-diyas"
    },
    {
      category: "NATURAL FARMING",
      date: "July 10, 2026",
      title: "Jeevamrut: The Elixir for Healthy Soil",
      excerpt: "Jeevamrut is a powerful microbial culture that revitalizes soil health. Learn how to prepare and use it for chemical-free farming.",
      link: "/blog/jeevamrut-elixir"
    },
    {
      category: "GAU SEVA",
      date: "June 28, 2026",
      title: "Gau Seva: A Tradition Worth Preserving",
      excerpt: "Indigenous cow breeds are the backbone of Indian agriculture and culture. Explore why Gau Seva is more relevant today than ever before.",
      link: "/blog/gau-seva-tradition"
    },
    {
      category: "OUR STORY",
      date: "June 15, 2026",
      title: "How We Rescue and Rehabilitate Indigenous Cows",
      excerpt: "A behind-the-scenes look at our gaushala operations — from rescuing abandoned cows to providing them a safe, loving home.",
      link: "/blog/rescue-rehabilitate"
    },
    {
      category: "CRAFTSMANSHIP",
      date: "June 1, 2026",
      title: "The Art of Handcrafting Cow Dung Products",
      excerpt: "Meet the skilled artisans behind our cow dung craft products. Their dedication preserves ancient Indian techniques while creating sustainable livelihoods.",
      link: "/blog/art-handcrafting"
    }
  ];

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
      <header className="relative grid grid-cols-3 items-center px-6 lg:px-12 py-5 border-b border-[#2C3834] z-30 bg-[#1A2421]">
        <nav className="hidden xl:flex items-center space-x-6 text-xs font-semibold tracking-wider text-[#D1C9BE]">
          <Link href="/" className="hover:text-white transition">HOME</Link>
          <Link href="/about" className="hover:text-white transition">ABOUT US</Link>
          <Link href="/gaushala" className="hover:text-white transition">GAUSHALA</Link>
          <Link href="/products" className="hover:text-white transition">PRODUCTS</Link>
          <Link href="/farming" className="hover:text-white transition">FARMING</Link>
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
          <Link href="/blog" className="text-[#C5A880] hover:opacity-80 transition">BLOG</Link>
          <Link href="/contact" className="hover:text-white transition">CONTACT</Link>
          
          <div className="flex items-center space-x-3 text-base text-[#C5A880]">
            <a href="https://www.youtube.com/@Vardaanenterprises" target="_blank" rel="noreferrer" className="hover:text-white transition transform hover:scale-110"><FaYoutube /></a>
            <a href="https://www.instagram.com/vardaan.enterprises?igsh=NzVzc3lndWl2ZWw%3D" target="_blank" rel="noreferrer" className="hover:text-white transition transform hover:scale-110"><FaInstagram /></a>
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

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 w-full bg-[#1A2421] border-b border-[#2C3834] py-6 px-8 flex flex-col space-y-4 xl:hidden z-50 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible h-0 py-0 overflow-hidden'
        }`}>
          <Link href="/" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">HOME</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">ABOUT US</Link>
          <Link href="/gaushala" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">OUR GAUSHALA</Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">PRODUCTS</Link>
          <Link href="/achievements" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">ACHIEVEMENTS</Link>
          <Link href="/founders" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">FOUNDERS</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="text-[#C5A880] font-semibold text-sm">BLOG</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-[#D1C9BE] hover:text-white text-sm">CONTACT</Link>
        </div>
      </header>

      {/* ================= 2. HERO / OUR BLOG SECTION ================= */}
      <section className="bg-[#1A2421] text-[#F4F1EA] py-20 lg:py-28 px-6 lg:px-16 text-center relative overflow-hidden border-b border-[#2C3834]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-4 relative z-10"
        >
          <span className="text-[11px] lg:text-xs uppercase tracking-widest text-[#C5A880] font-bold block">
            KNOWLEDGE &amp; INSIGHTS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F4F1EA] leading-tight">
            Our Blog
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-[#D1C9BE] font-light leading-relaxed max-w-xl mx-auto pt-2">
            Stories, insights, and wisdom from the world of Gau Seva, Ayurveda, and sustainable living.
          </p>
        </motion.div>
      </section>

      {/* ================= 3. BLOG POSTS GRID SECTION ================= */}
      <section className="bg-[#FAF8F5] py-20 lg:py-28 px-6 lg:px-16 border-b border-[#E6E0D5]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, idx) => (
              <motion.article 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-[#E2DDD3] p-8 rounded-2xl flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest bg-[#F4F1EA] text-[#8C6D48] px-3 py-1 rounded-full font-bold border border-[#E2DDD3]">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1.5 text-[11px] text-gray-400 font-light">
                      <FaRegCalendarAlt className="text-xs text-[#8C6D48]" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-serif text-xl text-[#1A2421] group-hover:text-[#8C6D48] transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-xs text-gray-600 font-light leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#F0ECE1]">
                  <Link 
                    href={post.link}
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#8C6D48] hover:text-[#1A2421] transition-colors"
                  >
                    <span>READ MORE</span>
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= 4. FEATURED YOUTUBE & INSTAGRAM REELS SECTION ================= */}
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
              VISUAL STORIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A2421]">
              Watch Our Journey in Action
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* YouTube Embed Container */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-[#E2DDD3] p-6 rounded-3xl shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-red-600 font-bold text-sm">
                  <FaYoutube className="text-lg" />
                  <span>Featured YouTube Video</span>
                </div>
                <a 
                  href="https://www.youtube.com/@Vardaanenterprises" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs text-[#8C6D48] hover:underline font-semibold"
                >
                  Visit Channel →
                </a>
              </div>

              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black/10 relative">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/1STjz8XtoR0" 
                  title="Vardaan Enterprises YouTube Video" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-xs text-gray-600 font-light">
                Discover our gaushala operations, making of organic products, and interviews with founder Anisha Pandey.
              </p>
            </motion.div>

            {/* Instagram Reel Embed Container */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-[#E2DDD3] p-6 rounded-3xl shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-pink-600 font-bold text-sm">
                  <FaInstagram className="text-lg" />
                  <span>Instagram Reels Showcase</span>
                </div>
                <a 
                  href="https://www.instagram.com/vardaan.enterprises?igsh=NzVzc3lndWl2ZWw%3D" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs text-[#8C6D48] hover:underline font-semibold"
                >
                  Follow on Instagram →
                </a>
              </div>

              {/* Fixed: removed invalid React prop 'allowTransparency' */}
              <div className="aspect-[9/16] max-h-[350px] mx-auto w-full max-w-[280px] rounded-2xl overflow-hidden bg-gray-50 relative flex flex-col items-center justify-center text-gray-800 shadow-inner">
                <iframe 
                  className="absolute inset-0 w-full h-full border-0"
                  src="https://www.instagram.com/reel/DacNeLNs4uN/embed" 
                  title="Vardaan Enterprises Instagram Reel" 
                  allow="encrypted-media"
                ></iframe>
              </div>
              
              <p className="text-xs text-gray-600 font-light text-center">
                Stay updated with our daily updates, customer reviews, and artisan highlights.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= 5. FOOTER SECTION ================= */}
      <footer className="bg-[#140E0A] text-[#C9BFB3] pt-16 pb-8 px-6 lg:px-16 border-t border-[#2A201A] mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#2A201A]">
          <div className="space-y-4">
            <h3 className="font-serif italic text-2xl text-[#EADCCF]">Vardaan Enterprises</h3>
            <p className="text-xs text-[#A89F91] leading-relaxed font-light">Rooted in tradition, we create natural and eco-friendly products inspired by Indian culture, purity, and sustainability.</p>
            <div className="flex space-x-4 text-sm text-[#C5A880] pt-2">
              <a href="https://www.youtube.com/@Vardaanenterprises" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaYoutube /></a>
              <a href="https://www.instagram.com/vardaan.enterprises?igsh=NzVzc3lndWl2ZWw%3D" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaInstagram /></a>
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