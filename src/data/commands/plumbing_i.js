export const plumbing_i = [
  {
    name: 'git hash-object',
    role: 'Internals (Plumbing)',
    explanation: 'Computes the SHA-1 hash for a file and optionally creates a blob object.',
    scenario: 'You are curious about how Git stores data and want to manually hash a text file into the Git database.'
  },
  {
    name: 'git cat-file -p',
    role: 'Internals (Plumbing)',
    explanation: 'Pretty-prints the contents of a Git object based on its hash.',
    scenario: 'You have a SHA-1 hash and want to see if it''s a blob, tree, or commit, and view its raw content.'
  },
  {
    name: 'git cat-file -t',
    role: 'Internals (Plumbing)',
    explanation: 'Shows the type of a Git object (blob, tree, commit, tag).',
    scenario: 'You want to quickly check the type of an object hash in your script.'
  },
  {
    name: 'git cat-file -s',
    role: 'Internals (Plumbing)',
    explanation: 'Shows the size of a Git object in bytes.',
    scenario: 'You are analyzing your repository and want to find the largest individual blobs.'
  },
  {
    name: 'git ls-files',
    role: 'Internals (Plumbing)',
    explanation: 'Shows information about files in the index and the working tree.',
    scenario: 'You want to see a list of every file that is currently tracked in your repository index.'
  },
  {
    name: 'git ls-files -s',
    role: 'Internals (Plumbing)',
    explanation: 'Shows the staging slot and hash for each file in the index.',
    scenario: 'You are debugging a complex merge conflict and need to see the different versions of a file (stages 1, 2, and 3).'
  },
  {
    name: 'git update-index',
    role: 'Internals (Plumbing)',
    explanation: 'Registers file contents in the working tree to the index.',
    scenario: 'You are writing a script that adds a file to Git without using the porcelain "git add" command.'
  },
  {
    name: 'git update-index --assume-unchanged',
    role: 'Admin',
    explanation: 'Tells Git to stop tracking changes to a file, even if it is still in the index.',
    scenario: 'You have a config file that needs to stay in the repo but has local changes you never want to commit.'
  },
  {
    name: 'git write-tree',
    role: 'Internals (Plumbing)',
    explanation: 'Creates a tree object from the current index.',
    scenario: 'You are manually building a commit and need to turn your staged files into a tree hash.'
  },
  {
    name: 'git read-tree',
    role: 'Internals (Plumbing)',
    explanation: 'Reads tree information into the index.',
    scenario: 'You want to reset your index to match a specific tree object hash without changing your working files.'
  },
  {
    name: 'git commit-tree',
    role: 'Internals (Plumbing)',
    explanation: 'Creates a new commit object based on a tree hash.',
    scenario: 'You are building a custom Git client and need to create a commit object from a tree and a parent hash.'
  },
  {
    name: 'git mktree',
    role: 'Internals (Plumbing)',
    explanation: 'Builds a tree-object from ls-tree formatted text.',
    scenario: 'You are generating Git trees programmatically from a text file.'
  },
  {
    name: 'git symbol-ref',
    role: 'Internals (Plumbing)',
    explanation: 'Reads, modifies, or deletes symbolic references (like HEAD).',
    scenario: 'You want to manually change where HEAD points without using checkout.'
  },
  {
    name: 'git update-ref',
    role: 'Internals (Plumbing)',
    explanation: 'Safely updates the object name stored in a ref.',
    scenario: 'You are writing a script to move a branch pointer to a specific commit hash.'
  },
  {
    name: 'git for-each-ref',
    role: 'Internals (Plumbing)',
    explanation: 'Output information on each ref.',
    scenario: 'You want to generate a custom list of all your branches and their last commit dates.'
  },
  {
    name: 'git check-ignore',
    role: 'Utility',
    explanation: 'Debugs your .gitignore files by showing why a file is being ignored.',
    scenario: 'You are trying to add a file but Git says it''s ignored; you want to know which line in .gitignore is responsible.'
  }
];
