"use client";

import { motion } from "framer-motion";

export default function InfiniteMarquee() {
  // This text focuses purely on your core natural offerings
  const marqueeText = "✦ Cow Dung Products ✦ Herbal Products ✦ Authentic Gau-Based Wellness ✦ Eco-Friendly Tradition ";

  return (
    // The container hides anything that slides outside of it
    <div className="relative flex overflow-x-hidden bg-[#1A3626] text-[#F4EFE6] py-4 md:py-6 shadow-inner border-y-4 border-[#8B5E34]">
      
      {/* The motion div that smoothly slides to the left */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // Lower this number to make it scroll faster
        }}
      >
        {/* We repeat the text multiple times so the loop never breaks */}
        <span className="text-lg md:text-3xl font-serif tracking-widest px-2">
          {marqueeText}
        </span>
        <span className="text-lg md:text-3xl font-serif tracking-widest px-2">
          {marqueeText}
        </span>
        <span className="text-lg md:text-3xl font-serif tracking-widest px-2">
          {marqueeText}
        </span>
        <span className="text-lg md:text-3xl font-serif tracking-widest px-2">
          {marqueeText}
        </span>
      </motion.div>
    </div>
  );
}