import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CodeBlock({ code, language = 'bash' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-4 rounded-md bg-[#161b22] border border-github-border">
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-[#21262d] border border-github-border text-github-text hover:text-white hover:bg-[#30363d] transition-colors flex items-center justify-center"
          title="Copy to clipboard"
        >
          {copied ? <Check size={16} className="text-github-success" /> : <Copy size={16} />}
        </button>
      </div>
      <div className="overflow-x-auto p-4 text-sm font-mono text-[#e6edf3]">
        <pre><code className={`language-${language}`}>{code}</code></pre>
      </div>
    </div>
  );
}
