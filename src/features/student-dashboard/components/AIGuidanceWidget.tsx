import React from 'react';
import { Bot, Send, Calendar, Users } from 'lucide-react';
import { ChatMessage } from '../types';

interface AIGuidanceWidgetProps {
  chatHistory: ChatMessage[];
}

export const AIGuidanceWidget: React.FC<AIGuidanceWidgetProps> = ({ chatHistory }) => {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* AI Guidance Chat Panel (Glassmorphism) */}
      <div className="glass flex-1 rounded-3xl p-6 flex flex-col relative overflow-hidden min-h-[500px] shadow-sm">
        {/* Glow Effects directly matching the HTML classes */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-teal/10 rounded-full blur-3xl"></div>

        <div className="flex items-center gap-3 mb-6 relative">
          <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
            <Bot size={24} />
          </div>
          <div>
            <h3 className="font-lexend font-bold text-primary">AI Academic Guide</h3>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Online & Learning</span>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto pr-2 relative flex flex-col text-sm pt-2">
          {chatHistory.map((msg) => (
            <div
              key={msg.id}
              className={`p-3.5 rounded-2xl shadow-sm max-w-[85%] font-medium leading-relaxed ${msg.sender === 'ai'
                ? 'bg-white/80 rounded-tl-none text-slate-700'
                : 'bg-primary text-white rounded-tr-none ml-auto'
                }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input area totally refactored for guaranteed single-line flexible alignment */}
        <div className="mt-6 flex items-center bg-slate-100 shadow-inner rounded-xl p-1.5 border-2 border-black relative z-10">
          <input
            className="flex-1 bg-transparent border-none outline-none py-2 px-1.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:ring-0"
            placeholder="Ask your tutor..."
            type="text"
            aria-label="Ask your tutor chat input"
          />
          <button className="h-[44px] px-4 shrink-0 bg-primary hover:bg-slate-800 text-white rounded-lg flex items-center justify-center active:scale-95 transition-all shadow-md">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
