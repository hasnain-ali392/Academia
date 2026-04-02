import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({ 
  variant = "primary", size = "md", className, children, ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-stitch font-body transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stitch-accent",
        variant === "primary" && "bg-stitch-primary text-stitch-surface hover:opacity-90",
        variant === "secondary" && "bg-stitch-surface border border-stitch-border text-stitch-text hover:bg-stitch-surface-alt",
        variant === "ghost" && "text-stitch-text hover:text-stitch-accent",
        size === "sm" && "px-3 py-1.5 text-sm",
        size === "md" && "px-5 py-2.5 text-base",
        size === "lg" && "px-8 py-4 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
