import React from 'react';
import { Sidebar } from '@/components/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-w-7xl mx-auto min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8 mb-20 md:mb-0">
         {children}
      </main>
    </div>
  );
}
