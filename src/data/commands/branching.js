export const branching = [
  {
    name: 'git branch -a',
    role: 'Branching',
    explanation: 'Lists all local and remote-tracking branches.',
    syntax: 'git branch -a',
    scenario: 'You want to see all branches available in the repository, including those on GitHub that you haven\'t checked out yet. This is essential for finding remote work.'
  },
  {
    name: 'git branch -v',
    role: 'Branching',
    explanation: 'Shows the last commit on each branch.',
    syntax: 'git branch -v',
    scenario: 'You want to quickly see the status of all your feature branches and what work was last done on them before choosing which to delete.'
  },
  {
    name: 'git branch -d',
    role: 'Branching',
    explanation: 'Deletes a branch that has already been merged.',
    syntax: 'git branch -d <name>',
    scenario: 'You finished a feature and merged it into main; now you want to clean up your local branch list to stay organized.'
  },
  {
    name: 'git branch -D',
    role: 'Branching',
    explanation: 'Force deletes a branch, even if it has unmerged changes.',
    syntax: 'git branch -D <name>',
    scenario: 'You started an experimental feature that failed, and you want to delete the branch and start over without merging anything.'
  },
  {
    name: 'git branch -m',
    role: 'Branching',
    explanation: 'Renames a branch.',
    syntax: 'git branch -m [old] <new>',
    scenario: 'You accidentally named your branch "feat-loging" and want to correct it to "feature-login" before pushing to origin.'
  },
  {
    name: 'git checkout -b',
    role: 'Navigation',
    explanation: 'Creates a new branch and switches to it immediately.',
    syntax: 'git checkout -b <name>',
    scenario: 'You are starting a new task and need a clean slate on a new branch. This is the classic way to jumpstart a feature.'
  },
  {
    name: 'git switch -c',
    role: 'Navigation',
    explanation: 'The modern equivalent of checkout -b for creating and switching branches.',
    syntax: 'git switch -c <name>',
    scenario: 'You prefer using the newer, more intuitive "switch" command for your branching workflow. Preferred in modern Git (2.23+).'
  },
  {
    name: 'git merge --no-ff',
    role: 'Combination',
    explanation: 'Forces a merge commit even if a fast-forward merge is possible.',
    syntax: 'git merge --no-ff <branch>',
    scenario: 'You want to maintain a clear record in your history of exactly when a feature branch was integrated, preserving the "bubble" in the log graph.'
  },
  {
    name: 'git merge --squash',
    role: 'Combination',
    explanation: 'Combines all the commits from another branch into a single commit on the current branch.',
    syntax: 'git merge --squash <branch>',
    scenario: 'Your feature branch has 50 small "WIP" commits, and you want to merge them into main as a single clean commit for a tidier project history.'
  },
  {
    name: 'git rebase -i',
    role: 'History Management',
    explanation: 'Starts an interactive rebase session to squash, edit, or reorder commits.',
    syntax: 'git rebase -i HEAD~<n>',
    scenario: 'You have several messy commits on your local branch and want to clean them up, rename them, or squash them before pushing to a shared repository.'
  },
  {
    name: 'git rebase --onto',
    role: 'History Management',
    explanation: 'Takes commits from one branch and applies them to another, skipping a common ancestor.',
    syntax: 'git rebase --onto <newbase> <upstream> [branch]',
    scenario: 'You have a branch "client" based on "server" which is based on "main". You want to move "client" to be based directly on "main".'
  },
  {
    name: 'git rebase --abort',
    role: 'History Management',
    explanation: 'Cancels a rebase that is in progress and restores the original state.',
    syntax: 'git rebase --abort',
    scenario: 'You ran into too many merge conflicts during a rebase and want to stop and try a different approach (like merging instead).'
  },
  {
    name: 'git cherry-pick -n',
    role: 'Recovery',
    explanation: 'Applies changes from a commit without creating a new commit automatically.',
    syntax: 'git cherry-pick -n <hash>',
    scenario: 'You want to see how a specific fix from another branch looks in your current branch before committing it yourself.'
  },
  {
    name: 'git cherry-pick --edit',
    role: 'Recovery',
    explanation: 'Allows you to edit the commit message during a cherry-pick.',
    syntax: 'git cherry-pick --edit <hash>',
    scenario: 'You are porting a bug fix to an older version and need to update the message to reflect the new context and version numbers.'
  },
  {
    name: 'git merge-base',
    role: 'Inspection',
    explanation: 'Finds the best common ancestor(s) between two commits.',
    syntax: 'git merge-base <branch1> <branch2>',
    scenario: 'You are writing a script that needs to know where two branches diverged to automatically generate a diff.'
  },
  {
    name: 'git show-branch',
    role: 'Inspection',
    explanation: 'Shows branches and their commits in a tabular format.',
    syntax: 'git show-branch [--all]',
    scenario: 'You want a compact view of how multiple branches relate to each other in the last few commits without using "git log --graph".'
  }
];
