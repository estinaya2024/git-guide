export const plumbing_i = [
  {
    name: 'git hash-object',
    role: 'Internals (Plumbing)',
    explanation: 'Computes the SHA-1 hash for a file and optionally creates a blob object.',
    syntax: 'git hash-object -w <file>',
    scenario: 'You are curious about how Git stores data and want to manually hash a text file into a new blob in the Git object database.'
  },
  {
    name: 'git cat-file -p',
    role: 'Internals (Plumbing)',
    explanation: 'Pretty-prints the contents of a Git object based on its hash.',
    syntax: 'git cat-file -p <hash>',
    scenario: 'You have a SHA-1 hash and want to see if it\'s a blob, tree, or commit, and view its raw content for debugging.'
  },
  {
    name: 'git cat-file -t',
    role: 'Internals (Plumbing)',
    explanation: 'Shows the type of a Git object (blob, tree, commit, tag).',
    syntax: 'git cat-file -t <hash>',
    scenario: 'You want to quickly check the type of an object hash in your script to determine how to process it.'
  },
  {
    name: 'git cat-file -s',
    role: 'Internals (Plumbing)',
    explanation: 'Shows the size of a Git object in bytes.',
    syntax: 'git cat-file -s <hash>',
    scenario: 'You are analyzing your repository storage and want to find the largest individual blobs stored in the database.'
  },
  {
    name: 'git ls-files',
    role: 'Internals (Plumbing)',
    explanation: 'Shows information about files in the index and the working tree.',
    syntax: 'git ls-files --stage',
    scenario: 'You want to see a list of every file that is currently tracked in your repository index for an audit script.'
  },
  {
    name: 'git ls-files -s',
    role: 'Internals (Plumbing)',
    explanation: 'Shows the staging slot and hash for each file in the index.',
    syntax: 'git ls-files -s',
    scenario: 'You are debugging a complex merge conflict and need to see the different versions (stages 1, 2, and 3) of a conflicting file.'
  },
  {
    name: 'git update-index',
    role: 'Internals (Plumbing)',
    explanation: 'Registers file contents in the working tree to the index.',
    syntax: 'git update-index --add <file>',
    scenario: 'You are writing a custom automation script that needs to add a file to Git without calling the porcelain "git add" command.'
  },
  {
    name: 'git update-index --assume-unchanged',
    role: 'Admin',
    explanation: 'Tells Git to stop tracking changes to a file, even if it is still in the index.',
    syntax: 'git update-index --assume-unchanged <file>',
    scenario: 'You have a configuration file that needs to stay in the repository but has local edits you never want to accidentally commit.'
  },
  {
    name: 'git write-tree',
    role: 'Internals (Plumbing)',
    explanation: 'Creates a tree object from the current index.',
    syntax: 'git write-tree',
    scenario: 'You are manually building a commit from scripts and need to turn your current staged files into a permanent tree hash.'
  },
  {
    name: 'git read-tree',
    role: 'Internals (Plumbing)',
    explanation: 'Reads tree information into the index.',
    syntax: 'git read-tree <tree-hash>',
    scenario: 'You want to reset your index to match a specific tree object hash without changing your actual working directory files.'
  },
  {
    name: 'git commit-tree',
    role: 'Internals (Plumbing)',
    explanation: 'Creates a new commit object based on a tree hash.',
    syntax: 'git commit-tree <tree-hash> -p <parent-hash> -m "msg"',
    scenario: 'You are building a custom Git client and need to create a commit object from a tree and a specific parent hash manually.'
  },
  {
    name: 'git mktree',
    role: 'Internals (Plumbing)',
    explanation: 'Builds a tree-object from ls-tree formatted text.',
    syntax: 'git mktree < input.tree',
    scenario: 'You are generating Git tree objects programmatically from a custom text file format in your own build system.'
  },
  {
    name: 'git symbol-ref',
    role: 'Internals (Plumbing)',
    explanation: 'Reads, modifies, or deletes symbolic references (like HEAD).',
    syntax: 'git symbolic-ref HEAD refs/heads/main',
    scenario: 'You want to manually change where the HEAD reference points without using the standard "checkout" or "switch" commands.'
  },
  {
    name: 'git update-ref',
    role: 'Internals (Plumbing)',
    explanation: 'Safely updates the object name stored in a ref.',
    syntax: 'git update-ref refs/heads/master <hash>',
    scenario: 'You are writing a script to move a branch pointer or create a new tag directly by pointing to a specific commit hash.'
  },
  {
    name: 'git for-each-ref',
    role: 'Internals (Plumbing)',
    explanation: 'Output information on each ref.',
    syntax: 'git for-each-ref --format="%(refname)" refs/heads/',
    scenario: 'You want to generate a custom formatted list of all your branches and their last commit dates for an internal dashboard.'
  },
  {
    name: 'git check-ignore',
    role: 'Utility',
    explanation: 'Debugs your .gitignore files by showing why a file is being ignored.',
    syntax: 'git check-ignore -v <path>',
    scenario: 'You are trying to add a file but Git says it\'s ignored; you want to know exactly which line in which .gitignore file is responsible.'
  }
];
