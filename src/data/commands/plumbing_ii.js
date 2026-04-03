export const plumbing_ii = [
  {
    name: 'git verify-pack',
    role: 'Admin',
    explanation: 'Verifies the integrity of Git pack files.',
    scenario: 'You suspect your repository data is corrupted and want to check the integrity of its objects.'
  },
  {
    name: 'git unpack-objects',
    role: 'Internals (Plumbing)',
    explanation: 'Unpacks Git objects from a pack file into loose objects.',
    scenario: 'You are studying the file system structure and want to see your objects as individual files.'
  },
  {
    name: 'git write-tree --prefix',
    role: 'Internals (Plumbing)',
    explanation: 'Creates a tree object for a specific subdirectory.',
    scenario: 'You want to build a tree hash for only your "src/" directory to use in a custom script.'
  },
  {
    name: 'git merge-file',
    role: 'Internals (Plumbing)',
    explanation: 'Performs a three-way merge between three files (original, changed1, changed2).',
    scenario: 'You are writing a custom merge driver and need to perform a raw file merge.'
  },
  {
    name: 'git merge-index',
    role: 'Internals (Plumbing)',
    explanation: 'Runs a merge for files in the index.',
    scenario: 'You are manually resolving entries in the staging area.'
  },
  {
    name: 'git merge-tree',
    role: 'Internals (Plumbing)',
    explanation: 'Shows a three-way merge between trees without creating a commit.',
    scenario: 'You want to see what a merge would look like at the tree level before actually running it.'
  },
  {
    name: 'git var -l',
    role: 'Inspection',
    explanation: 'Lists Git variables and their current values.',
    scenario: 'You want to see exactly which shell editor Git is using (e.g., GIT_EDITOR).'
  },
  {
    name: 'git check-attr',
    role: 'Inspection',
    explanation: 'Checks the Git attributes of a file (from .gitattributes).',
    scenario: 'You want to verify if a specific file is being treated as binary or text by Git.'
  },
  {
    name: 'git check-mailmap',
    role: 'Utility',
    explanation: 'Maps author names and emails based on a .mailmap file.',
    scenario: 'Your project has contributors with multiple email addresses, and you want to normalize them for a report.'
  },
  {
    name: 'git cherry',
    role: 'History',
    explanation: 'Finds commits that exist in one branch but not in another (upstream).',
    scenario: 'You want to see which local features have already been integrated into the server branch.'
  },
  {
    name: 'git commit-graph write',
    role: 'Optimization',
    explanation: 'Generates a commit graph file to speed up git log and commit history graph traversal.',
    scenario: 'Your repository has 100,000 commits and browsing the history is becoming slow.'
  },
  {
    name: 'git commit-graph verify',
    role: 'Admin',
    explanation: 'Verifies the integrity of the commit graph file.',
    scenario: 'You are auditing your repository''s performance optimization files.'
  },
  {
    name: 'git multi-pack-index write',
    role: 'Optimization',
    explanation: 'Generates a central index for multiple pack files.',
    scenario: 'You have hundreds of pack files and want to optimize object lookup speeds.'
  },
  {
    name: 'git pack-refs',
    role: 'Optimization',
    explanation: 'Packs all branch and tag references into a single file.',
    scenario: 'Your repository has thousands of tags, and each one is a separate file (slowing down the disk).'
  },
  {
    name: 'git pack-objects',
    role: 'Internals (Plumbing)',
    explanation: 'Creates a pack file from a stream of objects.',
    scenario: 'You are implementing a custom transfer protocol for Git over a network.'
  },
  {
    name: 'git index-pack',
    role: 'Internals (Plumbing)',
    explanation: 'Creates an index file for an existing pack file.',
    scenario: 'You are manually downloading a raw pack file and need to index it for Git to read.'
  }
];
