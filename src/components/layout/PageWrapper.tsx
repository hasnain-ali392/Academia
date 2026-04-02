"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function PageWrapper({ children, className, delay = 0 }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}
