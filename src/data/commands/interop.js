export const interop = [
  {
    name: 'git archive',
    role: 'Distribution',
    explanation: 'Creates an archive (zip/tar) of the files in a specific tree or commit.',
    syntax: 'git archive -o latest.zip HEAD',
    scenario: 'You want to send a clean copy of your source code (without the .git history folder) to a recruiter or a client for a code review.'
  },
  {
    name: 'git bisect start',
    role: 'Debugging',
    explanation: 'Starts a binary search session to find the commit that introduced a bug.',
    syntax: 'git bisect start',
    scenario: 'You know the site worked yesterday (v1.0) but is broken now (v1.1); you want Git to help you find exactly which of the 50 commits broke it using binary search.'
  },
  {
    name: 'git bisect good',
    role: 'Debugging',
    explanation: 'Marks a commit as "good" during a bisect session.',
    syntax: 'git bisect good [commit-hash]',
    scenario: 'Git checked out an old commit; you ran your tests and verified that the bug is *not* present in this version.'
  },
  {
    name: 'git bisect bad',
    role: 'Debugging',
    explanation: 'Marks a commit as "bad" during a bisect session.',
    syntax: 'git bisect bad [commit-hash]',
    scenario: 'Git checked out a specific commit; you ran your tests and verified that the bug *is* reproducible in this version.'
  },
  {
    name: 'git bisect reset',
    role: 'Debugging',
    explanation: 'Ends the bisect session and returns your project to its original state.',
    syntax: 'git bisect reset',
    scenario: 'You found the buggy commit hash and recorded it; now you want to go back to your original branch to start fixing the bug.'
  },
  {
    name: 'git notes add',
    role: 'Metadata',
    explanation: 'Adds text notes to a commit without changing its SHA-1 hash.',
    syntax: 'git notes add -m "context"',
    scenario: 'You want to add links to Jira tickets or Slack discussions to your commits *after* they have been pushed, without rewriting history.'
  },
  {
    name: 'git notes show',
    role: 'Metadata',
    explanation: 'Shows the notes attached to a specific commit.',
    syntax: 'git notes show <commit-hash>',
    scenario: 'You are reviewing an old commit and want to see if any extra context (like performance logs or ticket links) was added via Git notes.'
  },
  {
    name: 'git notes list',
    role: 'Metadata',
    explanation: 'Shows all commits that have notes attached.',
    syntax: 'git notes list',
    scenario: 'You want a summary of all commits in the repository that have extra administrative metadata or external review data.'
  },
  {
    name: 'git replace',
    role: 'Internals',
    explanation: 'Creates a "replacement" object that Git will substitute for an existing one.',
    syntax: 'git replace <old-hash> <new-hash>',
    scenario: 'You are performing a massive repository surgery (like cutting huge files from history) and want to swap an old commit without rewriting all children.'
  },
  {
    name: 'git am',
    role: 'Interoperability',
    explanation: 'Applies a series of patches from a mailbox (email format).',
    syntax: 'git am < 0001-fix-bug.patch',
    scenario: 'You are working on a high-level open source project (like the Linux kernel) and receive a feature contribution via a patch email.'
  },
  {
    name: 'git format-patch',
    role: 'Interoperability',
    explanation: 'Prepares patches for email submission.',
    syntax: 'git format-patch main',
    scenario: 'You are contributing to an open-source project that doesn\'t use PRs and need to prepare your commits as structured patch files for a mailing list.'
  },
  {
    name: 'git svn clone',
    role: 'Interoperability',
    explanation: 'Clones a Subversion (SVN) repository into a Git repository.',
    syntax: 'git svn clone <url>',
    scenario: 'Your company uses Subversion but you want to use the power of Git (branches, stashes) to work on the project locally.'
  },
  {
    name: 'git p4 clone',
    role: 'Interoperability',
    explanation: 'Imports a Perforce (P4) client into a Git repository.',
    syntax: 'git p4 clone //depot/project',
    scenario: 'You are working in the game industry and need to interact with a Perforce server while using Git for your local feature development.'
  },
  {
    name: 'git cvsimport',
    role: 'Legacy',
    explanation: 'Imports a CVS repository into Git.',
    syntax: 'git cvsimport -d <root> <module>',
    scenario: 'You are migrating a legacy project from the late 90s to modern version control and need to preserve the old history.'
  },
  {
    name: 'git send-email',
    role: 'Interoperability',
    explanation: 'Sends a patch series from your local machine to a mailing list.',
    syntax: 'git send-email --to=list@master.org *.patch',
    scenario: 'You finished your kernel contribution and want to submit it to the developers via the official project mailing list.'
  },
  {
    name: 'git request-pull',
    role: 'Interoperability',
    explanation: 'Generates a summary of changes to request a pull from an upstream manager.',
    syntax: 'git request-pull <start-commit> <url> <end-commit>',
    scenario: 'You are working on a project using the "benevolent dictator" model and need to request that a lead maintainer pulls your work into the main repo.'
  }
];
