"use client";

import { PageWrapper } from "@/components/layout/PageWrapper";
import { Users, BookOpen, Target, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

export default function AboutPage() {
  return (
    <PageWrapper className="min-h-screen bg-stitch-surface pb-24">
      {/* Editorial Header */}
      <section className="relative px-6 py-24 md:py-32 overflow-hidden border-b border-stitch-border/30 bg-gradient-to-b from-stitch-surface-alt to-stitch-surface">
         <div className="mx-auto max-w-7xl relative z-10 text-center md:text-left">
           <h1 className="font-display text-5xl md:text-7xl font-bold text-stitch-primary max-w-4xl tracking-tight leading-[1.1]">
             Our mission is to decode academic success.
           </h1>
           <p className="mt-8 font-body text-xl text-stitch-text-muted max-w-2xl">
             We built Academia to eliminate the guesswork of grade progression, giving students the clarity needed to focus purely on learning.
           </p>
         </div>
         {/* Background Decor */}
         <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/4 rounded-full bg-stitch-secondary/5 blur-3xl mix-blend-multiply" />
      </section>

      {/* Brand Story (Asymmetric Layout) */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="sticky top-24 font-display text-4xl font-bold text-stitch-primary">
              Built by students, for students.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-8 font-body text-lg text-stitch-text leading-relaxed">
            <p>
              It started with a simple problem: calculating a cumulative GPA across semesters shouldn't require complex spreadsheets or manual math. We realized that academic stress isn't just about the coursework—it's also about managing performance metrics.
            </p>
            <p>
              The result is a platform that puts the power of data-driven academic planning in the hands of the individuals who need it most. Our tools ensure precision, so you can establish realistic goals, whether you are aiming for honors, managing probation, or simply wanting to maintain a steady course.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="mx-auto max-w-7xl px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard 
              icon={Target} 
              title="Precision" 
              desc="Algorithms independently verified to ensure accurate calculation of complex academic weights." 
            />
            <ValueCard 
              icon={Users} 
              title="Student-First" 
              desc="Designed with deep empathy for the student experience, avoiding administrative bloat." 
            />
            <ValueCard 
              icon={Sparkles} 
              title="Clarity" 
              desc="Transforming complicated credential requirements into plain, actionable milestones." 
            />
            <ValueCard 
              icon={BookOpen} 
              title="Open Knowledge" 
              desc="Providing transparent logic so students understand exactly how their outcomes are measured." 
            />
         </div>
      </section>
    </PageWrapper>
  );
}

function ValueCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <Card className="h-full border-none bg-stitch-surface-alt/50">
      <CardContent className="p-8">
        <Icon size={32} className="text-stitch-secondary mb-6" />
        <h3 className="font-display font-bold text-xl text-stitch-primary mb-3">{title}</h3>
        <p className="font-body text-stitch-text-muted text-sm leading-relaxed">{desc}</p>
      </CardContent>
    </Card>
  )
}
