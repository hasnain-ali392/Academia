"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Layers, 
  Clock, 
  Plus, 
  ArrowRight,
  Database,
  Search,
  LayoutGrid,
  List
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { StatsCard } from "@/components/StatsCard";
import { FileUploader } from "@/components/FileUploader";
import { WorkflowBuilder } from "@/components/WorkflowBuilder";
import ReactMarkdown from "react-markdown";

export default function WorkspacePage() {
  const { currentProject } = useAppStore();

  const stats = [
    { label: "Total Assets", value: currentProject?.assets.length || 0, icon: Database, description: "Active documents in current project", color: "primary" as const },
    { label: "Workflow Steps", value: currentProject?.workflow.length || 0, icon: Layers, description: "Configured stitching sequence", color: "secondary" as const },
    { label: "Stitch Operations", value: 42, icon: Clock, description: "Total operations performed this month", color: "accent" as const },
  ];

  return (
    <div className="space-y-10 pb-20">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-display font-black tracking-tight text-stitch-primary">
            Academic Workspace
          </h1>
          <p className="text-stitch-text-muted text-lg">
            Manage your assets and orchestrate your document workflows.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="bg-white/50 border-stitch-border/50">
            <Search className="mr-2 w-4 h-4" />
            Find Skill
          </Button>
          <Button variant="primary" className="shadow-stitch-lg">
            <Plus className="mr-2 w-5 h-5" />
            Create Project
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <StatsCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Workspace (Left) */}
        <div className="lg:col-span-12">
          <Card className="border-none shadow-stitch-lg bg-white/40 backdrop-blur-sm overflow-hidden">
            <div className="flex order-b border-stitch-border bg-stitch-surface/30">
               <button className="px-6 py-4 border-b-2 border-stitch-secondary text-sm font-bold text-stitch-primary flex items-center gap-2">
                <LayoutGrid size={18} />
                Project Orchestrator
              </button>
              <button className="px-6 py-4 text-sm font-medium text-stitch-text-muted hover:text-stitch-primary flex items-center gap-2">
                <List size={18} />
                Asset Explorer
              </button>
            </div>

            <CardContent className="p-10 space-y-12">
              <section>
                <div className="flex items-center justify-between mb-8">
                   <div>
                    <h2 className="text-2xl font-display font-bold text-stitch-primary">1. Asset Injection</h2>
                    <p className="text-sm text-stitch-text-muted">Import documents to populate the project context.</p>
                  </div>
                </div>
                <FileUploader />
              </section>

              <section>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-stitch-primary">2. Execution Pipeline</h2>
                    <p className="text-sm text-stitch-text-muted">Define the sequential stitching logic for Claude.</p>
                  </div>
                </div>
                <WorkflowBuilder />
              </section>
            </CardContent>
          </Card>
        </div>

        {/* Result Area (Conditional) */}
        <AnimatePresence>
          {currentProject?.result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-12"
            >
              <Card className="border-stitch-accent/30 shadow-indigo-100 shadow-xl overflow-hidden">
                 <CardHeader className="bg-stitch-accent/5 border-b border-stitch-accent/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-stitch-primary flex items-center gap-2">
                        <ArrowRight className="text-stitch-accent" />
                        Stitched Result
                      </CardTitle>
                      <CardDescription>
                        Final orchestration output generated by Claude Skills.
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="bg-white">
                      Download MD
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-8 prose prose-slate max-w-none prose-pre:bg-stitch-surface prose-pre:border prose-pre:border-stitch-border">
                  <React-Markdown>{currentProject.result}</React-Markdown>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
