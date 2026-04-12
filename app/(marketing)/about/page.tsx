"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import GeometricBackground from "@/components/ui/GeometricBackground";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Sparkles, Calculator, Brain, FileCheck, BarChart, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const aboutShapes = [
    { type: "blob" as const, color: "bg-brand-blue/10", size: 600, top: "-10%", left: "60%", blur: true },
    { type: "diamond" as const, color: "text-primary/5", size: 150, top: "20%", left: "5%", rotate: 15 },
    { type: "circle" as const, color: "bg-primary/5", size: 300, top: "70%", left: "10%", blur: true },
    { type: "square" as const, color: "text-brand-blue/5", size: 80, top: "40%", left: "80%", rotate: -25 },
  ];

  return (
    <div className="relative min-h-screen bg-white">
      <GeometricBackground shapes={aboutShapes} />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-8 min-h-[60vh] flex items-center">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-brand-blue/5 border border-brand-blue/10 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue">Our Mission & Vision</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tight leading-[1.05] font-headline mb-6">
                About Our <br />
                <span className="text-brand-blue">Academic Platform.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-body leading-relaxed font-medium">
                Empowering students and educators with precision-engineered tools for a seamless academic journey.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.2}>
              <div className="mt-10 flex justify-center gap-4">
                  <span className="w-12 h-1 bg-primary rounded-full"></span>
                  <span className="w-4 h-1 bg-brand-blue rounded-full"></span>
                  <span className="w-4 h-1 bg-slate-200 rounded-full"></span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-8 bg-slate-50/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right" distance={40}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-blue/5 rounded-[3rem] blur-2xl group-hover:bg-brand-blue/10 transition-colors transform group-hover:rotate-2"></div>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="/assets/about.png"
                    alt="Student collaboration"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-10">
              <ScrollReveal direction="up">
                <span className="font-headline text-sm uppercase tracking-widest text-brand-blue font-bold block mb-4">Our Mission</span>
                <h2 className="text-4xl font-black text-primary tracking-tight font-headline leading-tight">
                  Academic Success, <br/>
                  <span className="text-brand-blue/80 italic">Simplified with Precision.</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.1}>
                <p className="text-lg text-slate-600 leading-relaxed font-body">
                  Academia was founded on the belief that data should empower, not overwhelm. Our mission is to simplify the complex academic landscape by providing students with precision tools—from GPA tracking to AI-driven career guidance—enabling them to focus on what truly matters: learning and growth.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: ShieldCheck, title: "Data Integrity", desc: "Accurate calculations every time." },
                  { icon: Sparkles, title: "Smart Insights", desc: "AI-powered future forecasting." }
                ].map((item, i) => (
                  <ScrollReveal key={i} direction="up" delay={0.2 + (i * 0.1)}>
                    <div className="flex gap-4 items-start">
                      <div className="mt-1 w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 border border-brand-blue/10">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-lg">{item.title}</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Overview / Pillars Section */}
        <section className="py-24 px-8 relative overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal direction="up">
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 font-headline">The Pillars of Academia</h2>
                <p className="text-slate-500 max-w-xl mx-auto text-lg">Modern solutions for modern students, integrated into one seamless platform.</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Calculator, title: "GPA/CGPA Tool", desc: "Calculate and track your academic performance with pinpoint accuracy across multiple semesters.", bg: "bg-primary text-white" },
                { icon: Brain, title: "AI Guidance", desc: "Personalized career paths and course recommendations based on your unique academic data.", bg: "bg-brand-blue text-white" },
                { icon: FileCheck, title: "Result Checking", desc: "Instant access to verified examination results with detailed breakdown and performance metrics.", bg: "bg-slate-100 text-primary border border-slate-200" },
                { icon: BarChart, title: "Performance Stats", desc: "Visualize your progress through interactive charts and historical comparison data points.", bg: "bg-slate-100 text-primary border border-slate-200" }
              ].map((card, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                  <div className="p-8 rounded-[1.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col gap-4 group h-full">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${card.bg}`}>
                      <card.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl text-primary font-headline">{card.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{card.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-32 bg-primary relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
          <div className="max-w-4xl mx-auto px-8 relative z-10 space-y-12">
            <ScrollReveal direction="up">
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-white/40 mb-8 block">Our Vision</span>
              <blockquote className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight font-headline italic">
                &ldquo;To become the global standard for academic data management, where every student possesses the clarity to navigate their future with absolute confidence.&rdquo;
              </blockquote>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="space-y-2">
                <p className="text-xl font-bold text-white font-headline">— The Academia Team</p>
                <p className="text-sm text-white/60">Building the future of education together.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="pt-8">
                <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm bg-white text-primary rounded-xl font-bold hover:bg-slate-100 transition-colors active:scale-95">
                  Join the Movement
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
}
