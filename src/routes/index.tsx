import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '@/components/Layout';
import { EpisodePage, EpisodesPage, HomePage, NotFoundPage, PodcastPage } from '@/pages';

export function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="podcast/:podcastId" element={<PodcastPage />}>
            <Route index element={<EpisodesPage />} />
            <Route path="episode/:episodeId" element={<EpisodePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
