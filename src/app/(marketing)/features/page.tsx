"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import GeometricBackground from "@/components/ui/GeometricBackground";
import Link from "next/link";
import { Calculator, Bot, ListTodo, PieChart, TrendingUp, Lightbulb, LineChart, Layers } from "lucide-react";

export default function FeaturesPage() {
  const featuresShapes = [
    { type: "blob" as const, color: "bg-brand-blue/10", size: 400, top: "-10%", left: "60%", blur: true },
    { type: "diamond" as const, color: "text-brand-blue/20", size: 40, top: "20%", left: "10%", rotate: 15 },
    { type: "square" as const, color: "text-primary/10", size: 30, top: "60%", left: "85%", rotate: -15 },
    { type: "circle" as const, color: "bg-brand-blue/5", size: 200, top: "10%", left: "-5%", blur: true },
  ];

  return (
    <div className="relative min-h-screen">
      <GeometricBackground shapes={featuresShapes} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 max-w-7xl mx-auto px-6 text-center">
        <ScrollReveal direction="up" duration={0.8}>
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight">
            Comprehensive Academic <span className="text-[#35577D]">Tools for Success</span>
          </h1>
          <p className="font-body text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Explore how Academia&apos;s suite of intelligent features empowers you to track, plan, and excel in your educational journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup" className="flex justify-center items-center bg-primary text-white font-headline font-semibold px-5 py-2.5 text-sm rounded-lg hover:bg-[#35577D] transition-all shadow-lg hover:shadow-xl active:scale-95">
              Try GPA Calculator
            </Link>
            <Link href="/help" className="flex justify-center items-center bg-white border-2 border-primary text-primary font-headline font-semibold px-5 py-2.5 text-sm rounded-lg hover:bg-slate-50 transition-all active:scale-95">
              View Demo
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Core Services Section (Bento-style Grid) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mb-16 text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold text-primary">Core Services</h2>
            <div className="w-20 h-1.5 bg-[#35577D] mt-4 rounded-full mx-auto md:mx-0"></div>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Calculator, title: "GPA & CGPA Calculator", desc: "Fast, accurate calculations for individual semesters or your entire degree. Set target grades and see exactly what you need to hit your goals." },
            { icon: Bot, title: "AI Guidance Counselor", desc: "Get instant, 24/7 academic advice from our custom-tuned AI. From course selection to study strategies, your mentor is always available.", highlight: true },
            { icon: ListTodo, title: "Student Task Manager", desc: "Stay organized with a productivity hub built for academic life. Track deadlines, prioritize assignments, and sync with your course calendar." },
            { icon: PieChart, title: "Result Checker & Analytics", desc: "Visualize your academic performance over time. Understand your strengths and identify areas for improvement with detailed data insights." },
          ].map((item, i) => (
            <ScrollReveal key={i} direction="up" delay={0.1 * (i + 1)}>
              <div className={`glass p-8 rounded-xl flex flex-col h-full shadow-sm hover:shadow-md transition-shadow bg-white/40 backdrop-blur-sm border border-slate-200 ${item.highlight ? 'border-t-4 border-[#35577D]' : ''}`}>
                <div className={`w-12 h-12 ${item.highlight ? 'bg-[#35577D]/10 text-[#35577D]' : 'bg-primary/10 text-primary'} rounded-lg flex items-center justify-center mb-6`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-xl font-bold mb-4 text-primary">{item.title}</h3>
                <p className="font-body text-slate-600 leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Why Academia? Section */}
      <section className="py-24 relative overflow-hidden bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-[#35577D] opacity-10 rounded-xl blur-2xl"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="font-headline font-bold text-lg text-primary">Student Success Score</h4>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">+12% vs last term</span>
                </div>
                <div className="flex items-end gap-2 mb-8 h-48">
                  <div className="flex-1 bg-slate-100 rounded-t-lg h-[40%] animate-pulse"></div>
                  <div className="flex-1 bg-slate-100 rounded-t-lg h-[55%] animate-pulse delay-75"></div>
                  <div className="flex-1 bg-slate-200 rounded-t-lg h-[45%] animate-pulse delay-150"></div>
                  <div className="flex-1 bg-[#35577D] rounded-t-lg h-[85%]"></div>
                  <div className="flex-1 bg-primary rounded-t-lg h-[92%]"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-6 h-6 text-[#35577D]" />
                      <span className="font-medium text-slate-700">Current GPA</span>
                    </div>
                    <span className="font-bold text-slate-800">3.88</span>
                  </div>
                </div>
              </div>
              {/* Extra geometric accent */}
              <div className="absolute -bottom-10 -left-10 w-24 h-24 border-4 border-[#35577D]/10 rounded-full animate-bounce"></div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div>
              <h2 className="font-headline text-4xl font-bold text-primary mb-8">Why Academia?</h2>
              <div className="space-y-8">
                {[
                  { icon: Lightbulb, title: "Intelligent Planning", desc: "Don't just record grades; project them. Our tools help you map out your entire degree path based on historical performance." },
                  { icon: LineChart, title: "Data-Driven Decisions", desc: "Stop guessing which courses to take. Use hard data and AI-powered insights to choose the path that maximizes your strengths." },
                  { icon: Layers, title: "Cohesive Experience", desc: "One hub for everything. Tasks, calculations, grades, and mentoring—all synced and working in harmony for your success." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#35577D] border border-slate-100 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold mb-2 text-primary">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <ScrollReveal direction="up" distance={50}>
          <div className="bg-primary rounded-3xl p-16 text-white overflow-hidden relative shadow-2xl">
            {/* Geometric accents */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#35577D]/20 translate-x-1/4 translate-y-1/4 rounded-full"></div>
            
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to reach your academic goals?</h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 relative z-10 font-body">Get started for free today and join thousands of students tracking their way to excellence.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link href="/signup" className="flex items-center justify-center bg-white text-primary font-headline font-bold px-6 py-2.5 text-sm rounded-lg hover:bg-slate-100 transition-all active:scale-95 shadow-xl">
                Get Started Free
              </Link>
              <Link href="/help" className="flex items-center justify-center bg-transparent border-2 border-white/30 text-white font-headline font-bold px-6 py-2.5 text-sm rounded-lg hover:bg-white/10 transition-all active:scale-95">
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
