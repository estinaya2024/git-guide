export const plumbing_ii = [
  {
    name: 'git verify-pack',
    role: 'Admin',
    explanation: 'Reads a pack file (.pack) and verifies the integrity of every object it contains — checking that each object\'s stored hash matches its actual content, and that all delta chains resolve correctly. Pack files are Git\'s compressed storage format: instead of storing each version of a file separately, Git stores a base object and a series of binary deltas. Corruption in one base object can cascade and make many objects unreadable.',
    syntax: 'git verify-pack -v <pack-file>.pack',
    scenario: 'A developer reports that "git clone" from your company\'s internal Git server is failing halfway through with "object corrupt or missing" errors. On the server, run "git verify-pack -v /path/to/repo.git/objects/pack/pack-*.pack". If corruption is detected, it reports exactly which object and which pack file failed. With this information, you know whether to restore from backup, whether it is hardware failure, or whether a specific pack file needs to be reconstituted from another replica.'
  },
  {
    name: 'git unpack-objects',
    role: 'Internals (Plumbing)',
    explanation: 'Takes a pack file from stdin and unpacks all its objects into the loose object format (individual files in objects/xx/ directories). This is the reverse of git pack-objects — you are "exploding" a pack into individual files. Normally used when receiving a pack over a network connection that doesn\'t create a named pack file, or for educational purposes to study the raw object structure.',
    syntax: 'git unpack-objects < <pack-file>.pack',
    scenario: 'You are building a custom Git server that receives push data over a non-standard protocol. Your server receives a raw pack file as a byte stream but needs to store objects in a specific database format. You pipe the incoming pack through "git unpack-objects" to explode it into individual object files, then your custom code reads and indexes those files into your database. This is how many Git hosting platforms process incoming pushes internally.'
  },
  {
    name: 'git write-tree --prefix',
    role: 'Internals (Plumbing)',
    explanation: 'Creates a tree object representing only the contents of a subdirectory within the index, not the full root tree. With "--prefix=src/", it creates a tree object containing only the files under src/. This lets you create tree objects for sub-directories independently, which is useful for scripts that need to snapshot or commit only a portion of the repository.',
    syntax: 'git write-tree --prefix=<dir>',
    scenario: 'You are creating a deployment tool that packages only the "dist/" build artifacts as a new Git "deployment record" commit on a separate orphan branch — without any source code. You run "git write-tree --prefix=dist/" to get a tree hash representing only that directory, then "git commit-tree <tree> -m \'deploy: version 3.0.0 artifacts\'" to create a commit containing only the deployment artifacts. Your deployment branch stays clean and auditable separately from the source branch.'
  },
  {
    name: 'git merge-file',
    role: 'Internals (Plumbing)',
    explanation: 'Performs a three-way merge between three files: an original (base), your version, and their version. It modifies the "yours" file in-place, inserting conflict markers where it cannot auto-merge. This is the plumbing primitive that underlies "git merge" and "git cherry-pick" for file-level merging. Understanding this command helps you build custom merge drivers for specialized file formats.',
    syntax: 'git merge-file <ours> <base> <theirs>',
    scenario: 'You are maintaining a large JSON configuration file that multiple teams edit simultaneously. Standard text merging fails because JSON doesn\'t care about line order, leading to spurious conflicts. You write a custom merge driver that parses all three JSON versions (base, ours, theirs), applies the changes semantically, then calls "git merge-file" on the result. Register this as a custom merge driver in .gitattributes for *.json and Git will call your driver automatically whenever it needs to merge JSON files.'
  },
  {
    name: 'git merge-index',
    role: 'Internals (Plumbing)',
    explanation: 'Runs a specified merge program for all unmerged files currently recorded in the index (files in conflict stages 1, 2, and 3). Instead of Git\'s built-in three-way merge, you can plug in any merge tool. This is the mechanism behind "git mergetool" — it iterates conflicted files and invokes your configured tool. Understanding merge-index helps you build or customize merge resolution workflows.',
    syntax: 'git merge-index -o <merge-program> -a',
    scenario: 'You are setting up a custom merge resolution environment for your team\'s specialized data files. Instead of using the default merge strategies, you run "git merge-index -o custom-merge-tool -a" where custom-merge-tool is a Python script that understands your proprietary file format. Git calls your tool for each conflicted file with the three versions as arguments. Your tool resolves them domain-specifically, producing results far more accurate than line-based text merging.'
  },
  {
    name: 'git merge-tree',
    role: 'Internals (Plumbing)',
    explanation: 'Performs a three-way merge between three tree objects and outputs the resulting tree state to stdout — WITHOUT modifying the index or working directory. This lets you "preview" a merge at the tree level without actually performing it. The newer "git merge-tree --write-tree" variant (Git 2.38+) writes the result as an actual tree object, enabling merge previews in CI pipelines.',
    syntax: 'git merge-tree <base-tree> <branch1-tree> <branch2-tree>',
    scenario: 'Your CI/CD pipeline needs to predict merge conflicts BEFORE a developer even opens a PR, surfacing issues earlier in the workflow. The pipeline calls "git merge-tree $(git merge-base main feature) main feature" to compute the merge result. If the output contains conflict markers, the pipeline immediately comments on the PR: "Warning: this branch has merge conflicts with main. Please rebase before requesting review." This catches problems before code review even begins.'
  },
  {
    name: 'git var -l',
    role: 'Inspection',
    explanation: 'Lists all Git logical variables — environment-influenced settings like GIT_AUTHOR_IDENT, GIT_COMMITTER_IDENT, GIT_EDITOR, GIT_PAGER, and GIT_SEQUENCE_EDITOR. Unlike "git config --list" which reads config files, "git var" reflects the final resolved values after environment variables and defaults are applied. This is the authoritative answer to "what values will Git actually USE right now?"',
    syntax: 'git var -l | git var GIT_EDITOR',
    scenario: 'A developer reports that interactive rebase opens the wrong editor — not VS Code as configured, but nano. You log into their machine and run "git var GIT_EDITOR". The output shows "nano" instead of "code --wait". You then check "git config core.editor" — it says "code --wait". The discrepancy reveals that their shell has "GIT_EDITOR=nano" set as an environment variable, which overrides all config file settings. Environment variables always win — git var shows you the winner.'
  },
  {
    name: 'git check-attr',
    role: 'Inspection',
    explanation: 'Reports what .gitattributes settings apply to specific files. Given a file path, it tells you attributes like "text", "eol", "merge", "diff", "filter", and "binary" — along with which .gitattributes file defined them. This is the diagnostic tool for understanding how Git treats specific files for line-ending conversion, diff generation, and merge strategies.',
    syntax: 'git check-attr -a <file>',
    scenario: 'A developer on a Windows machine commits a shell script and it stops working on Linux — the line endings were converted to CRLF. You investigate: run "git check-attr text eol -- scripts/deploy.sh". The output reveals "eol: unset" — no attribute was defined for shell scripts, so Git applied its default line-ending behavior. You add "*.sh text eol=lf" to .gitattributes and run "git check-attr" again to verify the attribute now shows correctly before committing.'
  },
  {
    name: 'git check-mailmap',
    role: 'Utility',
    explanation: 'Reads the .mailmap file and shows the canonical (corrected) name and email for a contributor given any of their known aliases. The .mailmap file maps old/incorrect identities to canonical ones — useful when a developer changed their email, or used different names on different machines. Tools like "git log" and "git shortlog" read .mailmap automatically, but "git check-mailmap" lets you test and verify your mappings are correct.',
    syntax: 'git check-mailmap "Old Name <old@email.com>"',
    scenario: 'Your open-source project has a contributor who used three different email addresses over 5 years: their university email, a personal Gmail, and their work address. In "git shortlog", their contributions appear as three separate people. You create a .mailmap entry mapping all three to their canonical identity: "Jane Smith <jane@canonical.com>". Run "git check-mailmap \'Jane <jane@university.edu>\'" to verify it resolves to "Jane Smith <jane@canonical.com>". Now git shortlog shows one contributor instead of three.'
  },
  {
    name: 'git cherry',
    role: 'History',
    explanation: 'Compares local commits against an upstream, marking each commit with "+" if it hasn\'t been applied upstream (new commit) or "-" if it has already been incorporated (either directly or as a cherry-pick with equivalent diff). This comparison is content-based, not hash-based — two commits with different hashes but identical diffs are considered equivalent. This helps you see what local work is truly "new" and what has already landed upstream.',
    syntax: 'git cherry -v upstream [head]',
    scenario: 'You cherry-picked 3 commits from your feature branch into a release branch last week. Now you want to confirm which of your remaining 8 feature branch commits are still pending for the next release. Run "git cherry -v release/v2.0". Commits marked with "-" are already in the release (their diff is equivalent). Commits marked "+" are still pending and need merging. This is the correct way to audit what is and is not in a release branch, even across cherry-picks that change commit hashes.'
  },
  {
    name: 'git commit-graph write',
    role: 'Optimization',
    explanation: 'Generates or updates the commit-graph file — a binary cache of the commit object data stored in .git/objects/info/commit-graph. Instead of reading and traversing thousands of commit objects from disk each time, Git reads this compact binary index. Operations like "git log --graph", "git merge-base", and "git status" can be dramatically faster in large repos with this cache. This is a read optimization — it does not change your history.',
    syntax: 'git commit-graph write --reachable',
    scenario: 'Your monorepo has 800,000 commits spanning 12 years. Running "git log --graph --all" takes 45 seconds. After running "git commit-graph write --reachable", the same command takes 3 seconds. The commit-graph pre-computes which commits are reachable from which branches, eliminating the need to traverse the raw commit chain on every query. For very large repositories, running this after "git gc" (or using "git maintenance start") is a critical performance intervention.'
  },
  {
    name: 'git commit-graph verify',
    role: 'Admin',
    explanation: 'Reads the commit-graph file and verifies that it is internally consistent and correctly represents the reachable commit topology. If the commit-graph file is corrupted or stale (does not match the actual commit objects), Git silently falls back to reading raw commits — but this is both slower and potentially incorrect. Running verify catches problems before they cause subtle query errors.',
    syntax: 'git commit-graph verify',
    scenario: 'After a server filesystem incident, Git operations on your shared repository feel unreliable — sometimes "git log" shows unexpected results. The DevOps team runs "git commit-graph verify" and finds: "graph_file_is_corrupted: too many commits". The commit-graph was corrupted in the incident. Running "git commit-graph write --reachable" regenerates a fresh, correct graph. Verification is now part of the post-incident recovery checklist.'
  },
  {
    name: 'git multi-pack-index write',
    role: 'Optimization',
    explanation: 'Creates a multi-pack-index (MIDX) file — a unified index that covers ALL pack files simultaneously. Without MIDX, Git must read each pack file\'s individual index during object lookups, which becomes slow when there are hundreds of pack files (a common state after many incremental fetches). MIDX merges all these individual indexes into one, dramatically reducing object lookup time.',
    syntax: 'git multi-pack-index write',
    scenario: 'Your CI/CD runners do "git fetch" hundreds of times a day. Each fetch creates new pack files. After 3 months, each runner has 400+ pack files and every git operation requires checking hundreds of indexes. Running "git multi-pack-index write" creates a single unified MIDX. Object lookups now require one binary search in one file instead of hundreds of searches in hundreds of files. Include this in your CI runner maintenance scripts to run weekly.'
  },
  {
    name: 'git pack-refs',
    role: 'Optimization',
    explanation: 'Consolidates all local and remote-tracking references into a single flat file (.git/packed-refs) instead of individual files per reference (.git/refs/heads/*, .git/refs/remotes/*). Git normally stores each branch and tag as a separate file. When you have thousands of references, directory listing and file I/O become significant bottlenecks. Pack-refs reduces this to a single file lookup.',
    syntax: 'git pack-refs --all',
    scenario: 'A project\'s repository has 10,000 tags (one per deployment over 5 years) plus 500 branches. Every Git command that reads references (git status, git log, git push) must scan thousands of individual files. After running "git pack-refs --all", all references are consolidated into one .git/packed-refs file. Reference lookups drop from milliseconds to microseconds. Run this periodically on repositories with many tags and branches to maintain performance.'
  },
  {
    name: 'git pack-objects',
    role: 'Internals (Plumbing)',
    explanation: 'Creates a pack file from a specified set of object SHA-1 hashes read from stdin. It applies delta compression between similar objects, finding the most space-efficient way to store the collection. This is the algorithm at the heart of "git push" and "git clone" — the sending side runs pack-objects to create the stream, and the receiving side runs unpack-objects or index-pack to process it.',
    syntax: 'git pack-objects <output-prefix>',
    scenario: 'You are implementing a custom server-side Git host and need to implement the "dumb HTTP" transport protocol that serves static pack files. When a client requests a clone, your server runs "git rev-list --objects HEAD | git pack-objects pack" to generate an optimized pack file for exactly the objects needed. This pack is then served as a static file. Your custom host correctly implements Git\'s wire protocol from first principles.'
  },
  {
    name: 'git index-pack',
    role: 'Internals (Plumbing)',
    explanation: 'Creates an index file (.idx) for an existing pack file (.pack). The index is Git\'s lookup table for the pack — a sorted list of SHA-1 hashes with byte offsets into the pack file, enabling O(log n) binary search to locate any object without reading the full pack. When Git receives a pack over the network (via clone or fetch), it stores the pack and calls index-pack to make it queryable.',
    syntax: 'git index-pack <pack-file>.pack',
    scenario: 'You manually downloaded a .pack file from an archive server that contains 3 years of project history you need to import. The file has no accompanying .idx file. Without the index, Git cannot use the pack — all object lookups would require scanning the entire pack file. Run "git index-pack pack-abc123.pack" to generate "pack-abc123.idx". Git immediately gains the ability to efficiently locate any of the thousands of objects inside, and "git log" starts working instantly.'
  }
];
