export const remotes = [
  {
    name: 'git remote add',
    role: 'Remote Management',
    explanation: 'Creates a named alias pointing to a remote repository URL. "origin" is the conventional name for the primary remote (your GitHub repo). "upstream" is the conventional name for the original project when you forked it. These names are just shortcuts — instead of typing the full URL every time, you type the alias. You can have as many remotes as you need.',
    syntax: 'git remote add <name> <url>',
    scenario: 'You forked an open-source project and cloned your fork. Now you need to stay in sync with the original. Run "git remote add upstream https://github.com/original/project.git". Now you have two remotes: "origin" (your fork, where you push PR branches) and "upstream" (the source, where you fetch updates). This two-remote pattern is used by every open-source contributor in the world.'
  },
  {
    name: 'git remote -v',
    role: 'Remote Management',
    explanation: 'Lists all configured remotes along with their URLs, showing both the fetch URL (where Git downloads from) and the push URL (where Git uploads to). The "-v" flag means "verbose". This is the diagnostic command you run when you\'re not sure which server your repository is connected to — especially useful when switching between SSH and HTTPS.',
    syntax: 'git remote -v',
    scenario: 'A new developer cloned your repo and runs "git push" — but it fails with "remote rejected". They run "git remote -v" and see the URL uses HTTPS with a stale password token. The fix is clear: "git remote set-url origin git@github.com:user/repo.git" to switch to SSH authentication. Without "git remote -v", diagnosing this would take much longer.'
  },
  {
    name: 'git remote set-url',
    role: 'Remote Management',
    explanation: 'Changes the URL of an existing remote without removing and re-adding it. The most common use case is switching a repository from HTTPS authentication (which uses passwords) to SSH authentication (which uses key pairs) — or updating the URL after a repository is renamed or moved.',
    syntax: 'git remote set-url <name> <new-url>',
    scenario: 'Your company renamed the GitHub organization from "old-company" to "new-company". Suddenly all pushes fail because the URL is wrong. Instead of re-cloning the entire repo, run "git remote set-url origin git@github.com:new-company/repo.git". The remote now points to the correct location and all your local branches and history remain intact.'
  },
  {
    name: 'git push --force-with-lease',
    role: 'Remote Sync',
    explanation: 'A safer version of "git push --force". Regular --force blindly overwrites the remote branch, even if someone else pushed new commits since your last fetch — you would erase their work without knowing. "--force-with-lease" first checks whether any new commits exist on the remote that you haven\'t pulled yet. If there are, it refuses and makes you fetch first. This makes force-pushing far less dangerous.',
    syntax: 'git push --force-with-lease origin <branch>',
    scenario: 'You ran "git rebase -i" to clean up your feature branch commits before opening a PR, which rewrote the commit hashes. Now "git push" is rejected because the remote history no longer matches. You MUST force-push since you intentionally rewrote history. Use "--force-with-lease" instead of "--force" — it will refuse if a teammate snuck a commit in since your last fetch, saving you from erasing their work.'
  },
  {
    name: 'git push --tags',
    role: 'Remote Sync',
    explanation: 'Normal "git push" does NOT push tags. Tags are version markers (like v1.0.0) that must be pushed explicitly. This flag pushes all local tags that don\'t exist on the remote yet. Tags are used by package registries, CI/CD systems, and GitHub to create official Releases. Forgetting to push tags is a common mistake that means your version numbers don\'t appear on GitHub.',
    syntax: 'git push origin --tags | git push origin v1.4.0',
    scenario: 'You just tagged a new release locally: "git tag -a v2.1.0 -m \'Release: new dashboard\'" . You push your code ("git push origin main") — but the release tag is invisible on GitHub. Run "git push origin --tags" to make all local tags appear on GitHub. Now your Release page shows v2.1.0 and your CI/CD system can trigger the deployment pipeline for that specific version.'
  },
  {
    name: 'git fetch --all',
    role: 'Sync',
    explanation: 'Downloads the latest state of ALL remotes (not just the default "origin") simultaneously. After fetching, your local copy has up-to-date knowledge of every branch on every remote — but nothing in your Working Directory or local branches changes. Think of it as "synchronizing your map of the world" without actually moving to any new location.',
    syntax: 'git fetch --all [--prune]',
    scenario: 'Your project has two remotes: "origin" (your fork) and "upstream" (the original). Before starting a rebase, run "git fetch --all". Now "origin/main" and "upstream/main" are both up to date in your local tracking. You can rebase your feature branch onto "upstream/main" with full confidence you have the very latest source code.'
  },
  {
    name: 'git fetch --prune',
    role: 'Cleanup',
    explanation: 'When team members delete remote branches on GitHub, your local copy still shows stale references to those deleted branches (e.g., "origin/feature/deleted"). The "--prune" flag removes these dead remote-tracking references during a fetch, keeping your local branch list clean and current. Add this to your regular workflow to avoid confusion from seeing branches that no longer exist.',
    syntax: 'git fetch --prune | git remote prune origin',
    scenario: 'After 3 months of team development, your "git branch -a" output shows 40 remote branches — but most were merged and deleted weeks ago. Run "git fetch --prune" to clean up the stale references. Your branch list drops to 8 active branches. Now you can clearly see what is actually in-flight without wading through a graveyard of completed work.'
  },
  {
    name: 'git pull --rebase',
    role: 'Sync',
    explanation: 'Downloads remote changes (like a fetch) then replays your local unpushed commits on top of them (rebase) instead of creating a merge commit. The result is a clean, linear history without the "Merge branch main into feature" noise. This is the recommended pull strategy in many professional teams because it keeps the history readable and bisectable.',
    syntax: 'git pull --rebase [remote] [branch]',
    scenario: 'You have 2 local commits on your feature branch that haven\'t been pushed. Your teammate pushed 3 new commits to the shared branch. If you run "git pull", Git creates a merge commit — ugly. "git pull --rebase" instead downloads the 3 commits then replays your 2 on top, creating a linear sequence: remote commits first, then yours. Your history reads like a clean timeline, not a tangled graph.'
  },
  {
    name: 'git submodule add',
    role: 'Advanced',
    explanation: 'Adds another Git repository as a sub-repository inside your project at a specific path. The parent repo tracks exactly which commit of the submodule to use — giving you pinned, reproducible dependencies at the Git level. Common in C/C++ projects, game engines, and any situation where you need to embed another whole repository as a dependency with version pinning.',
    syntax: 'git submodule add <url> [path]',
    scenario: 'Your game engine repo needs to embed the "graphics-library" as a dependency, and you need to pin it to a specific commit — not just a package version. Run "git submodule add https://github.com/org/graphics-library.git libs/graphics". Now your repo records exactly which commit of graphics-library you tested against. When a teammate clones your repo and runs "git submodule update --init", they get the exact same pinned version.'
  },
  {
    name: 'git submodule update',
    role: 'Advanced',
    explanation: 'Initializes and checks out submodules to the exact commits recorded in the parent repository. Without running this after cloning a repo that has submodules, the submodule directories will be empty. The "--init --recursive" version handles nested submodules too (submodules inside submodules).',
    syntax: 'git submodule update --init --recursive',
    scenario: 'You just cloned a large C++ project and notice several directories are empty. The README says "run git submodule update --init --recursive after cloning." Running this command populates all the empty submodule directories with the exact code the project was tested with. Without this step, the build would fail with "missing library" errors that would be very confusing to debug.'
  }
];
