export const undoing = [
  {
    name: 'git checkout --',
    role: 'Restoration',
    explanation: 'Discards local changes to a specific file in the working directory.',
    syntax: 'git checkout -- <file>',
    scenario: 'You edited "index.html" but messed up and want to revert to the version as it was in your last commit. Note: Prefer "git restore" in modern Git.'
  },
  {
    name: 'git restore',
    role: 'Restoration',
    explanation: 'The modern alternative to checkout -- for undoing changes in files.',
    syntax: 'git restore <file> | git restore --staged <file>',
    scenario: 'You accidentally staged a configuration file and want to unstage it using "git restore --staged <file>" without losing your edits.'
  },
  {
    name: 'git reset HEAD',
    role: 'Restoration',
    explanation: 'Unstages a file but keeps the changes in your working directory.',
    syntax: 'git reset HEAD <file>',
    scenario: 'You accidentally ran "git add package-lock.json" and want to unstage it before committing to keep your PR clean.'
  },
  {
    name: 'git reset --soft',
    role: 'Restoration',
    explanation: 'Undoes the last commit(s) but leaves your changes in the staging area.',
    syntax: 'git reset --soft HEAD~1',
    scenario: 'You committed your work but realized you forgot to add a small comment or a file; you want to "un-commit" so you can fix it and commit again.'
  },
  {
    name: 'git reset --hard',
    role: 'Restoration',
    explanation: 'Undoes everything since the specified commit, including your working directory changes.',
    syntax: 'git reset --hard <commit-hash>',
    scenario: 'You completely messed up your last hour of work and want to delete all local changes and go back to a clean, known-good state.'
  },
  {
    name: 'git revert',
    role: 'Recovery',
    explanation: 'Creates a *new* commit that undoes the changes from a previous commit.',
    syntax: 'git revert <commit-hash>',
    scenario: 'You pushed a bug to the server yesterday and need to safely undo it without changing the project history (required for shared branches).'
  },
  {
    name: 'git clean -f',
    role: 'Cleanup',
    explanation: 'Forcefully removes untracked files from the working tree.',
    syntax: 'git clean -f',
    scenario: 'You have a project full of build logs and temporary files that you want to delete instantly to clean your workspace.'
  },
  {
    name: 'git clean -fd',
    role: 'Cleanup',
    explanation: 'Removes both untracked files and directories.',
    syntax: 'git clean -fd',
    scenario: 'You want to delete all generated folders (like "dist/" or "out/") that are not tracked by Git in one command.'
  },
  {
    name: 'git stash save',
    role: 'Work Management',
    explanation: 'Saves your uncommitted changes to a stack with a descriptive message.',
    syntax: 'git stash push -m "description"',
    scenario: 'You are half-way through a feature but need to switch to an emergency hotfix branch immediately without committing messy code.'
  },
  {
    name: 'git stash list',
    role: 'Work Management',
    explanation: 'Shows all stashed work items.',
    syntax: 'git stash list',
    scenario: 'You have multiple stashes and need to find the one named "WIP login fix" to resume your earlier work.'
  },
  {
    name: 'git stash apply',
    role: 'Work Management',
    explanation: 'Applies stashed changes back to your working directory but keeps it in the stash stack.',
    syntax: 'git stash apply [stash@{n}]',
    scenario: 'You want to apply a fix from your stash to multiple experimental branches without removing it from the stack yet.'
  },
  {
    name: 'git stash pop',
    role: 'Work Management',
    explanation: 'Applies stashed changes and removes the item from the stack.',
    syntax: 'git stash pop',
    scenario: 'You finished the hotfix, switched back to your feature, and want your half-finished work back exactly where you left off.'
  },
  {
    name: 'git stash show -p',
    role: 'Work Management',
    explanation: 'Shows the actual diff of what is inside a specific stash.',
    syntax: 'git stash show -p [stash@{n}]',
    scenario: 'You forgot exactly what code you put into stash@{0} and want to see the diff before deciding to apply it.'
  },
  {
    name: 'git stash drop',
    role: 'Cleanup',
    explanation: 'Removes a specific stash from the stack.',
    syntax: 'git stash drop [stash@{n}]',
    scenario: 'You have an old stash that is no longer needed because the feature was abandoned, and you want to clean up your stack.'
  },
  {
    name: 'git stash clear',
    role: 'Cleanup',
    explanation: 'Deletes all items in your stash stack.',
    syntax: 'git stash clear',
    scenario: 'You haven\'t cleaned your stash in months and have 50 stale items; you want to wipe the slate clean.'
  },
  {
    name: 'git reflog expire',
    role: 'Admin',
    explanation: 'Prunes old reflog entries.',
    syntax: 'git reflog expire --all',
    scenario: 'You want to clear your local safety net history to save disk space after a major cleanup operation.'
  }
];
