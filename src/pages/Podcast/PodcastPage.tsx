import { Outlet, useParams } from 'react-router-dom';

import { Page } from '@/components/Page';
import { PodcastAside } from '@/components/PodcastAside';
import { usePodcast } from '@/hooks/use-podcast';

export function PodcastPage() {
  const { podcastId = '' } = useParams();

  const podcast = usePodcast({ podcastId: parseInt(podcastId) });

  if (!podcast) return null;

  return (
    <Page>
      <div className="flex w-full space-x-9">
        <div className="flex w-80 shrink-0 flex-col">
          <PodcastAside
            id={podcast.id}
            title={podcast.title}
            description={podcast.description}
            author={podcast.author}
            image={podcast.image}
          />
        </div>
        <div className="flex w-full flex-col">
          <Outlet />
        </div>
      </div>
    </Page>
  );
}
