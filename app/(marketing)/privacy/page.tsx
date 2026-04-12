"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import GeometricBackground from "@/components/ui/GeometricBackground";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const privacyShapes = [
    { type: "circle" as const, color: "bg-brand-blue/5", size: 500, top: "-10%", left: "-10%", blur: true },
    { type: "circle" as const, color: "bg-brand-blue/10", size: 400, top: "60%", left: "70%", blur: true },
    { type: "blob" as const, color: "bg-primary/5", size: 300, top: "30%", left: "10%", blur: true },
    { type: "diamond" as const, color: "text-brand-blue/10", size: 100, top: "20%", left: "85%", rotate: 25 },
    { type: "square" as const, color: "text-primary/5", size: 80, top: "80%", left: "5%", rotate: -15 },
  ];

  return (
    <div className="relative min-h-screen bg-white">
      <GeometricBackground shapes={privacyShapes} />

      <div className="relative z-10 flex flex-col items-center">
        {/* Hero */}
        <header className="w-full max-w-4xl px-8 pt-32 pb-16">
          <ScrollReveal direction="up">
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-brand-blue/40"></div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#35577D]">Legal Documentation</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tight leading-[1.05] font-display">
                Privacy <br/><span className="text-[#35577D]/90">Policy</span>
              </h1>
              <div className="flex items-center gap-5 text-slate-400 mt-2 font-body">
                <p className="text-[13px] font-medium">Last updated: <span className="text-primary font-bold">October 24, 2023</span></p>
                <span className="w-1.5 h-1.5 rounded-full bg-[#35577D]/20"></span>
                <p className="text-[13px] font-bold tracking-widest text-[#35577D]/60">V.2.4.0</p>
              </div>
            </div>
          </ScrollReveal>
        </header>

        {/* Navigation Pills */}
        <div className="w-full max-w-4xl px-8 mb-16 sticky top-24 z-40">
          <ScrollReveal direction="none">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-1.5 flex gap-2 overflow-x-auto shadow-lg shadow-brand-blue/5 border border-slate-100" style={{ scrollbarWidth: 'none' }}>
              {["Overview", "Collection", "Usage", "Rights"].map((item) => (
                <button 
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex-1 min-w-[100px] py-3 px-6 rounded-xl whitespace-nowrap text-[10px] font-extrabold uppercase tracking-widest font-display text-slate-500 hover:text-brand-blue hover:bg-brand-blue/5 transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Main Content */}
        <main className="w-full max-w-4xl px-8 pb-32 space-y-16 font-body">
          {/* Section: Overview */}
          <ScrollReveal direction="up">
            <section id="overview" className="scroll-mt-48 bg-white/40 backdrop-blur-sm border border-slate-100 rounded-3xl p-10 md:p-14 shadow-xl shadow-brand-blue/[0.03]">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue border border-brand-blue/10">
                  <span className="material-symbols-outlined text-[28px]">info</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-primary tracking-tight font-display">Introduction</h3>
                  <p className="text-[13px] text-brand-blue/60 font-bold uppercase tracking-widest mt-0.5">Scope &amp; Consent</p>
                </div>
              </div>
              <div className="space-y-8 text-slate-600 leading-[1.8]">
                <p className="text-xl font-medium text-slate-700">
                  Welcome to Academia. Your privacy is paramount to us. This Privacy Policy describes how we collect, use, process, and disclose your information in conjunction with your access to and use of our educational platform.
                </p>
                <p className="text-base text-slate-500">
                  By using our services, you consent to the data practices described in this policy. We encourage you to read this document in its entirety to understand our commitment to safeguarding your educational journey and personal data. Our goal is to provide transparency and control over your digital footprint.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Section: Information Collection */}
          <ScrollReveal direction="up" delay={0.1}>
            <section id="collection" className="scroll-mt-48 bg-white/40 backdrop-blur-sm border border-slate-100 rounded-3xl p-10 md:p-14 shadow-xl shadow-brand-blue/[0.03]">
              <div className="flex items-center gap-5 mb-12">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue border border-brand-blue/10">
                  <span className="material-symbols-outlined text-[28px]">database</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-primary tracking-tight font-display">Data Collection</h3>
                  <p className="text-[13px] text-brand-blue/60 font-bold uppercase tracking-widest mt-0.5">What we gather</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/60 border border-brand-blue/10 p-8 rounded-3xl group hover:border-brand-blue/40 transition-all hover:shadow-lg hover:shadow-brand-blue/5">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-brand-blue/10">
                    <span className="material-symbols-outlined text-brand-blue text-[24px]">person</span>
                  </div>
                  <h4 className="font-extrabold font-display text-xl mb-3 text-primary">Personal Data</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    Includes your name, email address, school affiliation, and profile information provided during secure registration.
                  </p>
                </div>
                <div className="bg-white/60 border border-brand-blue/10 p-8 rounded-3xl group hover:border-brand-blue/40 transition-all hover:shadow-lg hover:shadow-brand-blue/5">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-brand-blue/10">
                    <span className="material-symbols-outlined text-brand-blue text-[24px]">monitoring</span>
                  </div>
                  <h4 className="font-extrabold font-display text-xl mb-3 text-primary">Academic Analytics</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    Course completion rates, quiz scores, time spent on lessons, and interaction with our intelligent educational tools.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section: Use of Data */}
          <ScrollReveal direction="up" delay={0.1}>
            <section id="usage" className="scroll-mt-48 bg-white/40 backdrop-blur-sm border border-slate-100 rounded-3xl overflow-hidden relative shadow-xl shadow-brand-blue/[0.03]">
              <div className="p-10 md:p-14 relative z-10">
                <div className="flex items-center gap-5 mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue border border-brand-blue/10">
                    <span className="material-symbols-outlined text-[28px]">insights</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-primary tracking-tight font-display">Use of Data</h3>
                    <p className="text-[13px] text-brand-blue/60 font-bold uppercase tracking-widest mt-0.5">Processing logic</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div className="space-y-10">
                    <p className="text-slate-600 leading-[1.8] font-medium text-lg">
                      We utilize collected information to maintain, protect, and improve our services, as well as to develop new adaptive educational modules.
                    </p>
                    <div className="space-y-8">
                      {["Personalization", "Communication"].map((point, i) => (
                        <div key={i} className="flex items-start gap-5">
                          <div className="mt-1 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center shrink-0 shadow-lg shadow-brand-blue/20">
                            <span className="material-symbols-outlined text-[14px] text-white font-bold">done</span>
                          </div>
                          <div>
                            <h5 className="font-extrabold font-display text-primary text-lg mb-1">{point}</h5>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">Tailoring platform experience to enhance academic growth.</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* CTA Section */}
          <ScrollReveal direction="up" distance={50}>
            <section className="pt-8">
              <div className="bg-brand-blue rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-blue/30">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>
                <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                  <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-4 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[32px]">contact_support</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black font-display mb-8 tracking-tight">Questions about <br/>your privacy?</h3>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="mailto:privacy@academia.com" className="w-full sm:w-auto bg-white text-brand-blue px-12 py-5 rounded-2xl font-black text-[13px] uppercase tracking-widest hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">Contact Support</a>
                    <Link href="/help" className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-black text-[13px] uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all active:scale-95">Help Center</Link>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>
        </main>
      </div>
    </div>
  );
}
