export const contentData = {
  introduction: {
    title: "Introduction",
    description: "Welcome to the Git and GitHub Mastery Guide. This resource is designed to take you from a beginner to an advanced user.",
    sections: [
      {
        heading: "What is Git?",
        text: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It allows multiple developers to work together on the same codebase without stepping on each other's toes."
      },
      {
        heading: "What is GitHub?",
        text: "GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. While Git is the tool that tracks changes, GitHub is the service that hosts the Git repositories."
      },
      {
        heading: "Professional Commit Messages",
        text: "Writing good commit messages is a critical professional skill. A well-structured commit message history allows teammates to understand the 'why' behind changes and enables automated changelog generation.",
        code: `<type>(<scope>): <subject>\n\n<body>\n\n<footer>\n\n# Example:\nfeat(auth): add google oauth2 provider\n\nImplement the new Google Social Login flow to increase\nconversion rates on the signup page.\n\nCloses #123`
      }
    ]
  },
  setup: {
    title: "Initial Setup",
    description: "Before you start using Git, you need to configure your environment.",
    sections: [
      {
        heading: "Configuring Your Identity",
        text: "The first thing you should do when you install Git is to set your user name and email address. This is important because every Git commit uses this information, and it's immutably baked into the commits you start creating.",
        code: `git config --global user.name "John Doe"\ngit config --global user.email "johndoe@example.com"`
      },
      {
        heading: "Checking Your Settings",
        text: "If you want to check your configuration settings, you can use the `git config --list` command to list all the settings Git can find at that point.",
        code: `git config --list`
      }
    ]
  },
  basics: {
    title: "Basic Commands",
    description: "These are the everyday commands you will use to track your code.",
    sections: [
      {
        heading: "Initialize a Repository",
        text: "To turn an existing directory into a Git repository, you use `git init`.",
        code: `git init`
      },
      {
        heading: "Clone a Repository",
        text: "To get a copy of an existing Git repository, use `git clone`.",
        code: `git clone https://github.com/user/repository.git`
      },
      {
        heading: "Check Status",
        text: "The `git status` command displays the state of the working directory and the staging area.",
        code: `git status`
      },
      {
        heading: "Add and Commit",
        text: "Stage your changes and create a snapshot of your project.",
        code: `git add <file>\ngit commit -m "Commit message"`
      }
    ]
  },
  branching: {
    title: "Branching Mastery",
    description: "Branching allows you to work on features or fixes in isolation from the main project.",
    sections: [
      {
        heading: "Create and Switch",
        text: "Standard branching workflow.",
        code: `git switch -c feature-x\n# OR (Older versions)\ngit checkout -b feature-x`
      },
      {
        heading: "Merging",
        text: "Bring changes from one branch into another.",
        code: `git merge feature-x`
      },
      {
        heading: "Deleting Branches",
        text: "Cleaning up after a merge.",
        code: `git branch -d feature-x`
      }
    ]
  },
  advanced: {
    title: "Advanced Commands",
    description: "Mastering the powerful tools that make Git truly professional.",
    sections: [
      {
        heading: "Stashing Work",
        text: "When you're not ready to commit but need to switch branches, use `stash`.",
        code: `git stash\ngit stash pop # Apply and remove from stash\ngit stash list`
      },
      {
        heading: "Resetting History",
        text: "Undo changes. SOFT keeps files, HARD clears everything.",
        code: `git reset --soft HEAD~1\ngit reset --hard HEAD~1`
      },
      {
        heading: "Cherry-Picking",
        text: "Pick a specific commit from another branch and apply it to yours.",
        code: `git cherry-pick <commit-hash>`
      },
      {
        heading: "Git Reflog",
        text: "The 'undo' for your undos. Reflog tracks every change to HEAD.",
        code: `git reflog`
      }
    ]
  },
  teams: {
    title: "Team Collaboration",
    description: "Working efficiently with others in Organizations and Teams.",
    sections: [
      {
        heading: "The Forking Workflow",
        text: "Popular for open source. Fork a repo, clone your fork, and submit Pull Requests back.",
        code: `git remote add upstream https://github.com/original/repo.git\ngit fetch upstream`
      },
      {
        heading: "Pull Request Etiquette",
        text: "Always provide a clear description and keep your PRs focused on one task."
      },
      {
        heading: "Code Reviews",
        text: "Use GitHub's 'Suggested Changes' to provide actionable feedback during reviews."
      }
    ]
  },
  orgs: {
    title: "Organizations & Admin",
    description: "Managing large-scale projects and professional teams.",
    sections: [
      {
        heading: "Branch Protection",
        text: "Prevent force-pushes and ensure PRs are reviewed before merging into 'main'."
      },
      {
        heading: "GitHub Actions",
        text: "Automate your testing and deployment (CI/CD) pipelines.",
        code: `.github/workflows/main.yml`
      },
      {
        heading: "Role Management",
        text: "Understand Owner vs Maintainer vs Contributor roles."
      }
    ]
  }
};
