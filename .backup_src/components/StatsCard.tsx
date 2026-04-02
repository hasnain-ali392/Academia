"use client";
import * as React from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  label: string;
  value: number;
  icon: LucideIcon;
  description: string;
  color?: "primary" | "secondary" | "accent";
}

export function StatsCard({ label, value, icon: Icon, description, color = "primary" }: StatsCardProps) {
  // Use Framer Motion for the spring animation
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform the spring value to a formatted integer
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest).toLocaleString());

  React.useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);

  const bgVariants = {
    primary: "bg-stitch-primary/10 text-stitch-primary",
    secondary: "bg-stitch-secondary/10 text-stitch-secondary",
    accent: "bg-stitch-accent/10 text-stitch-accent",
  };

  return (
    <div className="p-6 rounded-stitch-lg border border-stitch-border bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <div className={cn("p-3 rounded-stitch transition-transform group-hover:rotate-12", bgVariants[color])}>
          <Icon size={24} />
        </div>
        <motion.span className="text-3xl font-display font-bold text-stitch-primary">
          {displayValue}
        </motion.span>
      </div>
      <div>
        <p className="text-sm font-semibold text-stitch-primary mb-1 uppercase tracking-wider">
          {label}
        </p>
        <p className="text-xs text-stitch-text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
