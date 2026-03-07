"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; // Assuming you are using lucide-react for icons!
import Link from "next/link";

export default function ExploreButton() {
  return (
    // We wrap it in a motion.div to define the "hover" state for the children
    <motion.div 
      initial="initial" 
      whileHover="hover" 
      className="inline-block mt-8"
    >
      <Link href="/products">
        <motion.button
          // The base button styling with overflow-hidden to contain the slide effect
          className="relative overflow-hidden flex items-center gap-3 px-8 py-4 rounded-full bg-[#8B5E34] text-[#FDF8F3] font-serif text-lg tracking-wide shadow-lg"
          whileTap={{ scale: 0.96 }} // A satisfying little "press" effect when clicked
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* THE MAGIC SLIDE EFFECT */}
          {/* This dark green background waits off-screen to the left (-100%) */}
          <motion.div
            className="absolute inset-0 bg-[#1A3626]"
            variants={{
              initial: { x: "-100%" },
              hover: { x: "0%" }
            }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          />
          
          {/* BUTTON TEXT */}
          {/* relative and z-10 keep the text ON TOP of the sliding background */}
          <span className="relative z-10">Explore Our Range</span>
          
          {/* ARROW ICON */}
          {/* Nudges 5 pixels to the right on hover to subconsciously signal forward movement */}
          <motion.span 
            className="relative z-10 flex items-center"
            variants={{
              initial: { x: 0 },
              hover: { x: 5 }
            }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight size={20} />
          </motion.span>

        </motion.button>
      </Link>
    </motion.div>
  );
}