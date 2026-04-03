export const history = [
  {
    name: 'git show',
    role: 'Inspection',
    explanation: 'Shows various types of objects (commits, tags, etc.).',
    syntax: 'git show <commit-hash>[:file]',
    scenario: 'You want to see the specific changes made in a particular commit hash like "a1b2c3d" or view the state of a file in that commit.'
  },
  {
    name: 'git log --oneline',
    role: 'History',
    explanation: 'Displays a condensed, one-line version of the commit history.',
    syntax: 'git log --oneline -n <number>',
    scenario: 'You need to quickly scan the last 20 commits without reading long descriptions or author info to find a specific merge point.'
  },
  {
    name: 'git log --graph',
    role: 'History',
    explanation: 'Shows a text-based graphical representation of the commit history including branches and merges.',
    syntax: 'git log --oneline --graph --all',
    scenario: 'You want to visualize how your "feature" branch diverged and then merged back into "main", identifying the exact branching points.'
  },
  {
    name: 'git diff --staged',
    role: 'Comparison',
    explanation: 'Shows differences between the index (staged) and your last commit.',
    syntax: 'git diff --staged',
    scenario: 'You have already added files to the staging area and want to double-check their changes before committing to ensure no debugging code is included.'
  },
  {
    name: 'git shortlog',
    role: 'History',
    explanation: 'Summarizes "git log" output by grouping commits by author.',
    syntax: 'git shortlog -s -n',
    scenario: 'You want to see a summary of how many commits each person on your team has made to the project for a weekly status report.'
  },
  {
    name: 'git describe',
    role: 'Naming',
    explanation: 'Finds the most recent tag that is reachable from a commit.',
    syntax: 'git describe --tags --always',
    scenario: 'You need to know which version (tag) the current commit belongs to or how far it is from the last stable release.'
  },
  {
    name: 'git name-rev',
    role: 'Naming',
    explanation: 'Finds symbolic names (like branch/tag names) for a given commit hash.',
    syntax: 'git name-rev <commit-hash>',
    scenario: 'You have a raw commit ID from a log file but don\'t know which branch it originated from.'
  },
  {
    name: 'git count-objects',
    role: 'Admin',
    explanation: 'Reports the number of unpacked objects and their disk space usage.',
    syntax: 'git count-objects -vH',
    scenario: 'You want to see how large your Git database is and if it needs garbage collection or a shallow clone optimization.'
  },
  {
    name: 'git ls-tree',
    role: 'Inspection',
    explanation: 'Lists the contents of a tree object (like a directory list in Git).',
    syntax: 'git ls-tree -r <commit-hash>',
    scenario: 'You want to see the exact structure of files as they exist at a specific commit or branch without switching your branch.'
  },
  {
    name: 'git grep',
    role: 'Search',
    explanation: 'Searches for patterns in tracked files.',
    syntax: 'git grep -n "pattern"',
    scenario: 'You need to find every occurrence of the word "isLoggedIn" across all files in your repository, including line numbers.'
  },
  {
    name: 'git blame',
    role: 'Inspection',
    explanation: 'Annotates each line in a file with information from the commit which introduced the line.',
    syntax: 'git blame -L <start>,<end> <file>',
    scenario: 'You found a bug in line 45 and want to know who wrote it and what the commit message was for context.'
  },
  {
    name: 'git difftool',
    role: 'Comparison',
    explanation: 'Launches an external merge tool to resolve conflicts or show differences.',
    syntax: 'git difftool -d',
    scenario: 'You find standard CLI diffs hard to read and want to use VS Code or Kaleidoscope to compare directory structures.'
  },
  {
    name: 'git mergetool',
    role: 'Resolution',
    explanation: 'Runs a merge resolution tool to resolve merge conflicts.',
    syntax: 'git mergetool --tool=<tool>',
    scenario: 'You have complex merge conflicts in "package-lock.json" and need a UI tool like Meld or Beyond Compare to pick the right versions.'
  },
  {
    name: 'git rev-list',
    role: 'History',
    explanation: 'Lists commit objects in reverse chronological order.',
    syntax: 'git rev-list --count HEAD',
    scenario: 'You are writing a script and need a raw list of all commit hashes in a certain range for an automated changelog generator.'
  },
  {
    name: 'git rev-parse',
    role: 'Utility',
    explanation: 'A plumbing command that parses parameters and converts them to hashes or paths.',
    syntax: 'git rev-parse --show-toplevel',
    scenario: 'You need to find the absolute path to your repository\'s root directory in a bash script to handle relative file uploads.'
  },
  {
    name: 'git cat-file',
    role: 'Internals',
    explanation: 'Provides content or type and size information for repository objects.',
    syntax: 'git cat-file -p <hash>',
    scenario: 'You are debugging a corrupted repository and want to see the raw content of a specific Git blob or tree object.'
  }
];
