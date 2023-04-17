import { MatchType } from '@/types';

export function escapeRegex(string: string) {
  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export function matchRegex(string: string, match: MatchType = 'contains', sensitive = false) {
  const query = escapeRegex(string);
  const pattern = {
    startsWith: `(^${query})`,
    endsWith: `(${query}$)`,
    contains: `(${query})`,
    exact: `(^${query}$)`,
  };

  const flags = sensitive ? 'g' : 'gi';

  return new RegExp(pattern[match], flags);
}
