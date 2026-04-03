import { porcelains } from './porcelains';
import { history } from './history';
import { branching } from './branching';
import { remotes } from './remotes';
import { undoing } from './undoing';
import { plumbing_i } from './plumbing_i';
import { plumbing_ii } from './plumbing_ii';
import { maintenance } from './maintenance';
import { interop } from './interop';
import { niche } from './niche';

// The Ultimate 160+ Git Command Encyclopedia
export const allCommands = [
  ...porcelains,
  ...history,
  ...branching,
  ...remotes,
  ...undoing,
  ...plumbing_i,
  ...plumbing_ii,
  ...maintenance,
  ...interop,
  ...niche
];

export const getCommandsByRole = (role) => {
  return allCommands.filter(cmd => cmd.role === role);
};

export const getRoles = () => {
  return [...new Set(allCommands.map(cmd => cmd.role))].sort();
};
