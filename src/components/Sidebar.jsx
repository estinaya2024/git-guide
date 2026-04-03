import { 
  Book, GitBranch, GitMerge, GitPullRequest, GitCommit, 
  TerminalSquare, Settings, Users, Shield, Zap, Info, ChevronRight
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
    title: 'Sandbox',
    items: [
      { id: 'practice', label: 'Interactive Practice', icon: TerminalSquare, highlight: true },
    ]
  }
];

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="w-64 bg-github-bg border-r border-github-border h-[calc(100vh-4rem)] flex-shrink-0 hidden md:block overflow-y-auto sticky top-16 scrollbar-custom">
      <div className="p-4 space-y-6">
        {sections.map((section, idx) => (
          <div key={idx}>
            <div className="text-[11px] font-semibold text-github-text/50 mb-2 uppercase tracking-wider px-3">
              {section.title}
            </div>
            <nav className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
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
                      <span className="font-medium tracking-tight">{item.label}</span>
                    </div>
                    {isActive && <ChevronRight size={12} className="text-[#58a6ff]" />}
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

