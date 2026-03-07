'use client';

import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, Leaf, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isHovered, setIsHovered] = useState(false);
  
  // This state controls our new button animation! ('idle', 'sending', or 'sent')
  const [buttonState, setButtonState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSendMessage = () => {
    // If it's already sending, don't let them click again
    if (buttonState !== 'idle') return;
    
    // Step 1: Start sending animation
    setButtonState('sending');
    
    // Step 2: Wait 1.5 seconds, then show Success checkmark
    setTimeout(() => {
      setButtonState('sent');
      
      // Step 3: Wait 3 more seconds, then reset the button
      setTimeout(() => {
        setButtonState('idle');
      }, 3000);
    }, 1500);
  };

  // Staggered Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#F4EFE6] text-[#4A3B32] pb-12 relative">
      <Navbar />

      {/* ==================== SUBTLE BACKGROUND MOTION ==================== */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 text-[#E8E2D6]/40 pointer-events-none z-0"
      >
        <Leaf size={400} />
      </motion.div>
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 -left-40 text-[#E8E2D6]/40 pointer-events-none z-0"
      >
        <Leaf size={500} />
      </motion.div>

      {/* ==================== HEADER SECTION ==================== */}
      <section className="w-full pt-48 pb-10 px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4 text-[#8B5A2B]">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }} className="w-2 h-2 bg-[#8B5A2B] rounded-full" />
            <span className="uppercase tracking-[0.2em] text-xs font-bold font-[family-name:var(--font-inter)]">We Are Here For You</span>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }} className="w-2 h-2 bg-[#8B5A2B] rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4A3B32] font-[family-name:var(--font-playfair)] tracking-wide">
            We’d Love to Hear From You
          </h1>
          <p className="text-lg text-gray-600 font-[family-name:var(--font-inter)] leading-relaxed">
            Have a question about our products or need assistance?<br className="hidden md:block"/> 
            Our dedicated team is ready to help.
          </p>
        </motion.div>
      </section>

      {/* ==================== CONTACT CARDS GRID ==================== */}
      <section className="w-full py-6 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Card 1: Call Us */}
            <ContactCard 
              icon={<Phone size={22} className="text-[#8B5A2B]" />} 
              title="Call Us" 
              detail="+91 78590 07833" 
              subdetail="Mon - Sat, 10 AM - 6 PM" 
            />

          {/* Card 2: Email Us */}
        <ContactCard 
          icon={<Mail size={22} className="text-[#8B5A2B]" />}
          title="Email Us"
          detail={
            <span className="inline-flex flex-wrap justify-center text-center">
              <span>support@</span>
              <span className="whitespace-nowrap">vardaanenterprises.com</span>
            </span>
          }
          subdetail="We reply within 24 hours"
        />

            {/* Card 3: Visit Us */}
            <ContactCard 
              icon={<MapPin size={22} className="text-[#8B5A2B]" />} 
              title="Visit Us" 
              detail="India" 
              subdetail="Mon - Sat, 10 AM - 9 PM" 
            />
          </motion.div>
        </div>
      </section>

      {/* ==================== FORM SECTION ==================== */}
      <section className="w-full py-16 px-6 relative z-10">
        <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E8E2D6]">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent to-[#D0C5B5]"></div>
            <h2 className="text-3xl font-bold text-[#4A3B32] font-[family-name:var(--font-playfair)] px-4">
              Get In Touch
            </h2>
            <div className="flex-grow h-[1px] bg-gradient-to-l from-transparent to-[#D0C5B5]"></div>
          </motion.div>

          {/* Interactive Contact Form */}
          <motion.form 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedInput type="text" placeholder="Full Name" />
              <AnimatedInput type="email" placeholder="Email Address" />
            </div>

            <AnimatedInput type="tel" placeholder="Phone Number" />

            <motion.textarea 
              variants={itemVariants}
              whileFocus={{ scale: 1.01, boxShadow: "0px 4px 20px rgba(139, 90, 43, 0.08)" }}
              placeholder="Your Message" 
              rows={5}
              className="w-full px-6 py-4 rounded-2xl border border-[#D0C5B5] bg-white/80 text-gray-800 font-[family-name:var(--font-inter)] focus:outline-none focus:border-[#8B5A2B] focus:ring-1 focus:ring-[#8B5A2B] transition-all shadow-sm placeholder-gray-400 resize-none"
            ></motion.textarea>

            <motion.div variants={itemVariants} className="text-center pt-6 flex justify-center">
              
              {/* THE NEW ANIMATED MAGIC BUTTON */}
              <motion.button 
                whileHover={buttonState === 'idle' ? { scale: 1.05 } : {}}
                whileTap={buttonState === 'idle' ? { scale: 0.95 } : {}}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={handleSendMessage}
                type="button" 
                disabled={buttonState !== 'idle'}
                className={`relative overflow-hidden inline-flex items-center justify-center h-14 w-56 rounded-full text-white font-bold text-sm tracking-[0.1em] uppercase shadow-xl transition-all duration-500 ${
                  buttonState === 'sent' ? 'bg-[#1A3626]' : 'bg-[#4A3B32] hover:bg-[#8B5A2B]'
                }`}
              >
                <AnimatePresence mode="popLayout">
                  
                  {/* STATE 1: IDLE */}
                  {buttonState === 'idle' && (
                    <motion.div 
                      key="idle"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      className="flex items-center gap-3 absolute"
                    >
                      Send Message
                      <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Send size={16} />
                      </motion.div>
                    </motion.div>
                  )}

                  {/* STATE 2: SENDING (Airplane takes off!) */}
                  {buttonState === 'sending' && (
                    <motion.div 
                      key="sending"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      className="flex items-center gap-3 absolute"
                    >
                      Sending
                      <motion.div 
                        animate={{ x: [0, 10, 60], y: [0, -10, -60], opacity: [1, 1, 0] }} 
                        transition={{ duration: 0.8, ease: "easeIn" }}
                      >
                        <Send size={16} />
                      </motion.div>
                    </motion.div>
                  )}

                  {/* STATE 3: SENT SUCCESS */}
                  {buttonState === 'sent' && (
                    <motion.div 
                      key="sent"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="flex items-center gap-2 absolute"
                    >
                      <CheckCircle size={18} />
                      Message Sent!
                    </motion.div>
                  )}
                  
                </AnimatePresence>
              </motion.button>
              
            </motion.div>
          </motion.form>

        </div>
      </section>

      {/* ==================== TRUST BADGES SECTION ==================== */}
      <section className="w-full max-w-5xl mx-auto px-6 relative z-10">
        <div className="border-t border-[#D0C5B5] pt-16 pb-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0 items-center text-center md:divide-x divide-[#D0C5B5]"
          >
            {/* 1. Natural */}
            <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="flex flex-col items-center justify-center p-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                <path d="M12 22C12 22 20 18 20 12C20 6 15 2 12 2C9 2 4 6 4 12C4 18 12 22 12 22Z" fill="#8BC34A" fillOpacity="0.2" stroke="#8BC34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V12" stroke="#8BC34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12L16 8" stroke="#8BC34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16L8 12" stroke="#8BC34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-[#231711] font-medium font-[family-name:var(--font-inter)] text-sm md:text-base">100% Natural Products</p>
            </motion.div>

            {/* 2. Trusted / Heart */}
            <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="flex flex-col items-center justify-center p-4">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="#EF5350" xmlns="http://www.w3.org/2000/svg" className="mb-3 drop-shadow-sm">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                <path d="M8 11.5c1.5 2.5 4.5 2.5 6 0" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              </svg>
              <p className="text-[#231711] font-medium font-[family-name:var(--font-inter)] text-sm md:text-base">Trusted by Happy Customer</p>
            </motion.div>

            {/* 3. Made in India / Flag */}
            <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="flex flex-col items-center justify-center p-4">
              <svg width="60" height="40" viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg" className="mb-4 rounded-md shadow-md">
                <rect width="90" height="20" fill="#FF9933"/>
                <rect y="20" width="90" height="20" fill="#FFFFFF"/>
                <rect y="40" width="90" height="20" fill="#138808"/>
                <circle cx="45" cy="30" r="8" fill="none" stroke="#000080" strokeWidth="1.5"/>
                <circle cx="45" cy="30" r="1.5" fill="#000080"/>
              </svg>
              <p className="text-[#231711] font-medium font-[family-name:var(--font-inter)] text-sm md:text-base">Made In India</p>
            </motion.div>

            {/* 4. Secure */}
            <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="flex flex-col items-center justify-center p-4">
              <svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 drop-shadow-sm">
                <path d="M10 22V14C10 8.477 14.477 4 20 4C25.523 4 30 8.477 30 14V22" stroke="#4A3B32" strokeWidth="5" strokeLinecap="round"/>
                <rect x="3" y="20" width="34" height="26" rx="6" fill="#4A3B32"/>
                <circle cx="20" cy="33" r="3.5" fill="white"/>
              </svg>
              <p className="text-[#231711] font-medium font-[family-name:var(--font-inter)] text-sm md:text-base">Secure Communication</p>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}

// Helper Component for Contact Cards
function ContactCard({ icon, title, detail, subdetail }: { icon: React.ReactNode, title: string, detail: string, subdetail: string }) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 20 } }
      }}
      whileHover={{ y: -8, boxShadow: "0px 15px 30px rgba(139, 90, 43, 0.1)" }}
      className="bg-white p-8 rounded-3xl shadow-sm text-center border border-[#E8E2D6] w-full flex flex-col items-center cursor-default transition-all duration-300"
    >
      <motion.div 
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-14 h-14 bg-[#FAF0E6] rounded-full flex items-center justify-center mb-5"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-[#4A3B32] font-[family-name:var(--font-playfair)] mb-4">{title}</h3>
      
      <p className="text-sm md:text-base font-semibold text-[#4A3B32] mb-2 font-[family-name:var(--font-inter)] break-all sm:break-words w-full">
        {detail}
      </p>
      <p className="text-[13px] text-gray-500 font-[family-name:var(--font-inter)]">{subdetail}</p>
    </motion.div>
  );
}

// Helper Component for Animated Form Inputs
function AnimatedInput({ type, placeholder }: { type: string, placeholder: string }) {
  return (
    <motion.input 
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      whileFocus={{ scale: 1.02, boxShadow: "0px 4px 20px rgba(139, 90, 43, 0.08)" }}
      type={type} 
      placeholder={placeholder} 
      className="w-full px-6 py-4 rounded-full border border-[#D0C5B5] bg-white/80 text-gray-800 font-[family-name:var(--font-inter)] focus:outline-none focus:border-[#8B5A2B] focus:ring-1 focus:ring-[#8B5A2B] transition-all shadow-sm placeholder-gray-400"
    />
  );
}