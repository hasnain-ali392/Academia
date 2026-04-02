"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  Layers, 
  History, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  GraduationCap
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Dashboard", href: "/workspace", icon: LayoutDashboard },
  { name: "Stitch Builder", href: "/workspace/builder", icon: Layers },
  { name: "History", href: "/workspace/history", icon: History },
  { name: "Settings", href: "/workspace/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { isSidebarOpen, setSidebarOpen } = useAppStore();

  return (
    <motion.aside
      initial={false}
      animate={{ width: isSidebarOpen ? 280 : 80 }}
      className="fixed left-0 top-0 bottom-0 bg-white border-r border-stitch-border z-40 flex flex-col transition-all duration-300"
    >
      {/* Sidebar Header */}
      <div className={cn(
        "p-6 flex items-center gap-3",
        !isSidebarOpen && "justify-center px-0"
      )}>
        <div className="w-10 h-10 rounded-stitch bg-stitch-primary flex items-center justify-center text-white flex-shrink-0">
          <GraduationCap size={24} />
        </div>
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="text-xl font-display font-bold text-stitch-primary whitespace-nowrap"
            >
              Academia
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-3 p-3 rounded-stitch transition-all duration-200 group relative",
                isActive 
                  ? "bg-stitch-primary text-white shadow-stitch" 
                  : "text-stitch-text-muted hover:bg-stitch-surface hover:text-stitch-primary",
                !isSidebarOpen && "justify-center"
              )}
            >
              <Icon size={20} className={cn(isActive ? "text-white" : "text-stitch-text-muted group-hover:text-stitch-primary")} />
              
              <AnimatePresence>
                {isSidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="font-medium whitespace-nowrap"
                  >
                    {link.name}
                  </motion.span>
                )}
              </AnimatePresence>

              {!isSidebarOpen && (
                <div className="absolute left-full ml-4 px-3 py-1 bg-stitch-primary text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                  {link.name}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Toggle Footer */}
      <div className="p-4 border-t border-stitch-border">
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="w-full flex items-center justify-center p-2 rounded-stitch bg-stitch-surface text-stitch-text-muted hover:text-stitch-primary transition-colors"
        >
          {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
    </motion.aside>
  );
}
