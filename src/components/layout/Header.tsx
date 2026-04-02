"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stitch-border/40 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-display text-2xl font-bold tracking-tight text-stitch-primary">
          Academia
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-body text-sm font-medium tracking-tight transition-colors",
                  isActive ? "text-stitch-primary" : "text-stitch-text-muted hover:text-stitch-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="primary">Sign Up</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-stitch-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-stitch-border/40 bg-stitch-surface px-6 py-4 md:hidden"
          >
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "font-body text-base font-medium",
                      isActive ? "text-stitch-primary" : "text-stitch-text-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button variant="primary" className="mt-4 w-full justify-center">
                Sign Up
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
