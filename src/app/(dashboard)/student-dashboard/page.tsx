import React, { Suspense } from 'react';
import { StudentDashboardEntry } from '@/features/student-dashboard/components/StudentDashboardEntry';

export default function StudentDashboardPage() {
  return (
    <Suspense fallback={
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px] w-full">
        <div className="md:col-span-8 space-y-6">
          <div className="animate-pulse bg-slate-200 rounded-2xl h-[300px] w-full"></div>
          <div className="animate-pulse bg-slate-200 rounded-2xl h-[276px] w-full"></div>
        </div>
        <div className="md:col-span-4 h-full">
          <div className="animate-pulse bg-slate-200 rounded-2xl h-[600px] w-full"></div>
        </div>
      </div>
    }>
      <StudentDashboardEntry />
    </Suspense>
  );
}
