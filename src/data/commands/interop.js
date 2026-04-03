export const interop = [
  {
    name: 'git svn clone',
    role: 'Interoperability',
    explanation: 'Clones an entire Subversion (SVN) repository into a local Git repository, converting all SVN revisions into Git commits. This is the migration entry point for teams moving from SVN (an older, centralized version control system that was the industry standard before Git) to Git. The conversion preserves the full commit history with authors, dates, and messages.',
    syntax: 'git svn clone <svn-url> [--stdlayout]',
    scenario: 'Your company has used SVN since 2008 and the CTO has decided to migrate to Git/GitHub. The migration team runs "git svn clone https://svn.company.com/repo --stdlayout". After several hours, 15 years of company history — every commit, every branch, every developer — is faithfully converted into a Git repository ready to be pushed to GitHub. The team can now use modern Git workflows without losing a single day of history.'
  },
  {
    name: 'git svn rebase',
    role: 'Interoperability',
    explanation: 'Fetches the latest changes from the SVN remote and rebases your local Git commits on top of them. This is the Git-SVN equivalent of "git pull --rebase" — used when you are in a hybrid environment where SOME developers still use SVN while others use the Git-SVN bridge. It keeps your local Git commits cleanly stacked on top of SVN\'s linear history.',
    syntax: 'git svn rebase',
    scenario: 'During a gradual migration, half your team is still using SVN clients while you use Git-SVN. Every morning, before pushing, you run "git svn rebase" to pull in any new SVN commits and replay your local Git commits on top. This ensures your work is compatible with SVN\'s strict linear history requirements before you push back to the SVN server.'
  },
  {
    name: 'git svn dcommit',
    role: 'Interoperability',
    explanation: 'Pushes your local Git commits back to the SVN repository as individual SVN revisions. The key difference from "git push": each Git commit becomes a separate SVN commit — the round-trip is preserved. This is how you contribute back to SVN from your Git workflow during the migration period without disrupting SVN users.',
    syntax: 'git svn dcommit',
    scenario: 'You finished a bug fix using Git locally with 3 clean commits. Your company\'s SVN server still receives pushes from other developers using native SVN. Run "git svn dcommit" and your 3 Git commits become 3 SVN revisions on the SVN server. Traditional SVN users see the changes as normal SVN commits. You get modern Git tooling; they are not disrupted. This bridge works until SVN is fully decommissioned.'
  },
  {
    name: 'git format-patch',
    role: 'Collaboration',
    explanation: 'Exports one or more commits as individual patch files (.patch) in a standardized email-ready format. Each patch file contains the full commit metadata (author, date, message) and the diff. This is how patches are shared in communities that review contributions via mailing list (like the Linux kernel) instead of Pull Requests. The recipient applies patches with "git am".',
    syntax: 'git format-patch HEAD~<n> | git format-patch <commit>..<commit>',
    scenario: 'You want to submit a bug fix to the Linux kernel or another project that uses the email-based patch workflow instead of GitHub PRs. Run "git format-patch HEAD~1 -o patches/" to create a .patch file. Then you send "patches/0001-fix-memory-leak-in-tcp-handler.patch" to the project\'s mailing list. Maintainers review, discuss, and eventually apply it with "git am". This is how git was originally born — Linus Torvalds invented it for exactly this workflow.'
  },
  {
    name: 'git am',
    role: 'Collaboration',
    explanation: 'Applies a series of patches received via email (created by "git format-patch") as proper commits, preserving the original author name, date, and commit message. "am" stands for "Apply Mailbox". It is the receiving end of the email-based patch workflow. After applying patches, you can review them in git log as proper commits before pushing.',
    syntax: 'git am < patch.patch | git am patches/*.patch',
    scenario: 'A contributor emailed you a bug fix for your open-source library as a .patch file. Run "git am < bugfix-for-issue-43.patch". Their commit (with their name and message) is applied to your repository as if they committed directly. You get a proper attribution in git log. If the patch conflicts with your current code, git am pauses and lets you resolve conflicts, then continue with "git am --continue" — exactly like a merge conflict resolution.'
  },
  {
    name: 'git request-pull',
    role: 'Collaboration',
    explanation: 'Generates a summary of a range of commits suitable for emailing to a project maintainer, asking them to pull your changes. This predates GitHub Pull Requests — it is the original way open-source developers requested merges before web-based platforms existed. The output contains a summary of changes, diffstat, and the URL from which the maintainer should pull.',
    syntax: 'git request-pull <start-commit> <url> [<end>]',
    scenario: 'You are contributing to a project that uses the traditional email-based workflow. You pushed your feature branch to your public fork and now want to notify the maintainer. Run "git request-pull v1.2 https://github.com/you/fork feature/new-cache". The formatted output, ready to email, says exactly: "Here is what I have for you to pull, here is where to pull from, and here is what changed." The maintainer gets all the information needed to review and merge your contribution.'
  }
];
