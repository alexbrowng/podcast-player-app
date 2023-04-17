import { useMemo } from 'react';

import { usePodcasts } from '../use-podcasts';

export interface UsePodcastProps {
  podcastId: number;
}

export function usePodcast({ podcastId }: UsePodcastProps) {
  const { data: podcasts = [] } = usePodcasts();
  return useMemo(() => podcasts.find(podcast => podcast.id === podcastId), [podcastId, podcasts]);
}
