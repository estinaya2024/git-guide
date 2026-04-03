export const contentData = {
  introduction: {
    title: "Introduction to Git & GitHub",
    description: "Before writing a single line of code professionally, you need to understand Git. It is not just a tool — it is the language that software teams use to collaborate, recover from mistakes, and ship confidently.",
    sections: [
      {
        heading: "What Is Git? (And Why Should You Care?)",
        text: "Imagine you are writing a university thesis. You start saving files like 'thesis_v1.docx', 'thesis_FINAL.docx', 'thesis_FINAL_real.docx'. Sound familiar? Git solves this chaos permanently.\n\nGit is a Distributed Version Control System (DVCS). In plain terms, it is a program that takes a perfect snapshot of every version of every file in your project — and remembers every single one. It lets you travel back in time, work on multiple versions simultaneously, and merge everyone's work together without losing a single change.\n\nThe word 'Distributed' is key: every single developer has a full, complete copy of the entire project history on their own machine. There is no single server that everyone depends on. If the server goes down, work continues. Your laptop IS the backup.",
        code: `# Check if Git is installed and see your version
git --version

# Output example:
# git version 2.43.0`
      },
      {
        heading: "The 3 States of Git — The Most Important Mental Model",
        text: "Everything in Git revolves around three states. Miss this concept and Git will always feel confusing. Master it and everything else makes sense.\n\n1. WORKING DIRECTORY — This is your project folder. You freely edit, create, and delete files here. Git watches but does not record anything yet.\n\n2. STAGING AREA (Index) — Think of this as a 'draft snapshot'. When you run 'git add', you are telling Git: 'Put this specific change in the next snapshot I'm building.' You can cherry-pick exactly what goes in.\n\n3. REPOSITORY (.git folder) — When you run 'git commit', Git takes everything from the Staging Area and permanently stores it as a snapshot in the repository. This commit is immutable — it cannot be changed.\n\nAnalogy: Think of it like mailing a package. The Working Directory is your desk (you're still packing). The Staging Area is your sealed box (ready to ship but not gone yet). The Repository is the delivered package — permanently recorded in history.",
        code: `# See the current state of all 3 areas at once
git status

# A typical output:
# On branch main
# Changes to be committed:   <-- Staging Area
#   modified: index.html
# Changes not staged:        <-- Working Directory
#   modified: style.css
# Untracked files:           <-- Not yet tracked
#   new-feature.js`
      },
      {
        heading: "What Is GitHub? (Git vs. GitHub)",
        text: "Git is the tool. GitHub is the service.\n\nGit lives on your local machine and tracks changes. GitHub is a website (github.com) that hosts your Git repositories online, letting your entire team push and pull the same codebase, open Pull Requests for code review, and run automated tests.\n\nA useful analogy: Git is like Microsoft Word's 'Track Changes' feature. GitHub is like Google Drive — it puts your Word document online so your whole team can access it.\n\nOther services like GitLab and Bitbucket serve the same hosting purpose, but GitHub is by far the most widely used in the industry.",
      },
      {
        heading: "Writing Professional Commit Messages",
        text: "A commit message is a letter to your future self and your teammates. A bad message like 'fix stuff' is useless six months later. A professional commit message explains WHAT changed and WHY.\n\nThe industry standard format is called the Conventional Commits specification. It enables automated changelog generation and makes 'git log' readable at a glance. The format is:\n\n  <type>(<scope>): <short summary>\n\nCommon types:\n  feat — a new feature\n  fix — a bug fix\n  docs — documentation changes\n  refactor — code restructure (no behavior change)\n  test — adding or fixing tests\n  chore — maintenance (e.g., updating dependencies)",
        code: `# BAD commit messages (unprofessional):
git commit -m "fix"
git commit -m "changes"
git commit -m "wip"

# GOOD commit messages (professional):
git commit -m "feat(auth): add Google OAuth2 login flow"
git commit -m "fix(api): handle null response from payment gateway"
git commit -m "docs(readme): update installation steps for Windows"

# Full commit with body and footer (for complex changes):
git commit -m "feat(cart): persist items across browser sessions

Previously, the shopping cart was cleared on page refresh.
Items are now saved to localStorage and restored on load.

Closes #247
Co-authored-by: Jana K. <jana@company.com>"`
      }
    ]
  },

  setup: {
    title: "Initial Setup & Configuration",
    description: "Setting up Git correctly the first time saves you from confusion later. Git has three levels of configuration, and understanding them makes you a far more effective developer.",
    sections: [
      {
        heading: "The 3 Levels of Git Configuration",
        text: "Git configuration is layered. Settings at one level override settings at a broader level. Understanding this prevents mysterious behavior.\n\n1. SYSTEM level (--system): Applies to every user on this computer. Stored at /etc/gitconfig. You rarely touch this.\n\n2. GLOBAL level (--global): Applies to your specific user account. This is where you set your name and email. Stored at ~/.gitconfig.\n\n3. LOCAL level (--local): Applies ONLY to the current repository. Stored at .git/config inside the project. This overrides global settings.\n\nPractical use: Your global config may have your personal email, but a work project's local config can override it with your company email — automatically using the right identity for each project.",
        code: `# Set your identity GLOBALLY (applies to all your projects)
git config --global user.name "Your Full Name"
git config --global user.email "you@example.com"

# Override identity for a SPECIFIC work project (local only)
cd ~/work/company-project
git config --local user.email "you@company.com"

# See all config values and which file they come from
git config --list --show-origin`
      },
      {
        heading: "Essential Global Settings",
        text: "Beyond your name and email, there are several settings that dramatically improve your daily Git experience. Professional developers set these up once and never think about them again.",
        code: `# Set VS Code as your default editor (for commit messages, merge conflicts)
git config --global core.editor "code --wait"

# Set your default branch name to 'main' (modern standard)
git config --global init.defaultBranch main

# Enable colors in the terminal output (makes diffs readable)
git config --global color.ui auto

# Set 'rebase' as the default pull strategy (cleaner history)
git config --global pull.rebase true

# Enable a helpful 'push.autoSetupRemote' so 'git push' always works
git config --global push.autoSetupRemote true

# See your final global config file
cat ~/.gitconfig`
      },
      {
        heading: "Setting Up SSH Authentication (The Professional Way)",
        text: "Typing your GitHub password every time you push is slow and insecure. SSH keys are the professional standard — authenticate once, push forever.\n\nAn SSH key pair works like a padlock and key. You give GitHub your PUBLIC key (the padlock). Your machine keeps the PRIVATE key (your key). When you connect, GitHub locks a message with the padlock, and only your private key can open it — proving your identity without any password.\n\nThis is used by every professional developer and CI/CD system in the world.",
        code: `# Step 1: Generate a new SSH key (Ed25519 is the modern, secure standard)
ssh-keygen -t ed25519 -C "you@example.com"
# Press Enter to accept the default file location
# Optionally set a passphrase for extra security

# Step 2: Start the SSH agent and add your private key
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Step 3: Copy your PUBLIC key to your clipboard
cat ~/.ssh/id_ed25519.pub
# Then go to GitHub → Settings → SSH Keys → New SSH Key → Paste

# Step 4: Test your connection
ssh -T git@github.com
# Expected: "Hi username! You've successfully authenticated."`
      },
      {
        heading: "The .gitignore File — What Git Should Never See",
        text: "Not every file belongs in your repository. API keys, passwords, build artifacts, and editor settings should never be tracked. The .gitignore file tells Git exactly which files to completely ignore.\n\nGolden Rule: Never commit secrets. Once a password is in Git history, it is permanently accessible — even if you delete it in a later commit. Tools like GitHub Secret Scanner and TruffleHog specifically search Git history for leaks.",
        code: `# Create a .gitignore file in your project root
touch .gitignore

# Common patterns to ignore:
# node_modules/     <- Dependencies (restored via npm install)
# .env              <- Secret environment variables
# dist/             <- Build output
# *.log             <- Log files
# .DS_Store         <- macOS junk files

# Example .gitignore for a Node.js project:
node_modules/
dist/
.env
.env.local
*.log
.DS_Store

# If you accidentally committed a file, untrack it (without deleting):
git rm --cached .env
git commit -m "chore: remove accidentally committed .env file"`
      }
    ]
  },

  basics: {
    title: "Core Git Workflow",
    description: "These are the commands you will run dozens of times every day. Understand them deeply — not just what they do, but why they work the way they do.",
    sections: [
      {
        heading: "git init — Turning a Folder into a Time Machine",
        text: "Running 'git init' creates a hidden .git folder inside your directory. This folder IS your entire Git repository — the commit history, the configuration, branch data, everything. If you delete .git, you delete all version history.\n\nThink of git init as planting a seed. Your project folder becomes a Git repository, and from this point on, Git is watching every change.",
        code: `# Start a brand new project with Git
mkdir my-project
cd my-project
git init

# Output:
# Initialized empty Git repository in /path/to/my-project/.git/

# See the hidden .git folder (the 'brain' of your repo)
ls -la   # On Mac/Linux
dir /a   # On Windows`
      },
      {
        heading: "git clone — Getting Someone Else's Repository",
        text: "Cloning downloads the ENTIRE repository — all commits, all branches, all history — to your local machine. It also automatically sets up the remote connection to the original repository (called 'origin').\n\nImportant: You do not need to run 'git init' after cloning. The clone already contains a fully initialized .git folder.",
        code: `# Clone a public repo from GitHub
git clone https://github.com/torvalds/linux.git

# Clone and rename the local folder
git clone https://github.com/user/repo.git my-custom-name

# Clone using SSH (recommended once you set up SSH keys)
git clone git@github.com:user/repo.git

# Clone only the latest commit (faster for huge repos)
git clone --depth 1 https://github.com/user/repo.git`
      },
      {
        heading: "The Core Loop: add → commit → push",
        text: "This three-step cycle is the heartbeat of professional Git work. You will do this hundreds of times.\n\nStep 1 — git add: Move your changes from the Working Directory to the Staging Area. Be selective. Stage only what belongs in this logical 'chunk' of work.\n\nStep 2 — git commit: Take a permanent snapshot of everything currently staged. This creates an immutable point in history with a unique hash (like a fingerprint).\n\nStep 3 — git push: Send your local commits to the remote repository on GitHub, making them visible to your team.",
        code: `# == STEP 1: Stage your changes ==

# Stage a specific file (recommended — be intentional)
git add src/user-auth.js

# Stage all changed/new files in the project
git add .

# Stage parts of a file interactively (very powerful)
git add -p src/app.js

# == STEP 2: Commit the staged snapshot ==
git commit -m "feat(auth): add JWT token refresh logic"

# Stage AND commit tracked files in one command
git commit -am "fix: correct null check in user profile"

# == STEP 3: Push to GitHub ==
git push origin main

# If it's your first push on a new branch:
git push -u origin feature/new-dashboard`
      },
      {
        heading: "git status & git diff — Your Daily Diagnostic Tools",
        text: "Before you add and commit anything, always check WHAT you're about to snapshot. Committing unintended changes is one of the most common beginner mistakes.\n\ngit status gives you a high-level map: what's staged, what's modified, what's untracked.\ngit diff shows you the EXACT line-by-line changes — the actual content differences.",
        code: `# High-level overview of what's changed
git status

# See exact changes in your Working Directory (not yet staged)
git diff

# See exact changes that ARE staged (ready to commit)
git diff --staged

# A compact one-line-per-file summary
git diff --stat

# See changes between two commits
git diff abc1234 def5678`
      },
      {
        heading: "git log — Reading the History of the Project",
        text: "Every commit creates a node in a graph. 'git log' lets you browse this graph and understand the full story of the project — what changed, who changed it, and why.\n\nLearning to read git log efficiently is the difference between a junior developer who is lost and a senior developer who can find any bug, understand any decision, and trace the history of any file.",
        code: `# Standard log (full commit details)
git log

# Beautiful compact one-line view (best for daily use)
git log --oneline

# Visual graph showing branches and merges
git log --oneline --graph --all

# See what ONE specific person committed
git log --author="Jane Smith"

# See every commit that touched a specific file
git log --follow src/components/Header.jsx

# See commits from the last 7 days
git log --since="7 days ago" --oneline`
      }
    ]
  },

  branching: {
    title: "Branching Mastery",
    description: "Branching is Git's superpower. It lets your entire team work on multiple features simultaneously without breaking each other's work. Master this and you master professional collaboration.",
    sections: [
      {
        heading: "What Is a Branch? (The Real Mental Model)",
        text: "A branch is NOT a copy of your code. That's the single biggest misconception beginners have.\n\nA branch is simply a lightweight pointer to a specific commit. When you create a branch, Git creates a new pointer label — nothing more. No files are copied. No disk space is used.\n\nWhen you make new commits on a branch, that pointer moves forward along the chain of commits, while the original branch pointer stays in place. This is why branching in Git is nearly instantaneous.\n\nThe 'main' branch is just a pointer. 'feature/login' is just a pointer. They both point to commits in the same shared history graph.",
        code: `# See all local branches (* marks the current one)
git branch

# See ALL branches including remote ones
git branch -a

# Create a new branch (the MODERN way — git switch)
git switch -c feature/user-dashboard

# Create a new branch (older syntax — still very common)
git checkout -b feature/user-dashboard

# Switch between existing branches
git switch main
git switch feature/user-dashboard

# See which commit each branch points to
git branch -v`
      },
      {
        heading: "Merging — Bringing Work Back Together",
        text: "When your feature is done, you need to merge it back into 'main'. There are two types of merges:\n\n1. FAST-FORWARD MERGE: If 'main' hasn't moved since you branched off, Git simply moves the 'main' pointer forward. No merge commit is created. Clean, linear history.\n\n2. THREE-WAY MERGE: If 'main' has new commits since you branched off, Git creates a new 'merge commit' that ties both histories together. This means 'main' now has two parents.\n\nProfessional tip: 'Squash and merge' (used in GitHub PRs) is a third option — it collapses all your feature branch commits into one clean commit on main, keeping history very readable.",
        code: `# == FAST-FORWARD MERGE ==
git switch main
git merge feature/simple-fix
# Output: Fast-forward (clean, simple, no merge commit)

# == THREE-WAY MERGE (creates a merge commit) ==
git switch main
git merge feature/big-feature
# Opens editor for merge commit message

# == RESOLVING A MERGE CONFLICT ==
# When Git can't automatically merge, it marks conflicts in the file:
# <<<<<<< HEAD (your current branch changes)
# ======= (separator)
# >>>>>>> feature/new-button (incoming changes)
#
# 1. Open the file, manually choose the correct version
# 2. Remove the <<< === >>> markers
# 3. Then:
git add src/component.jsx
git commit -m "merge: resolve conflict in component layout"`
      },
      {
        heading: "Rebasing — Rewriting History for a Cleaner Story",
        text: "Rebase is often misunderstood. Here's the simple version:\n\nMerge says: 'These two histories existed separately, then joined.'\nRebase says: 'Pretend my feature was always built on top of the latest main.'\n\nRebase takes your commits, lifts them off their base, and replays them one by one on top of the target branch. The result is a perfectly linear history — as if everyone worked in sequence.\n\nWhen to use rebase: When cleaning up your local feature branch before opening a Pull Request. It creates a tidy, easy-to-review history.\n\nGolden Rule: NEVER rebase commits that have already been pushed to a shared remote branch. This rewrites history and breaks other developers' copies.",
        code: `# The standard rebase workflow (clean up before PR)

# 1. Make sure main is up to date
git switch main
git pull

# 2. Go back to your feature branch
git switch feature/my-feature

# 3. Rebase your feature branch on top of the latest main
git rebase main
# Git replays your commits one by one on top of main

# 4. If there are conflicts, resolve them then:
git add src/resolved-file.js
git rebase --continue

# 5. If you want to escape: abort the rebase entirely
git rebase --abort

# Interactive rebase: Squash 3 messy commits into 1 clean one
git rebase -i HEAD~3
# In the editor: change 'pick' to 'squash' (or 's') for commits to merge`
      },
      {
        heading: "The Professional Git Flow",
        text: "Industry teams use structured branching strategies. The most common is Git Flow:\n\n  main — Stable, always deployable. Only merged PRs go here.\n  develop — Integration branch where feature branches merge.\n  feature/* — Individual features (feature/user-login).\n  fix/* — Bug fixes (fix/null-pointer-crash).\n  release/* — Preparing a new version for deployment.\n  hotfix/* — Emergency production fixes.\n\nFor smaller teams, GitHub Flow is simpler: branch from main, open a PR, review, merge to main, deploy. That's it.",
        code: `# Starting a new feature the professional way
git switch main
git pull origin main           # Always start from the latest main
git switch -c feature/payment-integration

# Do your work, then open a PR on GitHub...

# After PR is approved and merged, clean up locally:
git switch main
git pull origin main           # Get the merged changes
git branch -d feature/payment-integration  # Delete local branch
git remote prune origin        # Delete local references to deleted remote branches`
      }
    ]
  },

  advanced: {
    title: "Advanced Git Techniques",
    description: "These are the commands that separate junior developers from senior engineers. They give you surgical precision to recover from mistakes, manage complex workflows, and sculpt a clean, professional commit history.",
    sections: [
      {
        heading: "git stash — The Emergency Save Button",
        text: "Scenario: You are halfway through a complex feature when your manager says 'Drop everything, fix this production bug NOW.' You can't commit half-done work — but you can't lose it either.\n\ngit stash is your emergency save button. It takes ALL your unstaged and staged changes and saves them in a temporary stack, leaving your working directory perfectly clean. Then you can switch branches, fix the bug, and come back to your feature right where you left off.\n\nThink of it like a 'pause button' for your work.",
        code: `# Save your work-in-progress and clean the working directory
git stash

# Save with a descriptive label (highly recommended)
git stash push -m "WIP: half-done payment form validation"

# See all your stashed items
git stash list
# Output: stash@{0}: WIP: half-done payment form validation
#         stash@{1}: On feature: refactoring header component

# Apply the most recent stash AND remove it from the stack (most common)
git stash pop

# Apply a specific stash by index (without removing it)
git stash apply stash@{1}

# Stash ONLY specific files (not everything)
git stash push -m "partial stash" src/payment.js

# See exactly what's in a stash before applying it
git stash show -p stash@{0}

# Delete a stash you no longer need
git stash drop stash@{0}`
      },
      {
        heading: "git reset — Undoing with Precision",
        text: "git reset is one of Git's most powerful — and most dangerous — commands. It moves the branch pointer backward to a previous commit. There are three modes, and choosing the wrong one can cause data loss.\n\n--soft: Moves HEAD back, but keeps all your changes staged. Perfect for rewriting the last commit message or combining several commits.\n\n--mixed (default): Moves HEAD back and UNSTAGES the changes, but keeps the files. The changes are still there — just back in the Working Directory. Good for re-staging things differently.\n\n--hard: Moves HEAD back and DESTROYS the changes completely. Files are permanently overwritten. Use with extreme caution.",
        code: `# SOFT reset: Uncommit but keep changes staged
# Use case: "I committed too early, I want to add more to this commit"
git reset --soft HEAD~1

# MIXED reset (default): Uncommit AND unstage, but keep files
# Use case: "I committed the wrong files, let me re-stage more carefully"
git reset HEAD~1

# HARD reset: DANGER — permanently destroys the last commit AND its changes
# Use case: "That entire commit was wrong, delete it completely"
git reset --hard HEAD~1

# === SAFETY NET ===
# If you accidentally ran --hard, don't panic. Check reflog:
git reflog
# Find the lost commit hash, then recover it:
git checkout -b recovery-branch abc1234`
      },
      {
        heading: "git revert — The Safe Undo for Shared Branches",
        text: "Never use 'git reset' on commits that are already pushed to a shared branch. It rewrites history and breaks your teammates' repositories.\n\ngit revert is the safe alternative. Instead of erasing a commit, it creates a NEW commit that undoes the changes from a previous one. The history remains intact and truthful — it shows that the bad commit happened, then that it was reversed. This is the professional, team-safe way to undo.",
        code: `# Safely undo a specific commit that's already been pushed
# (Creates a new "undo" commit — history is preserved)
git revert abc1234

# Revert the most recent commit
git revert HEAD

# Revert a merge commit (requires -m to specify the mainline parent)
git revert -m 1 HEAD

# Revert multiple commits at once (creates multiple revert commits)
git revert HEAD~3..HEAD`
      },
      {
        heading: "git cherry-pick — Precision Surgery on Commits",
        text: "Cherry-pick lets you apply ONE specific commit from any branch onto your current branch. This is 'surgical extraction' — you're picking one commit out of history and replaying it somewhere else.\n\nReal-world scenario: A critical security fix was committed to 'develop' branch two weeks ago (commit abc123). You need that fix in the 'release-v2.0' branch immediately — but you don't want to merge all of develop into it. Cherry-pick lets you grab just that one commit.",
        code: `# Apply a single specific commit to the current branch
git cherry-pick abc1234

# Cherry-pick without automatically committing (stage only)
git cherry-pick --no-commit abc1234

# Cherry-pick a range of commits
git cherry-pick abc1234^..def5678

# Cherry-pick from a different branch (by referencing it directly)
git cherry-pick origin/develop~2`
      },
      {
        heading: "git reflog — Git's Black Box Flight Recorder",
        text: "git reflog is Git's safety net of safety nets. It records every single movement of HEAD — every commit, rebase, reset, checkout, and merge — even if those commits are no longer reachable from any branch.\n\nScenario: You ran 'git reset --hard' and thought you lost a week of work. Before you panic, check reflog. It almost certainly remembers the lost commit. Reflog entries are kept for 90 days by default.\n\nEvery experienced developer has used reflog to rescue seemingly lost work. Keep this command in your back pocket.",
        code: `# See the last 30 movements of HEAD
git reflog

# Output example:
# abc1234 HEAD@{0}: reset: moving to HEAD~1
# def5678 HEAD@{1}: commit: feat: add payment integration  <-- YOUR LOST WORK
# 789ghij HEAD@{2}: checkout: moving from main to feature/payment

# Recover the 'lost' commit by creating a branch at its hash
git checkout -b rescue-branch def5678

# Or cherry-pick it back onto main
git switch main
git cherry-pick def5678`
      }
    ]
  },

  teams: {
    title: "Team Collaboration & Workflows",
    description: "Writing great code alone is a skill. Writing great code as part of a team is a different skill entirely. This section teaches you the real workflows used by professional engineering teams at companies around the world.",
    sections: [
      {
        heading: "The Forking Workflow — How Open Source Works",
        text: "The Forking Workflow is the backbone of all open-source collaboration and is used by millions of projects on GitHub.\n\nHere's how it works:\n1. You 'Fork' a repository — GitHub creates a personal copy of it under your account.\n2. You clone YOUR fork to your local machine.\n3. You make changes in your fork.\n4. You open a 'Pull Request' asking the original project to review and merge your changes.\n\nYou NEVER have push access to the original repo. The maintainers review your PR and decide whether to accept it. This model protects the main project while allowing anyone in the world to contribute.",
        code: `# After forking on GitHub, clone YOUR fork:
git clone git@github.com:YOUR_USERNAME/original-project.git
cd original-project

# Connect to the ORIGINAL project as 'upstream'
# (so you can pull in updates from the source)
git remote add upstream https://github.com/ORIGINAL_OWNER/original-project.git

# Verify your remotes
git remote -v
# origin    git@github.com:YOUR_USERNAME/original-project.git (push/fetch)
# upstream  https://github.com/ORIGINAL_OWNER/original-project.git (fetch)

# Keep your fork up to date with the original (do this regularly)
git fetch upstream
git switch main
git merge upstream/main

# Create a feature branch for your contribution
git switch -c fix/correct-typo-in-readme
# ... make your changes ...
git push origin fix/correct-typo-in-readme
# Then open a Pull Request on GitHub`
      },
      {
        heading: "Pull Requests — The Professional Code Review Process",
        text: "A Pull Request (PR) is not just a 'merge request'. It is a structured conversation about CODE. It's where your team reviews logic, catches bugs, enforces standards, and shares knowledge.\n\nA great PR:\n  — Is focused on ONE thing (one feature, one bug fix)\n  — Has a clear title following Conventional Commits format\n  — Has a detailed description explaining WHAT changed and WHY\n  — References the related issue (e.g., 'Closes #142')\n  — Includes 5–15 files changed (not 50+)\n  — Passes all automated tests before asking for review\n\nA PR with 500 file changes and no description is disrespectful to reviewers. Respect their time by writing PRs that are easy to understand and review.",
        code: `# The complete professional PR workflow:

# 1. Start from the latest main
git switch main && git pull

# 2. Create a focused feature branch
git switch -c feat/add-dark-mode-toggle

# 3. Do your work with clean commits
git add src/ThemeToggle.jsx
git commit -m "feat(ui): add dark mode toggle component"
git add src/App.jsx
git commit -m "feat(app): integrate dark mode state into root"

# 4. Rebase to clean up history before opening PR
git fetch origin
git rebase origin/main

# 5. Push to GitHub
git push -u origin feat/add-dark-mode-toggle

# 6. Open a PR on GitHub with this description template:
# ## What does this PR do?
# Adds a dark mode toggle button to the navigation bar.
#
# ## Why?
# Closes #89 - Users have been requesting dark mode for months.
#
# ## How was this tested?
# - Tested in Chrome, Firefox, Safari
# - All existing tests pass`
      },
      {
        heading: "Handling Feedback — The Review Cycle",
        text: "Your reviewer left comments on your PR. Now what? This is where many developers get defensive or confused about the workflow.\n\nProfessional behavior:\n  — Never force-push to a PR branch while a review is in progress\n  — Respond to every comment, even if just 'Done!'\n  — Add new commits (don't amend existing ones) for changes requested in review\n  — Mark threads as 'Resolved' after addressing them\n  — After approval, squash your commits for a clean history before merging",
        code: `# After receiving review feedback, make your changes:
git switch feat/add-dark-mode-toggle

# Make the requested changes, then add new commits
git add src/ThemeToggle.jsx
git commit -m "fix(ui): use CSS variables instead of hardcoded colors (review feedback)"

# Push the update — GitHub automatically adds it to the PR
git push origin feat/add-dark-mode-toggle

# After approval: optionally squash before merging
# (Usually done via the GitHub UI with 'Squash and merge')`
      },
      {
        heading: "Keeping Your Local Repo in Sync",
        text: "When working in a team, 'main' is constantly moving. Other people are merging PRs while you work. You need strategies to keep your local work aligned with the team's progress — otherwise you'll hit painful merge conflicts.\n\ngit fetch: Downloads remote changes but does NOT touch your local branches. Like checking the mailbox — you see what arrived but don't open anything yet.\n\ngit pull: Downloads AND integrates remote changes immediately. By default this does a merge, but with 'rebase' config it replays your commits on top — much cleaner.",
        code: `# The safest pull workflow (rebase-based)

# 1. Fetch all remote changes without touching your local branches
git fetch --all

# 2. See what came in on main
git log origin/main --oneline -10

# 3. Update your local main (fast-forward only — safe)
git switch main
git merge --ff-only origin/main

# 4. Update your feature branch on top of the new main
git switch feat/my-feature
git rebase origin/main

# If a conflict occurs during rebase:
# Edit the conflicted files, then:
git add src/conflicted-file.js
git rebase --continue`
      }
    ]
  },

  orgs: {
    title: "Organizations, Admin & CI/CD",
    description: "Managing repositories at scale — for a company, open-source project, or team — requires policies, automation, and discipline. This is the engineering management layer of Git.",
    sections: [
      {
        heading: "GitHub Organizations — Managing Teams at Scale",
        text: "A GitHub Organization is a shared account where businesses and teams can collaborate across many repositories simultaneously.\n\nOrganizations have a layered permission model:\n  — Owner: Full administrative control. Can delete the org, manage billing, etc. Limit this role — only 2-3 trusted people.\n  — Member: Standard org member. Permissions are defined per-team and per-repository.\n  — Outside Collaborator: Access to specific repos only (for contractors and freelancers).\n\nBest practice: Use TEAMS inside the Organization (e.g., 'Backend Team', 'Frontend Team', 'DevOps'). Grant repository access to teams, not individual users. When someone joins or leaves, update their team membership — not hundreds of individual repo permissions.",
        code: `# After joining an organization, you can clone org repos via SSH:
git clone git@github.com:YOUR-COMPANY/internal-api.git

# See all your organization repos (via GitHub CLI)
gh repo list YOUR-COMPANY --limit 50

# See your permission level on a repo (GitHub CLI)
gh api repos/YOUR-COMPANY/repo-name | jq .permissions`
      },
      {
        heading: "Branch Protection Rules — Enforcing Code Quality",
        text: "Branch Protection Rules are policies you configure in GitHub that prevent force-pushes, require code reviews before merging, and enforce passing test suites.\n\nThis is the most important administrative feature for any serious project.\n\nPro-level protection settings for 'main':\n  ✅ Require pull request reviews (1-2 required approvals)\n  ✅ Dismiss stale reviews when new commits are pushed\n  ✅ Require status checks to pass (CI/CD tests must pass)\n  ✅ Require branches to be up to date before merging\n  ✅ Restrict who can push directly to main\n  ✅ Do not allow force pushes\n  ✅ Do not allow deletions\n\nWith these rules, NO code — not even from the repository Owner — can enter 'main' without passing tests and code review. This is how professional teams maintain a stable main branch.",
      },
      {
        heading: "GitHub Actions — Your Automated Quality Gate",
        text: "GitHub Actions is a built-in CI/CD (Continuous Integration/Continuous Deployment) system. It automatically runs jobs in response to events like pull requests and pushes.\n\nCI (Continuous Integration) means every PR automatically runs your test suite, linter, and build — catching bugs before they reach main.\n\nCD (Continuous Deployment) means every merge to main automatically deploys to your server — so trusted changes go live without manual work.\n\nA workflow is a YAML file in .github/workflows/. When you push code, GitHub reads this file and runs the defined jobs on its servers.",
        code: `# .github/workflows/ci.yml
# This file runs your tests on every Pull Request

name: CI Pipeline

on:
  pull_request:          # Trigger on every PR
    branches: [main]
  push:
    branches: [main]     # Also trigger on pushes to main

jobs:
  test:
    runs-on: ubuntu-latest    # Run on a clean Ubuntu VM

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run tests
        run: npm test

      - name: Build production bundle
        run: npm run build`
      },
      {
        heading: "Semantic Versioning & Tags — The Release System",
        text: "When your code is ready to release publicly, you create a Git Tag — a permanent, named pointer to a specific commit. Tags are used by package registries, Docker images, and deployment systems to reference stable versions.\n\nProfessional projects use Semantic Versioning: MAJOR.MINOR.PATCH\n\n  PATCH (1.0.1): Bug fix, backwards-compatible\n  MINOR (1.1.0): New feature, backwards-compatible\n  MAJOR (2.0.0): Breaking change — existing integrations may break\n\nThe CHANGELOG.md file, generated from your Conventional Commit messages, documents what changed in each version.",
        code: `# List all tags in the project
git tag

# Create an annotated tag (use this for releases — it has metadata)
git tag -a v1.4.0 -m "Release v1.4.0: Payment gateway integration"

# Tag a specific past commit (not just the current HEAD)
git tag -a v1.3.1 abc1234 -m "Hotfix: correct invoice calculation"

# Push tags to GitHub (tags are NOT pushed by 'git push' alone)
git push origin v1.4.0

# Push ALL local tags at once
git push origin --tags

# Create a GitHub Release from a tag (using GitHub CLI)
gh release create v1.4.0 --title "Version 1.4.0" --notes "See CHANGELOG.md"`
      }
    ]
  }
};
