export const porcelains = [
  {
    name: 'git init',
    role: 'Setup',
    explanation: 'Creates a new, empty Git repository in your current folder by generating a hidden .git directory. This .git folder IS your entire version history — delete it and you lose everything. Think of it as planting the seed of a time machine inside your project.',
    syntax: 'git init [directory]',
    scenario: 'You just started building a new app on your laptop. Before writing a single line of code, you run git init so that every change is tracked from day one. When you later make a mistake (and you will), you can travel back in time to any previous version.'
  },
  {
    name: 'git clone',
    role: 'Setup',
    explanation: 'Downloads a complete copy of a remote repository — including 100% of its commit history, all branches, and all files — to your local machine. Unlike downloading a ZIP file, cloning preserves the full timeline and automatically connects your copy to the original via a remote called "origin".',
    syntax: 'git clone <url> [local-folder-name]',
    scenario: 'Your company\'s backend API is on GitHub and you just joined the team. You run git clone to get a full working copy on your laptop, complete with every commit ever made, so you can understand the full history of the project, not just the latest version.'
  },
  {
    name: 'git config',
    role: 'Configuration',
    explanation: 'Reads and writes Git configuration values at three levels: system (all users), global (your user account), and local (this specific repo). Your name and email are baked permanently into every commit you create — this is how GitHub assigns commits to your profile and contribution graph.',
    syntax: 'git config --global user.name "Your Name"',
    scenario: 'You just got a new work laptop. Before your first commit, you run git config --global with your name and company email. Without this, your commits would show up as "anonymous" and would NOT count toward your GitHub contribution graph — the green squares on your profile.'
  },
  {
    name: 'git add',
    role: 'Staging',
    explanation: 'Moves changes from your Working Directory into the Staging Area (also called the Index). Think of the Staging Area as a "draft snapshot" — you\'re building up the exact picture you want to permanently record. Nothing is committed yet; you are just deciding what is included in the next snapshot. This lets you be surgical and intentional about what goes into each commit.',
    syntax: 'git add <file> | git add . | git add -p',
    scenario: 'You changed 4 files, but only 2 of them are related to the feature you are working on. You stage only those 2 with "git add file1.js file2.js" and commit them as one logical unit. The other 2 stay unstaged for a separate commit — resulting in a clean, understandable history for your teammates to review.'
  },
  {
    name: 'git status',
    role: 'Inspection',
    explanation: 'Shows a complete map of your three-zone Git workspace: What is staged and ready to commit (green), what is modified but not yet staged (red), and what is brand new and untracked (also red). Think of it as the "dashboard" of your current work session. You should run this before every single add and commit.',
    syntax: 'git status [--short | -s]',
    scenario: 'Before making a commit, a professional developer ALWAYS runs git status first. It reveals if you accidentally modified a file you didn\'t mean to, or if you forgot to stage a critical file. It takes 1 second and prevents embarrassing commits with missing or extra changes.'
  },
  {
    name: 'git commit',
    role: 'Snapshot',
    explanation: 'Takes everything in the Staging Area and permanently stores it as a new snapshot (commit) in the repository history. Each commit gets a unique 40-character SHA-1 hash that acts as its fingerprint — you can always find, reference, or restore this exact state. Think of it like saving a named checkpoint in a video game that you can always return to.',
    syntax: 'git commit -m "<message>" | git commit --amend',
    scenario: 'You finished building the user login feature. You run git commit -m "feat(auth): add email/password login with JWT tokens". This immutable commit is now part of the project\'s history forever. Six months from now, if a bug is introduced, your team can use git log to trace it back to this exact snapshot.'
  },
  {
    name: 'git log',
    role: 'History',
    explanation: 'Displays the commit history as a chronological list of snapshots. Each entry shows the commit hash, author, date, and message. With extra flags it becomes a powerful forensics tool — you can filter by author, date, file, or even visualize the branch graph. Senior developers use git log daily to understand the "story" of a codebase.',
    syntax: 'git log --oneline --graph --all',
    scenario: 'A production bug appeared. You need to find when it was introduced. You run "git log --oneline --follow src/payment.js" to see every commit that ever touched the payment file. Then you use git diff between two commits to find the exact line that caused the regression — this is called "forensic debugging".'
  },
  {
    name: 'git diff',
    role: 'Comparison',
    explanation: 'Shows the exact line-by-line differences between two states. Lines prefixed with "-" (red) were removed; lines with "+" (green) were added. Without arguments, it compares your Working Directory to the Staging Area. With --staged, it compares the Staging Area to the last commit. This is how you review your own work before committing.',
    syntax: 'git diff [--staged] [commit1] [commit2] [-- file]',
    scenario: 'You just finished coding for 2 hours and are about to commit. Run "git diff --staged" first to read every single change you are about to permanently record. This catches typos, forgotten debug logs (console.log!), and accidental changes before they become part of the permanent history.'
  },
  {
    name: 'git branch',
    role: 'Branching',
    explanation: 'Lists, creates, renames, or deletes branches. A branch is NOT a copy of your code — it is simply a lightweight movable pointer to a specific commit. Creating a branch takes milliseconds and uses almost no disk space. This is what makes Git branching so powerful compared to older version control systems where branching was slow and expensive.',
    syntax: 'git branch [-a | -d | -D | -m] <name>',
    scenario: 'Your team is working on two features simultaneously: a new dashboard and a payment system. Each developer creates their own branch (git branch feat/dashboard, git branch feat/payments) and works in complete isolation. Neither disrupts the other\'s work, and both features can be merged into main independently when ready.'
  },
  {
    name: 'git checkout',
    role: 'Navigation',
    explanation: 'The original Swiss army knife command that does multiple things: switches branches, creates branches, restores individual files, and checks out specific commits. Because it does too many things at once, Git 2.23 introduced "git switch" and "git restore" to split these responsibilities. Understanding checkout is essential because you will see it everywhere in documentation and tutorials.',
    syntax: 'git checkout <branch> | git checkout -b <new-branch> | git checkout -- <file>',
    scenario: 'You are looking at an old tutorial written in 2019 that uses "git checkout -b feature". Knowing that this is equivalent to the modern "git switch -c feature" helps you follow along without confusion. Both commands create and switch to a new branch — checkout is the legacy syntax, switch is the modern one.'
  },
  {
    name: 'git switch',
    role: 'Navigation',
    explanation: 'The modern, purpose-built command for switching between branches or creating new ones. Unlike git checkout, it cannot accidentally overwrite files or do unintended things. It has a single, clear purpose: move between branches. This is the recommended command for all new code written from 2020 onwards.',
    syntax: 'git switch <branch> | git switch -c <new-branch>',
    scenario: 'You are working on a report and your manager asks you to quickly check the "production" branch. You run "git switch production" — Git saves your context and immediately moves you there. When done, "git switch -" (with a dash) takes you back to your previous branch, like toggling between two tabs.'
  },
  {
    name: 'git merge',
    role: 'Combination',
    explanation: 'Joins two branch histories together. If the target branch has no new commits since you branched off, Git does a "fast-forward" merge — just moving the pointer forward, no merge commit needed. If both branches have diverged, Git performs a "three-way merge" using the two branch tips and their common ancestor, creating a new "merge commit". Merge always preserves the full history of both branches.',
    syntax: 'git merge <branch> [--no-ff] [--squash]',
    scenario: 'Your "feature/user-auth" branch is approved and tested. You switch to main and run "git merge feature/user-auth". Git combines the histories. If there\'s a conflict (both branches edited the same line), Git pauses and shows you exactly what conflicts exist. You resolve them manually, then commit — the decision is permanently recorded in history.'
  },
  {
    name: 'git pull',
    role: 'Sync',
    explanation: 'A two-in-one command: it runs "git fetch" to download remote changes, then immediately runs "git merge" (or "git rebase" if configured) to integrate them. Think of it as "download + merge in one step". The risk: if you have local commits that haven\'t been pushed, it can create an unnecessary merge commit. Using "git pull --rebase" avoids this by replaying your local commits on top of the downloaded changes.',
    syntax: 'git pull [--rebase] [remote] [branch]',
    scenario: 'Every morning when you start work, the first command you should run is "git pull". Your teammates were working overnight and pushed 5 commits. This command downloads their work and integrates it with yours so you are building on the latest foundation — not working on a stale copy from yesterday.'
  },
  {
    name: 'git push',
    role: 'Contribution',
    explanation: 'Uploads your local commits to the remote repository, making your work visible to your entire team and recorded on GitHub. Think of it as "publishing" your local chapters to the shared book. Git will reject a push if the remote has commits you don\'t have locally yet — in that case, you must pull first and then push.',
    syntax: 'git push [remote] [branch] | git push -u origin <branch>',
    scenario: 'You finished a feature, committed it locally, and now want to open a Pull Request on GitHub. First you push: "git push -u origin feature/checkout-flow". The "-u" flag sets "origin/feature/checkout-flow" as the tracking branch, so future "git push" commands (without arguments) know exactly where to send your commits.'
  },
  {
    name: 'git fetch',
    role: 'Sync',
    explanation: 'Downloads all new commits, branches, and tags from the remote — but does NOT touch your local branches or working files at all. It is a completely safe, read-only operation. Think of it like checking the mailbox: you see what arrived, but you haven\'t opened anything yet. After fetching, you can inspect what changed before deciding whether to merge.',
    syntax: 'git fetch [--all] [remote]',
    scenario: 'Before rebasing your feature branch, you always run "git fetch origin" first. This downloads the latest state of all remote branches without merging anything. Then you can run "git rebase origin/main" to replay your commits on top of the freshly downloaded main — ensuring you have the absolute latest code without any surprise automatic merges.'
  },
  {
    name: 'git remote',
    role: 'Remote Management',
    explanation: 'Manages the list of remote connections (aliases for URLs). "origin" is the conventional default name for the primary remote and is set up automatically by "git clone". You can add multiple remotes — for example "upstream" pointing to the original project when you have forked it. Remote names are just shortcuts so you don\'t type full URLs every time.',
    syntax: 'git remote add <name> <url> | git remote -v | git remote rm <name>',
    scenario: 'You forked a popular open-source library on GitHub. After cloning your fork, you run "git remote add upstream https://github.com/original/library.git". Now you have two remotes: "origin" (your fork) and "upstream" (the original). When the original project gets new updates, you run "git fetch upstream" then "git merge upstream/main" to stay synchronized.'
  }
];
