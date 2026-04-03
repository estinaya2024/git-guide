export const maintenance = [
  {
    name: 'git gc',
    role: 'Maintenance',
    explanation: 'Runs garbage collection to optimize the local repository database.',
    syntax: 'git gc --prune=now --aggressive',
    scenario: 'Your repository is becoming slow and uses too much disk space after a long development cycle with many large binary file deletions.'
  },
  {
    name: 'git fsck',
    role: 'Admin',
    explanation: 'Checks the connectivity and validity of the objects in the Git database.',
    syntax: 'git fsck --full --unreachable',
    scenario: 'You want to ensure that none of your commits or blobs are corrupted or missing after a system crash or disk error.'
  },
  {
    name: 'git prune',
    role: 'Cleanup',
    explanation: 'Removes objects that are no longer reachable from any branch or tag.',
    syntax: 'git prune -n --v',
    scenario: 'You recently deleted several branches and want to clear out the now-dangling objects from your local database permanently.'
  },
  {
    name: 'git repack',
    role: 'Optimization',
    explanation: 'Packs loose objects into more efficient pack files.',
    syntax: 'git repack -a -d',
    scenario: 'You want to manually trigger object packing for a repository that hasn\'t been optimized in a while to improve fetch speeds.'
  },
  {
    name: 'git count-objects -v',
    role: 'Inspection',
    explanation: 'Shows detailed disk usage and object counts.',
    syntax: 'git count-objects -vH',
    scenario: 'You are analyzing your ".git" folder size to see what\'s taking up space and if it\'s time for a garbage collection.'
  },
  {
    name: 'git reflog',
    role: 'Safety Net',
    explanation: 'Lists every action that updated the HEAD of your repository.',
    syntax: 'git reflog [show] [branch]',
    scenario: 'You just accidentally deleted a branch and need to find the commit hash to restore it before it\'s pruned by garbage collection.'
  },
  {
    name: 'git reflog show',
    role: 'Safety Net',
    explanation: 'Shows the log for a specific branch or reference.',
    syntax: 'git reflog show <branch>',
    scenario: 'You want to see how your "main" branch pointer has moved over the last month to trace back a regression point.'
  },
  {
    name: 'git stash drop stash@{0}',
    role: 'Cleanup',
    explanation: 'Deletes a specific stash from your local stack.',
    syntax: 'git stash drop <id>',
    scenario: 'You no longer need a temporary fix and want to stop it from appearing in your stash list to keep your workspace tidy.'
  },
  {
    name: 'git update-index --refresh',
    role: 'Admin',
    explanation: 'Refreshes the index based on the working directory state.',
    syntax: 'git update-index --refresh',
    scenario: 'You are writing a script that needs to ensure the index is consistent with actual file changes before running a health check.'
  },
  {
    name: 'git rerere',
    role: 'Advanced Tool',
    explanation: 'Reuse recorded resolution: allows Git to remember how you resolved merge conflicts for a file.',
    syntax: 'git config --global rerere.enabled true',
    scenario: 'You are rebasing a long-lived feature branch and don\'t want to resolve the same conflict in every rebased commit. Git will remember your fix.'
  },
  {
    name: 'git rerere-forget',
    role: 'Advanced Tool',
    explanation: 'Forgets a previously recorded merge resolution.',
    syntax: 'git rerere forget <path>',
    scenario: 'You realized you resolved a conflict incorrectly and want Git to stop suggesting the wrong fix automatically.'
  },
  {
    name: 'git update-server-info',
    role: 'Admin (Legacy)',
    explanation: 'Updates auxiliary info file to help dumb protocols (HTTP) discover repository data.',
    syntax: 'git update-server-info',
    scenario: 'You are hosting a Git repository over static HTTP (S3, etc.) and need it to be fetchable by clients using the legacy "dumb" protocol.'
  },
  {
    name: 'git bundle',
    role: 'Interoperability',
    explanation: 'Packages objects and refs into a single file.',
    syntax: 'git bundle create <file> <branch>',
    scenario: 'You need to transfer a repository across a network gap (moving code between offline secure environments) via a physical USB-stick.'
  },
  {
    name: 'git worktree add',
    role: 'Architecture',
    explanation: 'Allows checking out multiple branches to separate directories simultaneously.',
    syntax: 'git worktree add <path> <branch>',
    scenario: 'You are working on a massive feature but need to quickly switch to "main" to fix a high-priority bug without stashing or committing.'
  },
  {
    name: 'git worktree list',
    role: 'Architecture',
    explanation: 'Lists all current worktrees and their locations.',
    syntax: 'git worktree list',
    scenario: 'You forgot where you checked out your second worktree and need to find its absolute path on your filesystem.'
  },
  {
    name: 'git worktree prune',
    role: 'Cleanup',
    explanation: 'Cleans up working tree information for directories that have been deleted.',
    syntax: 'git worktree prune',
    scenario: 'You deleted a worktree directory manually and want to update the Git administrative info to reflect its removal.'
  }
];
