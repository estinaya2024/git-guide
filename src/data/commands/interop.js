export const interop = [
  {
    name: 'git archive',
    role: 'Distribution',
    explanation: 'Creates an archive (zip/tar) of the files in a specific tree or commit.',
    scenario: 'You want to send a clean copy of your source code (without .git history) to a recruiter.'
  },
  {
    name: 'git bisect start',
    role: 'Debugging',
    explanation: 'Starts a binary search session to find the commit that introduced a bug.',
    scenario: 'You know the site worked yesterday (v1.0) but is broken now (v1.1); you want Git to help you find exactly which of the 50 commits broke it.'
  },
  {
    name: 'git bisect good',
    role: 'Debugging',
    explanation: 'Marks a commit as "good" during a bisect session.',
    scenario: 'Git checked out an old commit; you verified that the bug is *not* there.'
  },
  {
    name: 'git bisect bad',
    role: 'Debugging',
    explanation: 'Marks a commit as "bad" during a bisect session.',
    scenario: 'Git checked out a commit; you verified that the bug *is* there.'
  },
  {
    name: 'git bisect reset',
    role: 'Debugging',
    explanation: 'Ends the bisect session and returns your project to its original state.',
    scenario: 'You found the buggy commit and now want to fix it on your main branch.'
  },
  {
    name: 'git notes add',
    role: 'Metadata',
    explanation: 'Adds text notes to a commit without changing its SHA-1 hash.',
    scenario: 'You want to add links to Jira/Slack discussions to your commits after they have been pushed.'
  },
  {
    name: 'git notes show',
    role: 'Metadata',
    explanation: 'Shows the notes attached to a specific commit.',
    scenario: 'You are reviewing an old commit and want to see if any extra context was added via notes.'
  },
  {
    name: 'git notes list',
    role: 'Metadata',
    explanation: 'Shows all commits that have notes attached.',
    scenario: 'You want a summary of all commits that have extra administrative metadata.'
  },
  {
    name: 'git replace',
    role: 'Internals',
    explanation: 'Creates a "replacement" object that Git will substitute for an existing one.',
    scenario: 'You are performing a massive repository surgery and want to swap an old commit without rewriting all downstream children (Advanced).'
  },
  {
    name: 'git am',
    role: 'Interoperability',
    explanation: 'Applies a series of patches from a mailbox (email format).',
    scenario: 'You are working on the Linux kernel core and receive a feature contribution via email.'
  },
  {
    name: 'git format-patch',
    role: 'Interoperability',
    explanation: 'Prepares patches for email submission.',
    scenario: 'You are contributing to an open-source project that doesn''t use PRs (like Git itself!) and need to email your changes.'
  },
  {
    name: 'git svn clone',
    role: 'Interoperability',
    explanation: 'Clones a Subversion (SVN) repository into a Git repository.',
    scenario: 'Your company uses SVN but you want to use Git to work on the project locally.'
  },
  {
    name: 'git p4 clone',
    role: 'Interoperability',
    explanation: 'Imports a Perforce (P4) client into a Git repository.',
    scenario: 'You are working in the AAA game industry and need to interact with a Perforce server using Git.'
  },
  {
    name: 'git cvsimport',
    role: 'Legacy',
    explanation: 'Imports a CVS repository into Git.',
    scenario: 'You are migrating a very old project from 1995 to modern version control.'
  },
  {
    name: 'git send-email',
    role: 'Interoperability',
    explanation: 'Sends a patch series from your local machine to a mailing list.',
    scenario: 'You finished your Linux kernel contribution and want to submit it to the developers.'
  },
  {
    name: 'git request-pull',
    role: 'Interoperability',
    explanation: 'Generates a summary of changes to request a pull from an upstream manager.',
    scenario: 'You are working on a project that uses a "benevolent dictator" model and need to request they pull your work.'
  }
];
