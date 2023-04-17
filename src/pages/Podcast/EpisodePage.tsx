import { useParams } from 'react-router-dom';

import { EpisodePlayer } from '@/components/EpisodePlayer';
import { useEpisode } from '@/hooks/use-episode';

export function EpisodePage() {
  const { podcastId = '', episodeId = '' } = useParams();

  const episode = useEpisode({ podcastId: parseInt(podcastId), episodeId: parseInt(episodeId) });

  if (!episode) return null;

  return <EpisodePlayer title={episode.title} description={episode.description} url={episode.url} />;
}
