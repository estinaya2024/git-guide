export const plumbing_ii = [
  {
    name: 'git verify-pack',
    role: 'Admin',
    explanation: 'Verifies the integrity of Git pack files.',
    syntax: 'git verify-pack -v <file>.pack',
    scenario: 'You suspect your repository data is corrupted or disk sectors are failing; you want to check the integrity of every object in of your large pack files.'
  },
  {
    name: 'git unpack-objects',
    role: 'Internals (Plumbing)',
    explanation: 'Unpacks Git objects from a pack file into loose objects.',
    syntax: 'git unpack-objects < <file>.pack',
    scenario: 'You are studying the internal file system structure and want to explode a pack file into individual hash-named files for manual analysis.'
  },
  {
    name: 'git write-tree --prefix',
    role: 'Internals (Plumbing)',
    explanation: 'Creates a tree object for a specific subdirectory.',
    syntax: 'git write-tree --prefix=<dir>',
    scenario: 'You want to build a standalone tree hash for only your "src/" or "docs/" directory to use in a custom deployment or sub-project automation script.'
  },
  {
    name: 'git merge-file',
    role: 'Internals (Plumbing)',
    explanation: 'Performs a three-way merge between three files (original, changed1, changed2).',
    syntax: 'git merge-file <file1> <orig-file> <file2>',
    scenario: 'You are writing a custom merge driver for a specific file format (like JSON or CSV) and need to perform a raw three-base file merge.'
  },
  {
    name: 'git merge-index',
    role: 'Internals (Plumbing)',
    explanation: 'Runs a merge for files in the index.',
    syntax: 'git merge-index -o <tool> <file>',
    scenario: 'You are manually resolving entries in the staging area and want to trigger a specific merge tool for a specific conflicting index slot.'
  },
  {
    name: 'git merge-tree',
    role: 'Internals (Plumbing)',
    explanation: 'Shows a three-way merge between trees without creating a commit.',
    syntax: 'git merge-tree <branch1> <branch2>',
    scenario: 'You want to perform a "dry run" merge at the tree level to see the final file structure without polluting your current branch history.'
  },
  {
    name: 'git var -l',
    role: 'Inspection',
    explanation: 'Lists Git variables and their current values.',
    syntax: 'git var -l',
    scenario: 'You want to debug your environment and see exactly which shell editor or identity variables Git is currently using (e.g., GIT_EDITOR, GIT_AUTHOR_IDENT).'
  },
  {
    name: 'git check-attr',
    role: 'Inspection',
    explanation: 'Checks the Git attributes of a file (from .gitattributes).',
    syntax: 'git check-attr -a <file>',
    scenario: 'You want to verify if a specific file is being correctly treated as binary, text, or a specific language by your .gitattributes configuration.'
  },
  {
    name: 'git check-mailmap',
    role: 'Utility',
    explanation: 'Maps author names and emails based on a .mailmap file.',
    syntax: 'git check-mailmap <contact>',
    scenario: 'Your legacy project has contributors with multiple email addresses over decades; you want to normalize them for a clear contribution report.'
  },
  {
    name: 'git cherry',
    role: 'History',
    explanation: 'Finds commits that exist in one branch but not in another (upstream).',
    syntax: 'git cherry -v upstream',
    scenario: 'You want to see a specific list of local feature commits that have not yet been integrated into the upstream master server branch.'
  },
  {
    name: 'git commit-graph write',
    role: 'Optimization',
    explanation: 'Generates a commit graph file to speed up git log and commit history graph traversal.',
    syntax: 'git commit-graph write --reachable',
    scenario: 'Your repository has 100,000+ commits and browsing the history graph or running "git log" is becoming noticeably slow.'
  },
  {
    name: 'git commit-graph verify',
    role: 'Admin',
    explanation: 'Verifies the integrity of the commit graph file.',
    syntax: 'git commit-graph verify',
    scenario: 'You are auditing your repository\'s performance health and want to ensure the optimized commit-graph file isn\'t corrupt.'
  },
  {
    name: 'git multi-pack-index write',
    role: 'Optimization',
    explanation: 'Generates a central index for multiple pack files.',
    syntax: 'git multi-pack-index write',
    scenario: 'You have hundreds of separate pack files and want to optimize object lookup speeds for your CI/CD runners.'
  },
  {
    name: 'git pack-refs',
    role: 'Optimization',
    explanation: 'Packs all branch and tag references into a single file.',
    syntax: 'git pack-refs --all',
    scenario: 'Your enterprise repository has thousands of tags and branches; packing them into "packed-refs" speeds up reference lookup on your disk.'
  },
  {
    name: 'git pack-objects',
    role: 'Internals (Plumbing)',
    explanation: 'Creates a pack file from a stream of objects.',
    syntax: 'git pack-objects <basename>',
    scenario: 'You are implementing a custom transfer protocol or a secure backup solution for Git objects over a custom network transport.'
  },
  {
    name: 'git index-pack',
    role: 'Internals (Plumbing)',
    explanation: 'Creates an index file for an existing pack file.',
    syntax: 'git index-pack <file>.pack',
    scenario: 'You are manually downloading a raw pack file from a remote server and need to generate a local index for Git to properly read it.'
  }
];
