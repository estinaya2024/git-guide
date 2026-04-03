export const maintenance = [
  {
    name: 'git gc',
    role: 'Maintenance',
    explanation: 'Runs garbage collection to optimize the local repository database.',
    scenario: 'Your repository is becoming slow and uses too much disk space after a long development cycle.'
  },
  {
    name: 'git fsck',
    role: 'Admin',
    explanation: 'Checks the connectivity and validity of the objects in the Git database.',
    scenario: 'You want to ensure that none of your commits or blobs are corrupted or missing.'
  },
  {
    name: 'git prune',
    role: 'Cleanup',
    explanation: 'Removes objects that are no longer reachable from any branch or tag.',
    scenario: 'You recently deleted several branches and want to clear out the now-dangling objects.'
  },
  {
    name: 'git repack',
    role: 'Optimization',
    explanation: 'Packs loose objects into more efficient pack files.',
    scenario: 'You want to manually trigger object packing for a repository that hasn\'t been optimized in a while.'
  },
  {
    name: 'git count-objects -v',
    role: 'Inspection',
    explanation: 'Shows detailed disk usage and object counts.',
    scenario: 'You are analyzing your ".git" folder size to see what\'s taking up space.'
  },
  {
    name: 'git reflog',
    role: 'Safety Net',
    explanation: 'Lists every action that updated the HEAD of your repository.',
    scenario: 'You just accidentally deleted a branch and need to find the commit hash to restore it.'
  },
  {
    name: 'git reflog show',
    role: 'Safety Net',
    explanation: 'Shows the log for a specific branch or reference.',
    scenario: 'You want to see how your "main" branch pointer has moved over the last month.'
  },
  {
    name: 'git stash drop stash@{0}',
    role: 'Cleanup',
    explanation: 'Deletes a specific stash from your local stack.',
    scenario: 'You no longer need a temporary fix and want to stop it from appearing in your stash list.'
  },
  {
    name: 'git update-index --refresh',
    role: 'Admin',
    explanation: 'Refreshes the index based on the working directory state.',
    scenario: 'You are writing a script that needs to ensure the index is consistent with actual file changes.'
  },
  {
    name: 'git rerere',
    role: 'Advanced Tool',
    explanation: 'Reuse recorded resolution: allows Git to remember how you resolved merge conflicts for a file.',
    scenario: 'You are rebasing a long-lived feature branch and don\'t want to resolve the same conflict in every rebased commit.'
  },
  {
    name: 'git rerere-forget',
    role: 'Advanced Tool',
    explanation: 'Forgets a previously recorded merge resolution.',
    scenario: 'You realized you resolved a conflict incorrectly and want Git to stop suggesting the wrong fix.'
  },
  {
    name: 'git update-server-info',
    role: 'Admin (Legacy)',
    explanation: 'Updates auxiliary info file to help dumb protocols (HTTP) discover repository data.',
    scenario: 'You are hosting a Git repository over static HTTP (S3, etc.) and need it to be fetchable.'
  },
  {
    name: 'git bundle',
    role: 'Interoperability',
    explanation: 'Packages objects and refs into a single file.',
    scenario: 'You need to transfer a repository across a network gap (offline machine) via a USB-stick.'
  },
  {
    name: 'git worktree add',
    role: 'Architecture',
    explanation: 'Allows checking out multiple branches to separate directories simultaneously.',
    scenario: 'You are working on a massive feature but need to quickly switch to "main" to fix a bug without stashing.'
  },
  {
    name: 'git worktree list',
    role: 'Architecture',
    explanation: 'Lists all current worktrees and their locations.',
    scenario: 'You forgot where you checked out your second worktree and need to find its path.'
  },
  {
    name: 'git worktree prune',
    role: 'Cleanup',
    explanation: 'Cleans up working tree information for directories that have been deleted.',
    scenario: 'You deleted a worktree directory manually and want to update the Git administrative info.'
  }
];
