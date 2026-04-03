export const undoing = [
  {
    name: 'git restore',
    role: 'Restoration',
    explanation: 'The modern command for safely discarding changes in either the Working Directory or the Staging Area. "git restore <file>" throws away uncommitted edits to a file, restoring it to match the last commit. "git restore --staged <file>" unstages a file (moves it back to the Working Directory) without deleting the changes. This command replaced the confusing overloaded behavior of "git checkout -- <file>".',
    syntax: 'git restore <file> | git restore --staged <file>',
    scenario: 'You accidentally deleted 200 lines from "App.jsx" and haven\'t committed yet. Run "git restore App.jsx" and it instantly snaps back to its last committed state — as if you never touched it. Alternatively, you staged a password file by mistake: "git restore --staged .env" removes it from staging but keeps the file on disk so you don\'t lose your local configuration.'
  },
  {
    name: 'git reset --soft',
    role: 'Reset',
    explanation: 'Moves the branch pointer back to a previous commit, but leaves all the changes from the removed commit(s) safely staged in the Staging Area. Think of it as "uncommitting" — the snapshot is erased from history, but all the work is preserved and ready to be re-committed differently. This is the safest reset option because no work is lost.',
    syntax: 'git reset --soft HEAD~<number>',
    scenario: 'You accidentally committed to the wrong branch. The commit is good code, you just need to move it. Run "git reset --soft HEAD~1" — the commit disappears from history, but all the changes are still staged. Now switch to the correct branch and run "git commit" — the same work appears in the right place. No code lost, just relocated.'
  },
  {
    name: 'git reset --mixed',
    role: 'Reset',
    explanation: 'The DEFAULT reset behavior when you don\'t specify a mode. Moves the branch pointer back AND unstages the changes from the removed commit, but keeps the modified files in your Working Directory. The work is still there — you just need to re-examine and re-stage it more carefully. This is useful when you want to recommit with different/more selective staging.',
    syntax: 'git reset HEAD~<number>',
    scenario: 'You made one big commit with 10 file changes that should have been 3 separate, logical commits. Run "git reset HEAD~1" (mixed). Now all 10 files are modified but unstaged. You can carefully re-stage and re-commit them in three logical groups: "feat: add user model", "feat: add user API routes", "feat: add user frontend form". Clean history, same work.'
  },
  {
    name: 'git reset --hard',
    role: 'Reset',
    explanation: 'The nuclear option. Moves the branch pointer back AND permanently destroys the working files to match the target commit. ALL changes since that commit — staged, unstaged, everything — are gone. There is no Recycle Bin. However, if you committed before running this, the reflog holds a record for 90 days, giving you a potential recovery window.',
    syntax: 'git reset --hard HEAD~<number> | git reset --hard <commit-hash>',
    scenario: 'You spent an hour going down a completely wrong architectural path. Nothing is worth keeping. Run "git reset --hard HEAD~5" to erase the last 5 commits and all their code completely. The project snaps back to the last good state instantly. Emergency use only — always double-check you have no unsaved valuable work before running this.'
  },
  {
    name: 'git revert',
    role: 'Safe Undo',
    explanation: 'Creates a brand NEW commit that reverses the effects of a previous commit. Unlike reset, it does NOT rewrite history — the original "bad" commit remains, and a new "undo" commit is added on top. This makes it completely safe to use on shared branches because other teammates\' copies are not broken. The history truthfully records: "this happened, then it was undone."',
    syntax: 'git revert <commit-hash> | git revert HEAD',
    scenario: 'A bug was introduced in commit "abc1234" that made it to the main branch and was pushed. Three teammates have already pulled this commit. You cannot use "git reset" — that would break their copies. Instead, run "git revert abc1234". Git creates a new commit that undoes exactly those changes. Everyone on the team runs "git pull" and gets the fix automatically. Professional, safe, and traceable.'
  },
  {
    name: 'git commit --amend',
    role: 'History Editing',
    explanation: 'Modifies the MOST RECENT commit — either its message, its staged changes, or both. It replaces the last commit entirely with a new one (technically it creates a new commit and discards the old). This looks seamless in the log. Critical rule: only amend commits that have NOT yet been pushed to a shared remote. Amending a pushed commit rewrites history and will break your teammates\' repos.',
    syntax: 'git commit --amend -m "new message" | git commit --amend --no-edit',
    scenario: 'You just committed and immediately noticed a typo in the message: "feat(auth): ad login" instead of "feat(auth): add login". Run "git commit --amend -m \'feat(auth): add login\'" — the typo commit is replaced instantly. No trace of the mistake remains. Or add a missed file: "git add forgotten-file.js && git commit --amend --no-edit" to fold it into the last commit without changing the message.'
  },
  {
    name: 'git reflog',
    role: 'Recovery',
    explanation: 'Git\'s "black box flight recorder". Every single time HEAD moves — every commit, checkout, reset, merge, rebase — the reflog records it. This includes commits that are no longer reachable from any branch (e.g., after a hard reset). Entries are kept for 90 days. The reflog is local only — it lives in your .git folder and is NOT shared with the remote. It is your absolute last line of defense against catastrophic data loss.',
    syntax: 'git reflog [show] [--all]',
    scenario: 'You ran "git reset --hard HEAD~3" thinking you were removing 3 trivial commits — but one of them had 4 hours of important work in it. Panic. Run "git reflog". You see "HEAD@{2}: commit: feat: the important work". Copy that hash and run "git checkout -b recovery-branch abc1234". Your lost work is fully restored in a new branch. The reflog just saved your job.'
  },
  {
    name: 'git stash drop',
    role: 'Cleanup',
    explanation: 'Permanently deletes a specific stash entry from the stash stack without applying it. Stashes accumulate over time and become confusing if not cleaned up. Unlike "git stash pop" which applies-then-deletes, "drop" just deletes. Use "git stash list" first to see all stashes and their index numbers.',
    syntax: 'git stash drop [stash@{n}]',
    scenario: 'You ran "git stash list" and found 7 old stashes from 3 months ago labelled "WIP: old idea" that you never ended up using. Run "git stash drop stash@{3}" to clean up the obsolete ones. A clean stash list means when you do need to recover something, you can quickly find it without scrolling through irrelevant old experiments.'
  },
  {
    name: 'git clean',
    role: 'Cleanup',
    explanation: 'Removes untracked files and directories from the Working Directory. These are files that Git is not tracking at all (never been added). This is useful when a build process creates generated files, or when you want to get back to a pristine state. Always run with "-n" (dry run) first to preview what would be deleted — git clean destroys files permanently with no undo.',
    syntax: 'git clean -n | git clean -fd',
    scenario: 'Your build tool generated hundreds of compiled files (.o, .pyc, dist/) that aren\'t in .gitignore and are cluttering your directory. Run "git clean -n" first to see exactly what would be deleted (dry run, no changes made). Satisfied? Run "git clean -fd" to actually delete all untracked files and directories. Your working directory is now completely pristine.'
  }
];
