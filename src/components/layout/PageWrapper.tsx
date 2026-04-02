"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function PageWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.main>
  );
}
