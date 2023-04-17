import { useIsFetching } from '@tanstack/react-query';

import { Link } from '@/components/Link';

export function Navbar() {
  const isFetching = useIsFetching();

  return (
    <div className="w-full border-b border-b-neutral-200 py-3 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Podcaster
        </Link>

        {isFetching ? <div className="h-4 w-4 animate-ping rounded-full bg-blue-400" /> : null}
      </div>
    </div>
  );
}
