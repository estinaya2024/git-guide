export const remotes = [
  {
    name: 'git remote get-url',
    role: 'Remote Management',
    explanation: 'Shows the URL for a specific remote repository.',
    syntax: 'git remote get-url <name>',
    scenario: 'You want to check if the "origin" remote is using the correct GitHub URL before pushing your sensitive company code.'
  },
  {
    name: 'git remote set-url',
    role: 'Remote Management',
    explanation: 'Changes the URL for an existing remote.',
    syntax: 'git remote set-url <name> <newurl>',
    scenario: 'You renamed your GitHub repository or moved it to a new organization; you need to update your local "origin" to point to the new location.'
  },
  {
    name: 'git remote -v',
    role: 'Remote Management',
    explanation: 'Lists all remotes and their fetching/pushing URLs.',
    syntax: 'git remote -v',
    scenario: 'You want to verify that you have both "origin" (your fork) and "upstream" (original repo) set up correctly for open-source contribution.'
  },
  {
    name: 'git remote rename',
    role: 'Remote Management',
    explanation: 'Renames a remote handle.',
    syntax: 'git remote rename <old> <new>',
    scenario: 'You find the default name "upstream" confusing and want to rename it to "source-of-truth" for clearer internal documentation.'
  },
  {
    name: 'git remote prune',
    role: 'Cleanup',
    explanation: 'Deletes local branches that represent remote-tracking branches that no longer exist on the remote.',
    syntax: 'git remote prune <name>',
    scenario: 'Your project has hundreds of stale "origin/feature-xxx" branches that were deleted on GitHub weeks ago; you want to clean your local list.'
  },
  {
    name: 'git push --set-upstream',
    role: 'Sync',
    explanation: 'Sets a tracking relationship between a local branch and a remote branch.',
    syntax: 'git push -u origin <branch>',
    scenario: 'You just created a local branch "dev" and want to push it to "origin/dev" for the first time. Using -u ensures future "git push" calls work automatically.'
  },
  {
    name: 'git push --force',
    role: 'Sync',
    explanation: 'Overwrites the remote history with your local history (Destructive).',
    syntax: 'git push --force-with-lease',
    scenario: 'You accidentally pushed a giant file and used "commit --amend" to fix it; now you must force-push to update the server. *Pro-tip: Use --force-with-lease for safety.*'
  },
  {
    name: 'git push --delete',
    role: 'Cleanup',
    explanation: 'Deletes a branch from the remote repository.',
    syntax: 'git push origin --delete <branch>',
    scenario: 'You finished a feature and merged the PR; now you want to delete the branch on GitHub to keep the repository clean.'
  },
  {
    name: 'git push --tags',
    role: 'Sync',
    explanation: 'Uploads all local tags to the remote repository.',
    syntax: 'git push origin --tags',
    scenario: 'You just tagged a release "v1.0.0" and want to see it on the GitHub Releases page to trigger an automated CI build.'
  },
  {
    name: 'git ls-remote',
    role: 'Inspection',
    explanation: 'Lists references in a remote repository without fetching anything.',
    syntax: 'git ls-remote <url>',
    scenario: 'You want to see if a specific release tag exists on the server without downloading the entire history of a multi-gigabyte repository.'
  },
  {
    name: 'git pull --rebase',
    role: 'Sync',
    explanation: 'Fetches changes and then rebases your local work on top of them instead of merging.',
    syntax: 'git pull --rebase origin main',
    scenario: 'You want to keep a clean, linear history without small "Merge branch main" commit messages cluttering up your professional log.'
  },
  {
    name: 'git clone --depth',
    role: 'Setup',
    explanation: 'Creates a shallow clone with a limited history depth.',
    syntax: 'git clone --depth 1 <url>',
    scenario: 'You only need the latest code from a massive repository (like the Linux kernel) for building and don\'t want to download gigabytes of history.'
  },
  {
    name: 'git clone --branch',
    role: 'Setup',
    explanation: 'Clones a specific branch instead of the default branch.',
    syntax: 'git clone --branch <name> --single-branch <url>',
    scenario: 'You only want the code from the "staging" branch and don\'t care about "main" or "dev" for this specific environment setup.'
  },
  {
    name: 'git clone --mirror',
    role: 'Admin',
    explanation: 'Creates a full mirror of a repository including all branches and tags.',
    syntax: 'git clone --mirror <url>',
    scenario: 'You are migrating a repository from GitLab to GitHub and want a perfect, byte-for-byte copy of the entire history.'
  },
  {
    name: 'git submodule add',
    role: 'Architecture',
    explanation: 'Adds another repository as a subdirectory of your current one.',
    syntax: 'git submodule add <url> <path>',
    scenario: 'Your project depends on a specific version of a third-party UI library that you want to track separately from your main logic.'
  },
  {
    name: 'git submodule update',
    role: 'Architecture',
    explanation: 'Updates the submodules in your project to the versions specified in the main repository.',
    syntax: 'git submodule update --init --recursive',
    scenario: 'A teammate updated a library version in the main project, and you need to download the new files for your local environment.'
  }
];
