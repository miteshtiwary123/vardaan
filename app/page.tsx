import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./components/FadeIn";
import Marquee from "./components/Marquee"; // 1. Import Marquee
import { MapPin, Phone, Mail, Leaf, Heart, Sun } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F0E6]">
      
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. HERO SECTION */}
      <section className="w-full">
        <FadeIn>
          <Image 
            src="/ganesha-hero.png" 
            alt="Ganesha Idol"
            width={1500} 
            height={1500}
            className="w-full h-auto" 
            priority
          />
        </FadeIn>
      </section>

      {/* 3. NEW: MARQUEE STRIP */}
      <Marquee />

      {/* 4. ABOUT US SECTION */}
      <section className="w-full py-24 px-6 relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-8 text-black font-[family-name:var(--font-playfair)]">
              About Us
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-[family-name:var(--font-inter)] font-light">
              Vardaan Enterprises is a nature-inspired brand dedicated to creating 
              Eco-friendly products rooted in Indian tradition. Crafted from natural 
              cow dung, our products reflect purity, sustainability, and thoughtful 
              design. We strive to offer meaningful alternatives that respect the 
              environment while preserving cultural values.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ==================== TRUST SIGNALS ==================== */}
      <section className="w-full py-16 border-y border-[#E5DAC5] bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          <FadeIn delay={0.1}>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#1A3C2B] rounded-full flex items-center justify-center mb-6 text-[#F5F0E6]">
                <Leaf size={32} />
              </div>
              {/* ADDED: text-[#1A3C2B] to make the heading dark green and visible */}
              <h3 className="text-xl font-bold mb-3 text-[#1A3C2B] font-[family-name:var(--font-playfair)]">
                100% Organic
              </h3>
              {/* ADDED: text-gray-700 to make the paragraph readable */}
              <p className="text-sm text-gray-700 px-8">
                Made purely from natural elements, ensuring zero harm to the environment.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#1A3C2B] rounded-full flex items-center justify-center mb-6 text-[#F5F0E6]">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1A3C2B] font-[family-name:var(--font-playfair)]">
                Handcrafted with Love
              </h3>
              <p className="text-sm text-gray-700 px-8">
                Every piece is molded by skilled artisans preserving ancient Indian techniques.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#1A3C2B] rounded-full flex items-center justify-center mb-6 text-[#F5F0E6]">
                <Sun size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1A3C2B] font-[family-name:var(--font-playfair)]">
                Spiritual Purity
              </h3>
              <p className="text-sm text-gray-700 px-8">
                Rooted in Ayurveda and Sanatan Dharma, bringing positive energy to your home.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* 6. FEATURED CATEGORIES */}
      <section className="w-full py-24 px-6 relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-[1px] w-12 md:w-24 bg-gray-400"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
                Featured Categories
              </h2>
              <div className="h-[1px] w-12 md:w-24 bg-gray-400"></div>
            </div>
            
            <p className="text-center text-[#4A6741] font-medium text-lg mb-16 font-[family-name:var(--font-inter)] tracking-widest uppercase text-xs">
              Rooted in Tradition. Crafted with Purity
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FadeIn delay={0.2}>
              <CategoryCard 
                image="/cat-gau.jpg" 
                title="Gau Craft" 
                subtitle="Sacred & Natural Creations"
                link="/products?category=gau" 
              />
            </FadeIn>

            <FadeIn delay={0.4}>
              <CategoryCard 
                image="/cat-herbal.jpg" 
                title="Herbal" 
                subtitle="Pure & Healing Remedies"
                link="/products?category=herbal"
              />
            </FadeIn>

            <FadeIn delay={0.6}>
              <CategoryCard 
                image="/cat-laddus.jpg" 
                title="Traditional Laddus" 
                subtitle="Authentic Indian Sweets"
                link="/products?category=laddu"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="w-full bg-[#231711] text-[#E0D0C0] pt-20 pb-10 px-6 font-[family-name:var(--font-inter)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="md:border-r border-[#3A2A22] md:pr-10">
            <h3 className="text-2xl font-bold mb-6 text-white font-[family-name:var(--font-playfair)] italic">
              Vardaan Enterprises
            </h3>
            <p className="text-sm leading-relaxed opacity-70">
              Rooted in tradition, we create natural and Eco-friendly products 
              inspired by Indian culture, purity, and sustainability.
            </p>
          </div>

          <div className="md:border-r border-[#3A2A22] md:px-10">
            <h4 className="text-lg font-semibold mb-6 text-white tracking-wide uppercase text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li><Link href="/" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Home</Link></li>
              <li><Link href="/about" className="hover:text-white hover:translate-x-1 transition-transform inline-block">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Products</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Contact Us</Link></li>
            </ul>
          </div>

          <div className="md:border-r border-[#3A2A22] md:px-10">
            <h4 className="text-lg font-semibold mb-6 text-white tracking-wide uppercase text-xs">Categories</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li><Link href="/products?category=gau" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Gau Crafts</Link></li>
              <li><Link href="/products?category=herbal" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Herbal</Link></li>
              <li><Link href="/products?category=laddu" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Traditional Laddus</Link></li>
            </ul>
          </div>

          <div className="md:pl-10">
            <h4 className="text-lg font-semibold mb-6 text-white tracking-wide uppercase text-xs">Contact</h4>
            <ul className="space-y-5 text-sm opacity-70">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#8FBC8F]" />
                <span>India</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={18} className="mt-1 flex-shrink-0 text-[#8FBC8F]" />
                <span>+91 78590 07833 <br/>+91 79790 44753</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="flex-shrink-0 text-[#8FBC8F]" />
                <span>vardaan.enterprises31@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#3A2A22] text-center text-xs opacity-40 uppercase tracking-widest">
          © 2026 Vardaan Enterprises. All Rights Reserved.
        </div>
      </footer>

    </main>
  );
}

// Card Component
function CategoryCard({ image, title, subtitle, link }: { image: string, title: string, subtitle: string, link: string }) {
  return (
    <Link href={link} className="group block h-full">
      <div className="bg-white p-4 rounded-3xl shadow-md hover:shadow-2xl border-[8px] border-[#F2E8D9] flex flex-col h-full transition-all duration-500 group-hover:-translate-y-2">
        <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 z-10 transition-colors duration-500"></div>
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        <div className="text-center flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-[family-name:var(--font-playfair)] group-hover:text-[#1A3C2B] transition-colors">
              {title}
            </h3>
            <p className="text-gray-500 text-sm mb-6 font-[family-name:var(--font-inter)]">
              {subtitle}
            </p>
          </div>
          
          <div className="flex justify-center pb-2">
              <span className="inline-block px-8 py-3 rounded-full border border-gray-300 text-gray-600 group-hover:bg-[#1A3C2B] group-hover:text-white group-hover:border-[#1A3C2B] transition-all duration-300 text-xs font-bold uppercase tracking-widest">
                Explore Collection
              </span>
          </div>
        </div>
      </div>
    </Link>
  );
}