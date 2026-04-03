export const niche = [
  {
    name: 'git annotate',
    role: 'Inspection',
    explanation: 'Annotates file lines with commit information (similar to "git blame").',
    scenario: 'You want to check who introduced a bug in a line and want an alternative output format to blame.'
  },
  {
    name: 'git show-index',
    role: 'Internals',
    explanation: 'Shows the character offset and hash for objects in a pack index.',
    scenario: 'You are an advanced Git hacker and want to see the specific byte offsets in your pack files.'
  },
  {
    name: 'git merge-base --is-ancestor',
    role: 'Logic',
    explanation: 'Checks if one commit is an ancestor of another.',
    scenario: 'You are writing a CI/CD script that only triggers if the current branch includes a specific security patch commit.'
  },
  {
    name: 'git verify-tag',
    role: 'Security',
    explanation: 'Verifies the GPG signature of a tag.',
    scenario: 'You are downloading a signed release and want to ensure it was truly created by the author.'
  },
  {
    name: 'git verify-commit',
    role: 'Security',
    explanation: 'Verifies the GPG signature of a commit.',
    scenario: 'Your organization requires all commits to be signed; you want to check a teammate\'s signature.'
  },
  {
    name: 'git interpret-trailers',
    role: 'Format',
    explanation: 'Parses or adds structured trailers (like "Signed-off-by") to commit messages.',
    scenario: 'You are part of a project that requires "Co-authored-by" metadata in every commit message.'
  },
  {
    name: 'git column',
    role: 'Format',
    explanation: 'Displays Git output in columns.',
    scenario: 'You are building a custom Git command and want to pretty-print a list of text in the terminal.'
  },
  {
    name: 'git stripspace',
    role: 'Cleanup',
    explanation: 'Removes whitespace from a text stream (useful for commit messages).',
    scenario: 'You want to clean up your commit messages before finalizing them in a script.'
  },
  {
    name: 'git replace --edit',
    role: 'Advanced Maintenance',
    explanation: 'Allows you to edit an object\'s content manually.',
    scenario: 'You have a corrupted commit object and want to manually attempt a fix by editing its text.'
  },
  {
    name: 'git fast-export',
    role: 'Interoperability',
    explanation: 'Outputs the repository database as a "fast-import" stream.',
    scenario: 'You are migrating your entire Git project to another version control system.'
  },
  {
    name: 'git fast-import',
    role: 'Interoperability',
    explanation: 'Imports a stream of Git objects quickly.',
    scenario: 'You are importing data from a huge Mercurial repository into Git.'
  },
  {
    name: 'git help',
    role: 'Setup',
    explanation: 'Shows help information for Git commands.',
    scenario: 'You forgot the specifically "git push" flags and need to read the manual page instantly.'
  },
  {
    name: 'git version',
    role: 'Setup',
    explanation: 'Shows the version of Git currently installed on your computer.',
    scenario: 'You need to know if your local Git installation supports newer commands like "switch" or "restore".'
  },
  {
    name: 'git instaweb',
    role: 'Inspection',
    explanation: 'Instantly browses your working repository in a local web browser (via Gitweb).',
    scenario: 'You want a local web-based UI to browse your code and history without using a full Git client.'
  },
  {
    name: 'git update-index --skip-worktree',
    role: 'Admin',
    explanation: 'Tells Git to pretend a file is unchanged, even if it has been modified on disk.',
    scenario: 'You have local database password files that are tracked but should never be changed in Git.'
  },
  {
    name: 'git show-ref',
    role: 'Internals',
    explanation: 'Lists all local and remote references with their hashes.',
    scenario: 'You need a clean list of all branch and tag hashes for a script.'
  }
];
