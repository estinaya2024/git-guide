import React, { useState, useRef, useEffect } from 'react';

const INITIAL_MESSAGE = [
  { type: 'system', content: 'Welcome to Git Mastery Interactive Terminal v2.0.0' },
  { type: 'system', content: 'Type "help" to see all available commands.' },
];

export default function InteractiveTerminal() {
  const [history, setHistory] = useState(INITIAL_MESSAGE);
  const [input, setInput] = useState('');
  const [repoState, setRepoState] = useState({
    initialized: false,
    staged: [],
    committed: [],
    branch: 'main',
    branches: ['main'],
    stash: [],
  });
  
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const fullCommand = input.trim();
      const [cmd, subCmd, ...args] = fullCommand.split(' ');
      
      const newHistory = [...history, { type: 'input', content: fullCommand, branch: repoState.branch }];

      if (cmd === 'help') {
        newHistory.push({ type: 'system', content: 'Available commands:\n  git init\n  git status\n  git add <file>\n  git commit -m "<msg>"\n  git branch [name]\n  git checkout <name>\n  git stash [pop/list]\n  clear\n  help' });
      } else if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      } else if (cmd === 'git') {
        if (subCmd === 'init') {
          setRepoState(prev => ({ ...prev, initialized: true }));
          newHistory.push({ type: 'output', content: 'Initialized empty Git repository in /home/user/project/.git/' });
        } else if (!repoState.initialized) {
          newHistory.push({ type: 'error', content: 'fatal: not a git repository (or any of the parent directories): .git' });
        } else {
          switch (subCmd) {
            case 'status':
              if (repoState.staged.length === 0 && repoState.committed.length === 0) {
                newHistory.push({ type: 'output', content: `On branch ${repoState.branch}\n\nNo commits yet\n\nnothing to commit (create/copy files and use "git add" to track)` });
              } else if (repoState.staged.length > 0) {
                 newHistory.push({ type: 'output', content: `On branch ${repoState.branch}\n\nChanges to be committed:\n  (use "git rm --cached <file>..." to unstage)\n\tnew file:   ${repoState.staged.join('\n\tnew file:   ')}` });
              } else {
                newHistory.push({ type: 'output', content: `On branch ${repoState.branch}\n\nnothing to commit, working tree clean` });
              }
              break;
            case 'add':
              const file = args[0] || '.';
              setRepoState(prev => ({ ...prev, staged: [...prev.staged, file === '.' ? 'index.html' : file] }));
              newHistory.push({ type: 'output', content: file === '.' ? 'Added all files to staging area.' : `Added ${file} to staging area.` });
              break;
            case 'commit':
              if (repoState.staged.length === 0) {
                newHistory.push({ type: 'output', content: 'nothing to commit, working tree clean' });
              } else {
                const msg = fullCommand.match(/"([^"]+)"/)?.[1] || 'no message';
                setRepoState(prev => ({ 
                   ...prev, 
                   committed: [...prev.committed, { msg, files: prev.staged }],
                   staged: [] 
                }));
                newHistory.push({ type: 'output', content: `[${repoState.branch} (root-commit)] ${msg}\n ${repoState.staged.length} file changed, 1 insertion(+)` });
              }
              break;
            case 'branch':
              const branchName = args[0];
              if (!branchName) {
                newHistory.push({ type: 'output', content: repoState.branches.map(b => (b === repoState.branch ? `* ${b}` : `  ${b}`)).join('\n') });
              } else {
                setRepoState(prev => ({ ...prev, branches: [...prev.branches, branchName] }));
                newHistory.push({ type: 'output', content: `Created branch '${branchName}'` });
              }
              break;
            case 'checkout':
            case 'switch':
              const target = args[subCmd === 'switch' && args[0] === '-c' ? 1 : 0];
              const isCreate = subCmd === 'switch' && args[0] === '-c';
              
              if (isCreate) {
                setRepoState(prev => ({ ...prev, branches: [...prev.branches, target], branch: target }));
                newHistory.push({ type: 'output', content: `Switched to a new branch '${target}'` });
              } else if (repoState.branches.includes(target)) {
                setRepoState(prev => ({ ...prev, branch: target }));
                newHistory.push({ type: 'output', content: `Switched to branch '${target}'` });
              } else {
                newHistory.push({ type: 'error', content: `error: pathspec '${target}' did not match any file(s) known to git` });
              }
              break;
            case 'stash':
              if (args[0] === 'pop') {
                if (repoState.stash.length === 0) {
                  newHistory.push({ type: 'error', content: 'No stash entries found.' });
                } else {
                  const popped = repoState.stash[repoState.stash.length - 1];
                  setRepoState(prev => ({ 
                    ...prev, 
                    staged: [...prev.staged, ...popped],
                    stash: prev.stash.slice(0, -1) 
                  }));
                  newHistory.push({ type: 'output', content: 'Dropped refs/stash@{0} (applied stashed changes to working tree)' });
                }
              } else if (args[0] === 'list') {
                newHistory.push({ type: 'output', content: repoState.stash.map((s, i) => `stash@{${i}}: WIP on ${repoState.branch}: temporary stash`).join('\n') || 'No stashes yet' });
              } else {
                if (repoState.staged.length === 0) {
                  newHistory.push({ type: 'output', content: 'No local changes to save' });
                } else {
                  setRepoState(prev => ({ 
                    ...prev, 
                    stash: [...prev.stash, prev.staged],
                    staged: [] 
                  }));
                  newHistory.push({ type: 'output', content: `Saved working directory and index state WIP on ${repoState.branch}` });
                }
              }
              break;
            default:
              newHistory.push({ type: 'error', content: `git: '${subCmd}' is not a git command. See 'git --help'.` });
          }
        }
      } else if (fullCommand !== '') {
        newHistory.push({ type: 'error', content: `command not found: ${cmd}` });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <div 
      className="bg-[#010409] rounded-md p-4 min-h-[400px] max-h-[500px] font-mono text-sm border border-github-border shadow-2xl flex flex-col overflow-hidden"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex gap-2 mb-4 text-github-muted bg-[#161b22] -m-4 p-2 px-4 border-b border-github-border">
        <div className="flex gap-1.5 items-center">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 text-center text-[10px] ml-[-40px] uppercase font-bold opacity-50 tracking-widest">Git Terminal — {repoState.branch}</div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto pt-2 scrollbar-custom"
      >
        {history.map((line, i) => (
          <div key={i} className="mb-1 whitespace-pre-wrap">
            {line.type === 'input' && (
              <div className="flex flex-wrap gap-x-2">
                <span className="text-github-success">➜</span>
                <span className="text-github-accent">~</span>
                <span className="text-github-muted bg-[#1f6feb26] px-1 rounded">({line.branch || 'main'})</span>
                <span className="text-github-text">{line.content}</span>
              </div>
            )}
            {line.type === 'system' && <div className="text-[#8b949e] italic opacity-80">{line.content}</div>}
            {line.type === 'output' && <div className="text-github-text pl-4 opacity-90">{line.content}</div>}
            {line.type === 'error' && <div className="text-[#f85149] pl-4">{line.content}</div>}
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="text-github-success font-bold">➜</span>
          <span className="text-github-accent">~</span>
          <span className="text-github-muted bg-[#1f6feb26] px-1 rounded">({repoState.branch})</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent border-none outline-none text-github-text focus:ring-0 p-0 caret-[#58a6ff]"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
