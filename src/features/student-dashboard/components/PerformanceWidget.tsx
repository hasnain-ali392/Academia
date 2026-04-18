import React from 'react';
import { Medal, BarChartBig } from 'lucide-react';
import { StudentPerformance } from '../types';

interface PerformanceWidgetProps {
  performance: StudentPerformance;
}

export const PerformanceWidget: React.FC<PerformanceWidgetProps> = ({ performance }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* 3D Circular GPA Progress Ring using precise SVG */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Medal size={64} className="text-slate-900" strokeWidth={1} />
        </div>
        <div className="relative w-40 h-40 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-sm" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="44" fill="none" stroke="#E2E8F0" strokeWidth="8" />
            <circle 
              cx="50" cy="50" r="44" fill="none" stroke="#2DD4BF" strokeWidth="8" 
              strokeDasharray="276.46" strokeDashoffset="33.17" strokeLinecap="round" 
            />
          </svg>
          <div className="relative z-10 flex flex-col items-center bg-white w-28 h-28 rounded-full justify-center shadow-inner border border-slate-50">
            <span className="text-4xl font-extrabold text-primary font-lexend">{performance.cumulativeGpa.toFixed(2)}</span>
            <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mt-1">Cumulative</span>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-lexend font-bold text-lg text-primary">
            {performance.deanListStatus ? "Dean's List Status" : "Academic Standing"}
          </h3>
          <p className="text-slate-500 text-sm mt-1">
            You are in the top {performance.topPercentile}% of your cohort. Keep it up!
          </p>
        </div>
      </div>

      {/* Semester Grade Bars */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
        <h3 className="font-lexend font-bold text-slate-900 mb-6 flex items-center gap-2">
          <BarChartBig className="text-secondary" size={24} />
          Semester Progress
        </h3>
        <div className="space-y-6">
          {performance.courses.map((course) => (
            <div key={course.id} className="space-y-3">
              <div className="flex justify-between text-sm font-bold uppercase tracking-wider text-slate-600">
                <span>{course.name}</span>
                <span className="text-primary font-black">{course.grade} ({course.percentage}%)</span>
              </div>
              <div className="h-3.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: `${course.percentage}%`,
                    background: 'linear-gradient(90deg, #2DD4BF 0%, #35577D 100%)'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
