"use client";

import * as React from "react";
import { useSpring, animated } from "@react-spring/web";
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
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  const colorVariants = {
    primary: "bg-stitch-primary text-white",
    secondary: "bg-stitch-secondary text-white",
    accent: "bg-stitch-accent text-stitch-primary",
  };

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
        <animated.span className="text-3xl font-display font-bold text-stitch-primary">
          {number.to((n) => Math.floor(n))}
        </animated.span>
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
