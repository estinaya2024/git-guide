export const history = [
  {
    name: 'git show',
    role: 'Inspection',
    explanation: 'Shows various types of objects (commits, tags, etc.).',
    scenario: 'You want to see the specific changes made in a particular commit hash like "a1b2c3d".'
  },
  {
    name: 'git log --oneline',
    role: 'History',
    explanation: 'Displays a condensed, one-line version of the commit history.',
    scenario: 'You need to quickly scan the last 20 commits without reading long descriptions or author info.'
  },
  {
    name: 'git log --graph',
    role: 'History',
    explanation: 'Shows a text-based graphical representation of the commit history including branches and merges.',
    scenario: 'You want to visualize how your "feature" branch diverged and then merged back into "main".'
  },
  {
    name: 'git diff --staged',
    role: 'Comparison',
    explanation: 'Shows differences between the index (staged) and your last commit.',
    scenario: 'You have already added files to the staging area and want to double-check their changes before committing.'
  },
  {
    name: 'git shortlog',
    role: 'History',
    explanation: 'Summarizes "git log" output by grouping commits by author.',
    scenario: 'You want to see a summary of how many commits each person on your team has made to the project.'
  },
  {
    name: 'git describe',
    role: 'Naming',
    explanation: 'Finds the most recent tag that is reachable from a commit.',
    scenario: 'You need to know which version (tag) the current commit belongs to or how far it is from the last release.'
  },
  {
    name: 'git name-rev',
    role: 'Naming',
    explanation: 'Finds symbolic names (like branch/tag names) for a given commit hash.',
    scenario: 'You have a commit ID but don''t know which branch it came from.'
  },
  {
    name: 'git count-objects',
    role: 'Admin',
    explanation: 'Reports the number of unpacked objects and their disk space usage.',
    scenario: 'You want to see how large your Git database is and if it needs garbage collection.'
  },
  {
    name: 'git ls-tree',
    role: 'Inspection',
    explanation: 'Lists the contents of a tree object (like a directory list in Git).',
    scenario: 'You want to see the exact structure of files as they exist at a specific commit or branch.'
  },
  {
    name: 'git grep',
    role: 'Search',
    explanation: 'Searches for patterns in tracked files.',
    scenario: 'You need to find every occurrence of the word "isLoggedIn" across all files in your repository.'
  },
  {
    name: 'git blame',
    role: 'Inspection',
    explanation: 'Annotates each line in a file with information from the commit which introduced the line.',
    scenario: 'You found a bug in line 45 and want to know who wrote it and what the commit message was.'
  },
  {
    name: 'git difftool',
    role: 'Comparison',
    explanation: 'Launches an external merge tool to resolve conflicts or show differences.',
    scenario: 'You find standard CLI diffs hard to read and want to use VS Code or Meld to compare changes.'
  },
  {
    name: 'git mergetool',
    role: 'Resolution',
    explanation: 'Runs a merge resolution tool to resolve merge conflicts.',
    scenario: 'You have complex merge conflicts in "package-lock.json" and need a UI tool to pick the right versions.'
  },
  {
    name: 'git rev-list',
    role: 'History',
    explanation: 'Lists commit objects in reverse chronological order.',
    scenario: 'You are writing a script and need a raw list of all commit hashes in a certain range.'
  },
  {
    name: 'git rev-parse',
    role: 'Utility',
    explanation: 'A plumbing command that parses parameters and converts them to commit hashes or absolute paths.',
    scenario: 'You need to find the absolute path to your repository''s root directory in a bash script.'
  },
  {
    name: 'git cat-file',
    role: 'Internals',
    explanation: 'Provides content or type and size information for repository objects.',
    scenario: 'You are curious about the underlying blobs and trees and want to see the raw content of a specific Git object.'
  }
];
