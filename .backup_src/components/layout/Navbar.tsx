"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(248, 250, 252, 0)", "rgba(248, 250, 252, 0.8)"]
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    ["rgba(148, 163, 184, 0)", "rgba(148, 163, 184, 0.1)"]
  );

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Skills", href: "#skills" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <motion.nav
      style={{ 
        backgroundColor, 
        backdropFilter: backdropBlur, 
        WebkitBackdropFilter: backdropBlur,
        borderBottom: "1px solid",
        borderBottomColor: borderOpacity
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-stitch bg-stitch-primary flex items-center justify-center text-white transition-transform group-hover:rotate-12">
            <GraduationCap size={24} />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-stitch-primary">
            Academia
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-stitch-text-muted hover:text-stitch-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-6 w-[1px] bg-stitch-border mx-2" />
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button variant="primary" size="sm" className="group" asChild>
            <Link href="/workspace">
              Go to Workspace
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-stitch-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 right-0 bg-white border-b border-stitch-border p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-stitch-text"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-stitch-border" />
          <Button variant="primary" className="w-full" asChild>
            <Link href="/workspace">Get Started</Link>
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
