export const history = [
  {
    name: 'git log --oneline',
    role: 'History',
    explanation: 'Displays the commit history in a condensed single-line format showing each commit\'s abbreviated hash and subject line. This is the most used git log variant for daily work. An abbreviated hash (e.g., "abc1234") is sufficient to reference a commit in all Git commands — you don\'t need the full 40-character hash.',
    syntax: 'git log --oneline [-n <number>]',
    scenario: 'You want a quick overview of the last 10 commits on your feature branch before opening a PR. Run "git log --oneline -10". In about 3 seconds, you get a clean summary showing whether your commit messages follow convention and whether the history tells a coherent story of the work done.'
  },
  {
    name: 'git log --graph',
    role: 'History',
    explanation: 'Adds an ASCII art visual representation of the branch and merge topology to the left of the commit history. Each line, asterisk (*), and slash shows where branches diverged and where they were merged back together. Combined with "--oneline --all", this becomes the best tool for understanding the structure of the entire repository without any external GUI.',
    syntax: 'git log --oneline --graph --all',
    scenario: 'Your team lead asks you to explain why the main branch has "merge bubbles" and whether you can make future merges cleaner. You run "git log --graph --oneline --all" and visually show the branch divergence points. The graph immediately reveals that direct merges (instead of rebase-before-merge) are creating the bubbles. A picture is worth a thousand words in a code review meeting.'
  },
  {
    name: 'git log --author',
    role: 'History',
    explanation: 'Filters the commit log to show only commits made by a specific author. The filter is pattern-based (not exact match), so "git log --author=Jane" matches "Jane Smith" and "Jane Doe". This is useful for reviewing a specific person\'s contributions, generating activity reports, or tracing the history of code written by a particular team member.',
    syntax: 'git log --author="<name or email>"',
    scenario: 'A bug was introduced sometime last month. You\'ve narrowed it down to code written by the developer who left the company two weeks ago. Run "git log --author=FormerDev --since=\'2 months ago\' --oneline" to see every commit they made recently. Then use "git show <hash>" on suspicious commits to read the exact changes — this is professional forensic debugging.'
  },
  {
    name: 'git log -S',
    role: 'History',
    explanation: 'The "pickaxe" search — finds every commit that ADDED or REMOVED a specific string from the codebase. This is not a full-text search of commit messages — it searches the actual code content of commits. If you know a function name, variable, or string that appeared or disappeared, the pickaxe finds the exact commit that introduced or removed it, even through file renames.',
    syntax: 'git log -S "<search-string>" --oneline',
    scenario: 'A critical API key was accidentally committed to the repo at some point in history and you need to find exactly when and where. Run "git log -S \'sk_live_\' --oneline --all". Git scans every commit in the entire history and returns exactly which commit(s) added or removed a string matching that pattern. You now know the exact commit hash to investigate and report to your security team.'
  },
  {
    name: 'git show',
    role: 'Inspection',
    explanation: 'Displays the full details of a specific Git object — usually a commit. For a commit, it shows the commit metadata (hash, author, date, message) followed by the complete diff of every change made. This is how you read exactly what changed in a specific commit without checking out the code.',
    syntax: 'git show <commit-hash> [-- file]',
    scenario: 'In your code review, a teammate says "your commit abc1234 broke the tests." Before responding, run "git show abc1234" to see exactly what you changed. You see you accidentally removed a closing brace on line 47. Reading commits with git show before defending your work is professional practice — it prevents defensive responses based on faulty memory.'
  },
  {
    name: 'git blame',
    role: 'Inspection',
    explanation: 'Annotates every line of a file with the commit hash, author, and commit date that last modified that specific line. It answers the question "who wrote this, and when?" with line-by-line precision. Note: "blame" is about archaeology, not accusation — in professional contexts it is used to find the RIGHT PERSON to ask for context about specific code, not to shame anyone.',
    syntax: 'git blame <file> [-L <start>,<end>]',
    scenario: 'You are reading "payment-processor.js" and find a mysterious 15-line function with no comments. You run "git blame payment-processor.js" and see that lines 42-56 were last modified by "Sarah" in commit "f8a3d19". You look up the commit message: "feat: handle PayPal webhook idempotency edge case". Now you have context. You can read that commit and understand the why behind the code in seconds.'
  },
  {
    name: 'git diff --stat',
    role: 'Comparison',
    explanation: 'Shows a summary of changes between two commits, branches, or states — listing each changed file alongside how many lines were added and removed, plus a visual bar chart. Instead of showing the raw diff (which can be overwhelming for large changes), it gives a high-level map: "which files changed and roughly how much?" This is perfect for a quick sanity check before committing or for reviewing a PR overview.',
    syntax: 'git diff --stat [commit1] [commit2]',
    scenario: 'You just ran "git pull" and want to quickly understand what your teammate just changed in the merge. Run "git diff --stat HEAD~1 HEAD" to see a clean file-by-file summary. It shows: "src/api/payments.js: 45 insertions, 12 deletions". Now you know exactly which files to look at without reading thousands of diff lines — you go straight to the relevant file.'
  },
  {
    name: 'git log --follow',
    role: 'History',
    explanation: 'Tracks the history of a specific file across renames. Without "--follow", git log only shows commits that touched the file at its CURRENT name — if the file was renamed at some point, the history before the rename is invisible. "--follow" instructs Git to traverse renames and piece together the complete lifetime of the file\'s content across all name changes.',
    syntax: 'git log --follow -- <file-path>',
    scenario: 'You find a tricky bug in "src/components/UserProfile.jsx". You run "git log src/components/UserProfile.jsx" and only see 3 commits. Something is wrong — this file is too complex to have been created just recently. Run "git log --follow -- src/components/UserProfile.jsx" and see 47 commits going back 2 years. The file was renamed from "Profile.jsx" at some point — without "--follow" you would have missed 44 commits of crucial history.'
  },
  {
    name: 'git shortlog',
    role: 'History',
    explanation: 'Groups commits by author and summarizes them, making it easy to see each contributor\'s volume of work. With "-s -n" it shows just the commit count per author, sorted numerically — perfect for quick contribution statistics. This is commonly used to generate a "Contributors" section for a project\'s README or release notes.',
    syntax: 'git shortlog -s -n [--all]',
    scenario: 'Your team lead wants a quick who-contributed-what summary for the quarterly engineering review. Run "git shortlog -s -n" on the main branch. You see: "347 Jane Smith | 289 Alex Johnson | 156 Carlos Reyes". In 2 seconds you have clean, accurate contribution statistics ready to paste into the slide deck — no manual counting required.'
  },
  {
    name: 'git bisect',
    role: 'Debugging',
    explanation: 'Uses binary search to efficiently find the exact commit that introduced a bug. You tell Git "this commit is GOOD" and "this commit is BAD". Git then checks out a commit halfway between them and asks you to test it. You mark it good or bad, and Git halves the search space again. A bug that was introduced in 1 of 1000 commits is found in just 10 steps (log2 of 1000). This is one of the most powerful debugging techniques in Git.',
    syntax: 'git bisect start | git bisect good <hash> | git bisect bad <hash>',
    scenario: 'Tests started failing somewhere in the last 200 commits. Finding which one would normally require testing each commit manually. With bisect: "git bisect start", "git bisect bad HEAD" (current commit is broken), "git bisect good v3.0.0-tag" (this release was fine). Git checks out commit 100. You run the tests — they fail. "git bisect bad". Git checks out commit 50. Tests pass. "git bisect good". After 8 more steps, Git announces the exact commit: "fa3b192 is the first bad commit." You found the culprit in minutes instead of hours.'
  }
];
