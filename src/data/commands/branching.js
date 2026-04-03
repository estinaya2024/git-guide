export const branching = [
  {
    name: 'git branch -a',
    role: 'Branching',
    explanation: 'Lists all local and remote-tracking branches.',
    scenario: 'You want to see all branches available in the repository, including those on GitHub that you haven\'t checked out yet.'
  },
  {
    name: 'git branch -v',
    role: 'Branching',
    explanation: 'Shows the last commit on each branch.',
    scenario: 'You want to quickly see the status of all your feature branches and what work was last done on them.'
  },
  {
    name: 'git branch -d',
    role: 'Branching',
    explanation: 'Deletes a branch that has already been merged.',
    scenario: 'You finished a feature and merged it into main; now you want to clean up your local branch list.'
  },
  {
    name: 'git branch -D',
    role: 'Branching',
    explanation: 'Force deletes a branch, even if it has unmerged changes.',
    scenario: 'You started an experimental feature that failed, and you want to delete the branch and start over without merging.'
  },
  {
    name: 'git branch -m',
    role: 'Branching',
    explanation: 'Renames a branch.',
    scenario: 'You accidentally named your branch "feat-loging" and want to correct it to "feature-login".'
  },
  {
    name: 'git checkout -b',
    role: 'Navigation',
    explanation: 'Creates a new branch and switches to it immediately.',
    scenario: 'You are starting a new task and need a clean slate on a new branch.'
  },
  {
    name: 'git switch -c',
    role: 'Navigation',
    explanation: 'The modern equivalent of checkout -b for creating and switching branches.',
    scenario: 'You prefer using the newer, more intuitive "switch" command for your branching workflow.'
  },
  {
    name: 'git merge --no-ff',
    role: 'Combination',
    explanation: 'Forces a merge commit even if a fast-forward merge is possible.',
    scenario: 'You want to maintain a clear record in your history of exactly when a feature branch was integrated.'
  },
  {
    name: 'git merge --squash',
    role: 'Combination',
    explanation: 'Combines all the commits from another branch into a single commit on the current branch.',
    scenario: 'Your feature branch has 50 small "WIP" commits, and you want to merge them into main as a single clean commit.'
  },
  {
    name: 'git rebase -i',
    role: 'History Management',
    explanation: 'Starts an interactive rebase session to squash, edit, or reorder commits.',
    scenario: 'You have several messy commits on your local branch and want to clean them up before pushing to a shared repository.'
  },
  {
    name: 'git rebase --onto',
    role: 'History Management',
    explanation: 'Takes commits from one branch and applies them to another, skipping a common ancestor.',
    scenario: 'You have a branch "client" based on "server" which is based on "main". You want to move "client" to be based directly on "main".'
  },
  {
    name: 'git rebase --abort',
    role: 'History Management',
    explanation: 'Cancels a rebase that is in progress and restores the original state.',
    scenario: 'You ran into too many merge conflicts during a rebase and want to stop and try a different approach.'
  },
  {
    name: 'git cherry-pick -n',
    role: 'Recovery',
    explanation: 'Applies changes from a commit without creating a new commit automatically.',
    scenario: 'You want to see how a specific fix from another branch looks in your current branch before committing it.'
  },
  {
    name: 'git cherry-pick --edit',
    role: 'Recovery',
    explanation: 'Allows you to edit the commit message during a cherry-pick.',
    scenario: 'You are porting a bug fix to an older version and need to update the message to reflect the new context.'
  },
  {
    name: 'git merge-base',
    role: 'Inspection',
    explanation: 'Finds the best common ancestor(s) between two commits.',
    scenario: 'You are writing a script that needs to know where two branches diverged.'
  },
  {
    name: 'git show-branch',
    role: 'Inspection',
    explanation: 'Shows branches and their commits in a tabular format.',
    scenario: 'You want a compact view of how multiple branches relate to each other in the last few commits.'
  }
];
