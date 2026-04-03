export const maintenance = [
  {
    name: 'git gc',
    role: 'Optimization',
    explanation: 'Runs "garbage collection" on the Git repository — compresses loose object files into efficient pack files, prunes unreachable objects (commits with no branch or tag pointing to them), and cleans up other housekeeping. Git accumulates loose objects as you work. Over time this makes operations slower. Running gc periodically keeps the repository fast and lean. Git runs a limited auto-gc automatically, but manual gc is more aggressive.',
    syntax: 'git gc [--aggressive] [--prune=now]',
    scenario: 'Your company\'s monorepo has been growing for 5 years with hundreds of contributors. Clone times are slow and operations feel sluggish. The DevOps team runs "git gc --aggressive" on the server-side bare repository. This compresses thousands of loose objects into efficiently indexed pack files. Clone speeds improve by 40%. This is standard maintenance for large, long-lived repositories.'
  },
  {
    name: 'git fsck',
    role: 'Integrity',
    explanation: 'Runs a full integrity check on the Git object database — verifying that every stored object (blobs, trees, commits, tags) can be successfully read and that all references point to valid objects. It also finds "dangling" objects: commits or blobs that exist in the database but are not reachable from any branch or tag (often left over from hard resets, rebases, or branch deletions). Think of it as a filesystem health check for your repository.',
    syntax: 'git fsck [--full] [--dangling]',
    scenario: 'After a server crash or disk warning, your team is worried about repository corruption. Run "git fsck --full" on the bare repository. If it completes with no errors, your data integrity is verified. If it reports "broken link" or "missing blob", you have corruption and need to restore from backup immediately. This is the command that gives you a definitive "repo is healthy" or "repo needs repair" answer.'
  },
  {
    name: 'git tag',
    role: 'Tagging',
    explanation: 'Creates a permanent named pointer to a specific commit, most commonly used to mark release versions (v1.0.0, v2.3.1). There are two types: lightweight (just a pointer) and annotated (an object with a full message, tagger identity, and date — also GPG-signable). Always use annotated tags for releases. Unlike branches, tags do not move — they permanently mark a moment in history forever.',
    syntax: 'git tag -a v1.0.0 -m "Release message" | git tag -l',
    scenario: 'You are deploying version 3.0.0 of your application. Run "git tag -a v3.0.0 -m \'Release v3.0.0: complete UI rewrite and performance improvements\'". Then "git push origin v3.0.0". GitHub automatically creates a Release entry. Your CI/CD pipeline detects the new tag and triggers the deployment to production. Three years from now, anyone can run "git checkout v3.0.0" to see the exact code that was deployed that day.'
  },
  {
    name: 'git archive',
    role: 'Export',
    explanation: 'Creates a ZIP or TAR archive of the repository contents at a specific commit, branch, or tag — WITHOUT including the .git history directory. This is how you package and distribute your source code without exposing your entire commit history. Unlike downloading a GitHub ZIP, this works offline and lets you target any specific commit or branch.',
    syntax: 'git archive --format=zip HEAD > release.zip',
    scenario: 'A client needs the source code for their records but should not receive your entire 3-year commit history (which might contain sensitive API keys in old commits, internal discussions, or employee names). Run "git archive --format=zip v2.5.0 > client-delivery-v2.5.0.zip". They receive a clean zip of exactly the v2.5.0 release state with no history attached.'
  },
  {
    name: 'git worktree list',
    role: 'Workspace Management',
    explanation: 'Lists all currently active Git worktrees — the different working directories associated with this repository. The main worktree is always the first entry. Additional worktrees (created with "git worktree add") appear after it along with which branch each one has checked out. This command helps you track how many parallel workspaces you have open.',
    syntax: 'git worktree list',
    scenario: 'You set up three worktrees last week to work on multiple things in parallel: main, feature/dark-mode, and hotfix/billing-bug. After finishing the hotfix, you want to know which worktrees are still active before cleaning up. "git worktree list" shows all three with their paths and branch names, helping you decide which to prune with "git worktree remove".'
  },
  {
    name: 'git maintenance start',
    role: 'Optimization',
    explanation: 'Registers the current repository with Git\'s built-in background maintenance scheduler. Git will automatically run optimization tasks (gc, commit-graph, prefetch) on a schedule in the background while you are working — without interrupting you. This is the "set it and forget it" approach to repository health, introduced in Git 2.29. These tasks keep large repos fast automatically.',
    syntax: 'git maintenance start | git maintenance run --task=gc',
    scenario: 'You work in a monorepo with 500,000 commits. Without maintenance, operations slowly degrade over months. Run "git maintenance start" once in the repo. Going forward, Git handles gc, commit-graph updates, and loose object packing automatically in the background every night. You never need to think about repo performance maintenance again — it just stays fast.'
  },
  {
    name: 'git sparse-checkout',
    role: 'Performance',
    explanation: 'Enables you to check out only a specific subset of a repository\'s files instead of the whole thing. For massive monorepos where checking out all 50,000 files takes minutes, sparse checkout lets you specify which directories you actually need — checkout becomes instant and disk usage drops dramatically. This is used extensively at Google, Meta, and Microsoft for their giant internal monorepos.',
    syntax: 'git sparse-checkout init --cone | git sparse-checkout set <path>',
    scenario: 'Your company\'s monorepo contains 30 different microservices totaling 2GB of source code. You are only working on the "payments" service. Run "git sparse-checkout init --cone" then "git sparse-checkout set services/payments shared/utils". Git only materializes those two directories in your working tree. Checkout is near-instant, disk usage drops from 2GB to 50MB, and file operations are dramatically faster.'
  }
];
