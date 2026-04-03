export const plumbing_i = [
  {
    name: 'git hash-object',
    role: 'Internals (Plumbing)',
    explanation: 'Computes the SHA-1 (or SHA-256 in newer Git) hash of a file\'s contents according to Git\'s internal storage format, and optionally stores it in the object database as a "blob" object. This is the foundational operation of Git\'s content-addressable storage system: the hash IS the address. The same content ALWAYS produces the same hash — this is how Git detects duplicates and ensures integrity.',
    syntax: 'git hash-object -w <file>',
    scenario: 'You want to truly understand how Git works at its core. Run "echo \'hello world\' | git hash-object --stdin". You get back a SHA-1 hash like "3b18e512...". Now run the same command on any other machine in the world with the same content — you get the identical hash. This deterministic content addressing is the mathematical foundation that makes Git\'s deduplication, integrity verification, and distributed nature all work simultaneously without a central server.'
  },
  {
    name: 'git cat-file -p',
    role: 'Internals (Plumbing)',
    explanation: 'Pretty-prints the content of any Git object (blob, tree, commit, or tag) given its SHA-1 hash. The "-p" flag means "pretty print" — Git detects the object type and formats it appropriately. For blobs (file contents), it prints the raw file data. For trees (directories), it prints a formatted list of child objects. For commits, it prints all metadata plus the tree hash it points to. This is how you read Git\'s raw database.',
    syntax: 'git cat-file -p <hash>',
    scenario: 'Run "git cat-file -p HEAD". Instead of seeing a diff or human summary, you see the raw commit object: the tree hash it records, the parent commit hash(es), author/committer identity and timestamp, and the commit message. Then run "git cat-file -p <that-tree-hash>" to see the directory listing. Then "git cat-file -p <one-of-those-blob-hashes>" to read the actual file. You just manually walked Git\'s internal object graph — which is exactly what "git status" and "git diff" do automatically every time you run them.'
  },
  {
    name: 'git cat-file -t',
    role: 'Internals (Plumbing)',
    explanation: 'Returns the TYPE of a Git object — either "blob" (file content), "tree" (directory), "commit" (snapshot with metadata), or "tag" (annotated tag). Given that all objects in the database are identified by their hash alone, this command tells you what kind of object you are looking at before deciding how to process it. This type-checking is foundational in Git tooling scripts.',
    syntax: 'git cat-file -t <hash>',
    scenario: 'You are writing a Git repository analyzer tool in Python that navigates the object graph. When your script encounters a hash, it calls "git cat-file -t <hash>" first to determine the type. "blob" means read file content. "tree" means enumerate children. "commit" means read metadata. "tag" means resolve to a commit. This type dispatch pattern mirrors exactly how Git\'s own code internally navigates its object database.'
  },
  {
    name: 'git cat-file -s',
    role: 'Internals (Plumbing)',
    explanation: 'Returns the SIZE in bytes of a specific Git object, without reading its content. This is ideal for scripts that need to pre-flight object sizes before deciding whether to read them. For large repositories with binary assets, checking sizes before fetching allows you to implement size limits and avoid reading unexpectedly large objects into memory.',
    syntax: 'git cat-file -s <hash>',
    scenario: 'You are building a repository audit tool that finds any committed file larger than 50MB (which should have gone into Git LFS instead). You iterate over all reachable blob hashes and run "git cat-file -s <hash>" on each. If the size exceeds 50MB, you log it for review. This is much faster than reading the actual content of thousands of objects — you just check their sizes and skip the small ones entirely.'
  },
  {
    name: 'git ls-files',
    role: 'Internals (Plumbing)',
    explanation: 'Shows information about files known to the index (staging area) and optionally the working tree. Without flags it lists all tracked files. With "--others" it shows untracked files. With "--ignored" it shows ignored files. This is the definitive, machine-readable answer to "what does Git know about?" — much more precise than "git status" for scripting because it has no human-friendly explanatory text.',
    syntax: 'git ls-files [--stage | --others | --ignored]',
    scenario: 'You are writing a CI script that must count exactly how many files are being tracked in the repository (to enforce a "no more than 10,000 files" policy for performance reasons). Running "git ls-files | wc -l" gives you the exact count of tracked files. No parsing of human-readable output needed — just pipe the clean filename list to "wc -l". This kind of precise, scriptable output is why plumbing commands exist.'
  },
  {
    name: 'git ls-files -s',
    role: 'Internals (Plumbing)',
    explanation: 'Shows the staging area contents in full detail: the permission mode bits, blob SHA-1 hash, staging slot number (0=normal, 1=common ancestor, 2=yours, 3=theirs during conflict), and filename. Slot numbers 1-3 are the key to understanding merge conflicts at the plumbing level — instead of merge conflict markers in files, you see three versions of the same file simultaneously in the index.',
    syntax: 'git ls-files -s',
    scenario: 'You are debugging a stubborn merge conflict in a binary file that cannot show textual conflict markers. Run "git ls-files -s src/logo.png". You see three lines for the same file: stage 1 (the common ancestor version before the conflict), stage 2 (your version), stage 3 (their version). With the three blob hashes, you can extract each version using "git cat-file -p <hash> > logo-v1.png" and visually compare them to decide which version to keep, then resolve manually.'
  },
  {
    name: 'git update-index',
    role: 'Internals (Plumbing)',
    explanation: 'The low-level command for directly manipulating the index (staging area) without using the porcelain "git add". It can register file contents, change permission bits, mark files as "assume-unchanged" or "skip-worktree", or add blob objects to the index. This is the plumbing beneath "git add" — add calls update-index internally.',
    syntax: 'git update-index --add <file> | git update-index --info-only --add --cacheinfo <mode>,<sha1>,<path>',
    scenario: 'You are building a custom pre-commit tool that needs to stage a file that doesn\'t exist on disk — for example, programmatically generated content that should be committed but not materialized. You first create a blob: "sha=$(echo \'generated content\' | git hash-object -w --stdin)". Then "git update-index --add --cacheinfo 100644,$sha,src/generated.js" stages the blob at that path. Now "git status" shows it as staged and "git commit" will include it.'
  },
  {
    name: 'git update-index --assume-unchanged',
    role: 'Admin',
    explanation: 'Sets a flag that tells Git "I promise this file hasn\'t changed — don\'t check it." This is a PERFORMANCE HINT. Unlike "--skip-worktree" (which is an intent declaration), "--assume-unchanged" is about avoiding file system comparisons for large, rarely-modified files that are expensive to stat on every Git operation. Git may ignore this flag in some situations. It does NOT protect the file from being updated if the remote has a new version.',
    syntax: 'git update-index --assume-unchanged <file>',
    scenario: 'Your project has a 200MB auto-generated protobuf file committed in the repo. Every "git status" command takes 3 seconds just to stat this one file. Running "git update-index --assume-unchanged generated/protos.pb" tells Git to skip checking this file during status and add operations. "git status" is now instant. The tradeoff: if you need to update this generated file, you must run "git update-index --no-assume-unchanged protos.pb" first to re-enable tracking.'
  },
  {
    name: 'git write-tree',
    role: 'Internals (Plumbing)',
    explanation: 'Takes the current contents of the staging area (index) and writes it as a permanent tree object in the object database, returning the tree\'s SHA-1 hash. A tree object is Git\'s representation of a directory — it records file names, their permissions, and the blob hash for each file\'s content. "git write-tree" is one step in manually building a commit from scratch without using the "git commit" porcelain.',
    syntax: 'git write-tree [--prefix=<dir>]',
    scenario: 'You are implementing a custom Git data pipeline in Python that needs to programmatically create commits without a working directory. Your script builds up the desired state in the index using "git update-index", then calls "git write-tree" to get the tree hash. With that tree hash plus a parent hash, it calls "git commit-tree -p <parent> -m <message> <tree>" to create the commit object. This is exactly how "git stash" and "git cherry-pick" create commits internally.'
  },
  {
    name: 'git read-tree',
    role: 'Internals (Plumbing)',
    explanation: 'Reads tree object data into the index (staging area), optionally performing a three-way merge. This is the low-level operation underlying "git checkout" and "git merge" — both call read-tree internally to update the index. Understanding read-tree helps you understand why checking out a branch involves writing to the index before writing to the working directory.',
    syntax: 'git read-tree <tree-hash> | git read-tree -m <base> <ours> <theirs>',
    scenario: 'You are building a tool that prepares a commit representing a directory structure defined by a configuration file, without checking out any files to disk. You run "git read-tree <tree-hash>" to load that tree into the index without touching the working directory, then modify the index with "git update-index", write a new tree with "git write-tree", and create a commit. The entire process happens in memory-space without ever materializing files on disk.'
  },
  {
    name: 'git commit-tree',
    role: 'Internals (Plumbing)',
    explanation: 'Creates a commit object directly from a tree hash and optional parent commit hash(es). This bypasses all hooks, checks, and automatic metadata handling done by "git commit". It is the pure plumbing operation: combine tree + parents + author + committer + message → new commit object. The returned hash is the new commit\'s SHA-1.',
    syntax: 'git commit-tree <tree-hash> -p <parent-hash> -m "<message>"',
    scenario: 'You are writing a Git history rewriting tool (similar to "git filter-repo") that needs to create new commits with specific authorship timestamps for import accuracy. Using "git commit-tree" with "GIT_AUTHOR_DATE" and "GIT_COMMITTER_DATE" environment variables, your tool creates commits with the exact original timestamps from the source system. "git commit" would not give you this level of control over every metadata field.'
  },
  {
    name: 'git mktree',
    role: 'Internals (Plumbing)',
    explanation: 'Reads "ls-tree"-formatted text from stdin and creates a tree object in the Git object database containing the specified entries. It is the companion to "git ls-tree --full-tree" — you can export a tree to text format, modify the text (add files, change hashes, rename entries), and reconstruct a new tree object from the modified text. This enables programmatic tree manipulation.',
    syntax: 'git mktree < tree-entries.txt',
    scenario: 'You are writing a repository restructuring tool. You read the current root tree with "git ls-tree HEAD > tree.txt", modify "tree.txt" to move directories and update file hashes, then run "git mktree < tree.txt" to produce a new tree hash reflecting the new structure. This new tree hash flows into "git commit-tree" to create a new commit. No files need to be checked out — the entire restructure happens at the object level.'
  },
  {
    name: 'git symbolic-ref',
    role: 'Internals (Plumbing)',
    explanation: 'Reads, writes, or deletes symbolic references — references that point to other references rather than directly to a commit hash. The most important symbolic ref is HEAD: normally it contains "ref: refs/heads/main", meaning "I point to whatever refs/heads/main points to". When HEAD points directly to a hash (not a branch name), the repository is in "detached HEAD state". This command is used to programmatically read or change HEAD without "git checkout".',
    syntax: 'git symbolic-ref HEAD refs/heads/main',
    scenario: 'You are writing a Git hook script that needs to know which branch the developer is currently on (not just the commit hash). Running "git symbolic-ref HEAD" returns "refs/heads/feature/login" when on a branch, or exits with an error when in detached HEAD state. Your hook uses this to enforce a policy: "you cannot commit directly to main". If "git symbolic-ref HEAD" returns "refs/heads/main", the hook aborts with an error message.'
  },
  {
    name: 'git update-ref',
    role: 'Internals (Plumbing)',
    explanation: 'Safely updates the SHA-1 hash stored in a reference file, with an optional safety check against the current value. This is the low-level primitive used by "git branch" and "git tag" to create or update branch and tag pointers. Using this directly gives you atomic, safe reference updates with the full POSIX file locking that "git branch" uses — essential for correct parallel Git operations.',
    syntax: 'git update-ref refs/heads/<branch> <new-hash> [<old-hash>]',
    scenario: 'You are writing a script that needs to atomically move 20 branch pointers in one operation, like after a batch history rewrite. Using "git update-ref" in a transaction (piping multiple "update refs/heads/branch hash" commands into "git update-ref --stdin -z") ensures all 20 updates are applied atomically — either all succeed or all fail. This is safer than 20 separate "git branch -f" calls which could partially succeed and leave a corrupted state.'
  },
  {
    name: 'git for-each-ref',
    role: 'Internals (Plumbing)',
    explanation: 'Iterates over all refs that match a pattern and outputs formatted information about each one, using a printf-style format string. This is the Swiss army knife of ref querying — you can extract any metadata (refname, objecttype, objectname, author, date, subject, etc.) in any format, for any refs matching a pattern. It is the foundation for custom "git log" and "git branch" style reports.',
    syntax: 'git for-each-ref --format="%(refname:short) %(objectname:short)" refs/heads/',
    scenario: 'You need to generate a report of all branches, their last commit hash, what they last committed, and who committed it, sorted by commit date. "git for-each-ref --sort=-committerdate --format=\'%(refname:short) | %(objectname:short) | %(committername) | %(subject)\' refs/heads/" produces exactly this in seconds. Paste into a spreadsheet for your monthly engineering report — this is far faster and more maintainable than any GitHub UI export.'
  },
  {
    name: 'git check-ignore',
    role: 'Utility',
    explanation: 'Debugs your .gitignore configuration by testing which .gitignore rule (and which file it is in) is responsible for a specific path being ignored. With "-v" it shows the exact file, line number, and pattern that matched. Without "-v" it just prints the paths that would be ignored. This is the authoritative answer to "why is Git ignoring this file?"',
    syntax: 'git check-ignore -v <path>',
    scenario: 'Your teammate runs "git add src/components/Button.jsx" and gets "nothing added". Confused, they ask you why. You run "git check-ignore -v src/components/Button.jsx" and see: ".gitignore:12:*.jsx" was accidentally added by someone who intended to ignore ".jsx" compiled artifacts, not source files. The output shows exactly which rule and which file to fix. Without this command, finding this kind of silent-ignore bug would require manually reading every .gitignore file in the project.'
  }
];
