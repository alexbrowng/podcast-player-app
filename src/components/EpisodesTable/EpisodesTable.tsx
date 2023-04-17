import { Link } from '@/components/Link';
import { IEpisode } from '@/types';
import { toDate, toMMSS } from '@/utils/date';

export interface EpisodesTableProps {
  episodes: IEpisode[];
}

export function EpisodesTable({ episodes }: EpisodesTableProps) {
  return (
    <div className="w-full rounded border p-3 shadow">
      <table className="w-full">
        <thead className="border-b-2">
          <tr className="text-left">
            <th className="px-1.5 py-3">Title</th>
            <th className="px-1.5 py-3">Date</th>
            <th className="px-1.5 py-3">Duration</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map(episode => (
            <tr key={episode.id} className="border-b hover:bg-neutral-50">
              <td className="px-1.5 py-3">
                <Link to={`episode/${episode.id}`}>{episode.title}</Link>
              </td>
              <td className="px-1.5 py-3">{toDate(episode.date)}</td>
              <td className="px-1.5 py-3">{toMMSS(episode.duration)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
