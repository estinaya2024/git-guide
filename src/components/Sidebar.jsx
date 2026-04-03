import { 
  Book, GitBranch, GitMerge, GitPullRequest, GitCommit, 
  TerminalSquare, Settings, Users, Shield, Zap, Info, ChevronRight, Search, CheckCircle2
} from 'lucide-react';

const sections = [
  {
    title: 'Foundation',
    items: [
      { id: 'introduction', label: 'Introduction', icon: Info },
      { id: 'setup', label: 'Initial Setup', icon: Settings },
      { id: 'basics', label: 'Basic Commands', icon: GitCommit },
    ]
  },
  {
    title: 'Modern Development',
    items: [
      { id: 'branching', label: 'Branching Mastery', icon: GitBranch },
      { id: 'advanced', label: 'Advanced Git', icon: GitMerge },
    ]
  },
  {
    title: 'Team & Enterprise',
    items: [
      { id: 'teams', label: 'Collaboration', icon: Users },
      { id: 'orgs', label: 'Organizations', icon: Shield },
    ]
  },
  {
    title: 'Reference',
    items: [
      { id: 'commands', label: '160+ Git Commands', icon: Book },
    ]
  },
  {
    title: 'Sandbox',
    items: [
      { id: 'practice', label: 'Interactive Practice', icon: TerminalSquare, highlight: true },
    ]
  }
];

export default function Sidebar({ activeTab, setActiveTab, completedTopics = [], searchTerm, setSearchTerm }) {
  return (
    <div className="w-64 bg-github-bg border-r border-github-border h-[calc(100vh-4rem)] flex-shrink-0 hidden md:block overflow-y-auto sticky top-16 scrollbar-custom">
      <div className="p-4 space-y-6">
        {/* Quick Search */}
        <div className="relative group px-1">
          <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-github-text/40 group-focus-within:text-github-accent transition-colors" />
          <input 
            type="text" 
            placeholder="Search 160+ commands..." 
            value={searchTerm || ''}
            onChange={(e) => {
              setSearchTerm?.(e.target.value);
              if (e.target.value) setActiveTab('commands');
            }}
            onFocus={() => setActiveTab('commands')}
            className="w-full bg-[#0d1117] border border-github-border rounded-md py-1.5 pl-9 pr-3 text-[11px] font-medium focus:outline-none focus:border-github-accent focus:ring-1 focus:ring-github-accent/20 transition-all placeholder:text-github-text/30"
          />
        </div>

        {sections.map((section, idx) => (
          <div key={idx}>
            <div className="text-[11px] font-semibold text-github-text/50 mb-2 uppercase tracking-wider px-3">
              {section.title}
            </div>
            <nav className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                const isCompleted = completedTopics.includes(item.id);

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      if (item.id !== 'commands') setSearchTerm?.('');
                    }}
                    className={`w-full flex items-center justify-between px-3 py-1.5 text-xs rounded-md transition-all group ${
                      isActive 
                        ? 'bg-[#1f6feb26] text-[#58a6ff]' 
                        : item.highlight 
                          ? 'text-github-success hover:bg-[#2386361a]'
                          : 'text-[#8b949e] hover:bg-[#21262d] hover:text-[#c9d1d9]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon size={14} className={isActive ? 'text-[#58a6ff]' : (item.highlight ? 'text-github-success' : 'text-[#8b949e] group-hover:text-[#c9d1d9]')} />
                      <span className="font-medium tracking-tight whitespace-nowrap">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {isCompleted && !isActive && <CheckCircle2 size={10} className="text-github-success mt-0.5 opacity-80" />}
                      {isActive && <ChevronRight size={10} className="text-[#58a6ff]" />}
                    </div>
                  </button>
                )
              })}
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
}


