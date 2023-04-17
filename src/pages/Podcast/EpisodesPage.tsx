import { useParams } from 'react-router-dom';

import { EpisodesTable } from '@/components/EpisodesTable';
import { useEpisodes } from '@/hooks/use-episodes';

export function EpisodesPage() {
  const { podcastId = '' } = useParams();

  const { data: episodes = [] } = useEpisodes({ podcastId: parseInt(podcastId) });

  return (
    <div className="flex flex-col space-y-5">
      <div className="rounded border p-3 shadow">
        <h3 className="font-sans text-lg font-bold">Episodes: {episodes.length}</h3>
      </div>
      <EpisodesTable episodes={episodes} />
    </div>
  );
}
