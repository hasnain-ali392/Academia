"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ShieldCheck, BarChart3, Sparkles } from "lucide-react";
import Image from "next/image";


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* About Hero Section */}
        <section className="relative py-24 px-8 overflow-hidden bg-white min-h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
          <div className="absolute inset-0 pattern-grid-lg opacity-[0.04]"></div>

          <div className="absolute top-20 left-10 w-24 h-24 bg-secondary/5 blur-xl rotate-45 rounded-3xl animate-float"></div>
          <div
            className="absolute bottom-10 right-20 w-32 h-32 bg-primary/5 blur-2xl -rotate-12 rounded-[2rem] animate-float"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Abstract Geometrical Elements */}
          <div className="absolute top-1/4 right-[10%] hidden lg:block opacity-60">
            <motion.div
              className="w-40 h-40 border border-secondary/20 rounded-[2rem] rotate-12"
              animate={{ rotate: [12, 32, 12], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute -top-4 -right-4 w-4 h-4 bg-secondary/30 rounded-full blur-[2px]"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <FadeUp>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl text-primary font-bold mb-6 leading-tight tracking-tight">
                Empowering the <br />
                Future of{" "}
                <span className="text-secondary italic underline decoration-secondary/15 underline-offset-8">
                  Academic Strategy.
                </span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-10 font-body leading-relaxed">
                Precision-engineered tools designed to unify metrics,
                trajectory, and success across the global education matrix.
              </p>
            </FadeUp>
            <FadeUp delay={0.4} className="flex justify-center gap-2">
              <span className="w-10 h-1.5 bg-primary rounded-full"></span>
              <span className="w-3 h-1.5 bg-secondary rounded-full"></span>
              <span className="w-3 h-1.5 bg-accent/30 rounded-full"></span>
            </FadeUp>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding px-8 bg-slate-50 relative overflow-hidden border-y border-slate-100">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeUp className="relative group p-8">
              <div className="absolute inset-0 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
              {/* Image Composition */}
              <div className="relative aspect-video flex items-center justify-center overflow-hidden rounded-[2rem] bg-primary/5">
                <Image
                  alt="Student collaboration"
                  className="relative rounded-xl shadow-2xl w-full object-cover aspect-[4/3]"
                  src="/assets/about.png"
                  width={500}
                  height={500}
                />
              </div>
            </FadeUp>

            <div className="space-y-8">
              <FadeUp>
                <div className="inline-flex items-center gap-3 px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold tracking-[0.3em] uppercase border border-secondary/10 rounded-full">
                  <ShieldCheck className="w-4 h-4" />
                  Strategic Protocol
                </div>
              </FadeUp>
              <FadeUp delay={0.2}>
                <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold leading-tight tracking-tight">
                  Academic Achievement, <br />
                  Quantified with Discipline.
                </h2>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="text-sm text-slate-600 leading-relaxed font-body">
                  Our protocol establishes absolute clarity in the academic
                  landscape. By providing students with unified metrics — from
                  GPA tracking to AI-driven trajectory modeling — we empower an
                  elite level of academic command.
                </p>
              </FadeUp>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <FadeUp delay={0.4} className="flex gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-secondary/5 border border-secondary/10 flex items-center justify-center text-secondary flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-primary text-[13px]">
                      Integrity Model
                    </h4>
                    <p className="text-[10px] text-slate-500 font-body uppercase tracking-widest mt-1">
                      Errorless sync.
                    </p>
                  </div>
                </FadeUp>
                <FadeUp delay={0.5} className="flex gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-primary text-[13px]">
                      Smart Insights
                    </h4>
                    <p className="text-[10px] text-slate-500 font-body uppercase tracking-widest mt-1">
                      Predictive AI.
                    </p>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 bg-primary relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
          <div className="max-w-3xl mx-auto px-8 relative z-10">
            <FadeUp>
              <span className="font-display text-accent text-[11px] font-bold tracking-[0.4em] uppercase mb-10 block opacity-60">
                Strategic Vision
              </span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <blockquote className="font-headline text-3xl md:text-5xl text-white italic leading-tight tracking-tight mb-12">
                &ldquo;To establish the global standard for academic data
                orchestration, empowering every scholar with the clarity of a
                strategic trajectory.&rdquo;
              </blockquote>
            </FadeUp>
            <FadeUp delay={0.3} className="text-accent space-y-1">
              <p className="font-headline font-bold text-xl">
                — Academia Command
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase opacity-40">
                Engineering clarity in education.
              </p>
            </FadeUp>
            <FadeUp delay={0.4} className="mt-14 flex justify-center">
              <Button
                variant="secondary"
                className="px-10 shadow-xl shadow-secondary/5 border-secondary hover:bg-white hover:text-primary"
              >
                Activate Protocol
              </Button>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
