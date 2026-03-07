'use client';

import { motion } from 'framer-motion';

export default function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Start: Invisible and 30px down
      whileInView={{ opacity: 1, y: 0 }} // End: Visible and in original spot
      viewport={{ once: true, margin: "-100px" }} // Trigger when 100px into view
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }} // Take 0.8 seconds
    >
      {children}
    </motion.div>
  );
}