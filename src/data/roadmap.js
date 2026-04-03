export const roadmapData = [
  {
    id: 'introduction',
    label: 'Introduction',
    level: 1,
    desc: 'The foundations of version control.',
    next: 'setup'
  },
  {
    id: 'setup',
    label: 'Initial Setup',
    level: 2,
    desc: 'Configure your identity and environment.',
    next: 'basics'
  },
  {
    id: 'basics',
    label: 'Basic Commands',
    level: 3,
    desc: 'The everyday add, commit, and status workflow.',
    next: 'branching'
  },
  {
    id: 'branching',
    label: 'Branching Mastery',
    level: 4,
    desc: 'Isolating features and merging code.',
    next: 'advanced'
  },
  {
    id: 'advanced',
    label: 'Advanced Git',
    level: 5,
    desc: 'Stashing, rebasing, and undoing mistakes.',
    next: 'teams'
  },
  {
    id: 'teams',
    label: 'Collaboration',
    level: 6,
    desc: 'Forks, PRs, and team code reviews.',
    next: 'orgs'
  },
  {
    id: 'orgs',
    label: 'Organizations',
    level: 7,
    desc: 'Enterprise management and CI/CD.',
    next: 'practice'
  },
  {
    id: 'commands',
    label: '160+ Commands',
    level: 8,
    desc: 'The complete reference encyclopedia.',
    next: null
  }
];
