'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Calculator, 
  BrainCircuit, 
  Settings, 
  HelpCircle,
  Menu,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/student-dashboard' },
  { name: 'Calculator', icon: Calculator, href: '/gpa-calculator' },
  { name: 'Guidance', icon: BrainCircuit, href: '/ai-tutor' },
  { name: 'Tasks', icon: CheckSquare, href: '/tasks' },
];

const secondaryNavItems = [
  { name: 'Settings', icon: Settings, href: '/settings' },
  { name: 'Help', icon: HelpCircle, href: '/help' },
];

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const pathname = usePathname();

  return (
    <aside className={`hidden md:flex flex-col h-screen p-4 gap-2 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 font-lexend text-sm sticky top-0 transition-all duration-300 ${isExpanded ? 'w-64' : 'w-24'}`}>
      
      {/* Toggle Button */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-8 bg-white border border-slate-200 text-slate-500 rounded-full p-1 shadow-sm z-10 hover:bg-slate-50 transition-colors"
        aria-label={isExpanded ? 'Collapse Sidebar' : 'Expand Sidebar'}
      >
        {isExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      {/* Logo Area */}
      <div className={`mb-8 px-2 flex flex-col ${!isExpanded && 'items-center'}`}>
        <h1 className="font-black text-xl text-slate-900 dark:text-slate-50">
          {isExpanded ? 'Academia' : 'A'}
        </h1>
        {isExpanded && <p className="text-slate-500 text-xs">Student Hub</p>}
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                isActive 
                  ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50 font-semibold' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'
              } ${!isExpanded && 'justify-center px-0'}`}
              title={!isExpanded ? item.name : undefined}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              {isExpanded && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Secondary Navigation */}
      <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-1">
        {secondaryNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-colors ${!isExpanded && 'justify-center px-0'}`}
              title={!isExpanded ? item.name : undefined}
            >
              <Icon size={24} />
              {isExpanded && <span>{item.name}</span>}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};
