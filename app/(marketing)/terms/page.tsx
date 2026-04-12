"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import GeometricBackground from "@/components/ui/GeometricBackground";
import Link from "next/link";

export default function TermsOfServicePage() {
  const termsShapes = [
    { type: "square" as const, color: "text-brand-blue/10", size: 100, top: "5%", left: "10%", rotate: 15 },
    { type: "diamond" as const, color: "text-primary/5", size: 120, top: "50%", left: "85%", rotate: -15 },
    { type: "square" as const, color: "text-slate-300/10", size: 40, top: "85%", left: "15%", rotate: 45 },
    { type: "circle" as const, color: "bg-brand-blue/5", size: 400, top: "30%", left: "-10%", blur: true },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50/30">
      <GeometricBackground shapes={termsShapes} />

      <main className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <ScrollReveal direction="up">
            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#141E30] mb-4 tracking-tight font-display">Terms of Service</h1>
              <p className="text-slate-500 font-medium font-body">Last Updated: October 24, 2023</p>
            </header>
          </ScrollReveal>

          {/* Content Card */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-white/70 backdrop-blur-md shadow-2xl shadow-brand-blue/5 rounded-3xl p-8 md:p-16 space-y-12 border border-white">
              
              {/* Introduction */}
              <section className="space-y-4">
                <p className="text-lg leading-relaxed text-slate-700 font-body">
                  Welcome to Academia. These Terms of Service (&quot;Terms&quot;) govern your access to and use of Academia&apos;s website, mobile applications, and other services. By using our services, you agree to be bound by these Terms.
                </p>
              </section>

              {/* Action Sections */}
              {[
                { 
                  num: "1", 
                  title: "Acceptance of Terms", 
                  content: "By accessing or using the Academia platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time." 
                },
                { 
                  num: "2", 
                  title: "User Responsibilities", 
                  content: "As a user of Academia, you agree to provide accurate and complete information during the registration process. You are responsible for account confidentiality, lawful conduct, and security reporting.",
                  list: ["Account Confidentiality", "Lawful Conduct", "Respectful Collaboration", "Security Reporting"]
                },
                { 
                  num: "3", 
                  title: "Intellectual Property", 
                  content: "All content, including but not limited to text, graphics, logos, icons, and software, is the property of Academia or its content suppliers and is protected by international copyright laws." 
                },
                { 
                  num: "4", 
                  title: "Termination of Access", 
                  content: "We reserve the right to suspend or terminate your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms of Service." 
                }
              ].map((section, idx) => (
                <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
                  <section className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-xl font-display">
                        {section.num}
                      </span>
                      <div>
                        <h2 className="text-2xl font-bold text-[#141E30] mb-4 font-display">{section.title}</h2>
                        <p className="text-slate-600 leading-relaxed font-body mb-6">
                          {section.content}
                        </p>
                        {section.list && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {section.list.map((item, i) => (
                              <div key={i} className="flex items-center p-4 bg-slate-50/50 rounded-xl border border-slate-100 group hover:bg-white transition-all">
                                <span className="material-symbols-outlined text-brand-blue mr-3 group-hover:scale-110 transition-transform">check_circle</span>
                                <span className="text-sm font-medium font-body text-slate-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </section>
                </ScrollReveal>
              ))}

              {/* Bottom CTA inside card */}
              <ScrollReveal direction="up" delay={0.4}>
                <footer className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
                  <p className="text-sm text-slate-500 font-medium font-body">Questions about our terms? We&apos;re here to help.</p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button className="px-8 py-3 bg-brand-blue text-white rounded-xl font-bold font-display hover:bg-[#141E30] transition-all shadow-lg active:scale-95">Contact Support</button>
                    <button className="px-8 py-3 bg-white border border-slate-200 text-[#141E30] rounded-xl font-bold font-display hover:bg-slate-50 transition-all active:scale-95">Download PDF</button>
                  </div>
                </footer>
              </ScrollReveal>

            </div>
          </ScrollReveal>
        </div>
      </main>
    </div>
  );
}
