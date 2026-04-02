"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ArrowRight, 
  GraduationCap, 
  FileText, 
  Layers, 
  Zap, 
  CheckCircle2, 
  Users, 
  Globe,
  Database
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Navbar } from "@/components/layout/Navbar";
import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LandingPage() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const heroRef = React.useRef<HTMLDivElement>(null);
  const featureRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    if (!containerRef.current || !heroRef.current) return;

    const ctx = gsap.context(() => {
      // Hero Parallax & Entrance
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });

      gsap.to(".hero-bg-shape", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Feature Stagger Reveal
      gsap.from(".feature-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featureRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Intelligent Stitching",
      desc: "Automatically merge academic documents with context-aware skill routing.",
      icon: Layers,
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Skill-Based Extraction",
      desc: "Extract specific data fragments using Claude's specialized academic skills.",
      icon: Zap,
      color: "bg-amber-500/10 text-amber-600",
    },
    {
      title: "Multi-Format Support",
      desc: "Seamlessly process PDFs, Word docs, Excel sheets, and visual assets.",
      icon: FileText,
      color: "bg-emerald-500/10 text-emerald-600",
    },
  ];

  return (
    <div ref={containerRef} className="relative bg-stitch-surface overflow-hidden min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        {/* Background Decorative Shapes */}
        <div className="hero-bg-shape absolute top-[-10%] right-[-10%] w-[60%] aspect-square bg-gradient-to-br from-stitch-accent/20 to-transparent rounded-full blur-3xl -z-10" />
        <div className="hero-bg-shape absolute bottom-[0%] left-[-10%] w-[50%] aspect-square bg-gradient-to-tr from-stitch-secondary/10 to-transparent rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="hero-content space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stitch-primary/10 border border-stitch-primary/5 text-stitch-primary font-medium text-sm">
              <span className="flex h-2 w-2 rounded-full bg-stitch-accent animate-pulse" />
              Claude Powered Academic Orchestration
            </div>

            <h1 className="text-5xl lg:text-7xl font-display font-black leading-[1.1] tracking-tight text-stitch-primary">
              Stitch Your Academic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stitch-primary via-stitch-secondary to-stitch-accent">
                World Together
              </span>
            </h1>

            <p className="text-xl text-stitch-text-muted max-w-2xl mx-auto leading-relaxed">
              Combine diverse academic assets into a unified masterpiece. Use AI-driven skills to extract, transform, and merge your research, data, and notes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="w-full sm:w-auto text-lg group" asChild>
                <Link href="/workspace">
                  Launch Workspace
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg bg-white/50 backdrop-blur-sm">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 w-full max-w-5xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-stitch-surface via-transparent to-transparent z-10 h-32 bottom-0" />
            <Card className="overflow-hidden border-stitch-border/50 shadow-3xl bg-white/80 backdrop-blur-xl">
              <div className="p-2 border-b border-stitch-border bg-stitch-surface/50 flex items-center gap-2 px-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/50" />
                </div>
                <div className="mx-auto text-[10px] text-stitch-text-muted font-medium bg-white/50 px-3 py-0.5 rounded-full border border-black/5">
                  workspace.academia.edu
                </div>
              </div>
              <div className="aspect-[16/9] bg-grid-slate-100 flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-stitch-primary/0 via-stitch-accent/5 to-stitch-secondary/5 opacity-50" />
                
                {/* Simulated Interface Grid */}
                <div className="grid grid-cols-3 gap-6 w-full max-w-3xl p-8 z-10 transition-transform duration-700 group-hover:scale-105">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-3">
                      <div className="h-24 rounded-stitch-lg bg-white/80 border border-stitch-border shadow-sm flex items-center justify-center animate-float" style={{ animationDelay: `${i * 1.5}s` }}>
                        <Database className="text-stitch-secondary/40" size={32} />
                      </div>
                      <div className="h-3 w-2/3 bg-stitch-primary/10 rounded-full mx-auto" />
                      <div className="h-2 w-1/2 bg-stitch-primary/5 rounded-full mx-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section ref={featureRef} id="features" className="py-24 lg:py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-display font-bold">
              Built for Modern Academia
            </h2>
            <p className="text-stitch-text-muted text-lg max-w-2xl mx-auto">
              Smarter tools for document orchestration. Transform the way you handle research data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <Card key={i} className="feature-card border-stitch-border/30 hover:border-stitch-accent/50 group">
                <CardContent className="pt-8">
                  <div className={cn("inline-flex p-4 rounded-stitch-lg mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6", f.color)}>
                    <f.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-stitch-text-muted leading-relaxed">
                    {f.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-20 bg-stitch-surface/50 border-y border-stitch-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stitch-text-muted mb-10">
            Trusted by researchers from leading institutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24 opacity-40 grayscale contrast-150">
            {['HEC', 'MIT', 'Stanford', 'Oxford', 'CERN'].map(school => (
              <span key={school} className="text-2xl font-display font-black tracking-tighter">{school}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (Simplified) */}
      <footer className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-stitch-primary flex items-center justify-center text-white">
              <GraduationCap size={18} />
            </div>
            <span className="font-display font-bold text-stitch-primary">Academia</span>
          </div>
          <div className="flex gap-8 text-sm text-stitch-text-muted">
            <Link href="#" className="hover:text-stitch-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-stitch-primary">Terms of Service</Link>
            <Link href="#" className="hover:text-stitch-primary">Contact Us</Link>
          </div>
          <p className="text-xs text-stitch-text-muted">
            © 2026 Academia Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
