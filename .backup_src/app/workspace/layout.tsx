"use client";

import * as React from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Bell, Search, User, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSidebarOpen } = useAppStore();

  return (
    <div className="min-h-screen bg-stitch-surface flex overflow-hidden">
      <Sidebar />
      
      <main
        className={cn(
          "flex-1 flex flex-col transition-all duration-300 min-w-0",
          isSidebarOpen ? "ml-[280px]" : "ml-[80px]"
        )}
      >
        {/* Workspace Header */}
        <header className="h-16 border-b border-stitch-border bg-white/50 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stitch-text-muted" size={18} />
              <input
                type="text"
                placeholder="Search projects, assets, or skills..."
                className="w-full bg-stitch-surface border border-stitch-border rounded-stitch-pill py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-stitch-primary/10 focus:border-stitch-secondary transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
             <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold">
              <Zap size={14} fill="currentColor" />
              PRO PLAN
            </div>
            
            <button className="p-2 text-stitch-text-muted hover:text-stitch-primary transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-stitch-accent rounded-full border-2 border-white" />
            </button>
            <div className="w-8 h-8 rounded-full bg-stitch-primary text-white flex items-center justify-center font-bold text-xs ring-2 ring-white shadow-sm cursor-pointer hover:scale-105 transition-transform">
              HA
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
