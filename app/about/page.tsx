'use client'; // Required for animations
import Reveal3D from "../components/Reveal3D";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Sun, Heart, ShieldCheck, MapPin, Phone, Mail, Check } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function AboutPage() {
  // 1. Setup Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      
      {/* 2. The Golden Scroll Bar (Fixed at top) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#B8860B] origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />

      {/* ==================== HERO SECTION ==================== */}
      <section className="w-full bg-[#F5F0E6] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 px-6 py-16 md:py-24 md:pl-12 z-10">
            
            {/* Staggered Text Reveal */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#231711] font-[family-name:var(--font-playfair)] leading-tight">
                Rooted in Tradition. <br/>
                <span className="text-[#4A6741]">Crafted with Purpose.</span>
              </h1>
              <div className="h-1 w-24 bg-[#4A6741] mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 font-[family-name:var(--font-inter)] leading-relaxed">
                Vardaan Enterprises is a humble initiative dedicated to reviving 
                traditional, Eco-friendly products made with care, purity, and 
                respect for nature.
              </p>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative">
            {/* Image Zoom-Out Effect */}
            <motion.div 
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="w-full h-full"
            >
              <Image 
                src="/about-banner.jpg" 
                alt="Traditional Clay Pots and Spices"
                fill
                className="object-cover"
                priority
                quality={100}
                sizes="100vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== WHO WE ARE ==================== */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[300px] md:h-[400px] w-full rounded-3xl overflow-hidden shadow-xl border-[8px] border-[#F5F0E6]">
              <Image 
                src="/about-products.jpg" 
                alt="Natural Cow Dung Products"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#231711]"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#231711] font-[family-name:var(--font-playfair)]">
                Who We Are
              </h2>
              <div className="h-[2px] w-12 bg-[#231711]"></div>
            </div>
            <p className="text-lg text-[#4A6741] font-semibold mb-6 font-[family-name:var(--font-inter)]">
              Vardaan Enterprises was founded with a simple belief — that purity, 
              sustainability, and tradition should remain a part of modern living.
            </p>
            <p className="text-gray-600 leading-relaxed font-[family-name:var(--font-inter)]">
              We specialize in authentic <strong className="text-[#231711]">Gau-based products</strong>, 
              herbal items, and handcrafted goods that reflect India's ancient wisdom. 
              Our mission is to bridge the gap between nature and daily life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== VALUES GRID (Staggered Animation) ==================== */}
      <section className="w-full py-24 px-6 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-[#231711] font-[family-name:var(--font-playfair)] relative inline-block"
          >
            Our Values
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#4A6741]"></span>
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 } // Delay between each card
              }
            }}
          >
            <ValueCard icon={<Leaf size={40} />} title="Purity" desc="No chemicals, no shortcuts. Only 100% natural ingredients." />
            <ValueCard icon={<Sun size={40} />} title="Sustainability" desc="Eco-friendly & biodegradable products that heal the earth." />
            <ValueCard icon={<Heart size={40} />} title="Tradition" desc="Inspired by Indian culture and ancient Ayurvedic wisdom." />
            <ValueCard icon={<ShieldCheck size={40} />} title="Honesty" desc="Transparent sourcing, fair pricing, and genuine quality." />
          </motion.div>
        </div>
      </section>

      {/* ==================== PRODUCT PHILOSOPHY (Blur Reveal) ==================== */}
      <section className="w-full py-20 px-6 bg-[#E3F0E5] relative border-y border-[#C8DBCB]">
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-10 flex items-center justify-center gap-4 opacity-60">
             <div className="h-[1px] bg-[#1A3C2B] w-full"></div>
             <div className="text-[#1A3C2B]">✦</div>
             <div className="h-[1px] bg-[#1A3C2B] w-full"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A3C2B] font-[family-name:var(--font-playfair)]">
            Our Products Philosophy
          </h2>
          <Reveal3D delay={0.4}>
          <p className="text-lg md:text-xl text-[#3A5A40] font-[family-name:var(--font-inter)] leading-relaxed max-w-2xl mx-auto">
            Each product we offer is carefully made using traditional methods, ensuring it carries
            not just quality, but <span className="font-semibold text-[#B8860B]">also positive energy and cultural significance.</span>
          </p>
          </Reveal3D>

          <div className="mt-10 flex items-center justify-center gap-4 opacity-60">
             <div className="h-[1px] bg-[#1A3C2B] w-full"></div>
             <div className="text-[#1A3C2B]">✦</div>
             <div className="h-[1px] bg-[#1A3C2B] w-full"></div>
          </div>
        </motion.div>
      </section>

      {/* ==================== WHY CHOOSE US (List Reveal) ==================== */}
      <section className="w-full py-20 px-6 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[2px] w-12 bg-[#8FBC8F]"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C2B] font-[family-name:var(--font-playfair)] italic">
                Why choose Vardaan Enterprises
              </h2>
            </motion.div>

            <ul className="space-y-6">
              {[
                "100% Natural Vegan",
                "Handmade with care",
                "Inspired by Indian tradition",
                "Suitable for daily rituals and gifting"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }} // Staggered list
                  viewport={{ once: true }}
                  className="flex items-center gap-4 text-lg text-gray-700 font-[family-name:var(--font-inter)]"
                >
                  <div className="w-8 h-8 rounded-full bg-[#1A3C2B] flex items-center justify-center text-white flex-shrink-0">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white">
              <Image 
                src="/why-choose.jpg" 
                alt="Ayurvedic Ingredients"
                fill
                className="object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== NOTE FROM VARDAAN ==================== */}
      <section className="w-full py-20 px-6 bg-[#E3F0E5] border-t border-[#C8DBCB] text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-8 opacity-40">
             <div className="h-[1px] bg-[#1A3C2B] w-24"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A3C2B] font-[family-name:var(--font-playfair)]">
            A Note from Vardaan Enterprises
          </h2>

          <blockquote className="text-2xl md:text-3xl font-bold text-[#2E4F38] font-[family-name:var(--font-poppins)] leading-relaxed mb-10">
            “Our mission is not just to sell products, but to bring back mindful life into everyday life.”
          </blockquote>

          <div className="text-right">
             <p className="text-4xl text-[#1A3C2B] font-[family-name:var(--font-alex-brush)] pr-4">
               With Gratitude,
             </p>
             <p className="text-xl font-bold font-[family-name:var(--font-playfair)] text-[#1A3C2B] mt-2">
               Vardaan Enterprises
             </p>
          </div>
          
           <div className="flex items-center justify-center gap-4 mt-12 opacity-40">
             <div className="h-[1px] bg-[#1A3C2B] w-full"></div>
          </div>
        </motion.div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="w-full bg-[#231711] text-[#E0D0C0] pt-16 pb-8 px-6 font-[family-name:var(--font-inter)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:border-r border-white/20 md:pr-8">
            <h3 className="text-2xl font-bold mb-6 text-white font-[family-name:var(--font-playfair)]">Vardaan Enterprises</h3>
            <p className="text-sm opacity-80">Rooted in tradition, creating natural products inspired by Indian culture.</p>
          </div>
          <div className="md:border-r border-white/20 md:px-8">
            <h4 className="text-xl font-bold mb-6 text-white font-[family-name:var(--font-playfair)]">Quick Links</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white">Products</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div className="md:border-r border-white/20 md:px-8">
            <h4 className="text-xl font-bold mb-6 text-white font-[family-name:var(--font-playfair)]">Categories</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link href="/products/gau-craft" className="hover:text-white">Gau Crafts</Link></li>
              <li><Link href="/products/herbal" className="hover:text-white">Herbal</Link></li>
              <li><Link href="/products/laddus" className="hover:text-white">Traditional Laddus</Link></li>
            </ul>
          </div>
          <div className="md:pl-8">
            <h4 className="text-xl font-bold mb-6 text-white font-[family-name:var(--font-playfair)]">Contact</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li className="flex items-start gap-3"><MapPin size={18} /><span>India</span></li>
              <li className="flex items-start gap-3"><Phone size={18} /><span>+91 78590 07833</span></li>
              <li className="flex items-center gap-3"><Mail size={18} /><span>vardaan.enterprises31@gmail.com</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/20 text-center text-sm opacity-60">
          © 2026 Vardaan Enterprises. All Rights Reserved.
        </div>
      </footer>

    </main>
  );
}

// Helper Card with Animation Support
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      variants={cardVariants}
      className="bg-white p-8 rounded-2xl shadow-sm border border-[#F2E8D9] flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="mb-6 p-4 bg-[#F5F0E6] rounded-full text-[#4A6741]">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-[#231711] font-[family-name:var(--font-playfair)]">{title}</h3>
      <p className="text-sm text-gray-600 font-[family-name:var(--font-inter)] leading-relaxed">{desc}</p>
    </motion.div>
  );
}