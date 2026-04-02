"use client";

import { PageWrapper } from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { ArrowRight, BookOpen, Calculator, LineChart, Target } from "lucide-react";

export default function Home() {
  return (
    <PageWrapper className="flex min-h-screen flex-col">
      <HeroSection />
      <FeaturesGrid />
      <CtaStrip />
    </PageWrapper>
  );
}

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-stitch-surface py-24 sm:py-32">
      {/* Background Motifs */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--stitch-secondary)_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.05]" />
      <div className="absolute left-1/4 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-tr from-stitch-primary/10 to-stitch-secondary/10 blur-3xl" />
      
      <div className="relative z-10 w-full max-w-7xl px-6 text-center">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold leading-tight tracking-tight text-stitch-primary md:text-7xl">
          Smart Academic Tools for Students
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-stitch-text-muted md:text-xl">
          Empowering your academic journey with precision tools for GPA calculation, progress tracking, and personalized guidance.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto shadow-stitch hover:-translate-y-1">
            Calculate GPA
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto hover:-translate-y-1">
            Academic Guidance
          </Button>
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid() {
  const features = [
    { title: "GPA Calculator", desc: "Calculate your semester grade point average with ease using our simplified input system.", icon: Calculator },
    { title: "CGPA Tracker", desc: "Track your cumulative performance across multiple semesters to see your total progress.", icon: LineChart },
    { title: "Academic Guidance", desc: "Personalized advice based on your current standing to help you reach your target grades.", icon: BookOpen },
    { title: "Result Checker", desc: "Instantly verify and organize your results from official portals in one clean dashboard.", icon: Target },
  ];

  return (
    <section className="relative overflow-hidden bg-stitch-surface-alt py-24">
      {/* Texture Background */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,var(--stitch-secondary)_10px,var(--stitch-secondary)_11px)] opacity-[0.02]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Card key={i} className="group hover:-translate-y-1 hover:shadow-stitch-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-stitch-secondary/10 text-stitch-secondary">
                  <f.icon size={24} />
                </div>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm font-semibold text-stitch-secondary group-hover:underline">
                  Open Tool <ArrowRight size={16} className="ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaStrip() {
  return (
    <section className="relative overflow-hidden bg-stitch-primary py-20 text-center">
       <div className="absolute inset-0 bg-[radial-gradient(var(--stitch-surface)_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-10" />
       <div className="relative z-10 mx-auto max-w-4xl px-6">
          <h2 className="font-display text-3xl font-bold text-stitch-surface md:text-5xl">
            Ready to reach your academic goals?
          </h2>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-stitch-surface text-stitch-primary hover:bg-stitch-surface-alt">
              Start Calculating
            </Button>
            <Button size="lg" className="border-2 border-stitch-surface/20 bg-transparent text-stitch-surface hover:bg-stitch-surface/10">
              View Demo
            </Button>
          </div>
       </div>
    </section>
  );
}
