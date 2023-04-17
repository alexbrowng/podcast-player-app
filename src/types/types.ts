export type MatchType = 'startsWith' | 'endsWith' | 'contains' | 'exact';

export interface IPodcast {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly image: string;
}

export interface IEpisode {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly date: number;
  readonly duration: number;
  readonly url: string;
}
