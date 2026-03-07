'use client';

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ShoppingBag, Sparkles, X, MessageCircle, Leaf } from "lucide-react";

// --- 1. GAU CRAFT PRODUCTS (20 Items) ---
const gauProducts = [
  { id: 1, name: "Cow Dung Diya", price: "199", oldPrice: "499", discount: "-60%", extra: "Pack of 5, ₹30 per diya", image: "/gau-craft/diya.jpg", description: "Perfect for daily puja and festive occasions. These 100% natural cow dung diyas purify the air when burnt." },
  { id: 2, name: "Cow Dung Puja Thali", price: "799", oldPrice: "840", discount: "-15%", extra: "", image: "/gau-craft/thali.jpg", description: "An elegantly crafted puja thali made entirely from holy cow dung. Ideal for offering aarti." },
  { id: 3, name: "Cow Dung Laxmi Charan", price: "499", oldPrice: "699", discount: "-28%", extra: "", image: "/gau-craft/laxmi.jpg", description: "Invite prosperity and auspiciousness into your home with these sacred Laxmi footprints." },
  { id: 4, name: "Cow Dung Shivling", price: "3,999", oldPrice: "5,999", discount: "-30%", extra: "", image: "/gau-craft/shivling.jpg", description: "Experience deep spiritual resonance with this meticulously handcrafted cow dung Shivling." },
  { id: 5, name: "Cow Dung Toran", price: "399", oldPrice: "499", discount: "-20%", extra: "", image: "/gau-craft/toran.jpg", description: "Welcome guests and divine energy with this beautiful, eco-friendly toran." },
  { id: 6, name: "Cow Dung Ganesh Ji", price: "3,999", oldPrice: "5,999", discount: "-30%", extra: "", image: "/gau-craft/ganesh.jpg", description: "A magnificent idol of Lord Ganesha, crafted entirely from pure cow dung." },
  { id: 7, name: "Cow Dung Clock", price: "999", oldPrice: "1,299", discount: "-23%", extra: "", image: "/gau-craft/clock.jpg", description: "Blend tradition with utility. This beautiful wall clock features authentic Indian motifs." },
  { id: 8, name: "Cow Dung Phone Stand", price: "199", oldPrice: "499", discount: "-60%", extra: "", image: "/gau-craft/stand.jpg", description: "A sustainable addition to your desk. Keep your phone secure while supporting rural artisans." },
  { id: 9, name: "Cow Dung Jhummer", price: "499", oldPrice: "699", discount: "-30%", extra: "", image: "/gau-craft/jhummer.jpg", description: "Elevate your home decor with this traditional hanging jhummer." },
  { id: 10, name: "Cow Dung Shree Yantra", price: "899", oldPrice: "1,299", discount: "-31%", extra: "", image: "/gau-craft/shree-yantra.jpg", description: "A powerful geometric symbol of cosmic energy, carefully structured from pure cow dung." },
  { id: 11, name: "Cow Dung Dholak", price: "1,299", oldPrice: "1,599", discount: "-19%", extra: "", image: "/gau-craft/dholak.jpg", description: "A beautiful decorative dholak that celebrates Indian musical heritage." },
  { id: 12, name: "Cow Dung Mala", price: "899", oldPrice: "999", discount: "-10%", extra: "", image: "/gau-craft/mala.jpg", description: "Sacred chanting beads crafted from treated cow dung. Lightweight and natural." },
  { id: 13, name: "Cow Dung Tulsi Vrindavan", price: "299", oldPrice: "499", discount: "-40%", extra: "", image: "/gau-craft/tulsi.jpg", description: "A miniature sacred planter designed specifically for your holy Tulsi plant." },
  { id: 14, name: "Cow Dung Baithak (Small)", price: "399", oldPrice: "599", discount: "-43%", extra: "", image: "/gau-craft/baithak-small.jpg", description: "A sturdy, beautifully painted sacred platform (asan) for placing your smaller deities." },
  { id: 15, name: "Cow Dung Baithak (Medium)", price: "599", oldPrice: "799", discount: "-25%", extra: "", image: "/gau-craft/baithak-medium.jpg", description: "An elegantly crafted medium-sized asan, perfect for your daily idols." },
  { id: 16, name: "Cow Dung Baithak (Large)", price: "699", oldPrice: "999", discount: "-30%", extra: "", image: "/gau-craft/baithak-large.jpg", description: "Our largest sacred platform, designed to hold grand idols or multiple deities." },
  { id: 17, name: "Cow Dung Flower Pot", price: "499", oldPrice: "699", discount: "-30%", extra: "", image: "/gau-craft/flower-pot.jpg", description: "A breathable, 100% biodegradable planter that naturally enriches the soil." },
  { id: 18, name: "Cow Dung Toran", price: "399", oldPrice: "499", discount: "-20%", extra: "", image: "/gau-craft/toran-2.jpg", description: "An exquisite variant of our eco-friendly door hangings, featuring traditional mirror-work." },
  { id: 19, name: "Cow Dung Clock (Small)", price: "699", oldPrice: "899", discount: "-22%", extra: "", image: "/gau-craft/clock-small.jpg", description: "A compact version of our eco-friendly wall clock. Perfectly sized for smaller rooms." },
  { id: 20, name: "Cow Dung Ganesh (Small)", price: "499", oldPrice: "699", discount: "-30%", extra: "", image: "/gau-craft/ganesh-small.jpg", description: "A lovely, compact idol of Ganpati Bappa. Highly detailed and perfect for small mandirs." }
];

// --- 2. LADDU PRODUCTS (7 Items) ---
const ladduProducts = [
  { id: 21, name: "Gond Laddu (Edible Laddu) (1kg)", price: "800", image: "/laddus/gond.jpg", description: "Traditional energy-boosting laddus made with edible gum, pure desi ghee, and premium dry fruits." },
  { id: 22, name: "Sugar Free Mushroom Biscuit (100g)", price: "120", image: "/laddus/mushroom.jpg", description: "Healthy, sugar-free biscuits infused with the nutritional goodness of mushrooms." },
  { id: 23, name: "Tila Laddu (1Kg)", price: "600", image: "/laddus/tila.jpg", description: "Authentic sesame seed (til) and jaggery laddus. Rich in calcium and iron." },
  { id: 24, name: "Besan Laddu (100g)", price: "100", image: "/laddus/besan.jpg", description: "Classic, melt-in-the-mouth besan laddus roasted to perfection in pure desi ghee." },
  { id: 25, name: "Alsi Laddu (FlaxSeed Laddu) (100g)", price: "100", image: "/laddus/alsi.jpg", description: "Nutrient-dense flaxseed laddus packed with Omega-3. A delicious recipe for joint health." },
  { id: 26, name: "Amla Laddu (100g)", price: "50", image: "/laddus/amla.jpg", description: "Tangy and sweet amla laddus. A powerhouse of natural Vitamin C and antioxidants." },
  { id: 27, name: "Dry Fruit Laddu (100g)", price: "150", image: "/laddus/dry-fruit.jpg", description: "Premium laddus packed entirely with roasted nuts, seeds, and natural sweetness." }
];

// --- 3. HERBAL PRODUCTS (6 Items) ---
const herbalProducts = [
  { id: 28, name: "Vardaan Desi Khand (1Kg)", price: "150", image: "/herbal/desi-khand.jpg", description: "A raw, unrefined, and chemical-free natural sweetener. The perfect healthy replacement for processed white sugar in your daily life." },
  { id: 29, name: "Vardaan Sendha Namak (1Kg)", price: "100", image: "/herbal/sendha-namak.jpg", description: "Pure Himalayan pink rock salt, loaded with essential trace minerals to regulate blood pressure and improve digestion naturally." },
  { id: 30, name: "Vardaan Divya Pey (100g)", price: "150", image: "/herbal/divya-pey.jpg", description: "A revitalizing herbal infusion blend. Sip on the healing properties of ancient Indian herbs to detoxify your body and calm your mind." },
  { id: 31, name: "Vardaan Jaggery Desi Gur (1Kg)", price: "150", image: "/herbal/jaggery.jpg", description: "Traditional, deeply flavorful Desi Gur. Rich in iron and antioxidants, providing a perfect natural energy boost without the sugar crash." },
  { id: 32, name: "Vardaan Honey (1L)", price: "800", image: "/herbal/honey.jpg", description: "100% pure, unprocessed raw honey. Sourced directly from nature to provide powerful antibacterial properties and soothe your throat." },
  { id: 33, name: "Vardaan Nashya", price: "400", image: "/herbal/nashya.jpg", description: "Traditional Ayurvedic nasal drops formulated to clear the sinuses, relieve stress, and promote mental clarity and deep sleep." }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<'gau' | 'laddu' | 'herbal'>('gau');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // This is the new block that "listens" to the links from your home page!
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category === "gau" || category === "laddu" || category === "herbal") {
      setActiveCategory(category);
    }
  }, []);

  // Dynamic variables based on which button is clicked
  let currentProducts, heroTitle, heroSubtitle, heroBadge, badgeIcon;

  if (activeCategory === 'gau') {
    currentProducts = gauProducts;
    heroTitle = "Gau Craft";
    heroSubtitle = "Inspired by desi wisdom, Indian spirituality, and a deep respect for nature. Explore our sustainable creations, handcrafted to bring purity into your modern lifestyle.";
    heroBadge = "Sacred Collection";
    badgeIcon = <Sparkles size={16} />;
  } else if (activeCategory === 'laddu') {
    currentProducts = ladduProducts;
    heroTitle = "Traditional Laddus";
    heroSubtitle = "Experience the rich taste of heritage. Our traditional sweets are handcrafted using pure desi ghee, natural sweeteners, and ancient Ayurvedic recipes.";
    heroBadge = "Pure & Authentic";
    badgeIcon = <Sparkles size={16} />;
  } else {
    currentProducts = herbalProducts;
    heroTitle = "Herbal Products";
    heroSubtitle = "Embrace a holistic lifestyle with our pure, chemical-free herbal remedies and daily essentials, rooted deeply in traditional Indian wellness practices.";
    heroBadge = "Natural Wellness";
    badgeIcon = <Leaf size={16} />;
  }

  return (
    <main className="min-h-screen bg-[#F4EFE6] overflow-x-hidden">
      <Navbar />

      {/* ==================== DYNAMIC HERO SECTION ==================== */}
      <section className="w-full pt-48 pb-16 px-6 md:px-12 text-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-3xl mx-auto relative z-10"
          >
            <div className="flex items-center justify-center gap-2 mb-4 text-[#8B5A2B]">
              {badgeIcon}
              <span className="uppercase tracking-[0.2em] text-xs font-bold font-[family-name:var(--font-inter)]">{heroBadge}</span>
              {badgeIcon}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#4A3B32] font-[family-name:var(--font-playfair)]">
              {heroTitle}
            </h1>
            <p className="text-lg text-gray-600 font-[family-name:var(--font-inter)] leading-relaxed h-[80px]">
              {heroSubtitle}
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="w-24 h-[1px] bg-[#D0C5B5] mx-auto mt-6"></div>
      </section>

      {/* ==================== PRODUCT SECTION ==================== */}
      <section className="w-full pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* THE "MAGIC" 3-WAY SLIDING TOGGLE PILL */}
          <div className="flex flex-col items-center justify-center mb-16 relative z-20">
            <div className="relative inline-flex flex-wrap justify-center items-center bg-white p-1.5 rounded-3xl md:rounded-full shadow-sm border border-[#E8E2D6] gap-1 md:gap-0">
              
              <button onClick={() => setActiveCategory('gau')} className={`relative px-5 md:px-8 py-3 rounded-full text-sm font-bold font-[family-name:var(--font-inter)] transition-colors duration-300 z-10 flex items-center gap-2 ${activeCategory === 'gau' ? 'text-white' : 'text-[#6B5A4E] hover:text-[#8B5A2B]'}`}>
                {activeCategory === 'gau' && <motion.div layoutId="activeTabBackground" className="absolute inset-0 bg-[#4A3B32] rounded-full -z-10 shadow-md" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                Gau Craft
              </button>

              <button onClick={() => setActiveCategory('laddu')} className={`relative px-5 md:px-8 py-3 rounded-full text-sm font-bold font-[family-name:var(--font-inter)] transition-colors duration-300 z-10 flex items-center gap-2 ${activeCategory === 'laddu' ? 'text-white' : 'text-[#6B5A4E] hover:text-[#8B5A2B]'}`}>
                {activeCategory === 'laddu' && <motion.div layoutId="activeTabBackground" className="absolute inset-0 bg-[#4A3B32] rounded-full -z-10 shadow-md" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                Traditional Laddus
              </button>

              <button onClick={() => setActiveCategory('herbal')} className={`relative px-5 md:px-8 py-3 rounded-full text-sm font-bold font-[family-name:var(--font-inter)] transition-colors duration-300 z-10 flex items-center gap-2 ${activeCategory === 'herbal' ? 'text-white' : 'text-[#6B5A4E] hover:text-[#8B5A2B]'}`}>
                {activeCategory === 'herbal' && <motion.div layoutId="activeTabBackground" className="absolute inset-0 bg-[#4A3B32] rounded-full -z-10 shadow-md" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                Herbal
              </button>

            </div>
            
            <AnimatePresence mode="wait">
              <motion.span key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-gray-500 font-[family-name:var(--font-inter)] tracking-wide mt-6 hidden sm:block">
                Showing {currentProducts.length} products
              </motion.span>
            </AnimatePresence>
          </div>

          {/* THE SWIPING GRID ANIMATION */}
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {currentProducts.map((product, index) => (
                <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} onClick={() => setSelectedProduct(product)} className="group relative bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl border border-transparent hover:border-[#E8E2D6] transition-all duration-500 flex flex-col cursor-pointer">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-[#FCFAF8]">
                    <Image src={product.image} alt={product.name} fill className="object-contain p-2 transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4A3B32]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <button className="bg-white/95 backdrop-blur-sm text-[#4A3B32] px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg flex items-center gap-2 hover:bg-[#4A3B32] hover:text-white transition-colors">
                        <ShoppingBag size={16} /> Quick View
                      </button>
                    </div>
                  </div>

                  <div className="px-2 flex flex-col flex-grow text-center">
                    <h3 className="text-[15px] font-bold text-[#4A3B32] mb-3 font-[family-name:var(--font-playfair)] group-hover:text-[#8B5A2B] transition-colors">{product.name}</h3>
                    <div className="flex items-center justify-center gap-3 mb-2 flex-wrap">
                      <span className="text-lg font-bold text-[#4A3B32] font-[family-name:var(--font-inter)]">₹{product.price}</span>
                      {product.oldPrice && <span className="text-sm text-gray-400 line-through font-[family-name:var(--font-inter)]">₹{product.oldPrice}</span>}
                      {product.discount && <span className="bg-[#FAF0E6] text-[#8B5A2B] text-[10px] font-bold px-2.5 py-1 rounded-sm tracking-wider">{product.discount}</span>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#231711] text-[#E0D0C0] pt-16 pb-8 px-6 font-[family-name:var(--font-inter)] mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm opacity-60 tracking-wider">© 2026 Vardaan Enterprises. All Rights Reserved.</p>
        </div>
      </footer>

      {/* ==================== QUICK VIEW MODAL ==================== */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}>
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} transition={{ type: "spring", stiffness: 100, damping: 20 }} className="bg-[#FCFAF8] rounded-3xl p-6 md:p-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row gap-8 md:gap-12 relative border border-[#E8E2D6]" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-[#F4EFE6] text-[#4A3B32] hover:bg-[#E8E2D6] hover:rotate-90 transition-all duration-300 z-10"><X size={20} /></button>
              <div className="w-full md:w-1/2 relative aspect-square bg-white rounded-2xl overflow-hidden border border-[#F4EFE6]">
                <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-contain p-4" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-[#FAF0E6] text-[#8B5A2B] text-xs font-bold rounded-full w-fit mb-4 tracking-wider uppercase">
                  {heroBadge}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#4A3B32] mb-4 font-[family-name:var(--font-playfair)]">{selectedProduct.name}</h2>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-[#4A3B32] font-[family-name:var(--font-inter)]">₹{selectedProduct.price}</span>
                  {selectedProduct.oldPrice && <span className="text-lg text-gray-400 line-through font-[family-name:var(--font-inter)]">₹{selectedProduct.oldPrice}</span>}
                  {selectedProduct.discount && <span className="bg-[#FFE4E4] text-[#FF6B6B] text-sm font-bold px-3 py-1 rounded-md">{selectedProduct.discount}</span>}
                </div>
                <div className="w-full h-[1px] bg-[#E8E2D6] mb-6"></div>
                <p className="text-gray-600 mb-8 font-[family-name:var(--font-inter)] leading-relaxed">
                  {selectedProduct.description}
                  {selectedProduct.extra && <span className="block mt-4 font-medium text-[#8B5A2B]">✨ {selectedProduct.extra}</span>}
                </p>
                <a href={`https://wa.me/917859007833?text=Hari%20Om!%20I%20am%20interested%20in%20buying%20the%20*${selectedProduct.name}*%20(Price:%20%E2%82%B9${selectedProduct.price}).%20Please%20share%20more%20details.`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg font-[family-name:var(--font-inter)] shadow-lg hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                  <MessageCircle size={24} /> Buy via WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}