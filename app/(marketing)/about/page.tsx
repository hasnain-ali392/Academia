"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import GeometricBackground from "@/components/ui/GeometricBackground";
import Image from "next/image";
import Link from "next/link";

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
        <section className="pt-32 pb-20 px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-brand-blue/5 border border-brand-blue/10 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue">The Academia Protocol</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tight leading-[1.05] font-display">
                Empowering the <br />
                <span className="text-brand-blue">Future of Success.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-body leading-relaxed font-medium">
                Precision-engineered tools designed to unify metrics, trajectory, and success across the global education matrix.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-8 bg-slate-50/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right" distance={40}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-blue/5 rounded-[3rem] blur-2xl group-hover:bg-brand-blue/10 transition-colors"></div>
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-brand-blue/10 border-8 border-white">
                  <Image
                    src="/assets/about.png"
                    alt="Strategic Analysis"
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
                <h2 className="text-4xl font-black text-primary tracking-tight font-display">
                  Academic Achievement, <br />
                  <span className="text-brand-blue/80 italic">Quantified with Discipline.</span>
                </h2>
                <div className="w-20 h-1.5 bg-brand-blue mt-6 rounded-full"></div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.1}>
                <p className="text-lg text-slate-600 leading-relaxed font-body">
                  Our protocol establishes absolute clarity in the academic landscape. By providing students with unified metrics — from GPA tracking to AI-driven trajectory modeling — we empower an elite level of academic command.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: "analytics", title: "Integrity Model", desc: "Errorless sync across all academic data points." },
                  { icon: "auto_awesome", title: "Smart Insights", desc: "Predictive AI modeling for future success." }
                ].map((item, i) => (
                  <ScrollReveal key={i} direction="up" delay={0.2 + (i * 0.1)}>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 border border-brand-blue/10">
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-black text-primary font-display text-lg">{item.title}</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-32 bg-primary relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
          <div className="max-w-4xl mx-auto px-8 relative z-10 space-y-12">
            <ScrollReveal direction="up">
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-white/40 mb-8 block">Strategic Vision</span>
              <blockquote className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight font-display">
                &ldquo;To establish the global standard for academic data orchestration, empowering every scholar with the clarity of a strategic trajectory.&rdquo;
              </blockquote>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="space-y-2">
                <p className="text-xl font-black text-white font-display">— Academia Command</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Engineering clarity in education.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="pt-8">
                <Link href="/signup" className="inline-flex items-center justify-center px-12 py-5 bg-white text-primary rounded-2xl font-black text-[13px] uppercase tracking-widest hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 shadow-xl shadow-black/20">
                  Activate Protocol
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
}
