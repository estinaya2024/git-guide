export const remotes = [
  {
    name: 'git remote get-url',
    role: 'Remote Management',
    explanation: 'Shows the URL for a specific remote repository.',
    scenario: 'You want to check if the "origin" remote is using the correct GitHub URL before pushing.'
  },
  {
    name: 'git remote set-url',
    role: 'Remote Management',
    explanation: 'Changes the URL for an existing remote.',
    scenario: 'You renamed your GitHub repository and need to update your local "origin" to point to the new location.'
  },
  {
    name: 'git remote -v',
    role: 'Remote Management',
    explanation: 'Lists all remotes and their fetching/pushing URLs.',
    scenario: 'You want to verify that you have both "origin" and "upstream" remotes set up correctly.'
  },
  {
    name: 'git remote rename',
    role: 'Remote Management',
    explanation: 'Renames a remote handle.',
    scenario: 'You find the name "upstream" confusing and want to rename it to "source-of-truth".'
  },
  {
    name: 'git remote prune',
    role: 'Cleanup',
    explanation: 'Deletes local branches that represent remote-tracking branches that no longer exist on the remote.',
    scenario: 'Your project has hundreds of stale "origin/feature-xxx" branches that were deleted on GitHub weeks ago.'
  },
  {
    name: 'git push --set-upstream',
    role: 'Sync',
    explanation: 'Sets a tracking relationship between a local branch and a remote branch.',
    scenario: 'You just created a local branch "dev" and want to push it to "origin/dev" for the first time.'
  },
  {
    name: 'git push --force',
    role: 'Sync',
    explanation: 'Overwrites the remote history with your local history (Destructive).',
    scenario: 'You accidentally pushed a giant file and used "commit --amend" to fix it; now you must force-push to update the server.'
  },
  {
    name: 'git push --delete',
    role: 'Cleanup',
    explanation: 'Deletes a branch from the remote repository.',
    scenario: 'You finished a feature and want to delete the branch on GitHub to keep it clean.'
  },
  {
    name: 'git push --tags',
    role: 'Sync',
    explanation: 'Uploads all local tags to the remote repository.',
    scenario: 'You just tagged a release "v1.0" and want to see it on the GitHub Releases page.'
  },
  {
    name: 'git ls-remote',
    role: 'Inspection',
    explanation: 'Lists references in a remote repository without fetching anything.',
    scenario: 'You want to see if a specific tag exists on the server without downloading the entire history.'
  },
  {
    name: 'git pull --rebase',
    role: 'Sync',
    explanation: 'Fetches changes and then rebases your local work on top of them instead of merging.',
    scenario: 'You want to keep a clean, linear history without small "Merge branch main" commit messages.'
  },
  {
    name: 'git clone --depth',
    role: 'Setup',
    explanation: 'Creates a shallow clone with a limited history depth.',
    scenario: 'You only need the latest code from a huge repository (like Chromium) and don\'t want to download gigabytes of history.'
  },
  {
    name: 'git clone --branch',
    role: 'Setup',
    explanation: 'Clones a specific branch instead of the default branch.',
    scenario: 'You only want the code from the "beta" branch and don\'t care about "main".'
  },
  {
    name: 'git clone --mirror',
    role: 'Admin',
    explanation: 'Creates a full mirror of a repository including all branches and tags.',
    scenario: 'You are migrating a repository from Bitbucket to GitHub and want a perfect copy.'
  },
  {
    name: 'git submodule add',
    role: 'Architecture',
    explanation: 'Adds another repository as a subdirectory of your current one.',
    scenario: 'Your project depends on a specific version of a third-party library that you want to track separately.'
  },
  {
    name: 'git submodule update',
    role: 'Architecture',
    explanation: 'Updates the submodules in your project to the versions specified in the main repository.',
    scenario: 'A teammate updated a library version in the main project, and you need to download the new files.'
  }
];
