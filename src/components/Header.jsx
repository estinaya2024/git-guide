import React from 'react';
import { BookOpen, TerminalSquare, Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-github-canvas border-b border-github-border text-github-text h-16 flex items-center px-4 md:px-6 z-50 sticky top-0">
      <div className="flex items-center gap-4 w-full">
        <button className="md:hidden text-github-text hover:text-white">
          <Menu size={24} />
        </button>
        
        <div className="flex items-center gap-3">
          <TerminalSquare size={32} className="text-white hover:text-white/80 transition-colors" />
          <span className="font-semibold text-white text-lg hidden sm:block">Git Mastery</span>
        </div>

        <div className="flex-1 max-w-2xl ml-4 mr-auto hidden md:block">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-github-text" />
            <input 
              type="text" 
              placeholder="Search or jump to..." 
              className="w-full bg-[#0d1117] border border-github-border rounded-md py-1.5 pl-9 pr-3 text-sm focus:outline-none focus:border-github-accent focus:ring-1 focus:ring-github-accent transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
              <kbd className="border border-github-border rounded-sm px-1.5 text-xs text-github-text bg-github-canvas">Ctrl</kbd>
              <kbd className="border border-github-border rounded-sm px-1.5 text-xs text-github-text bg-github-canvas">K</kbd>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-4 text-sm font-semibold">
          <a href="#" className="hover:text-white transition-colors hidden sm:block">Documentation</a>
          <a href="#" className="hover:text-white transition-colors hidden sm:block">Practice</a>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-github-accent to-purple-600 border border-github-border overflow-hidden cursor-pointer" />
        </nav>
      </div>
    </header>
  );
}
