import React from 'react';
import { PerformanceWidget } from './PerformanceWidget';
import { FocusTasksWidget } from './FocusTasksWidget';
import { AIGuidanceWidget } from './AIGuidanceWidget';
import { studentDashboardApi } from '../api/mockApi';

export const StudentDashboardEntry = async () => {
  // Fetch data natively in Server Component (acting as Suspense boundary when wrapped in loading.tsx)
  const data = await studentDashboardApi.getDashboardData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
      {/* Left Column: Academics and Tasks */}
      <div className="md:col-span-8 space-y-6 flex flex-col">
        <PerformanceWidget performance={data.performance} />
        <FocusTasksWidget tasks={data.tasks} />
      </div>

      {/* Right Column: AI Guidance */}
      <div className="md:col-span-4 h-full">
        <AIGuidanceWidget chatHistory={data.chatHistory} nextEvent={data.nextEvent} />
      </div>
    </div>
  );
};
