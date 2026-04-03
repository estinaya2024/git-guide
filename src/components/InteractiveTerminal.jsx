import React, { useState, useRef, useEffect } from 'react';

const INITIAL_MESSAGE = [
  { type: 'system', content: 'Welcome to Git Mastery Interactive Terminal v2.0.0' },
  { type: 'system', content: 'Type "help" to see all available commands.' },
];

export default function InteractiveTerminal() {
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('terminal_history');
    return saved ? JSON.parse(saved) : INITIAL_MESSAGE;
  });
  
  const [repoState, setRepoState] = useState(() => {
    const saved = localStorage.getItem('terminal_repo_state');
    return saved ? JSON.parse(saved) : {
      initialized: false,
      staged: [],
      committed: [],
      branch: 'main',
      branches: ['main'],
      stash: [],
      vfs: { 'README.md': '# Git Mastery Project\nLearn Git effectively here.' }
    };
  });

  const [input, setInput] = useState('');
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('terminal_history', JSON.stringify(history));
    localStorage.setItem('terminal_repo_state', JSON.stringify(repoState));
  }, [history, repoState]);

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

      // Shell Commands
      if (cmd === 'ls') {
        const files = Object.keys(repoState.vfs);
        newHistory.push({ type: 'output', content: files.length > 0 ? files.join('  ') : 'No files in directory' });
      } else if (cmd === 'touch') {
        const fileName = args[0];
        if (!fileName) {
          newHistory.push({ type: 'error', content: 'usage: touch <filename>' });
        } else {
          setRepoState(prev => ({ ...prev, vfs: { ...prev.vfs, [fileName]: '' } }));
          newHistory.push({ type: 'output', content: '' });
        }
      } else if (cmd === 'rm') {
        const fileName = args[0];
        if (repoState.vfs[fileName] !== undefined) {
          const newVfs = { ...repoState.vfs };
          delete newVfs[fileName];
          setRepoState(prev => ({ ...prev, vfs: newVfs }));
          newHistory.push({ type: 'output', content: `Removed ${fileName}` });
        } else {
          newHistory.push({ type: 'error', content: `rm: ${fileName}: No such file or directory` });
        }
      } else if (cmd === 'cat') {
        const fileName = args[0];
        if (repoState.vfs[fileName] !== undefined) {
          newHistory.push({ type: 'output', content: repoState.vfs[fileName] || '(empty file)' });
        } else {
          newHistory.push({ type: 'error', content: `cat: ${fileName}: No such file or directory` });
        }
      } else if (cmd === 'help') {
        newHistory.push({ type: 'system', content: 'Shell Commands:\n  ls, touch, rm, cat, clear\n\nGit Commands:\n  git init, status, add, commit, branch, checkout, switch, stash' });
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
              const untracked = Object.keys(repoState.vfs).filter(f => !repoState.staged.includes(f) && !repoState.committed.some(c => c.files.includes(f)));
              let output = `On branch ${repoState.branch}\n`;
              if (repoState.staged.length > 0) {
                output += `\nChanges to be committed:\n\tnew file:   ${repoState.staged.join('\n\tnew file:   ')}`;
              }
              if (untracked.length > 0) {
                output += `\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n\t${untracked.join('\n\t')}`;
              }
              if (repoState.staged.length === 0 && untracked.length === 0) {
                output += `\nnothing to commit, working tree clean`;
              }
              newHistory.push({ type: 'output', content: output });
              break;

            case 'add':
              const file = args[0];
              if (!file) {
                 newHistory.push({ type: 'error', content: 'Nothing specified, nothing added.' });
              } else if (file === '.') {
                 setRepoState(prev => ({ ...prev, staged: [...new Set([...prev.staged, ...Object.keys(prev.vfs)])] }));
                 newHistory.push({ type: 'output', content: 'Added all files to staging area.' });
              } else if (repoState.vfs[file] !== undefined) {
                 setRepoState(prev => ({ ...prev, staged: [...new Set([...prev.staged, file])] }));
                 newHistory.push({ type: 'output', content: `Added ${file} to staging area.` });
              } else {
                 newHistory.push({ type: 'error', content: `fatal: pathspec '${file}' did not match any files` });
              }
              break;

            case 'commit':
              const msg = fullCommand.match(/"([^"]+)"/)?.[1];
              if (!msg) {
                newHistory.push({ type: 'error', content: 'error: switch `m\' requires a value\n\nusage: git commit -m <message>' });
              } else if (repoState.staged.length === 0) {
                newHistory.push({ type: 'output', content: 'nothing to commit, working tree clean' });
              } else {
                setRepoState(prev => ({ 
                   ...prev, 
                   committed: [...prev.committed, { id: Math.random().toString(16).slice(2, 8), msg, files: prev.staged }],
                   staged: [] 
                }));
                newHistory.push({ type: 'output', content: `[${repoState.branch}] ${msg}\n ${repoState.staged.length} file changed` });
              }
              break;

            case 'log':
               if (repoState.committed.length === 0) {
                 newHistory.push({ type: 'error', content: `fatal: your current branch '${repoState.branch}' does not have any commits yet` });
               } else {
                 const logContent = repoState.committed.slice().reverse().map(c => 
                   `commit ${c.id}\nAuthor: Dev <dev@mastery.com>\nDate:   ${new Date().toLocaleString()}\n\n    ${c.msg}`
                 ).join('\n\n');
                 newHistory.push({ type: 'output', content: logContent });
               }
               break;

            case 'branch':
              const branchName = args[0];
              if (!branchName) {
                newHistory.push({ type: 'output', content: repoState.branches.map(b => (b === repoState.branch ? `* ${b}` : `  ${b}`)).join('\n') });
              } else {
                setRepoState(prev => ({ ...prev, branches: [...new Set([...prev.branches, branchName])] }));
                newHistory.push({ type: 'output', content: `Created branch '${branchName}'` });
              }
              break;

            case 'checkout':
            case 'switch':
              const target = args[subCmd === 'switch' && args[0] === '-c' ? 1 : 0];
              const isCreate = subCmd === 'switch' && args[0] === '-c';
              
              if (isCreate) {
                setRepoState(prev => ({ ...prev, branches: [...new Set([...prev.branches, target])], branch: target }));
                newHistory.push({ type: 'output', content: `Switched to a new branch '${target}'` });
              } else if (repoState.branches.includes(target)) {
                setRepoState(prev => ({ ...prev, branch: target }));
                newHistory.push({ type: 'output', content: `Switched to branch '${target}'` });
              } else {
                newHistory.push({ type: 'error', content: `error: pathspec '${target}' did not match any file(s) known to git` });
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
