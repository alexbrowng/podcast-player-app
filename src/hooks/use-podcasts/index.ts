import { useQuery } from '@tanstack/react-query';

import { DAY } from '@/constants';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { IPodcast } from '@/types';

import { Payload } from './types';

export function getPodcasts(): Promise<IPodcast[]> {
  return fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
    .then(response => response.json())
    .then((payload: Payload) =>
      payload.feed.entry.map(entry => ({
        id: parseInt(entry.id.attributes['im:id']),
        title: entry.title.label,
        description: entry.summary.label,
        author: entry['im:artist'].label,
        image: entry['im:image'][2].label,
      })),
    )
    .then(payload => {
      localStorage.setItem('podcasts', JSON.stringify({ timestamp: Date.now(), payload }));
      return payload;
    });
}

type QueryFnType = typeof getPodcasts;

interface UsePodcastsParams {
  config?: QueryConfig<QueryFnType>;
}

export function usePodcasts({ config = {} }: UsePodcastsParams = {}) {
  let initialData, initialDataUpdatedAt;
  const cache = localStorage.getItem('podcasts');

  if (cache) {
    const { timestamp, payload } = JSON.parse(cache) as { timestamp: number; payload: IPodcast[] };
    if (Date.now() - timestamp < DAY) {
      initialData = payload;
      initialDataUpdatedAt = timestamp;
    }
  }

  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    initialData,
    initialDataUpdatedAt,
    queryKey: ['podcasts'],
    queryFn() {
      return getPodcasts();
    },
  });
}
