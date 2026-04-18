import React from 'react';
import { CheckCircle2, PlusCircle, CheckSquare } from 'lucide-react';
import { Task } from '../types';

interface FocusTasksWidgetProps {
  tasks: Task[];
}

export const FocusTasksWidget: React.FC<FocusTasksWidgetProps> = ({ tasks }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex-1">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-lexend font-bold text-slate-900 text-xl flex items-center gap-2">
          <CheckSquare className="text-secondary" size={24} />
          Focus Tasks
        </h3>
        <button className="text-sm font-semibold text-secondary hover:underline transition-colors">View All</button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {tasks.map((task) => {
          // Exclusively inline dynamic classes to ensure Tailwind compiles them correctly and applies row body tinting
          let boxClasses = "border-slate-500 bg-slate-50";
          let badgeClasses = "bg-slate-200 text-slate-700";
          let label = "Task";

          if (task.priority === 'high') {
            boxClasses = "border-red-500 bg-red-50/50 hover:bg-red-50";
            badgeClasses = "bg-red-100 text-red-700 border border-red-200";
            label = "High Priority";
          } else if (task.priority === 'medium') {
            boxClasses = "border-amber-500 bg-amber-50/50 hover:bg-amber-50";
            badgeClasses = "bg-amber-100 text-amber-700 border border-amber-200";
            label = "Mid Priority";
          } else if (task.priority === 'low') {
            boxClasses = "border-blue-500 bg-blue-50/50 hover:bg-blue-50";
            badgeClasses = "bg-blue-100 text-blue-700 border border-blue-200";
            label = "Low Priority";
          }

          return (
            <div key={task.id} className={`flex items-center p-4 rounded-xl border-l-4 ${boxClasses} shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all group`}>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`px-2 py-0.5 ${badgeClasses} text-[10px] font-extrabold rounded-md uppercase tracking-wider`}>
                    {label}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{task.dueText}</span>
                </div>
                <h4 className="font-bold text-slate-800 text-sm md:text-base">{task.title}</h4>
              </div>
              <button className="w-8 h-8 rounded-full border-2 border-slate-300 group-hover:border-secondary group-hover:bg-white flex items-center justify-center transition-colors aria-label='Complete Task'">
                <CheckCircle2 size={20} className="text-transparent group-hover:text-secondary opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2.5} />
              </button>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-6 py-3.5 border-2 border-dashed border-slate-200 rounded-xl text-slate-500 font-bold flex items-center justify-center gap-2 hover:border-secondary hover:text-secondary hover:bg-slate-50 transition-colors">
        <PlusCircle size={20} />
        Add New Task
      </button>
    </div>
  );
};
