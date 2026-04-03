import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CodeBlock from './components/CodeBlock';
import { contentData } from './data/content';
import { allCommands } from './data/commands';
import { roadmapData } from './data/roadmap';
import { Book, TerminalSquare, ChevronRight, CheckCircle2, Star, Users, Shield, Target, Search, Zap, Activity } from 'lucide-react';

import InteractiveTerminal from './components/InteractiveTerminal';
import LearningPath from './components/LearningPath';

const missions = [
  { 
    id: 1, 
    title: 'The Solo Loop', 
    desc: 'Initialize a repo, stage index.html, and create your first commit.',
    commands: ['git init', 'git add index.html', 'git commit -m "initial"']
  },
  { 
    id: 2, 
    title: 'Feature Isolation', 
    desc: 'Create a "feature-login" branch and switch to it immediately.',
    commands: ['git branch feature-login', 'git checkout feature-login']
  },
  { 
    id: 3, 
    title: 'The Secret Stash', 
    desc: 'Stage changes, then stash them to clear your working directory.',
    commands: ['git add .', 'git stash']
  },
  { 
    id: 4, 
    title: 'Emergency Reset', 
    desc: 'You made a mistake! Stage a file and then reset HEAD to undo it.',
    commands: ['git add .', 'git reset --soft HEAD~1']
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('introduction');
  const [activeMission, setActiveMission] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCommands = allCommands.filter(cmd => 
    cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.explanation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderContent = () => {
    if (activeTab === 'commands') {
      return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 pb-20">
          <header className="border-b border-github-border pb-8">
            <div className="flex items-center gap-2 text-github-text/60 text-xs font-medium mb-3">
              <Book size={14} />
              <span>Reference</span>
              <ChevronRight size={12} className="opacity-50" />
              <span className="text-github-accent font-bold uppercase tracking-widest text-[10px]">160+ Commands</span>
            </div>
            <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Git Command Encyclopedia</h1>
            <p className="text-lg text-[#8b949e] max-w-3xl leading-relaxed">
              Explore the complete set of Git commands, from everyday porcelains to deep-level plumbing. 
              {searchTerm && <span className="text-github-accent ml-2">Found {filteredCommands.length} matches for "{searchTerm}"</span>}
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredCommands.map((cmd, i) => (
              <div key={i} className="bg-github-canvas border border-github-border rounded-lg p-5 hover:border-github-accent/50 transition-all group shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <code className="text-github-accent font-mono font-bold text-sm bg-github-accent/10 px-2 py-1 rounded">
                    {cmd.name}
                  </code>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#21262d] text-github-text/60 border border-github-border uppercase tracking-tight">
                    {cmd.role}
                  </span>
                </div>
                <p className="text-sm text-[#e6edf3] mb-4 leading-relaxed font-medium">
                  {cmd.explanation}
                </p>
                <div className="bg-[#0d1117] border border-github-border/50 rounded-md p-3 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-github-accent/30" />
                  <div className="text-[10px] font-bold text-github-text/40 uppercase mb-1 flex items-center gap-1.5 leading-none">
                    <Zap size={10} className="text-github-accent" /> Real-World Scenario
                  </div>
                  <p className="text-[12px] text-github-text leading-snug italic">
                    "{cmd.scenario}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredCommands.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-github-border rounded-xl">
              <Search size={48} className="mx-auto text-github-text/20 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No commands found</h3>
              <p className="text-github-text">Try searching for a different keyword or category.</p>
            </div>
          )}
        </div>
      );
    }

    if (activeTab === 'practice') {
      return (
        <div className="flex flex-col gap-8 animate-in slide-in-from-bottom-4 duration-500 pb-20">
          <div className="bg-github-canvas border border-github-border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-[#161b22] p-4 border-b border-github-border flex items-center justify-between">
              <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                <TerminalSquare size={16} className="text-github-success" />
                Interactive Sandbox
              </h2>
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#30363d]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#30363d]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#30363d]" />
              </div>
            </div>
            <div className="p-4 bg-github-bg">
               <InteractiveTerminal />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-github-text uppercase tracking-wider flex items-center gap-2 px-1">
                <Target size={14} /> Training Missions
              </h3>
              <div className="space-y-2">
                {missions.map((m) => (
                  <button 
                    key={m.id}
                    onClick={() => setActiveMission(m)}
                    className={`w-full text-left p-4 rounded-md border transition-all ${
                      activeMission?.id === m.id 
                        ? 'bg-[#1f6feb15] border-github-accent ring-1 ring-github-accent' 
                        : 'bg-github-canvas border-github-border hover:border-[#8b949e]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-github-accent">Mission {m.id}</span>
                      {activeMission?.id === m.id && <div className="w-2 h-2 rounded-full bg-github-accent animate-pulse" />}
                    </div>
                    <div className="text-sm font-semibold text-white mb-1">{m.title}</div>
                    <p className="text-xs text-github-text leading-relaxed">{m.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-github-text uppercase tracking-wider flex items-center gap-2 px-1">
                <Star size={14} /> Mission Intel
              </h3>
              <div className="bg-github-canvas border border-github-border rounded-md p-6 h-full min-h-[200px] flex flex-col items-center justify-center text-center">
                {activeMission ? (
                  <div className="animate-in fade-in zoom-in-95 duration-300">
                    <div className="bg-github-accent/10 p-3 rounded-full w-fit mx-auto mb-4">
                      <Target size={32} className="text-github-accent" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{activeMission.title}</h4>
                    <p className="text-sm text-github-text mb-6 max-w-xs">{activeMission.desc}</p>
                    <div className="space-y-2 text-left">
                      <div className="text-[10px] font-bold text-github-text/50 uppercase mb-1">Required Commands</div>
                      {activeMission.commands.map((cmd, i) => (
                        <div key={i} className="bg-[#0d1117] border border-github-border px-3 py-1.5 rounded text-xs font-mono text-github-accent">
                          {cmd}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-github-text/50 space-y-3">
                    <div className="w-12 h-12 border-2 border-dashed border-github-border rounded-full mx-auto" />
                    <p className="text-sm italic">Select a mission to begin your training</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    const data = contentData[activeTab];
    if (!data) return <div className="text-github-text">Topic content not available.</div>;

    return (
      <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500 pb-20">
        <header className="border-b border-github-border pb-8">
          <div className="flex items-center gap-2 text-github-text/60 text-xs font-medium mb-3">
            <Book size={14} />
            <span>Guide</span>
            <ChevronRight size={12} className="opacity-50" />
            <span className="text-github-accent font-bold uppercase tracking-widest text-[10px]">{data.title}</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">{data.title}</h1>
          <p className="text-lg text-[#8b949e] max-w-3xl leading-relaxed">{data.description}</p>
        </header>

        <article className="space-y-12">
          {data.sections.map((section, idx) => (
            <section key={idx} className="group">
              <div className="flex items-start gap-4">
                 <div className="mt-1.5 w-1.5 h-6 bg-github-accent/20 group-hover:bg-github-accent rounded-full transition-colors hidden md:block" />
                 <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                       {section.heading}
                    </h2>
                    <p className="text-[#c9d1d9] leading-relaxed text-base mb-6 max-w-4xl">
                      {section.text}
                    </p>
                    {section.code && (
                      <div className="mb-6 transform transition-transform group-hover:scale-[1.005]">
                         <CodeBlock code={section.code} />
                      </div>
                    )}
                 </div>
              </div>
            </section>
          ))}
        </article>

        {activeTab !== 'practice' && (
          <div className="relative group overflow-hidden mt-16 p-8 rounded-xl bg-gradient-to-br from-[#161b22] to-github-bg border border-github-border shadow-2xl">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <TerminalSquare size={120} className="text-github-success" />
            </div>
            <div className="relative z-10 w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                <CheckCircle2 size={24} className="text-github-success" />
                Done with the theory?
              </h3>
              <p className="text-github-text mb-8 text-lg">
                The best way to master Git is by typing the commands. Launch the sandbox to test your skills on real-world scenarios.
              </p>
              <button 
                onClick={() => setActiveTab('practice')}
                className="bg-github-success hover:bg-github-successHover text-white px-8 py-3 rounded-md font-bold transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
              >
                Launch Sandbox Mode <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-github-bg text-[#c9d1d9] font-sans flex flex-col selection:bg-github-accent/30 selection:text-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        <main className="flex-1 overflow-y-auto w-full scrollbar-custom bg-[#0d1117]">
          <div className="max-w-5xl mx-auto p-6 md:p-12 lg:p-16">
            <LearningPath activeTab={activeTab} setActiveTab={setActiveTab} />
            {renderContent()}
          </div>
        </main>
      </div>
      
      {/* Footer / Status Bar */}
      <footer className="h-8 bg-[#010409] border-t border-github-border flex items-center px-4 justify-between text-[10px] text-github-text/50 font-mono z-50">
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-1.5">
             <div className="w-2 h-2 rounded-full bg-github-success animate-pulse" />
             <span>Git v2.43.0 Connected</span>
           </div>
           <div className="flex items-center gap-1.5 border-l border-github-border pl-4">
             <Activity size={10} className="text-github-accent" />
             <span className="uppercase tracking-widest text-github-accent font-bold">
               LEVEL {roadmapData.find(s => s.id === activeTab)?.level || '?'}: {activeTab}
             </span>
           </div>
        </div>
        <div className="flex items-center gap-4">
           <span>UTF-8</span>
           <span className="text-github-accent font-bold">PRO-MASTERY SYSTEM v3.0</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
