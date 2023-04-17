import { Link } from 'react-router-dom';

export interface PodcastCardProps {
  id: number;
  title: string;
  author: string;
  image: string;
}

export function PodcastCard({ id, title, author, image }: PodcastCardProps) {
  return (
    <Link to={`/podcast/${id}`}>
      <div className="pt-12">
        <div className="relative">
          <div className="absolute -top-12 w-full">
            <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
              <img src={image} className="w-full" />
            </div>
          </div>
          <div className="flex flex-col space-y-2 rounded-sm border px-4 pb-3 pt-24 text-center shadow">
            <h2 className="line-clamp-2 font-sans text-xl font-bold text-black">{title}</h2>
            <p className="text-sm font-medium text-neutral-500 ">Author: {author}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
