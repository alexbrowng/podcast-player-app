import { useQuery } from '@tanstack/react-query';

import { DAY } from '@/constants';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { IEpisode } from '@/types';

import { Payload, EpisodeResult } from './types';

export interface GetEpisodesProps {
  podcastId: number;
}

export function getEpisodes({ podcastId }: GetEpisodesProps): Promise<IEpisode[]> {
  return fetch(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=200`)
    .then(response => response.json())
    .then((payload: Payload) => {
      const episodes = payload.results.filter(result => result.kind === 'podcast-episode') as EpisodeResult[];

      return episodes.map(episode => ({
        id: episode.trackId,
        title: episode.trackName,
        description: episode.description,
        date: new Date(episode.releaseDate).getTime(),
        duration: episode.trackTimeMillis,
        url: episode.episodeUrl,
      }));
    })
    .then(payload => {
      localStorage.setItem(`podcast:${podcastId}`, JSON.stringify({ timestamp: Date.now(), payload }));
      return payload;
    });
}

type QueryFnType = typeof getEpisodes;

interface UseEpisodesParams {
  podcastId: number;
  config?: QueryConfig<QueryFnType>;
}

export function useEpisodes({ podcastId, config = {} }: UseEpisodesParams) {
  let initialData, initialDataUpdatedAt;
  const cache = localStorage.getItem(`podcast:${podcastId}`);

  if (cache) {
    const { timestamp, payload } = JSON.parse(cache) as { timestamp: number; payload: IEpisode[] };
    if (Date.now() - timestamp < DAY) {
      initialData = payload;
      initialDataUpdatedAt = timestamp;
    }
  }

  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    initialData,
    initialDataUpdatedAt,
    queryKey: ['podcasts', podcastId, 'episodes'],
    queryFn() {
      return getEpisodes({ podcastId });
    },
  });
}
