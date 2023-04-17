import { useState } from 'react';

import { Page } from '@/components/Page';
import { PodcastCard } from '@/components/PodcastCard';
import { SearchInput } from '@/components/SearchInput';
import { usePodcasts } from '@/hooks/use-podcasts';
import { matchRegex } from '@/utils/regex';

export function HomePage() {
  const [filter, setFilter] = useState<string>('');

  const { data: podcasts = [] } = usePodcasts();

  let filteredPodcasts = podcasts;

  if (filter) {
    const regex = matchRegex(filter);
    filteredPodcasts = podcasts.filter(
      podcast => podcast.title.match(regex) !== null || podcast.author.match(regex) !== null,
    );
  }

  return (
    <Page>
      <div className="flex w-full items-center justify-end space-x-3 px-3">
        <div>
          <span className="rounded bg-blue-500 p-1 text-lg font-bold text-white">{filteredPodcasts.length}</span>
        </div>

        <SearchInput value={filter} onChange={value => setFilter(value)} placeholder="Filter podcasts..." />
      </div>

      <div className="grid grid-cols-4 gap-8">
        {filteredPodcasts.map(podcast => (
          <PodcastCard
            key={podcast.id}
            id={podcast.id}
            title={podcast.title}
            author={podcast.author}
            image={podcast.image}
          />
        ))}
      </div>
    </Page>
  );
}
