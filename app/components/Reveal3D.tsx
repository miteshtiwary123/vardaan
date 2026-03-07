"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Reveal3DProps {
  children: ReactNode;
  delay?: number;
}

export default function Reveal3D({ children, delay = 0 }: Reveal3DProps) {
  return (
    <motion.div
      // Starts faded out, pushed down, scaled down slightly, and tilted back in 3D space
      initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: 30 }}
      
      // Animates into its natural, flat position when it enters the screen
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      
      // Trigger the animation once the element is 100px into the viewport
      viewport={{ once: true, margin: "-100px" }}
      
      // The physical spring settings make it feel weighty and organic
      transition={{
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom cubic-bezier for a very premium snap
        delay: delay,
      }}
      
      // Perspective is required on the parent/element to render the 3D rotateX properly
      style={{ perspective: "1000px" }}
    >
      {children}
    </motion.div>
  );
}