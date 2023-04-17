import { useMemo } from 'react';

import { useEpisodes } from '../use-episodes';

export interface UseEpisodeProps {
  podcastId: number;
  episodeId: number;
}

export function useEpisode({ podcastId, episodeId }: UseEpisodeProps) {
  const { data: episodes = [] } = useEpisodes({ podcastId });
  return useMemo(() => episodes.find(episode => episode.id === episodeId), [episodeId, episodes]);
}
