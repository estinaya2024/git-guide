export const niche = [
  {
    name: 'git annotate',
    role: 'Inspection',
    explanation: 'Works identically to "git blame" in its core function — annotating each line of a file with the commit hash, author, and date that last changed it. The difference is output format: "annotate" uses the older, porcelain-friendly tabular format, while "blame" is more commonly used today. "annotate" exists for compatibility with tools and scripts built before "blame" became the standard.',
    syntax: 'git annotate <file>',
    scenario: 'You are using an old code review tool from 2012 that calls "git annotate" internally to build line-by-line history views. The tool would break if "git blame" was removed from the command set. Knowing that both commands exist and are equivalent means you can maintain legacy tooling confidently while understanding that in your own scripts, "git blame" is the modern preferred form.'
  },
  {
    name: 'git show-index',
    role: 'Internals',
    explanation: 'Reads a pack index file (.idx) and prints the SHA-1 hash, CRC, and byte offset for every object it contains. Pack index files are binary files that serve as a lookup table for pack files — instead of reading the entire pack file to find an object, Git reads the index first to get the byte offset, then jumps directly to that position. This command makes the binary index human-readable.',
    syntax: 'git show-index < <file>.idx',
    scenario: 'You are writing a custom Git repository browser tool and need to understand how pack index (.idx) files are structured for maximum read performance. Running "git show-index < objects/pack/pack-abc123.idx" reveals the structure: sorted SHA-1 hashes with their byte offsets in the pack file. Your tool can now implement direct O(log n) binary search into pack files, exactly as Git itself does it.'
  },
  {
    name: 'git merge-base --is-ancestor',
    role: 'Logic',
    explanation: 'A non-interactive command that silently tests whether one commit is an ancestor of another. It exits with code 0 (success) if the relationship holds and exit code 1 if not — making it perfect for shell scripts and CI/CD pipelines. No output is printed; the answer is entirely in the exit code. This is how you programmatically answer: "Is this specific commit in the history that led to this branch?"',
    syntax: 'git merge-base --is-ancestor <commit1> <commit2>',
    scenario: 'Your CI/CD pipeline should only run the "security scan" job if a specific mandatory security baseline commit (abc1234) is present in the build branch\'s ancestry. You add a shell script: "if git merge-base --is-ancestor abc1234 HEAD; then run_security_scan; else fail \'Security baseline commit is missing — this branch cannot be deployed\'". This gate runs automatically on every pull request, preventing deployment of code that bypasses the required security baseline.'
  },
  {
    name: 'git verify-tag',
    role: 'Security',
    explanation: 'Verifies the GPG cryptographic signature on an annotated tag. When a maintainer signs a release tag with their GPG private key, anyone who has the maintainer\'s public key can verify that the tag was actually created by that person and has not been tampered with. This is a critical security verification step for high-security environments and software supply chain integrity.',
    syntax: 'git verify-tag <tag-name>',
    scenario: 'You are adding a third-party cryptography library to a financial application. The library repo has all releases tagged and GPG-signed by the maintainer. Before integrating v4.2.0, you import the maintainer\'s public key and run "git verify-tag v4.2.0". It outputs "Good signature from \'Alice Cryptographer <alice@library.dev>\'". You have cryptographic proof that this specific release was authorized by the real maintainer — not a supply-chain attacker who compromised GitHub.'
  },
  {
    name: 'git verify-commit',
    role: 'Security',
    explanation: 'Verifies the GPG cryptographic signature on a specific commit. When developers sign their commits with GPG keys (configured via "git config user.signingkey" and using "git commit -S"), each commit carries a cryptographic proof of the committer\'s identity. Organizations with strict security postures require all commits to be signed, turning the commit history into a cryptographically verifiable audit log.',
    syntax: 'git verify-commit <commit-hash>',
    scenario: 'Your organization\'s security policy requires that commits to the "main" branch must be signed by verified employees. A branch protection rule enforces this. When a PR arrives, the security bot runs "git verify-commit <hash>" on every commit. A commit with an unsigned or unverified signature is automatically flagged and the PR is blocked. Nobody can sneak unauthorized code into production, even if they have repository access — their commits lack the required cryptographic proof of identity.'
  },
  {
    name: 'git interpret-trailers',
    role: 'Format',
    explanation: 'Parses and adds structured metadata "trailers" to commit messages. Trailers are standardized key-value pairs appended to commit messages — "Signed-off-by:", "Co-authored-by:", "Reviewed-by:", "Fixes:". They appear after a blank line following the main message. Many projects (especially Linux kernel, git itself) require these for legal compliance, attribution, and automated issue linking.',
    syntax: 'git interpret-trailers --trailer "Signed-off-by: Name <email>"',
    scenario: 'Your open-source project uses "Signed-off-by" trailers as a Developer Certificate of Origin (DCO) — contributors certify they have the legal right to submit their code. You configure a pre-commit hook using "git interpret-trailers" to automatically add your "Signed-off-by" to every commit. The GitHub Actions CI bot then checks every commit in each PR for this trailer. Missing it means the PR is blocked — automatic legal compliance at scale.'
  },
  {
    name: 'git stripspace',
    role: 'Cleanup',
    explanation: 'A text filtering utility that cleans input according to Git\'s whitespace standards: removes trailing whitespace, removes leading and trailing blank lines, and collapses multiple consecutive blank lines into a single blank line. It is mainly used in scripts that generate commit messages or process Git text output. It ensures text fed into Git commands meets Git\'s formatting expectations.',
    syntax: 'git stripspace < input.txt',
    scenario: 'You are writing a CI script that auto-generates commit messages from a template file that may have inconsistent whitespace (developers edit it on different operating systems with different editor settings). Pipe the template through "git stripspace" before passing it to "git commit -F /dev/stdin". This guarantees the commit message is cleanly formatted regardless of who last edited the template file.'
  },
  {
    name: 'git replace --edit',
    role: 'Advanced Maintenance',
    explanation: 'Opens a specific Git object in your configured text editor and lets you create a "replacement" for it. The original object is not modified (Git objects are immutable), but Git inserts a reference mapping the original hash to the new replacement hash. This lets you surgically correct a mistake (like a wrong author name in a very old commit) without performing a full history rewrite that changes every subsequent commit hash.',
    syntax: 'git replace --edit <commit-hash>',
    scenario: 'A developer\'s name was misspelled in 20 commits from 3 years ago (recorded as "John Sm1th" instead of "John Smith"). A full rebase would change all 3 years of subsequent commit hashes, breaking every external reference and PR link. Using "git replace --edit", you create 20 replacement objects with the corrected name. To all display tools (git log, GitHub), the name appears correct. The underlying history hashes remain stable. Surgical and non-destructive.'
  },
  {
    name: 'git fast-export',
    role: 'Interoperability',
    explanation: 'Produces a complete, text-stream representation of a repository\'s objects in the "fast-import stream format". This stream contains every blob, tree, commit, and tag, fully serializable and portable. It is the foundation for repository migration tools. The stream can be filtered, transformed, or piped directly into another Git repository via "git fast-import" — enabling powerful batch operations on history.',
    syntax: 'git fast-export --all | git fast-export <branch>',
    scenario: 'You need to split one large monorepo into 3 separate repos while preserving commit history. Use "git fast-export --all" piped through a filter script that keeps only the relevant directory paths, then pipe the filtered stream into "git fast-import" in a new empty repository. Each resulting repo has its full relevant history, correct author attribution, and accurate commit timestamps — as if it was always a separate repository from day one.'
  },
  {
    name: 'git fast-import',
    role: 'Interoperability',
    explanation: 'Consumes a "fast-import stream" (typically from git fast-export, or generated by migration tools) and creates Git objects from it at very high speed. It is significantly faster than running individual commit commands because it processes the entire stream in one pass without the overhead of checking out files each time. This is the correct tool for large-scale repository imports and migrations — not for daily use.',
    syntax: 'git fast-import < input.stream',
    scenario: 'Your team is migrating 8 years of history from a Perforce (P4) repository to Git. A migration tool (like "p4-fast-export") generates the fast-import stream representing all Perforce changelists as Git commits. Running "git fast-import < migration.stream" on a new empty repository creates the entire Git history in minutes instead of hours. This is how companies like Stripe and Shopify migrated their legacy version control systems to Git at scale.'
  },
  {
    name: 'git update-index --skip-worktree',
    role: 'Admin',
    explanation: 'Instructs Git to treat a tracked file as if it hasn\'t changed, even when its contents differ from HEAD. Unlike "--assume-unchanged" (which is a performance hint that Git may ignore), "--skip-worktree" is a stronger intent signal: this file exists in the repo for others but should contain local overrides that are NEVER committed. Git will completely skip it during status, add, and commit operations.',
    syntax: 'git update-index --skip-worktree <file>',
    scenario: 'Your project has "config/database.yml" committed with production connection settings. Locally, every developer needs their own database URL. If they modify this file, they risk accidentally committing their local settings. Everyone runs "git update-index --skip-worktree config/database.yml" after cloning. Git now ignores local changes to that file forever — developers can put their local credentials in it safely and they will never appear in "git status" or be staged by "git add ."'
  },
  {
    name: 'git show-ref',
    role: 'Internals',
    explanation: 'Lists every reference (branch, tag, note) in the repository along with its corresponding commit hash, in a stable, machine-readable format. Unlike "git branch" or "git tag" which have human-friendly formatting, "git show-ref" produces clean "<hash> <refname>" output that is trivially parseable by shell scripts. It shows both local and remote-tracking references in one list.',
    syntax: 'git show-ref --heads | git show-ref --tags',
    scenario: 'You are writing a deployment automation script that needs to verify, before deploying, that the commit hash currently tagged as "v3.0.0" matches the commit hash at the tip of the "release/3.0" branch. Running "git show-ref --tags" and "git show-ref --heads" in your script and comparing the specific hash values gives you a deterministic, automated validator. If they don\'t match, the deployment script stops and alerts the team.'
  }
];
