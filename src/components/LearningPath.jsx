import React from 'react';
import { roadmapData } from '../data/roadmap';
import { ChevronRight, CheckCircle2, Lock } from 'lucide-react';

export default function LearningPath({ activeTab, setActiveTab, completedTopics = [] }) {
  const currentStep = roadmapData.find(step => step.id === activeTab);
  const currentIndex = roadmapData.findIndex(step => step.id === activeTab);

  if (!currentStep) return null;

  return (
    <div className="mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[10px] font-bold text-github-text/40 uppercase tracking-[0.2em]">Learning Pathway</h3>
        <div className="text-[10px] font-bold text-github-accent uppercase tracking-widest bg-github-accent/10 px-2 py-0.5 rounded">
          {completedTopics.length} / {roadmapData.length} Mastery Progress
        </div>
      </div>

      <div className="relative h-1 bg-[#21262d] rounded-full mb-8 flex items-center justify-between">
        <div 
          className="absolute left-0 top-0 h-full bg-github-accent rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(88,166,255,0.3)]"
          style={{ width: `${(completedTopics.length / roadmapData.length) * 100}%` }}
        />
        
        {roadmapData.map((step, idx) => {
          const isCompleted = completedTopics.includes(step.id);
          const isActive = step.id === activeTab;
          const isLocked = idx > currentIndex;

          return (
            <div key={step.id} className="relative z-10">
              <button
                onClick={() => setActiveTab(step.id)}
                className={`w-4 h-4 rounded-full border-2 transition-all flex items-center justify-center ${
                  isActive 
                    ? 'bg-github-bg border-github-accent scale-125 shadow-[0_0_12px_rgba(88,166,255,0.5)]' 
                    : isCompleted 
                      ? 'bg-github-accent border-github-accent' 
                      : 'bg-[#0d1117] border-[#30363d] hover:border-github-text/40'
                }`}
                title={step.label}
              >
                {isCompleted && <CheckCircle2 size={10} className="text-white" />}
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-github-accent animate-pulse" />}
              </button>
              
              {isActive && (
                <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#161b22] border border-github-border px-3 py-1.5 rounded-md shadow-2xl animate-in zoom-in-95 duration-200">
                  <div className="text-[10px] font-bold text-white mb-0.5">{step.label}</div>
                  <div className="text-[9px] text-github-text/60 leading-tight">Focusing on this topic</div>
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#161b22] border-t border-l border-github-border rotate-45" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {currentIndex < roadmapData.length - 1 && (
        <div className="bg-github-canvas border border-github-border border-dashed rounded-lg p-5 flex items-center justify-between group hover:border-github-accent/50 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#2386361a] border border-github-success/30 flex items-center justify-center text-github-success">
              <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-github-success uppercase tracking-widest mb-1">Up Next</div>
              <div className="text-sm font-bold text-white">{roadmapData[currentIndex + 1].label}</div>
              <p className="text-[11px] text-github-text/60">{roadmapData[currentIndex + 1].desc}</p>
            </div>
          </div>
          <button 
            onClick={() => setActiveTab(roadmapData[currentIndex + 1].id)}
            className="bg-[#21262d] hover:bg-[#30363d] text-white text-[11px] font-bold px-4 py-2 rounded-md border border-github-border transition-all"
          >
            Start Topic
          </button>
        </div>
      )}
    </div>
  );
}
