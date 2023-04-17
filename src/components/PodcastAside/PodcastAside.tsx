import { Link } from 'react-router-dom';

export interface PodcastAsideProps {
  id: number;
  title: string;
  description: string;
  author: string;
  image: string;
}

export function PodcastAside({ id, title, description, author, image }: PodcastAsideProps) {
  return (
    <Link to={`/podcast/${id}`}>
      <div className="relative flex flex-col space-y-2 divide-y rounded-sm border shadow">
        <div className="flex flex-col items-center px-3 py-4">
          <div className=" h-48 w-48 overflow-hidden rounded">
            <img src={image} className="w-full" />
          </div>
        </div>

        <div className="flex flex-col space-y-1.5 px-4 py-3">
          <h2 className="line-clamp-2 font-sans text-base font-bold text-black">{title}</h2>
          <p className="text-sm font-normal italic text-neutral-600">By {author}</p>
        </div>

        <div className="flex flex-col space-y-1.5 px-4 py-3">
          <p className="text-sm font-bold text-neutral-700">Description:</p>
          <p
            className="text-sm font-normal italic text-neutral-600"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </Link>
  );
}
