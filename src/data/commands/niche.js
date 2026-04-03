export const niche = [
  {
    name: 'git annotate',
    role: 'Inspection',
    explanation: 'Annotates file lines with commit information (similar to "git blame").',
    syntax: 'git annotate <file>',
    scenario: 'You want to check who introduced a bug in a line and want an alternative output format to blame for specific legacy tool compatibility.'
  },
  {
    name: 'git show-index',
    role: 'Internals',
    explanation: 'Shows the character offset and hash for objects in a pack index.',
    syntax: 'git show-index < <file>.idx',
    scenario: 'You are an advanced Git hacker auditing your repository storage and want to see the specific byte offsets in your pack files.'
  },
  {
    name: 'git merge-base --is-ancestor',
    role: 'Logic',
    explanation: 'Checks if one commit is an ancestor of another.',
    syntax: 'git merge-base --is-ancestor <commit1> <commit2>',
    scenario: 'You are writing a CI/CD script that should only trigger if the current branch already includes a specific required security patch commit.'
  },
  {
    name: 'git verify-tag',
    role: 'Security',
    explanation: 'Verifies the GPG signature of a tag.',
    syntax: 'git verify-tag <tag-name>',
    scenario: 'You are downloading a signed release from a public repository and want to ensure it was truly created and signed by the trusted author.'
  },
  {
    name: 'git verify-commit',
    role: 'Security',
    explanation: 'Verifies the GPG signature of a commit.',
    syntax: 'git verify-commit <commit-hash>',
    scenario: 'Your organization requires all commits to be signed; you want to verify a teammate\'s signature before merging their work into the production branch.'
  },
  {
    name: 'git interpret-trailers',
    role: 'Format',
    explanation: 'Parses or adds structured trailers (like "Signed-off-by") to commit messages.',
    syntax: 'git interpret-trailers --trailer "Signed-off-by: Name <email>"',
    scenario: 'You are part of an enterprise project that requires specific "Co-authored-by" or "Fixes" metadata in every commit message for auditing.'
  },
  {
    name: 'git column',
    role: 'Format',
    explanation: 'Displays Git output in columns.',
    syntax: 'git column --mode=column',
    scenario: 'You are building a custom Git alias or tool and want to pretty-print a list of text or tags in the terminal for better readability.'
  },
  {
    name: 'git stripspace',
    role: 'Cleanup',
    explanation: 'Removes whitespace from a text stream (useful for commit messages).',
    syntax: 'git stripspace < file.template',
    scenario: 'You want to clean up your commit messages and remove trailing whitespaces before finalizing them in an automated script.'
  },
  {
    name: 'git replace --edit',
    role: 'Advanced Maintenance',
    explanation: 'Allows you to edit an object\'s content manually.',
    syntax: 'git replace --edit <commit-hash>',
    scenario: 'You have a corrupted commit object or a typo in an old message and want to manually attempt a fix by editing its underlying text.'
  },
  {
    name: 'git fast-export',
    role: 'Interoperability',
    explanation: 'Outputs the repository database as a "fast-import" stream.',
    syntax: 'git fast-export --all',
    scenario: 'You are migrating your entire Git project history to another version control system or a custom backup solution.'
  },
  {
    name: 'git fast-import',
    role: 'Interoperability',
    explanation: 'Imports a stream of Git objects quickly.',
    syntax: 'git fast-import < input.stream',
    scenario: 'You are importing data from a huge legacy Mercurial or SVN repository into a new Git project efficiently.'
  },
  {
    name: 'git help',
    role: 'Setup',
    explanation: 'Shows help information for Git commands.',
    syntax: 'git help <command>',
    scenario: 'You forgot the specific "git push" flags and need to read the official manual page instantly in the browser or terminal.'
  },
  {
    name: 'git version',
    role: 'Setup',
    explanation: 'Shows the version of Git currently installed on your computer.',
    syntax: 'git version',
    scenario: 'You need to know if your local Git installation supports newer features like "git sparse-checkout" or "git switch".'
  },
  {
    name: 'git instaweb',
    role: 'Inspection',
    explanation: 'Instantly browses your working repository in a local web browser (via Gitweb).',
    syntax: 'git instaweb --httpd=webrick',
    scenario: 'You want a local web-based UI to browse your code and history without using a full desktop Git client like GitKraken.'
  },
  {
    name: 'git update-index --skip-worktree',
    role: 'Admin',
    explanation: 'Tells Git to pretend a file is unchanged, even if it has been modified on disk.',
    syntax: 'git update-index --skip-worktree <file>',
    scenario: 'You have local database password files or configs that are tracked but should never be updated in the repository.'
  },
  {
    name: 'git show-ref',
    role: 'Internals',
    explanation: 'Lists all local and remote references with their hashes.',
    syntax: 'git show-ref --heads',
    scenario: 'You need a clean, machine-readable list of all branch and tag hashes for a deployment script or automation tool.'
  }
];
