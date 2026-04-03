export const branching = [
  {
    name: 'git branch -r',
    role: 'Branching',
    explanation: 'Lists all branches that exist on the remote repository. The "-r" flag means "remote". These are the branches your teammates have created and pushed. The output shows them prefixed with the remote name (e.g., "origin/feature/login"). This command never modifies anything — it is purely informational.',
    syntax: 'git branch -r',
    scenario: 'You just joined a team and want to understand what everyone is working on. Running "git branch -r" after "git fetch --all" gives you a complete map of all active feature branches across the entire team — a quick team status check without opening GitHub.'
  },
  {
    name: 'git branch -a',
    role: 'Branching',
    explanation: 'Lists ALL branches — both local ones and remote-tracking ones — in a single view. Local branches are shown in white, remote-tracking branches in red. This is the most complete picture of all the branches that exist in your project — both what\'s on your machine and what\'s on the server.',
    syntax: 'git branch -a',
    scenario: 'Before creating a new branch called "feature/notifications", you run "git branch -a" to make sure that branch name doesn\'t already exist remotely. Naming it the same as an existing remote branch would cause confusion and potential conflicts when pushing.'
  },
  {
    name: 'git branch -d',
    role: 'Branching',
    explanation: 'Safely deletes a branch that has already been merged. The lowercase "-d" is a "safe delete" — it refuses to delete the branch if its commits haven\'t been merged into another branch yet, protecting you from accidentally losing unmerged work. Use "-D" (uppercase) only when you are absolutely certain you want to force-delete unmerged work.',
    syntax: 'git branch -d <branch-name>',
    scenario: 'A Pull Request for "feature/shopping-cart" was approved and merged into main. The branch\'s purpose is fulfilled. You run "git branch -d feature/shopping-cart" to clean up your local branch list. If you hadn\'t merged it yet and tried this, Git would refuse and say "error: The branch is not fully merged" — protecting your unmerged work.'
  },
  {
    name: 'git switch -c',
    role: 'Branching',
    explanation: 'Creates a brand new branch AND immediately switches to it in a single command. The "-c" stands for "create". This is the modern, recommended way to start new work. It is equivalent to running "git branch <name>" then "git switch <name>", but in one atomic step — you are never accidentally left on the wrong branch.',
    syntax: 'git switch -c <new-branch-name>',
    scenario: 'Your team uses the convention: always branch from the latest main. You run "git switch main", "git pull", then "git switch -c feat/two-factor-auth". Now you have a fresh branch based on the absolute latest code, and you are already on it — ready to start building immediately.'
  },
  {
    name: 'git merge --no-ff',
    role: 'Merging',
    explanation: 'Forces Git to always create a merge commit, even when a fast-forward merge would be possible. Without --no-ff, a simple merge just moves the pointer forward leaving no evidence in history that a feature branch ever existed. With --no-ff, the branch topology is preserved — you can see in the graph exactly where the feature started, where it was developed, and where it rejoined main.',
    syntax: 'git merge --no-ff <branch>',
    scenario: 'Your team\'s policy is: every feature merged into main must be traceable as a distinct unit in the git log graph. Using "--no-ff" ensures that even simple merges create a merge commit node. Six months later, running "git log --graph" clearly shows the entire story: "Here is where feature/payment-v2 was built, reviewed, and merged." No information is lost.'
  },
  {
    name: 'git merge --squash',
    role: 'Merging',
    explanation: 'Takes all the commits from the source branch and "squashes" them into staged changes on the current branch WITHOUT creating a merge commit yet. You then create ONE clean commit yourself. This is perfect when your feature branch has messy "WIP", "typo fix", "trying again" commits that you don\'t want cluttering the main branch\'s history.',
    syntax: 'git merge --squash <branch>',
    scenario: 'Your feature branch "feat/dark-mode" has 23 commits including "WIP", "forgot to save", "actually this worked". Before merging to main, you run "git merge --squash feat/dark-mode && git commit -m \'feat(ui): add dark mode with system preference detection\'". The main branch now has ONE beautiful, descriptive commit — not 23 messy ones.'
  },
  {
    name: 'git rebase',
    role: 'Rewriting History',
    explanation: 'Replays your branch\'s commits one by one on top of another branch, creating brand-new commit objects with new hashes. The result looks as if you had started your branch from the latest tip of the target branch — a perfectly linear, clean history. Think of it like "picking up your work and moving the foundation it sits on." Warning: Never rebase commits that others are already using — it rewrites history and will break their copies.',
    syntax: 'git rebase <base-branch>',
    scenario: 'You started "feature/login" 5 days ago from main. Since then, main received 20 new commits including a critical database schema change you need. Rather than doing a messy merge, you run "git rebase main" on your feature branch. Git lifts your commits off the old base and replays them on the new main — your feature now builds cleanly on the absolute latest foundation, ready for a clean Pull Request.'
  },
  {
    name: 'git rebase -i',
    role: 'Rewriting History',
    explanation: 'Interactive rebase opens a text editor with a list of upcoming commits and lets you reorder, edit, combine (squash), or delete them before they are replayed. This is the most powerful history-editing tool in Git. You can turn a messy development history filled with "fix", "try again", "WIP" commits into a clean, professional story that reads logically.',
    syntax: 'git rebase -i HEAD~<number-of-commits>',
    scenario: 'You have 5 commits on your branch: "add form", "fix validation", "fix validation again", "oops typo", "final fix". Before opening your PR, you run "git rebase -i HEAD~5". In the editor, you mark commits 2-5 as "squash" to fold them into commit 1. The result: one clean commit called "feat(form): add validated checkout form" — exactly what a senior reviewer wants to see.'
  },
  {
    name: 'git cherry-pick',
    role: 'Selection',
    explanation: 'Takes one specific commit from anywhere in the repository\'s history and applies its changes to your current branch, creating a new commit with the same diff but a different hash. Think of it as "copy-paste for commits" — you are not moving the commit, you are cloning its effect. This is surgical and precise, avoiding the need to merge entire branches.',
    syntax: 'git cherry-pick <commit-hash>',
    scenario: 'A critical security fix (commit abc1234) was made on the "develop" branch. Your "release-2.0" branch needs that fix immediately, but "develop" has 30 other unfinished features you cannot include yet. You run "git cherry-pick abc1234" on the release branch — only that one fix lands, like lifting a single flower from a garden without disturbing anything else.'
  },
  {
    name: 'git stash',
    role: 'Temporary Storage',
    explanation: 'Saves all your current uncommitted changes (both staged and unstaged) into a temporary "stash stack" and reverts your working directory to a clean state matching the last commit. Think of it as the "pause button" for your work. Your changes are not lost — they are stored safely in a stack that you can restore later from any branch.',
    syntax: 'git stash [push -m "description"]',
    scenario: 'You are 45 minutes into coding a new feature when your phone rings — production is down. You can\'t commit half-done work, but you can\'t lose it either. Run "git stash push -m \'WIP: half-built payment form\'" — your working directory instantly becomes clean. Switch to main, fix the production bug, deploy it. Then come back to your feature branch and run "git stash pop" to restore everything exactly as you left it.'
  },
  {
    name: 'git stash pop',
    role: 'Temporary Storage',
    explanation: 'Retrieves the most recently stashed changes and applies them back to your working directory, then REMOVES that stash entry from the stack. It is the undo of "git stash". If the stash applies cleanly, you are right back where you were. If there is a conflict with current files, Git will flag it for you to resolve.',
    syntax: 'git stash pop [stash@{n}]',
    scenario: 'After fixing the production bug and switching back to your feature branch, you run "git stash pop". All your 45 minutes of work reappears instantly — every modified file, every staged change, everything exactly as it was before the interruption. You continue coding as if the interruption never happened.'
  },
  {
    name: 'git worktree add',
    role: 'Advanced',
    explanation: 'Checks out a DIFFERENT branch into a SEPARATE directory on your filesystem while your main directory stays on its current branch. This means you can have two completely different branches open simultaneously in two VS Code windows, editing them independently without any stashing or switching. This is an advanced workflow for when you need to actively work on multiple things at once.',
    syntax: 'git worktree add <path> <branch>',
    scenario: 'You need to review and test a colleague\'s PR while also continuing your own feature development. Instead of stashing your work, switching branches, reviewing, then switching back, you run "git worktree add ../review-work feature/colleague-branch". Now you have two totally independent working directories — one per branch. Review happens in one VS Code window, your own work continues in another.'
  }
];
