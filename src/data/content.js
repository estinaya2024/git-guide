export const contentData = {
  introduction: {
    title: "Introduction to Git & GitHub",
    description: "Before writing a single line of code professionally, you need to understand Git. It is not just a tool — it is the language that software teams use to collaborate, recover from mistakes, and ship confidently.",
    sections: [
      {
        heading: "What Is Git? (And Why Should You Care?)",
        text: "Imagine you are writing a university thesis. You start saving files like 'thesis_v1.docx', 'thesis_FINAL.docx', 'thesis_FINAL_real.docx'. Sound familiar? Git solves this chaos permanently.\n\nGit is a Distributed Version Control System (DVCS). In plain terms, it is a program that takes a perfect snapshot of every version of every file in your project — and remembers every single one. It lets you travel back in time, work on multiple versions simultaneously, and merge everyone's work together without losing a single change.\n\nThe word 'Distributed' is key: every single developer has a full, complete copy of the entire project history on their own machine. There is no single server that everyone depends on. If the server goes down, work continues. Your laptop IS the backup.",
        code: `$ git --version
git version 2.43.0

$ git --help
usage: git [--version] [--help] [-C <path>] ...
These are common Git commands used in various situations:

   clone     Clone a repository into a new directory
   init      Create an empty Git repository
   add       Add file contents to the index
   commit    Record changes to the repository
   push      Update remote refs along with associated objects
   pull      Fetch from and integrate with another repository`
      },
      {
        heading: "The 3 States of Git — The Most Important Mental Model",
        text: "Everything in Git revolves around three states. Miss this concept and Git will always feel confusing. Master it and everything else makes sense.\n\n1. WORKING DIRECTORY — This is your project folder. You freely edit, create, and delete files here. Git watches but does not record anything yet.\n\n2. STAGING AREA (Index) — Think of this as a 'draft snapshot'. When you run 'git add', you are telling Git: 'Put this specific change in the next snapshot I'm building.' You can cherry-pick exactly what goes in.\n\n3. REPOSITORY (.git folder) — When you run 'git commit', Git takes everything from the Staging Area and permanently stores it as a snapshot in the repository. This commit is immutable — it cannot be changed.\n\nAnalogy: Think of it like mailing a package. The Working Directory is your desk (you're still packing). The Staging Area is your sealed box (ready to ship but not gone yet). The Repository is the delivered package — permanently recorded in history.",
        code: `$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:          <-- STAGING AREA (green)
  (use "git restore --staged <file>..." to unstage)
        modified:   src/index.html

Changes not staged for commit:    <-- WORKING DIRECTORY (red)
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes)
        modified:   src/style.css

Untracked files:                  <-- NOT TRACKED YET (red)
  (use "git add <file>..." to include in what will be committed)
        src/new-feature.js`
      },
      {
        heading: "What Is GitHub? (Git vs. GitHub)",
        text: "Git is the tool. GitHub is the service.\n\nGit lives on your local machine and tracks changes. GitHub is a website (github.com) that hosts your Git repositories online, letting your entire team push and pull the same codebase, open Pull Requests for code review, and run automated tests.\n\nA useful analogy: Git is like Microsoft Word's 'Track Changes' feature. GitHub is like Google Drive — it puts your Word document online so your whole team can access it.\n\nOther services like GitLab and Bitbucket serve the same hosting purpose, but GitHub is by far the most widely used in the industry.",
      },
      {
        heading: "Writing Professional Commit Messages",
        text: "A commit message is a letter to your future self and your teammates. A bad message like 'fix stuff' is useless six months later. A professional commit message explains WHAT changed and WHY.\n\nThe industry standard format is called the Conventional Commits specification. It enables automated changelog generation and makes 'git log' readable at a glance. The format is:\n\n  <type>(<scope>): <short summary>\n\nCommon types:\n  feat — a new feature\n  fix — a bug fix\n  docs — documentation changes\n  refactor — code restructure (no behavior change)\n  test — adding or fixing tests\n  chore — maintenance (e.g., updating dependencies)",
        code: `# BAD commit messages (tell you nothing):
$ git commit -m "fix"
[main a3f1d20] fix
$ git commit -m "changes"
[main b9c2e11] changes

# GOOD commit messages (professional & searchable):
$ git commit -m "feat(auth): add Google OAuth2 login flow"
[main 4a1f9b3] feat(auth): add Google OAuth2 login flow
 3 files changed, 127 insertions(+), 8 deletions(-)

$ git commit -m "fix(api): handle null response from payment gateway"
[main d2c8e47] fix(api): handle null response from payment gateway
 1 file changed, 12 insertions(+), 3 deletions(-)`
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
$ git config --global user.name "Your Full Name"
$ git config --global user.email "you@example.com"
# (No output = success in Git config commands)

# Override identity for a SPECIFIC work project
$ cd ~/work/company-project
$ git config --local user.email "you@company.com"

# Verify — shows all config values and which FILE they come from
$ git config --list --show-origin
file:/home/user/.gitconfig     user.name=Your Full Name
file:/home/user/.gitconfig     user.email=you@example.com
file:.git/config               user.email=you@company.com  <-- local overrides global!
file:/home/user/.gitconfig     core.editor=code --wait
file:/home/user/.gitconfig     init.defaultbranch=main`
      },
      {
        heading: "Essential Global Settings",
        text: "Beyond your name and email, there are several settings that dramatically improve your daily Git experience. Professional developers set these up once and never think about them again.",
        code: `# Set VS Code as your default editor
$ git config --global core.editor "code --wait"
# (No output = applied successfully)

# Set default branch name to 'main'
$ git config --global init.defaultBranch main

# Enable colored terminal output
$ git config --global color.ui auto

# Use rebase instead of merge when pulling (cleaner history)
$ git config --global pull.rebase true

# Verify your full global config file
$ git config --global --list
user.name=Your Full Name
user.email=you@example.com
core.editor=code --wait
init.defaultbranch=main
color.ui=auto
pull.rebase=true`
      },
      {
        heading: "Setting Up SSH Authentication (The Professional Way)",
        text: "Typing your GitHub password every time you push is slow and insecure. SSH keys are the professional standard — authenticate once, push forever.\n\nAn SSH key pair works like a padlock and key. You give GitHub your PUBLIC key (the padlock). Your machine keeps the PRIVATE key (your key). When you connect, GitHub locks a message with the padlock, and only your private key can open it — proving your identity without any password.\n\nThis is used by every professional developer and CI/CD system in the world.",
        code: `# Step 1: Generate a new SSH key
$ ssh-keygen -t ed25519 -C "you@example.com"
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/user/.ssh/id_ed25519): [press Enter]
Enter passphrase (empty for no passphrase): [type a passphrase or press Enter]
Enter same passphrase again: [confirm]
Your identification has been saved in /home/user/.ssh/id_ed25519
Your public key has been saved in /home/user/.ssh/id_ed25519.pub

# Step 2: Start SSH agent and add key
$ eval "$(ssh-agent -s)"
Agent pid 12345
$ ssh-add ~/.ssh/id_ed25519
Identity added: /home/user/.ssh/id_ed25519 (you@example.com)

# Step 3: Copy your PUBLIC key (paste this into GitHub)
$ cat ~/.ssh/id_ed25519.pub
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAA... you@example.com

# Step 4: Test the connection to GitHub
$ ssh -T git@github.com
Hi YourUsername! You've successfully authenticated, but GitHub
does not provide shell access.`
      },
      {
        heading: "The .gitignore File — What Git Should Never See",
        text: "Not every file belongs in your repository. API keys, passwords, build artifacts, and editor settings should never be tracked. The .gitignore file tells Git exactly which files to completely ignore.\n\nGolden Rule: Never commit secrets. Once a password is in Git history, it is permanently accessible — even if you delete it in a later commit. Tools like GitHub Secret Scanner and TruffleHog specifically search Git history for leaks.",
        code: `# Create your .gitignore file
$ touch .gitignore

# Add common patterns to it:
$ cat .gitignore
node_modules/
dist/
.env
.env.local
*.log
.DS_Store
coverage/

# Verify Git is ignoring the right files
$ git status
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        src/

# .env and node_modules/ are NOT listed — Git is ignoring them!

# If you accidentally committed a secret file, untrack it:
$ git rm --cached .env
rm '.env'

$ git commit -m "chore: stop tracking .env file"
[main 7f3a901] chore: stop tracking .env file
 1 file changed, 0 insertions(+), 0 deletions(-)
 delete mode 100644 .env`
      }
    ]
  },

  basics: {
    title: "Core Git Workflow",
    description: "These are the commands you will run dozens of times every day. Understand them deeply — not just what they do, but why they work the way they do.",
    sections: [
      {
        heading: "git init — Turning a Folder into a Time Machine",
        text: "Running 'git init' creates a hidden .git folder inside your directory. This folder IS your entire Git repository — the commit history, the configuration, branch data, everything. If you delete .git, you delete all version history.\n\nThink of git init as planting the seed. Your project folder becomes a Git repository, and from this point on, Git is watching every change.",
        code: `# Create a new project and initialize Git
$ mkdir my-project
$ cd my-project
$ git init
Initialized empty Git repository in /home/user/my-project/.git/

# See the hidden .git folder Git created
$ ls -la
total 0
drwxr-xr-x  3 user user   18 Apr 4 00:00 .
drwxr-xr-x 12 user user 4096 Apr 4 00:00 ..
drwxr-xr-x  7 user user  119 Apr 4 00:00 .git   <-- the entire repo lives here

# Check the initial state (completely empty)
$ git status
On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)`
      },
      {
        heading: "git clone — Getting Someone Else's Repository",
        text: "Cloning downloads the ENTIRE repository — all commits, all branches, all history — to your local machine. It also automatically sets up the remote connection to the original repository (called 'origin').\n\nImportant: You do not need to run 'git init' after cloning. The clone already contains a fully initialized .git folder.",
        code: `# Clone a repository from GitHub
$ git clone git@github.com:facebook/react.git
Cloning into 'react'...
remote: Enumerating objects: 388901, done.
remote: Counting objects: 100% (1234/1234), done.
remote: Compressing objects: 100% (456/456), done.
Receiving objects: 100% (388901/388901), 148.22 MiB | 9.14 MiB/s, done.
Resolving deltas: 100% (274567/274567), done.

# Clone into a custom folder name
$ git clone https://github.com/user/repo.git my-app
Cloning into 'my-app'...

# Verify the remote was automatically set up
$ cd my-app && git remote -v
origin  git@github.com:user/repo.git (fetch)
origin  git@github.com:user/repo.git (push)`
      },
      {
        heading: "The Core Loop: add → commit → push",
        text: "This three-step cycle is the heartbeat of professional Git work. You will do this hundreds of times.\n\nStep 1 — git add: Move your changes from the Working Directory to the Staging Area. Be selective. Stage only what belongs in this logical 'chunk' of work.\n\nStep 2 — git commit: Take a permanent snapshot of everything currently staged. This creates an immutable point in history with a unique hash.\n\nStep 3 — git push: Send your local commits to the remote repository on GitHub, making them visible to your team.",
        code: `# === STEP 1: STAGE your changes ===
$ git add src/user-auth.js
# (No output = file successfully staged)

$ git add .
# (No output = all changes staged)

# Check what got staged
$ git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   src/user-auth.js
        modified:   src/App.jsx

# === STEP 2: COMMIT the snapshot ===
$ git commit -m "feat(auth): add JWT token refresh logic"
[main 4f8c1a2] feat(auth): add JWT token refresh logic
 2 files changed, 87 insertions(+), 3 deletions(-)
 create mode 100644 src/user-auth.js

# === STEP 3: PUSH to GitHub ===
$ git push origin main
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 1.23 KiB | 1.23 MiB/s, done.
Total 4 (delta 2), reused 0 (delta 0), pack-reused 0
To github.com:user/repo.git
   7d3e6f1..4f8c1a2  main -> main`
      },
      {
        heading: "git status & git diff — Your Daily Diagnostic Tools",
        text: "Before you add and commit anything, always check WHAT you're about to snapshot. Committing unintended changes is one of the most common beginner mistakes.\n\ngit status gives you a high-level map: what's staged, what's modified, what's untracked.\ngit diff shows you the EXACT line-by-line changes — the actual content differences.",
        code: `# High-level overview of what changed
$ git status
On branch feature/login
Changes not staged for commit:
        modified:   src/Login.jsx
        modified:   src/api/auth.js
Untracked files:
        src/components/PasswordStrength.jsx

# Exact line-by-line changes (unstaged)
$ git diff src/Login.jsx
diff --git a/src/Login.jsx b/src/Login.jsx
index 3f8a21b..9d1c4e7 100644
--- a/src/Login.jsx
+++ b/src/Login.jsx
@@ -12,7 +12,9 @@ export function Login() {
-  const handleSubmit = () => {
+  const handleSubmit = async () => {
+    setLoading(true);
     await loginUser(email, password);
+    setLoading(false);
   };
# Lines starting with - are REMOVED (red)
# Lines starting with + are ADDED (green)

# See what's staged and ready to commit
$ git diff --staged
# (Shows only the changes that will go into the next commit)`
      },
      {
        heading: "git log — Reading the History of the Project",
        text: "Every commit creates a node in a graph. 'git log' lets you browse this graph and understand the full story of the project — what changed, who changed it, and why.\n\nLearning to read git log efficiently is the difference between a junior developer who is lost and a senior developer who can find any bug, understand any decision, and trace the history of any file.",
        code: `# Full detailed log
$ git log
commit 4f8c1a2b3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8 (HEAD -> main, origin/main)
Author: Jane Smith <jane@company.com>
Date:   Fri Apr 4 00:10:00 2026 +0100

    feat(auth): add JWT token refresh logic

commit 7d3e6f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7
Author: Alex Johnson <alex@company.com>
Date:   Thu Apr 3 18:30:00 2026 +0100

    fix(api): handle null payment response

# Compact one-line view (most useful for daily work)
$ git log --oneline -8
4f8c1a2 (HEAD -> main) feat(auth): add JWT token refresh logic
7d3e6f1 fix(api): handle null payment response
3a9c5b8 feat(ui): add dark mode toggle
2f7d4a1 refactor: extract validation helpers
1e6c3b0 docs: update API documentation
0d5b2a9 feat(dashboard): add analytics charts
9c4a1b8 fix(forms): correct email validation regex
8b3f0a7 chore: update dependencies

# Visual branch graph
$ git log --oneline --graph --all
* 4f8c1a2 (HEAD -> main) feat(auth): add JWT token refresh
| * 9a8b7c6 (feature/payments) feat: add stripe integration
|/
* 7d3e6f1 fix(api): handle null payment response
* 3a9c5b8 feat(ui): add dark mode toggle`
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
        code: `# See all local branches (* = your current branch)
$ git branch
* main
  feature/payments
  fix/header-bug

# See ALL branches including remote ones
$ git branch -a
* main
  feature/payments
  fix/header-bug
  remotes/origin/HEAD -> origin/main
  remotes/origin/main
  remotes/origin/feature/payments

# Create and switch to a new branch (modern syntax)
$ git switch -c feature/user-dashboard
Switched to a new branch 'feature/user-dashboard'

# Verify you're on the new branch
$ git branch
  fix/header-bug
  main
* feature/user-dashboard      <-- asterisk shows current branch

# See which commit each branch points to
$ git branch -v
  fix/header-bug           3a9c5b8 fix: correct header spacing
  main                     4f8c1a2 feat(auth): add JWT token refresh
* feature/user-dashboard   4f8c1a2 feat(auth): add JWT token refresh`
      },
      {
        heading: "Merging — Bringing Work Back Together",
        text: "When your feature is done, you need to merge it back into 'main'. There are two types of merges:\n\n1. FAST-FORWARD MERGE: If 'main' hasn't moved since you branched off, Git simply moves the 'main' pointer forward. No merge commit is created. Clean, linear history.\n\n2. THREE-WAY MERGE: If 'main' has new commits since you branched off, Git creates a new 'merge commit' that ties both histories together.\n\nProfessional tip: 'Squash and merge' collapses all your feature branch commits into one clean commit on main, keeping history very readable.",
        code: `# === FAST-FORWARD MERGE (cleanest result) ===
$ git switch main
Switched to branch 'main'

$ git merge feature/simple-fix
Updating 7d3e6f1..9a8b7c6
Fast-forward                  <-- no merge commit created
 src/header.css | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)

# === THREE-WAY MERGE (when both branches have new commits) ===
$ git merge feature/big-feature
Merge made by the 'ort' strategy.
 src/payments.js | 45 +++++++++++++++++++++++++
 src/api/stripe.js | 87 +++++++++++++++++++++++++++++++++++++++
 2 files changed, 132 insertions(+)

# === MERGE CONFLICT (Git cannot auto-merge) ===
$ git merge feature/redesign
Auto-merging src/App.jsx
CONFLICT (content): Merge conflict in src/App.jsx
Automatic merge failed; fix conflicts and then commit the result.

# Open src/App.jsx and you will see:
# <<<<<<< HEAD
#   <nav className="dark-theme">
# =======
#   <nav className="light-theme">
# >>>>>>> feature/redesign
# (Fix it manually, remove the markers, then:)

$ git add src/App.jsx
$ git commit -m "merge: resolve theme conflict between main and redesign"
[main 8f1a2b3] merge: resolve theme conflict`
      },
      {
        heading: "Rebasing — Rewriting History for a Cleaner Story",
        text: "Rebase is often misunderstood. Here's the simple version:\n\nMerge says: 'These two histories existed separately, then joined.'\nRebase says: 'Pretend my feature was always built on top of the latest main.'\n\nRebase takes your commits, lifts them off their base, and replays them one by one on top of the target branch. The result is a perfectly linear history — as if everyone worked in sequence.\n\nGolden Rule: NEVER rebase commits that have already been pushed to a shared remote branch. This rewrites history and breaks other developers' copies.",
        code: `# The standard rebase workflow (clean up before PR)

# 1. Update main
$ git switch main && git pull
Already on 'main'
Updating 7d3e6f1..b3c4d5e
Fast-forward
 src/api/users.js | 15 ++++++++++++---

# 2. Go to your feature branch
$ git switch feature/my-feature
Switched to branch 'feature/my-feature'

# 3. Rebase onto the updated main
$ git rebase main
Successfully rebased and updated refs/heads/feature/my-feature.
# Your commits are now replayed on top of the latest main!

# If a conflict happens during rebase:
$ git rebase main
CONFLICT (content): Merge conflict in src/utils.js
error: could not apply a1b2c3d... feat: add helper function
hint: Resolve all conflicts manually, then run "git rebase --continue"
hint: Or to abort: git rebase --abort

# After fixing the conflict:
$ git add src/utils.js
$ git rebase --continue
[detached HEAD 9f8e7d6] feat: add helper function
Successfully rebased and updated refs/heads/feature/my-feature.

# Interactive rebase: clean up messy commits before PR
$ git rebase -i HEAD~4
# Opens your editor with:
# pick a1b2c3d WIP: trying something
# pick b2c3d4e fix typo
# pick c3d4e5f fix typo again
# pick d4e5f6a feat: add search filter
# Change the first 3 to 'squash' → they merge into one commit`
      },
      {
        heading: "The Professional Git Flow",
        text: "Industry teams use structured branching strategies. The most common is Git Flow:\n\n  main — Stable, always deployable. Only merged PRs go here.\n  develop — Integration branch where feature branches merge.\n  feature/* — Individual features (feature/user-login).\n  fix/* — Bug fixes (fix/null-pointer-crash).\n  release/* — Preparing a new version for deployment.\n  hotfix/* — Emergency production fixes.\n\nFor smaller teams, GitHub Flow is simpler: branch from main, open a PR, review, merge to main, deploy. That's it.",
        code: `# Starting a new feature — the professional way
$ git switch main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

$ git pull
Already up to date.

$ git switch -c feature/payment-integration
Switched to a new branch 'feature/payment-integration'

# ... do your work, make commits ...

$ git push -u origin feature/payment-integration
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
Writing objects: 100% (7/7), 2.44 KiB | 2.44 MiB/s, done.
Branch 'feature/payment-integration' set up to track
'origin/feature/payment-integration'.
# Now open a Pull Request on GitHub

# After PR is approved and merged, clean up:
$ git switch main && git pull
Updating 4f8c1a2..c7d8e9f
Fast-forward
 src/payments.js | 89 +++++++++++++++++

$ git branch -d feature/payment-integration
Deleted branch feature/payment-integration (was 9f8e7d6).

$ git remote prune origin
Pruning origin
 * [pruned] origin/feature/payment-integration`
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
        code: `# You have work in progress
$ git status
On branch feature/checkout
Changes not staged for commit:
        modified:   src/Cart.jsx
        modified:   src/api/orders.js

# EMERGENCY: stash everything and clean up
$ git stash push -m "WIP: half-built cart validation"
Saved working directory and index state On feature/checkout: WIP: half-built cart validation

# Your working directory is now perfectly clean
$ git status
On branch feature/checkout
nothing to commit, working tree clean

# Switch branches, fix the bug, come back...
$ git switch main
$ git switch feature/checkout

# List your stashes
$ git stash list
stash@{0}: On feature/checkout: WIP: half-built cart validation
stash@{1}: On main: WIP: dashboard experiment from last week

# Restore your work (apply + remove from stack)
$ git stash pop
On branch feature/checkout
Changes not staged for commit:
        modified:   src/Cart.jsx
        modified:   src/api/orders.js
Dropped stash@{0} (a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0)`
      },
      {
        heading: "git reset — Undoing with Precision",
        text: "git reset is one of Git's most powerful — and most dangerous — commands. It moves the branch pointer backward to a previous commit. There are three modes, and choosing the wrong one can cause data loss.\n\n--soft: Moves HEAD back, but keeps all your changes staged. Perfect for rewriting the last commit message or combining several commits.\n\n--mixed (default): Moves HEAD back and UNSTAGES the changes, but keeps the files. The changes are still there — just back in the Working Directory.\n\n--hard: Moves HEAD back and DESTROYS the changes completely. Files are permanently overwritten. Use with extreme caution.",
        code: `# SOFT reset: Uncommit but keep changes STAGED
$ git log --oneline -3
4f8c1a2 (HEAD) typo fix              <-- want to undo this
7d3e6f1 feat(auth): add login form
3a9c5b8 fix: correct header

$ git reset --soft HEAD~1
$ git log --oneline -3
7d3e6f1 (HEAD) feat(auth): add login form  <-- commit gone!
3a9c5b8 fix: correct header

$ git status
Changes to be committed:        <-- changes still STAGED (safe!)
        modified:   src/Login.jsx

# MIXED reset (default): Uncommit AND unstage, but keep files
$ git reset HEAD~1
Unstaged changes after reset:
M       src/Login.jsx
# Changes are in your Working Directory, ready to re-stage carefully

# HARD reset: DANGER — permanently destroys changes
$ git reset --hard HEAD~1
HEAD is now at 3a9c5b8 fix: correct header
# All changes from that commit are GONE — no undo (except reflog within 90 days!)

# === SAFETY NET: Recovering a hard reset ===
$ git reflog
4f8c1a2 HEAD@{0}: reset: moving to HEAD~1
7d3e6f1 HEAD@{1}: commit: feat(auth): add login form   <-- your lost work!
$ git checkout -b recovery-branch 7d3e6f1
Switched to a new branch 'recovery-branch'  # Work restored!`
      },
      {
        heading: "git revert — The Safe Undo for Shared Branches",
        text: "Never use 'git reset' on commits that are already pushed to a shared branch. It rewrites history and breaks your teammates' repositories.\n\ngit revert is the safe alternative. Instead of erasing a commit, it creates a NEW commit that undoes the changes from a previous one. The history remains intact and truthful — this is the professional, team-safe way to undo.",
        code: `# A bug was pushed to main in commit abc1234
$ git log --oneline -5
4f8c1a2 (HEAD -> main) feat: add new dashboard     <-- fine
abc1234 fix(api): update payment handler            <-- THIS BROKE PROD
7d3e6f1 feat(auth): add login form                 <-- fine

# Safely undo that specific commit (creates a NEW "undo" commit)
$ git revert abc1234
[main 9f8e7d6] Revert "fix(api): update payment handler"
 1 file changed, 5 insertions(+), 12 deletions(-)

# History is preserved — you can see what happened:
$ git log --oneline -5
9f8e7d6 (HEAD -> main) Revert "fix(api): update payment handler"
4f8c1a2 feat: add new dashboard
abc1234 fix(api): update payment handler    <-- still here (evidence)
7d3e6f1 feat(auth): add login form

# Push the fix — teammates just run 'git pull' to get the revert
$ git push origin main
To github.com:company/repo.git
   4f8c1a2..9f8e7d6  main -> main`
      },
      {
        heading: "git cherry-pick — Precision Surgery on Commits",
        text: "Cherry-pick lets you apply ONE specific commit from any branch onto your current branch. This is 'surgical extraction' — you're picking one commit out of history and replaying it somewhere else.\n\nReal-world scenario: A critical security fix was committed to 'develop' branch two weeks ago. You need that fix in the 'release-v2.0' branch immediately, but you can't merge all of develop into it. Cherry-pick grabs just that one commit.",
        code: `# The security fix is commit abc1234 on 'develop'
$ git log --oneline origin/develop -5
abc1234 fix(security): patch SQL injection in search
d4e5f6a feat: add user recommendations
e5f6a7b feat: add A/B testing framework
f6a7b8c feat: add ML-based suggestions
a7b8c9d feat: start recommendations engine

# Switch to the release branch and cherry-pick ONLY the security fix
$ git switch release/v2.0
Switched to branch 'release/v2.0'

$ git cherry-pick abc1234
[release/v2.0 1b2c3d4] fix(security): patch SQL injection in search
 Date: Fri Apr 4 00:00:00 2026 +0100
 1 file changed, 8 insertions(+), 2 deletions(-)
# Only the security fix landed — none of the other 4 commits

# If cherry-pick causes a conflict:
$ git cherry-pick abc1234
CONFLICT (content): Merge conflict in src/api/search.js
error: could not apply abc1234... fix(security): patch SQL injection

$ git add src/api/search.js
$ git cherry-pick --continue
# Opens editor for commit message, then applies the fix`
      },
      {
        heading: "git reflog — Git's Black Box Flight Recorder",
        text: "git reflog is Git's safety net of safety nets. It records every single movement of HEAD — every commit, rebase, reset, checkout, and merge — even if those commits are no longer reachable from any branch.\n\nEvery experienced developer has used reflog to rescue seemingly lost work. Reflog entries are kept for 90 days. Keep this command in your back pocket.",
        code: `# The full HEAD movement history (your safety log)
$ git reflog
9f8e7d6 HEAD@{0}: revert: Revert "fix(api): update payment handler"
4f8c1a2 HEAD@{1}: commit: feat: add new dashboard
abc1234 HEAD@{2}: reset: moving to HEAD~1     <-- you did a hard reset here
7d3e6f1 HEAD@{3}: commit: feat(auth): add login form  <-- WORK YOU THOUGHT WAS LOST
3a9c5b8 HEAD@{4}: checkout: moving from feature/login to main
b2c3d4e HEAD@{5}: commit: fix: header spacing

# Scenario: You ran 'git reset --hard HEAD~3' and lost valuable work.
# The reflog shows HEAD@{3} is "feat(auth): add login form" — your lost work!

# Recover it by creating a new branch at that commit:
$ git checkout -b recovery/lost-login-feature 7d3e6f1
Switched to a new branch 'recovery/lost-login-feature'

# All your lost work is now safe in this branch!
$ git log --oneline -3
7d3e6f1 (HEAD -> recovery/lost-login-feature) feat(auth): add login form
3a9c5b8 fix: correct header spacing
b2c3d4e style: update button colors`
      }
    ]
  },

  teams: {
    title: "Team Collaboration & Workflows",
    description: "Writing great code alone is a skill. Writing great code as part of a team is a different skill entirely. This section teaches you the real workflows used by professional engineering teams at companies around the world.",
    sections: [
      {
        heading: "The Forking Workflow — How Open Source Works",
        text: "The Forking Workflow is the backbone of all open-source collaboration and is used by millions of projects on GitHub.\n\nHere's how it works:\n1. You 'Fork' a repository — GitHub creates a personal copy of it under your account.\n2. You clone YOUR fork to your local machine.\n3. You make changes in your fork.\n4. You open a 'Pull Request' asking the original project to review and merge your changes.\n\nYou NEVER have push access to the original repo. The maintainers review your PR and decide whether to accept it.",
        code: `# After forking on GitHub, clone YOUR fork:
$ git clone git@github.com:YOUR_USERNAME/original-project.git
Cloning into 'original-project'...
remote: Enumerating objects: 4521, done.
Receiving objects: 100% (4521/4521), 3.41 MiB | 5.20 MiB/s, done.

$ cd original-project

# Connect to the ORIGINAL project as 'upstream'
$ git remote add upstream https://github.com/ORIGINAL_OWNER/original-project.git

# Verify both remotes exist
$ git remote -v
origin    git@github.com:YOUR_USERNAME/original-project.git (fetch)
origin    git@github.com:YOUR_USERNAME/original-project.git (push)
upstream  https://github.com/ORIGINAL_OWNER/original-project.git (fetch)
upstream  https://github.com/ORIGINAL_OWNER/original-project.git (push)

# Keep your fork in sync with the original (do this regularly)
$ git fetch upstream
From https://github.com/ORIGINAL_OWNER/original-project
 * [new branch]      main       -> upstream/main

$ git switch main
$ git merge upstream/main
Updating a7b8c9d..f6a7b8c
Fast-forward
 README.md | 12 ++++++++++++

$ git push origin main    # Push the sync to your fork on GitHub
To github.com:YOUR_USERNAME/original-project.git
   a7b8c9d..f6a7b8c  main -> main`
      },
      {
        heading: "Pull Requests — The Professional Code Review Process",
        text: "A Pull Request (PR) is not just a 'merge request'. It is a structured conversation about CODE. It's where your team reviews logic, catches bugs, enforces standards, and shares knowledge.\n\nA great PR is focused on ONE thing, has a clear title, references an issue, and passes all tests before asking for review.\n\nA PR with 500 file changes and no description is disrespectful to reviewers. Respect their time.",
        code: `# 1. Start from the latest main
$ git switch main && git pull
Already on 'main'
Updating a7b8c9d..f6a7b8c  Fast-forward

# 2. Create a focused feature branch
$ git switch -c feat/add-dark-mode-toggle
Switched to a new branch 'feat/add-dark-mode-toggle'

# 3. Do your work + commit with professional messages
$ git add src/ThemeToggle.jsx
$ git commit -m "feat(ui): add dark mode toggle component"
[feat/add-dark-mode-toggle 1a2b3c4] feat(ui): add dark mode toggle component
 1 file changed, 45 insertions(+)

# 4. Rebase to make history linear before the PR
$ git fetch origin && git rebase origin/main
Successfully rebased and updated refs/heads/feat/add-dark-mode-toggle.

# 5. Push to GitHub
$ git push -u origin feat/add-dark-mode-toggle
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (3/3), 1.02 KiB | 1.02 MiB/s, done.
Branch 'feat/add-dark-mode-toggle' set up to track
'origin/feat/add-dark-mode-toggle'.

# 6. Create the PR using GitHub CLI
$ gh pr create --title "feat(ui): add dark mode toggle" \
  --body "Closes #89 - adds dark mode with system preference detection"
https://github.com/company/repo/pull/247   <-- your PR is live!`
      },
      {
        heading: "Handling Feedback — The Review Cycle",
        text: "Your reviewer left comments on your PR. Now what? This is where many developers get defensive or confused about the workflow.\n\nProfessional behavior:\n  — Never force-push to a PR branch while a review is in progress\n  — Respond to every comment, even if just 'Done!'\n  — Add new commits (don't amend existing ones) for changes requested in review\n  — Mark threads as 'Resolved' after addressing them\n  — After approval, squash your commits for a clean history before merging",
        code: `# Reviewer left a comment: "Please use CSS variables instead of hardcoded colors"

# Make the requested change
$ git switch feat/add-dark-mode-toggle

# ... edit the file, fix the review feedback ...

$ git add src/ThemeToggle.jsx
$ git commit -m "fix(ui): use CSS variables for theme colors (review feedback)"
[feat/add-dark-mode-toggle 5d6e7f8] fix(ui): use CSS variables for theme colors (review feedback)
 1 file changed, 8 insertions(+), 8 deletions(-)

# Push the update — GitHub adds it to the existing PR automatically
$ git push origin feat/add-dark-mode-toggle
Enumerating objects: 5, done.
To github.com:company/repo.git
   1a2b3c4..5d6e7f8  feat/add-dark-mode-toggle -> feat/add-dark-mode-toggle

# Check your PR status via CLI
$ gh pr status
Current branch
  #247  feat(ui): add dark mode toggle [feat/add-dark-mode-toggle]
   - Checks: 3 passing
   - Review: 1 approving
   ✓ Ready to merge`
      },
      {
        heading: "Keeping Your Local Repo in Sync",
        text: "When working in a team, 'main' is constantly moving. Other people are merging PRs while you work. You need strategies to keep your local work aligned with the team's progress — otherwise you'll hit painful merge conflicts.\n\ngit fetch: Downloads remote changes but does NOT touch your local branches. Like checking the mailbox — you see what arrived but don't open anything yet.\n\ngit pull: Downloads AND integrates remote changes immediately.",
        code: `# The safest, most professional pull workflow:

# 1. Fetch all remote changes (safe — nothing changes locally yet)
$ git fetch --all
Fetching origin
From github.com:company/repo
   7d3e6f1..b4c5d6e  main       -> origin/main
 * [new branch]      feat/new   -> origin/feat/new

# 2. Check what your teammates committed while you were working
$ git log origin/main --oneline -5
b4c5d6e feat(reports): add CSV export
a3b4c5d fix(auth): extend JWT expiry to 24h
9a8b7c6 refactor: extract email utilities
8f7e6d5 feat(search): add elasticsearch integration
7d3e6f1 feat(dashboard): add KPI widgets

# 3. Update local main cleanly (fast-forward only — safe)
$ git switch main
$ git merge --ff-only origin/main
Updating 7d3e6f1..b4c5d6e
Fast-forward
 src/reports.js | 67 ++++++++++++++++++++++

# 4. Update your feature branch on top of the new main
$ git switch feat/my-feature
$ git rebase origin/main
Successfully rebased and updated refs/heads/feat/my-feature.
# Your commits are now on top of the latest main — ready for PR`
      }
    ]
  },

  orgs: {
    title: "Working with GitHub Organizations",
    description: "A GitHub Organization is a shared account that lets a company, team, or open-source project manage multiple repositories, members, and permissions under one unified home. This guide walks you through creating and running a professional organization from day one — exactly like the ones used by real companies.",
    sections: [
      {
        heading: "Step 1 — Create Your Organization",
        text: "An Organization is a shared workspace on GitHub that is separate from any personal account. Think of it like a company office building — individual personal accounts are employees who belong to the building, but the building itself owns the assets.\n\nTo create one:\n  1. Go to github.com → click your profile icon → 'Your Organizations'\n  2. Click 'New organization'\n  3. Choose a plan: Free (public repos + 3 seats for private), Team ($4/seat/month), or Enterprise\n  4. Pick an organization name — this becomes your URL (github.com/your-org-name). Choose wisely, this is your brand identifier.\n  5. Enter your billing email\n  6. Invite your first colleagues (or skip and do it later)\n\nAfter creation, you see the org overview page with tasks like 'Invite your people' and 'Collaborative coding'. The page shows People count, Repositories, Teams, and navigation tabs including Projects, Packages, and Insights.",
        code: `# After creating the org, clone any org repo via SSH:
$ git clone git@github.com:YOUR-ORG-NAME/repo-name.git
Cloning into 'repo-name'...
remote: Enumerating objects: 1234, done.
Receiving objects: 100% (1234/1234), 2.40 MiB | 4.12 MiB/s, done.

# Create a new repo directly inside the org (GitHub CLI):
$ gh repo create YOUR-ORG-NAME/new-project --private --clone
✓ Created repository YOUR-ORG-NAME/new-project on GitHub
Cloning into 'new-project'...

# List all repos in your org:
$ gh repo list YOUR-ORG-NAME --limit 10
NAME                    VISIBILITY  UPDATED
YOUR-ORG-NAME/api       private     2026-04-04
YOUR-ORG-NAME/web-app   private     2026-04-03
YOUR-ORG-NAME/docs      public      2026-04-02
YOUR-ORG-NAME/mobile    private     2026-04-01`
      },
      {
        heading: "Step 2 — Invite Your People",
        text: "This is the 'Invite your people' section you see on the org homepage after creation. Every person who needs access to org repositories must be invited to the organization first.\n\nHow invitations work:\n  — Go to your Org → 'People' tab → 'Invite member'\n  — Enter the person's GitHub username OR email address\n  — Choose their role: Member or Owner\n  — They receive an email invitation and must accept it\n  — Until they accept, they show as 'Pending invitation'\n\nMember Roles explained:\n  OWNER: Full administrative control. Can delete repos, manage billing, add/remove members. Should be maximum 2–3 trusted founders or leads.\n  MEMBER: Regular contributor. Their actual access to repositories is controlled by Teams.\n\nOutside Collaborators: People not invited as org members, granted direct access to specific repos only.",
        code: `# Invite a new member (GitHub CLI):
$ gh api orgs/YOUR-ORG-NAME/invitations \
  --method POST \
  --field email="newdev@example.com" \
  --field role="direct_member"
{
  "id": 1,
  "login": null,
  "email": "newdev@example.com",
  "role": "direct_member",
  "created_at": "2026-04-04T00:00:00Z",
  "failed_at": null,
  "inviter": { "login": "org-owner" }
}

# List all current members:
$ gh api orgs/YOUR-ORG-NAME/members --jq '.[].login'
jane-smith
alex-johnson
carlos-reyes
maria-garcia

# List pending (not yet accepted) invitations:
$ gh api orgs/YOUR-ORG-NAME/invitations --jq '.[].email'
newdev@example.com
contractor@agency.com

# Remove a member who left (revokes ALL repo access instantly):
$ gh api orgs/YOUR-ORG-NAME/members/former-employee --method DELETE
# (empty response = successfully removed)`
      },
      {
        heading: "Step 3 — Create Teams & Set Base Permissions",
        text: "The second task on the org homepage ('Customize members' permissions') is critical. NEVER grant permissions to individuals directly — always use Teams.\n\nTeams are named groups inside the org (e.g., 'backend-team', 'frontend-team', 'devops', 'interns'). You give a team access to repositories at a specific permission level. When a developer joins the backend team, they automatically get access to every backend repository.\n\nPermission levels (from least to most powerful):\n  READ: View and clone. For stakeholders, PMs, designers.\n  TRIAGE: Read + manage issues and PRs. For QA teams.\n  WRITE: Push branches, create PRs. Standard for developers.\n  MAINTAIN: Write + manage repo settings. For tech leads.\n  ADMIN: Full control including delete. Use sparingly.",
        code: `# Create a new team in the org:
$ gh api orgs/YOUR-ORG-NAME/teams \
  --method POST \
  --field name="backend-team" \
  --field description="Backend engineers" \
  --field privacy="closed"
{
  "id": 7890,
  "name": "backend-team",
  "slug": "backend-team",
  "description": "Backend engineers",
  "members_count": 0,
  "repos_count": 0
}

# Add a developer to the team:
$ gh api orgs/YOUR-ORG-NAME/teams/backend-team/memberships/jane-smith \
  --method PUT --field role="member"
{
  "state": "active",
  "role": "member"
}

# Give the team WRITE access to a repo:
$ gh api orgs/YOUR-ORG-NAME/teams/backend-team/repos/YOUR-ORG-NAME/api \
  --method PUT --field permission="push"
# (empty response = access granted successfully)

# List all teams and their member counts:
$ gh api orgs/YOUR-ORG-NAME/teams --jq '.[] | "\(.name): \(.members_count) members"'
backend-team: 4 members
frontend-team: 3 members
devops: 2 members
interns: 5 members`
      },
      {
        heading: "Step 4 — Create & Manage Repositories",
        text: "In an organization, repositories are owned by the ORG, not by individual accounts. This means they stay with the company even when developers come and go — crucial for business continuity.\n\nRepository visibility:\n  PUBLIC: Anyone can see the code. For open source.\n  PRIVATE: Only org members with explicit access.\n  INTERNAL (Enterprise): Visible to all org members, not the public.\n\nOrg repo best practices:\n  — Use a consistent naming convention: api-service, web-frontend, mobile-app, docs\n  — Always add a README.md and LICENSE on creation\n  — Set up branch protection on 'main' from day one\n  — Add a CODEOWNERS file to automatically assign reviewers",
        code: `# Create a new private org repo:
$ gh repo create YOUR-ORG-NAME/api-service \
  --private \
  --description "Node.js REST API" \
  --add-readme \
  --license MIT
✓ Created repository YOUR-ORG-NAME/api-service on GitHub
  https://github.com/YOUR-ORG-NAME/api-service

# Clone it:
$ gh repo clone YOUR-ORG-NAME/api-service
Cloning into 'api-service'...

# Check who has access:
$ gh api repos/YOUR-ORG-NAME/api-service/collaborators \
  --jq '.[] | "\(.login): \(.permissions)"'
jane-smith: {"admin":false,"maintain":false,"push":true,"triage":true,"pull":true}
alex-johnson: {"admin":true,"maintain":true,"push":true,"triage":true,"pull":true}

# Create a CODEOWNERS file for automatic reviewer assignment:
$ cat .github/CODEOWNERS
# Global: all changes reviewed by backend team
*                           @YOUR-ORG-NAME/backend-team
# CSS only: frontend team reviews
*.css                       @YOUR-ORG-NAME/frontend-team
# Docs only: tech writers review
docs/                       @YOUR-ORG-NAME/tech-writers
# Payments: only senior devs review
src/payments/               @jane-smith @alex-johnson`
      },
      {
        heading: "Step 5 — Branch Protection: Lock Down Main",
        text: "Branch Protection Rules are the most important safety policy in any organization. They ensure that no code — not even from an Owner — can land in 'main' without proper review and passing tests.\n\nHow to set up (GitHub UI):\n  1. Go to the repository → Settings → Branches\n  2. Click 'Add branch protection rule'\n  3. Branch name pattern: main\n  4. Enable the required settings\n\nRequired settings for every professional org:\n  ✅ Require a pull request before merging\n  ✅ Required approvals: 1 (small teams) or 2 (large teams)\n  ✅ Dismiss stale reviews when new commits are pushed\n  ✅ Require status checks to pass (CI tests must be green)\n  ✅ Require branches to be up to date before merging\n  ✅ Do not allow bypassing — even admins must follow rules\n  ✅ Do not allow force pushes\n  ✅ Do not allow deletions",
        code: `# Set branch protection via GitHub CLI:
$ gh api repos/YOUR-ORG-NAME/api/branches/main/protection \
  --method PUT \
  --field enforce_admins=true \
  --field required_pull_request_reviews='{"required_approving_review_count":1,"dismiss_stale_reviews":true}'
{
  "url": ".../branches/main/protection",
  "required_pull_request_reviews": {
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": false,
    "required_approving_review_count": 1
  },
  "enforce_admins": { "url": "...", "enabled": true }
}

# What a developer sees when trying to push directly to main:
$ git push origin main
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes must be made through a pull request.
To github.com:YOUR-ORG-NAME/api.git
 ! [remote rejected] main -> main (protected branch hook declined)
error: failed to push some refs to 'git@github.com:YOUR-ORG-NAME/api.git'
# Protection is working — no direct pushes allowed!

# The correct workflow in a protected org:
$ git switch -c feat/new-endpoint
$ git push -u origin feat/new-endpoint
$ gh pr create --title "feat: add user search endpoint" --body "Closes #42"
# Wait for CI ✅ and review approval ✅ — THEN merge via GitHub UI`
      },
      {
        heading: "Step 6 — GitHub Actions CI/CD for the Whole Team",
        text: "In an organization, GitHub Actions workflows run automatically on every PR and merge. You can define reusable workflows in one repository and call them from others — so your entire org shares the same tested CI/CD pipeline.\n\nOrg Secrets: API keys and deployment tokens stored at the ORGANIZATION level, available to all (or selected) repos. No developer ever sees the value — GitHub injects it automatically.\n\nEnvironments: Define deployment environments (staging, production) with required reviewers. A deployment to 'production' can require manual approval from a senior engineer.",
        code: `# .github/workflows/ci.yml  (add this to every org repo)
name: CI Pipeline
on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - run: npm test
      - run: npm run build

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    environment: production
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: ./scripts/deploy.sh
        env:
          DEPLOY_TOKEN: \${{ secrets.PROD_DEPLOY_TOKEN }}

# What you see in GitHub Actions when a PR is opened:
# ✅ CI Pipeline / test (ubuntu-latest)    2m 14s
# ⏸ CI Pipeline / deploy                  Waiting for approval...

# View recent workflow runs:
$ gh run list --repo YOUR-ORG-NAME/api --limit 5
STATUS  TITLE                                  WORKFLOW     BRANCH  AGE
✓       feat(auth): add JWT refresh            CI Pipeline  main    2m
✓       fix(api): handle null payment          CI Pipeline  main    1h
✗       feat(search): add elasticsearch        CI Pipeline  main    3h  <- failed!
✓       refactor: extract email utilities      CI Pipeline  main    5h`
      },
      {
        heading: "Step 7 — Keeping the Org Healthy Long-Term",
        text: "A GitHub Organization needs ongoing maintenance, just like a codebase. Here are the ongoing practices that keep a healthy engineering organization:\n\nMonthly tasks:\n  — Audit 'People' tab: Offboard leavers immediately — revoke access the moment someone leaves.\n  — Check 'Pending invitations': Unsent invites expire after 7 days. Resend or cancel stale ones.\n  — Review 'Outside Collaborators': Remove expired contractor access.\n\nQuarterly tasks:\n  — Audit team memberships for current roles\n  — Review who has admin access to production repos\n  — Rotate org-level secrets (API keys, deployment tokens)\n  — Archive inactive repos (read-only, not deleted — history is valuable)\n\nInsights tab: Shows org-wide contribution graphs, active repos, and code frequency to allocate review capacity.",
        code: `# Daily developer workflow inside the org:

# 1. Clone an org repo
$ git clone git@github.com:YOUR-ORG-NAME/api-service.git
Cloning into 'api-service'...

# 2. Use your work email for this project
$ git config --local user.email "you@company.com"

# 3. Always branch from the latest main
$ git switch main && git pull
Already on 'main' | Fast-forward | 5 files changed

$ git switch -c feat/YOUR-FEATURE
Switched to a new branch 'feat/YOUR-FEATURE'

# 4. Commit with team conventions
$ git commit -m "feat(users): add search by email endpoint"
[feat/YOUR-FEATURE 3f1a2b4] feat(users): add search by email endpoint
 2 files changed, 45 insertions(+)

# 5. Push and open PR
$ git push -u origin feat/YOUR-FEATURE && gh pr create
Branch set up to track 'origin/feat/YOUR-FEATURE'.
https://github.com/YOUR-ORG-NAME/api-service/pull/312

# 6. After merge, clean up
$ git switch main && git pull && git branch -d feat/YOUR-FEATURE
Updating abc...def Fast-forward | Deleted branch feat/YOUR-FEATURE

# Check your access level on any org repo:
$ gh api repos/YOUR-ORG-NAME/api-service --jq '.permissions'
{
  "admin": false,
  "maintain": false,
  "push": true,
  "triage": true,
  "pull": true
}`
      }
    ]
  }
};
