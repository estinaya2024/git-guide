export const porcelains = [
  {
    name: 'git init',
    role: 'Setup',
    explanation: 'Initializes a new Git repository in your current directory.',
    syntax: 'git init [directory]',
    scenario: 'You just started a new project on your computer and want to start tracking its version history locally before pushing to GitHub.'
  },
  {
    name: 'git clone',
    role: 'Setup',
    explanation: 'Copies an existing repository from a remote source (like GitHub) to your local machine.',
    syntax: 'git clone <url> [directory]',
    scenario: 'You want to contribute to an open-source project or start working on a team project that is already hosted on GitHub.'
  },
  {
    name: 'git config',
    role: 'Configuration',
    explanation: 'Sets configuration options for your Git installation, like user name and email.',
    syntax: 'git config --global user.name "John Doe"',
    scenario: 'You just installed Git on a new machine and need to identify yourself so your commits are attributed correctly.'
  },
  {
    name: 'git add',
    role: 'Staging',
    explanation: 'Adds file contents to the staging area (index) for the next commit.',
    syntax: 'git add <file> | git add .',
    scenario: 'You finished editing "index.html" and want to include these changes in your next snapshot. Professional tip: Use "git add ." to stage all changes at once.'
  },
  {
    name: 'git status',
    role: 'Inspection',
    explanation: 'Displays the state of the working directory and the staging area.',
    syntax: 'git status [--short]',
    scenario: 'You forgot which files you modified and want to see what is staged vs unstaged before committing.'
  },
  {
    name: 'git commit',
    role: 'Snapshot',
    explanation: 'Records the changes currently in the staging area into a new commit in the repository history.',
    syntax: 'git commit -m "<message>"',
    scenario: 'You have completed a logical unit of work (e.g., "Added login form") and want to save it permanently using Conventional Commit standards.'
  },
  {
    name: 'git log',
    role: 'History',
    explanation: 'Shows the commit history for the current branch.',
    syntax: 'git log --oneline --graph --decorate',
    scenario: 'You need to see who made changes to the "styles.css" file last week and what the commit message was.'
  },
  {
    name: 'git diff',
    role: 'Comparison',
    explanation: 'Shows differences between the working tree and the index, or between two commits.',
    syntax: 'git diff [commit1] [commit2]',
    scenario: 'You want to see exactly which lines of code you changed in "App.jsx" since your last commit.'
  },
  {
    name: 'git branch',
    role: 'Branching',
    explanation: 'Lists, creates, or deletes branches.',
    syntax: 'git branch [-a] [-d] <name>',
    scenario: 'You want to see all current feature branches or create a new branch named "hotfix/header".'
  },
  {
    name: 'git checkout',
    role: 'Navigation',
    explanation: 'Switches branches or restores working tree files.',
    syntax: 'git checkout <branch> | git checkout -- <file>',
    scenario: 'You need to switch from the "main" branch to the "feature-login" branch to continue working on it.'
  },
  {
    name: 'git switch',
    role: 'Navigation',
    explanation: 'A modern, safer alternative to checkout specifically for switching branches.',
    syntax: 'git switch <branch> | git switch -c <new-branch>',
    scenario: 'You want to create and switch to a new branch in a single command using "git switch -c".'
  },
  {
    name: 'git merge',
    role: 'Combination',
    explanation: 'Joins two or more development histories together.',
    syntax: 'git merge <branch> [--no-ff]',
    scenario: 'Your feature is complete and tested; you now want to bring those changes into the "main" branch.'
  },
  {
    name: 'git pull',
    role: 'Sync',
    explanation: 'Fetches from and integrates with another repository or a local branch.',
    syntax: 'git pull [remote] [branch]',
    scenario: 'Your teammate pushed new changes to the server; you need to download and merge them into your local copy to stay up to date.'
  },
  {
    name: 'git push',
    role: 'Contribution',
    explanation: 'Updates remote refs using local refs (uploads your commits).',
    syntax: 'git push [remote] [branch]',
    scenario: 'You are ready to share your repo on GitHub. Remember the sequence: 1. git add. 2. git commit. 3. git push. This uploads your local history to the cloud.'
  },
  {
    name: 'git fetch',
    role: 'Sync',
    explanation: 'Downloads objects and refs from another repository without merging them.',
    syntax: 'git fetch [remote]',
    scenario: 'You want to see what your teammates have pushed to the remote without actually changing your local files yet.'
  },
  {
    name: 'git remote',
    role: 'Remote Management',
    explanation: 'Manages the set of tracked repositories (remotes).',
    syntax: 'git remote add <name> <url> | git remote -v',
    scenario: 'You need to link your local repository to a new GitHub repository URL named "origin".'
  }
];
