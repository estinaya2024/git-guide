export const porcelains = [
  {
    name: 'git init',
    role: 'Setup',
    explanation: 'Initializes a new Git repository in your current directory.',
    scenario: 'You just started a new project on your computer and want to start tracking its version history locally.'
  },
  {
    name: 'git clone',
    role: 'Setup',
    explanation: 'Copies an existing repository from a remote source (like GitHub) to your local machine.',
    scenario: 'You want to contribute to an open-source project or start working on a team project that is already hosted on GitHub.'
  },
  {
    name: 'git config',
    role: 'Configuration',
    explanation: 'Sets configuration options for your Git installation, like user name and email.',
    scenario: 'You just installed Git on a new machine and need to identify yourself so your commits are attributed correctly.'
  },
  {
    name: 'git add',
    role: 'Staging',
    explanation: 'Adds file contents to the staging area (index) for the next commit.',
    scenario: 'You finished editing "index.html" and want to include these changes in your next snapshot.'
  },
  {
    name: 'git status',
    role: 'Inspection',
    explanation: 'Displays the state of the working directory and the staging area.',
    scenario: 'You forgot which files you modified and want to see what is staged vs unstaged before committing.'
  },
  {
    name: 'git commit',
    role: 'Snapshot',
    explanation: 'Records the changes currently in the staging area into a new commit in the repository history.',
    scenario: 'You have completed a logical unit of work (e.g., "Added login form") and want to save it permanently.'
  },
  {
    name: 'git log',
    role: 'History',
    explanation: 'Shows the commit history for the current branch.',
    scenario: 'You need to see who made changes to the "styles.css" file last week and what the commit message was.'
  },
  {
    name: 'git diff',
    role: 'Comparison',
    explanation: 'Shows differences between the working tree and the index, or between two commits.',
    scenario: 'You want to see exactly which lines of code you changed in "App.jsx" since your last commit.'
  },
  {
    name: 'git branch',
    role: 'Branching',
    explanation: 'Lists, creates, or deletes branches.',
    scenario: 'You want to see all current feature branches or create a new branch named "hotfix/header".'
  },
  {
    name: 'git checkout',
    role: 'Navigation',
    explanation: 'Switches branches or restores working tree files.',
    scenario: 'You need to switch from the "main" branch to the "feature-login" branch to continue working on it.'
  },
  {
    name: 'git switch',
    role: 'Navigation',
    explanation: 'A modern, safer alternative to checkout specifically for switching branches.',
    scenario: 'You want to create and switch to a new branch in a single command using "git switch -c".'
  },
  {
    name: 'git merge',
    role: 'Combination',
    explanation: 'Joins two or more development histories together.',
    scenario: 'Your feature is complete and tested; you now want to bring those changes into the "main" branch.'
  },
  {
    name: 'git pull',
    role: 'Restoration',
    explanation: 'Fetches from and integrates with another repository or a local branch.',
    scenario: 'Your teammate pushed new changes to the server; you need to download and merge them into your local copy.'
  },
  {
    name: 'git push',
    role: 'Contribution',
    explanation: 'Updates remote refs using local refs (uploads your commits).',
    scenario: 'You finished your task and want to share your commits with the team on GitHub.'
  },
  {
    name: 'git fetch',
    role: 'Sync',
    explanation: 'Downloads objects and refs from another repository without merging them.',
    scenario: 'You want to see what your teammates have pushed to the remote without actually changing your local files yet.'
  },
  {
    name: 'git remote',
    role: 'Remote Management',
    explanation: 'Manages the set of tracked repositories (remotes).',
    scenario: 'You need to link your local repository to a new GitHub repository URL named "origin".'
  }
];
