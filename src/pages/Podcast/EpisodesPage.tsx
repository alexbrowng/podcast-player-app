import { useParams } from 'react-router-dom';

import { EpisodesTable } from '@/components/EpisodesTable';
import { useEpisodes } from '@/hooks/use-episodes';

export function EpisodesPage() {
  const { podcastId = '' } = useParams();

  const { data: episodes = [] } = useEpisodes({ podcastId: parseInt(podcastId) });

  return <EpisodesTable episodes={episodes} />;
}
