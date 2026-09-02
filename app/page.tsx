'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaYoutube, FaLeaf, FaHeart, FaSpa, FaStar, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Navbar from './components/Navbar';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden selection:bg-[#C5A880] selection:text-[#1A2421] font-sans relative">
      
      {/* ================= STYLES & FONTS INJECTION ================= */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        body, font-sans {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 25s linear infinite;
        }
      `}</style>

      {/* ================= 1. REUSABLE NAVBAR COMPONENT ================= */}
      <Navbar />

      {/* ================= 2. MOVING TRUST LABELS TICKER ================= */}
      <div className="relative overflow-hidden bg-[#131C19] py-3 border-b border-[#2C3834] flex">
        <div className="animate-marquee space-x-12 text-xs tracking-widest text-[#C5A880] font-medium items-center whitespace-nowrap">
          <span className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] inline-block"></span><span>HERBAL PRODUCTS</span></span>
          <span className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] inline-block"></span><span>AUTHENTIC GAU-BASED WELLNESS</span></span>
          <span className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] inline-block"></span><span>ECO-FRIENDLY TRADITION</span></span>
          <span className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] inline-block"></span><span>PANCHAGAVYA PRODUCTS</span></span>
          <span className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] inline-block"></span><span>NATURAL FARMING INPUTS</span></span>
          {/* Duplicate for infinite loop illusion */}
          <span className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] inline-block"></span><span>HERBAL PRODUCTS</span></span>
          <span className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] inline-block"></span><span>AUTHENTIC GAU-BASED WELLNESS</span></span>
          <span className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] inline-block"></span><span>ECO-FRIENDLY TRADITION</span></span>
          <span className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] inline-block"></span><span>PANCHAGAVYA PRODUCTS</span></span>
          <span className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] inline-block"></span><span>NATURAL FARMING INPUTS</span></span>
        </div>
      </div>

      {/* ================= 3. HERO CONTENT SECTION ================= */}
      <section className="bg-[#1A2421] grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-16 py-12 lg:py-16 gap-12 animate-fadeIn">
        <div className="space-y-6 max-w-xl">
          <div className="text-[11px] lg:text-xs uppercase tracking-widest text-[#C5A880] font-medium">
            ✦ GAU SEVA · CIRCULAR ECONOMY · RURAL LIVELIHOODS
          </div>

          <h1 className="font-serif text-4xl lg:text-6xl leading-tight font-normal text-[#F4F1EA]">
            Rooted in Tradition. <br />
            Crafted with Purity.
          </h1>

          <p className="text-[#D1C9BE] text-sm lg:text-base font-light leading-relaxed">
            Eco-friendly products inspired by Indian heritage — from sacred cow dung crafts to Ayurvedic wellness.
          </p>

          <div className="pt-2">
            <Link 
              href="/products" 
              className="inline-flex items-center space-x-3 bg-[#C5A880] text-[#1A2421] px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#b5956e] transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
            >
              <span>EXPLORE PRODUCTS</span>
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <span className="border border-[#33443E] bg-[#141D1A] px-4 py-1.5 rounded-full text-xs text-[#D1C9BE] transition hover:border-[#C5A880] hover:scale-105 duration-300">
              100% Organic
            </span>
            <span className="border border-[#33443E] bg-[#141D1A] px-4 py-1.5 rounded-full text-xs text-[#D1C9BE] transition hover:border-[#C5A880] hover:scale-105 duration-300">
              Handcrafted
            </span>
            <span className="border border-[#33443E] bg-[#141D1A] px-4 py-1.5 rounded-full text-xs text-[#D1C9BE] transition hover:border-[#C5A880] hover:scale-105 duration-300">
              Ayurvedic
            </span>
          </div>
        </div>

        <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] bg-[#131C19] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center group">
          <Image 
            src="/eco-carousel.jpeg" 
            alt="Circular Economy of Cow Infographic" 
            fill 
            className="object-contain transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>
      </section>

      {/* ================= 4. STATS BANNER SECTION ================= */}
      <section className="bg-[#C5A880] text-[#1A2421] py-8 px-6 shadow-inner">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1 transform hover:scale-105 transition duration-300">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold">400+</h3>
            <p className="text-[10px] lg:text-xs tracking-wider uppercase font-medium opacity-90">RESCUED INDIGENOUS COWS</p>
          </div>
          <div className="space-y-1 transform hover:scale-105 transition duration-300">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold">1000+</h3>
            <p className="text-[10px] lg:text-xs tracking-wider uppercase font-medium opacity-90">GAUSHALA PARTNERS</p>
          </div>
          <div className="space-y-1 transform hover:scale-105 transition duration-300">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold">100%</h3>
            <p className="text-[10px] lg:text-xs tracking-wider uppercase font-medium opacity-90">NATURAL & ORGANIC</p>
          </div>
          <div className="space-y-1 transform hover:scale-105 transition duration-300">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold">10000+</h3>
            <p className="text-[10px] lg:text-xs tracking-wider uppercase font-medium opacity-90">HAPPY CUSTOMERS</p>
          </div>
        </div>
      </section>

      {/* ================= 5. ABOUT US & CORE VALUES SECTION ================= */}
      <section className="bg-[#F4F1EA] text-[#2C3834] py-16 lg:py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[350px] sm:h-[420px] rounded-2xl overflow-hidden shadow-xl group">
              <Image 
                src="/about-pottery.jpg" 
                alt="Artisan crafting product" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#8C6D48] font-semibold">
                ABOUT US
              </span>
              <h2 className="font-serif text-3xl lg:text-5xl font-normal leading-tight text-[#1A2421]">
                A Nature-Inspired Brand Dedicated to Indian Tradition
              </h2>
              <p className="text-gray-700 text-sm lg:text-base font-light leading-relaxed">
                Vardaan Enterprises is a nature-inspired brand dedicated to creating eco-friendly products rooted in Indian tradition. Crafted from natural cow dung, our products reflect purity, sustainability, and thoughtful design. We strive to offer meaningful alternatives that respect the environment while preserving cultural values.
              </p>
              <div className="pt-2">
                <Link 
                  href="/about" 
                  className="inline-flex items-center space-x-2 border border-[#1A2421] text-[#1A2421] px-6 py-3 rounded-full font-medium text-xs tracking-wider hover:bg-[#1A2421] hover:text-[#F4F1EA] transition-all duration-300 shadow-sm transform hover:-translate-y-0.5"
                >
                  <span>LEARN MORE</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#8C6D48] font-semibold">
                WHY CHOOSE US
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl text-[#1A2421]">
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#FAF8F5] border border-[#E6E0D5] rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-[#F0EBE1] flex items-center justify-center text-[#8C6D48] text-lg transition-transform duration-300 hover:scale-110">
                  <FaLeaf />
                </div>
                <h3 className="font-serif text-xl font-normal text-[#1A2421]">100% Organic</h3>
                <p className="text-gray-600 text-xs leading-relaxed font-light">
                  Made purely from natural elements, ensuring zero harm to the environment.
                </p>
              </div>

              <div className="bg-[#FAF8F5] border border-[#E6E0D5] rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-[#F0EBE1] flex items-center justify-center text-[#8C6D48] text-lg transition-transform duration-300 hover:scale-110">
                  <FaHeart />
                </div>
                <h3 className="font-serif text-xl font-normal text-[#1A2421]">Handcrafted with Love</h3>
                <p className="text-gray-600 text-xs leading-relaxed font-light">
                  Every piece is molded by skilled artisans preserving ancient Indian techniques.
                </p>
              </div>

              <div className="bg-[#FAF8F5] border border-[#E6E0D5] rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-[#F0EBE1] flex items-center justify-center text-[#8C6D48] text-lg transition-transform duration-300 hover:scale-110">
                  <FaSpa />
                </div>
                <h3 className="font-serif text-xl font-normal text-[#1A2421]">Spiritual Purity</h3>
                <p className="text-gray-600 text-xs leading-relaxed font-light">
                  Rooted in Ayurveda and Sanatan Dharma, bringing positive energy to your home.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 6. FEATURED CATEGORIES SECTION ================= */}
      <section className="bg-[#F4F1EA] text-[#2C3834] pb-20 px-6 lg:px-16 border-t border-[#E6E0D5]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <p className="text-[10px] lg:text-xs uppercase tracking-widest text-[#8C6D48] font-semibold">
              ROOTED IN TRADITION. CRAFTED WITH PURITY.
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#1A2421]">
              Featured Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Category 1 */}
            <div className="bg-[#FAF8F5] border border-[#E6E0D5] rounded-2xl p-5 space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 group">
              <div className="relative h-48 w-full rounded-xl overflow-hidden bg-[#EFECE6]">
                <Image 
                  src="/category-gau-craft.jpg" 
                  alt="Gau Craft" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl text-[#1A2421]">Gau Craft</h3>
                <p className="text-xs text-gray-600 font-light">Sacred & Natural Creations</p>
              </div>
              <Link href="/products" className="inline-block text-xs font-semibold text-[#8C6D48] hover:underline pt-1 transition transform hover:translate-x-1">
                EXPLORE COLLECTION →
              </Link>
            </div>

            {/* Category 2 */}
            <div className="bg-[#FAF8F5] border border-[#E6E0D5] rounded-2xl p-5 space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 group">
              <div className="relative h-48 w-full rounded-xl overflow-hidden bg-[#EFECE6]">
                <Image 
                  src="/category-herbal.jpg" 
                  alt="Herbal" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl text-[#1A2421]">Herbal</h3>
                <p className="text-xs text-gray-600 font-light">Pure & Healing Remedies</p>
              </div>
              <Link href="/products" className="inline-block text-xs font-semibold text-[#8C6D48] hover:underline pt-1 transition transform hover:translate-x-1">
                EXPLORE COLLECTION →
              </Link>
            </div>

            {/* Category 3 */}
            <div className="bg-[#FAF8F5] border border-[#E6E0D5] rounded-2xl p-5 space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 group">
              <div className="relative h-48 w-full rounded-xl overflow-hidden bg-[#EFECE6]">
                <Image 
                  src="/category-laddus.jpg" 
                  alt="Traditional Laddus" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl text-[#1A2421]">Traditional Laddus</h3>
                <p className="text-xs text-gray-600 font-light">Authentic Indian Sweets</p>
              </div>
              <Link href="/products" className="inline-block text-xs font-semibold text-[#8C6D48] hover:underline pt-1 transition transform hover:translate-x-1">
                EXPLORE COLLECTION →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 7. TESTIMONIALS SECTION ================= */}
      <section className="bg-[#EFECE6] text-[#2C3834] py-20 px-6 lg:px-16 border-t border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-[10px] lg:text-xs uppercase tracking-widest text-[#8C6D48] font-semibold">
              CUSTOMER LOVE
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#1A2421]">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <div className="bg-[#FAF8F5] border border-[#E6E0D5] rounded-2xl p-8 space-y-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex text-[#D4AF37] space-x-1 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-xs text-gray-700 italic font-light leading-relaxed">
                  &ldquo;The cow dung diyas are absolutely beautiful and the fragrance is divine. I use them for all my puja rituals now.&rdquo;
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t border-[#EFECE6]">
                <div className="w-8 h-8 rounded-full bg-[#E5E0D5] flex items-center justify-center font-bold text-xs text-[#1A2421]">
                  P
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#1A2421]">Priya Sharma</h4>
                  <p className="text-[10px] text-gray-500">Mumbai</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#FAF8F5] border border-[#E6E0D5] rounded-2xl p-8 space-y-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex text-[#D4AF37] space-x-1 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-xs text-gray-700 italic font-light leading-relaxed">
                  &ldquo;Vardaan&apos;s herbal products are genuinely pure. The quality is unmatched and delivery was prompt.&rdquo;
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t border-[#EFECE6]">
                <div className="w-8 h-8 rounded-full bg-[#E5E0D5] flex items-center justify-center font-bold text-xs text-[#1A2421]">
                  R
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#1A2421]">Kunal Kumar</h4>
                  <p className="text-[10px] text-gray-500">Bihar</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#FAF8F5] border border-[#E6E0D5] rounded-2xl p-8 space-y-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex text-[#D4AF37] space-x-1 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-xs text-gray-700 italic font-light leading-relaxed">
                  &ldquo;Ordered the traditional laddus for Diwali — my entire family loved them. Will order again!&rdquo;
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t border-[#EFECE6]">
                <div className="w-8 h-8 rounded-full bg-[#E5E0D5] flex items-center justify-center font-bold text-xs text-[#1A2421]">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#1A2421]">Sunita Devi</h4>
                  <p className="text-[10px] text-gray-500">Jaipur</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 8. FOOTER SECTION ================= */}
      <footer className="bg-[#140E0A] text-[#C9BFB3] pt-16 pb-8 px-6 lg:px-16 border-t border-[#2A201A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#2A201A]">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <h3 className="font-serif italic text-2xl text-[#EADCCF]">
              Vardaan Enterprises
            </h3>
            <p className="text-xs text-[#A89F91] leading-relaxed font-light">
              Rooted in tradition, we create natural and eco-friendly products inspired by Indian culture, purity, and sustainability.
            </p>
            <div className="flex space-x-4 text-sm text-[#C5A880] pt-2">
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition transform hover:scale-110"><FaYoutube /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition transform hover:scale-110"><FaInstagram /></a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="hover:text-white transition transform hover:scale-110"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">
              Quick Links
            </h4>
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

          {/* Column 3: Categories */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li><Link href="/products" className="hover:text-white transition">Gau Crafts</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Herbal Products</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Traditional Laddus</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs font-light text-[#A89F91]">
              <div className="flex items-start space-x-3">
                <FaPhoneAlt className="text-[#C5A880] mt-0.5 shrink-0" />
                <div>
                  <p className="hover:text-white transition">+91 78590 07833</p>
                  <p className="hover:text-white transition">+91 79790 44753</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#C5A880] shrink-0" />
                <p className="hover:text-white transition">vardaan.enterprises31@gmail.com</p>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                href="/order" 
                className="inline-flex items-center space-x-2 bg-[#C5A880] text-[#140E0A] px-4 py-2.5 rounded-md font-bold text-xs hover:bg-[#b5956e] transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
              >
                <FaWhatsapp className="text-sm" />
                <span>ORDER ON WHATSAPP</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8C8275] font-light">
          <p>© 2026 Vardaan Enterprises. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Promoting Gau Seva · Circular Economy · Rural Livelihoods</p>
        </div>
      </footer>

    </main>
  );
}