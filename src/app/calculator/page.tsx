"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Plus, Calculator as CalcIcon, History, Trash2 } from "lucide-react";

export default function CalculatorPage() {
  const [activeTab, setActiveTab] = useState<"gpa" | "cgpa">("gpa");

  return (
    <PageWrapper className="min-h-screen bg-stitch-surface-alt px-6 py-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-display text-4xl font-bold text-stitch-primary mb-2">Performance Tools</h1>
        <p className="font-body text-stitch-text-muted mb-10">Run scenario calculations to manage your academic track record.</p>

        {/* Tab Navigation */}
        <div className="flex space-x-2 border-b border-stitch-border mb-10">
          <button
            onClick={() => setActiveTab("gpa")}
            className={`px-6 py-3 font-display font-semibold transition-all ${
              activeTab === "gpa" 
                ? "border-b-2 border-stitch-primary text-stitch-primary" 
                : "text-stitch-text-muted hover:text-stitch-primary"
            }`}
          >
            GPA Calculator
          </button>
          <button
            onClick={() => setActiveTab("cgpa")}
            className={`px-6 py-3 font-display font-semibold transition-all ${
              activeTab === "cgpa" 
                ? "border-b-2 border-stitch-primary text-stitch-primary" 
                : "text-stitch-text-muted hover:text-stitch-primary"
            }`}
          >
            Cumulative CGPA
          </button>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{activeTab === "gpa" ? "Current Semester" : "Historical Semesters"}</CardTitle>
                <CardDescription>
                  {activeTab === "gpa" ? "Enter your current courses and expected grades." : "Add past semester GPAs to compute your cumulative standing."}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeTab === "gpa" ? (
                  <>
                    <CourseRow index={1} />
                    <CourseRow index={2} />
                    <CourseRow index={3} />
                    <Button variant="ghost" className="mt-4 w-full border border-dashed border-stitch-border">
                      <Plus size={16} className="mr-2" /> Add Course
                    </Button>
                  </>
                ) : (
                  <>
                    <SemesterRow term="Fall 2023" />
                    <SemesterRow term="Spring 2024" />
                    <Button variant="ghost" className="mt-4 w-full border border-dashed border-stitch-border">
                      <Plus size={16} className="mr-2" /> Add Semester
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-stitch-primary text-stitch-surface border-none shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(var(--stitch-surface)_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-10" />
              <CardContent className="relative z-10 p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <CalcIcon size={48} className="text-stitch-secondary mb-6 opacity-80" />
                <p className="text-sm font-semibold tracking-widest text-stitch-accent uppercase mb-2">Projected {activeTab.toUpperCase()}</p>
                <h2 className="font-display text-6xl font-bold mb-4">--</h2>
                <p className="text-sm text-stitch-surface/70">Awaiting input data</p>
                
                <Button className="w-full mt-8 bg-stitch-surface text-stitch-primary hover:bg-stitch-surface/90">
                  Calculate Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

function CourseRow({ index }: { index: number }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1">
        <Input placeholder={`Course Code (e.g. CS10${index})`} />
      </div>
      <div className="w-24">
        <Input type="number" placeholder="Credits" />
      </div>
      <div className="w-24">
        <Input placeholder="Grade" />
      </div>
      <button className="p-2 text-stitch-text-muted hover:text-stitch-error transition-colors">
        <Trash2 size={18} />
      </button>
    </div>
  )
}

function SemesterRow({ term }: { term: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1">
        <Input defaultValue={term} placeholder="Semester Name" />
      </div>
      <div className="w-32">
        <Input type="number" placeholder="Total Credits" />
      </div>
      <div className="w-32">
        <Input type="number" step="0.01" placeholder="GPA" />
      </div>
      <button className="p-2 text-stitch-text-muted hover:text-stitch-error transition-colors">
        <Trash2 size={18} />
      </button>
    </div>
  )
}
