"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import GeometricBackground from "@/components/ui/GeometricBackground";
import Link from "next/link";

export default function HelpCenterPage() {
  const helpShapes = [
    { type: "square" as const, color: "text-brand-blue/10", size: 120, top: "10%", left: "5%", rotate: 12 },
    { type: "diamond" as const, color: "text-primary/5", size: 80, top: "40%", left: "80%", rotate: -12 },
    { type: "square" as const, color: "text-slate-300/10", size: 60, top: "70%", left: "15%", rotate: 45 },
    { type: "circle" as const, color: "bg-brand-blue/5", size: 300, top: "20%", left: "70%", blur: true },
  ];

  return (
    <div className="relative min-h-screen">
      <GeometricBackground shapes={helpShapes} />

      <section className="relative py-32 px-6 overflow-hidden border-b border-slate-100">
        <ScrollReveal direction="up" duration={0.8}>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-display font-black text-primary tracking-tight">How can we help you today?</h1>
            <p className="text-lg text-[#35577D] max-w-2xl mx-auto font-body">Explore our knowledge base for academic tools, grading insights, and community-driven guidance.</p>
            
            <div className="relative max-w-2xl mx-auto mt-12 group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400">search</span>
              </div>
              <input 
                className="w-full h-16 pl-14 pr-6 rounded-2xl bg-white border-2 border-slate-100 shadow-xl focus:border-[#35577D] focus:ring-0 transition-all font-body text-lg placeholder:text-slate-400 outline-none" 
                placeholder="Search for guides, tools, or FAQs..." 
                type="text" 
              />
              <div className="absolute right-4 top-4 hidden md:block">
                <kbd className="px-2 py-1 bg-slate-100 text-slate-400 rounded-md text-xs font-sans font-bold">CMD + K</kbd>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="text-xs font-label text-slate-400 uppercase tracking-widest font-bold">Popular:</span>
              <button className="text-xs font-label font-bold text-[#35577D] hover:text-primary underline underline-offset-4">GPA Weighting</button>
              <button className="text-xs font-label font-bold text-[#35577D] hover:text-primary underline underline-offset-4">Reset Password</button>
              <button className="text-xs font-label font-bold text-[#35577D] hover:text-primary underline underline-offset-4">Course Discovery</button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Browse Categories */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <ScrollReveal direction="left">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-display font-bold text-primary">Browse Categories</h2>
            <Link className="text-sm font-label text-[#35577D] font-bold hover:translate-x-1 transition-transform inline-flex items-center gap-1" href="/help/all">
              View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "calculate", title: "GPA Calculator", desc: "Learn how to calculate your weighted and unweighted GPA across different curriculum types.", bg: "bg-slate-900" },
            { icon: "account_circle", title: "Account Management", desc: "Manage your subscription, security settings, and profile information seamlessly.", bg: "bg-[#35577D]" },
            { icon: "psychology", title: "AI Guidance FAQ", desc: "Understanding how our AI models help you predict admissions and academic success.", bg: "bg-slate-100 text-primary border border-slate-200" },
          ].map((item, i) => (
            <ScrollReveal key={i} direction="up" delay={0.1 * (i + 1)}>
              <div className="glass p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all group bg-white/40 backdrop-blur-sm border border-slate-100">
                <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-body">{item.desc}</p>
                <ul className="space-y-3">
                  <li><Link className="text-sm text-[#35577D] font-medium hover:underline flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>Article Link One</Link></li>
                  <li><Link className="text-sm text-[#35577D] font-medium hover:underline flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>Article Link Two</Link></li>
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Recommended Guides */}
      <section className="bg-slate-50/50 py-20 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <ScrollReveal direction="left" className="lg:col-span-1 space-y-4">
              <div className="inline-block px-3 py-1 bg-slate-100 rounded text-[10px] font-label font-bold text-primary uppercase tracking-widest mb-2">Editor&apos;s Choice</div>
              <h2 className="text-4xl font-display font-extrabold text-primary leading-tight">Recommended Reading for Success</h2>
              <p className="text-slate-500 font-body">Curated articles to help you navigate your academic journey with Academia&apos;s advanced toolkit.</p>
            </ScrollReveal>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { icon: "description", title: "Mastering the Ivy League Predictor", desc: "How to input extracurriculars for better accuracy." },
                { icon: "school", title: "Scholarship Matching 101", desc: "Tips for finding full-ride opportunities in your region." },
                { icon: "auto_stories", title: "Early Decision Strategies", desc: "Why timing matters when using our dashboard tools." },
                { icon: "shield_person", title: "Securing Your Academic Profile", desc: "Best practices for keeping your transcript data safe." },
              ].map((guide, i) => (
                <ScrollReveal key={i} direction="up" delay={0.1 * i}>
                  <Link className="group flex gap-5" href="#">
                    <span className="material-symbols-outlined text-[#35577D] text-3xl group-hover:scale-110 transition-transform">
                      {guide.icon}
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-display font-bold text-primary group-hover:text-[#35577D] transition-colors">{guide.title}</h4>
                      <p className="text-sm text-slate-500 line-clamp-2 font-body">{guide.desc}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <ScrollReveal direction="up" distance={40}>
          <div className="relative bg-primary rounded-3xl overflow-hidden p-10 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="relative z-10 space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Still need assistance?</h2>
              <p className="text-slate-300 max-w-lg font-body">Our support team is available 24/7 for technical issues or premium account guidance.</p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-display font-bold hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                Contact Support
              </button>
              <button className="bg-[#35577D] text-white px-8 py-4 rounded-xl font-display font-bold hover:bg-opacity-90 transition-all active:scale-95 border border-white/20 flex items-center justify-center gap-2 shadow-lg">
                <span className="material-symbols-outlined text-[18px]">forum</span>
                Live Chat
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
