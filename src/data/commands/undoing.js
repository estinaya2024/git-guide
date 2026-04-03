export const undoing = [
  {
    name: 'git checkout --',
    role: 'Restoration',
    explanation: 'Discards local changes to a specific file in the working directory.',
    scenario: 'You edited "index.html" but messed up and want to revert to the version as it was in your last commit.'
  },
  {
    name: 'git restore',
    role: 'Restoration',
    explanation: 'The modern alternative to checkout -- for undoing changes in files.',
    scenario: 'You want to unstage a file using "git restore --staged <file>".'
  },
  {
    name: 'git reset HEAD',
    role: 'Restoration',
    explanation: 'Unstages a file but keeps the changes in your working directory.',
    scenario: 'You accidentally ran "git add package-lock.json" and want to unstage it before committing.'
  },
  {
    name: 'git reset --soft',
    role: 'Restoration',
    explanation: 'Undoes the last commit(s) but leaves your changes in the staging area.',
    scenario: 'You committed your work but realized you forgot to add a small comment; you want to "un-commit" so you can add it.'
  },
  {
    name: 'git reset --hard',
    role: 'Restoration',
    explanation: 'Undoes everything since the specified commit, including your working directory changes.',
    scenario: 'You completely messed up your last hour of work and want to delete all changes and go back to a clean state.'
  },
  {
    name: 'git revert',
    role: 'Recovery',
    explanation: 'Creates a *new* commit that undoes the changes from a previous commit.',
    scenario: 'You pushed a bug to the server yesterday and need to safely undo it without changing the project history.'
  },
  {
    name: 'git clean -f',
    role: 'Cleanup',
    explanation: 'Forcefully removes untracked files from the working tree.',
    scenario: 'You have a project full of build logs and temporary files that you want to delete instantly.'
  },
  {
    name: 'git clean -fd',
    role: 'Cleanup',
    explanation: 'Removes both untracked files and directories.',
    scenario: 'You want to delete all generated folders (like "dist/" or "out/") that are not tracked by Git.'
  },
  {
    name: 'git stash save',
    role: 'Work Management',
    explanation: 'Saves your uncommitted changes to a stack with a descriptive message.',
    scenario: 'You are half-way through a feature but need to switch to a hotfix branch immediately.'
  },
  {
    name: 'git stash list',
    role: 'Work Management',
    explanation: 'Shows all stashed work items.',
    scenario: 'You have multiple stashes and need to find the one named "WIP login fix".'
  },
  {
    name: 'git stash apply',
    role: 'Work Management',
    explanation: 'Applies stashed changes back to your working directory but keeps it in the stash stack.',
    scenario: 'You want to apply a fix from your stash to multiple branches without removing it yet.'
  },
  {
    name: 'git stash pop',
    role: 'Work Management',
    explanation: 'Applies stashed changes and removes the item from the stack.',
    scenario: 'You finished the hotfix, switched back to your feature, and want your half-finished work back.'
  },
  {
    name: 'git stash show -p',
    role: 'Work Management',
    explanation: 'Shows the actual diff of what is inside a specific stash.',
    scenario: 'You forgot what is in stash@{0} and want to see the code before applying it.'
  },
  {
    name: 'git stash drop',
    role: 'Cleanup',
    explanation: 'Removes a specific stash from the stack.',
    scenario: 'You have a very old stash that is no longer needed and you want to clean up your stack.'
  },
  {
    name: 'git stash clear',
    role: 'Cleanup',
    explanation: 'Deletes all items in your stash stack.',
    scenario: 'You haven''t cleaned your stash in a year and want to wipe it completely.'
  },
  {
    name: 'git reflog expire',
    role: 'Admin',
    explanation: 'Prunes old reflog entries.',
    scenario: 'You want to clear your local safety net history to save disk space (not recommended unless necessary).'
  }
];
