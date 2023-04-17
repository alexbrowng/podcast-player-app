import { Link } from '@/components/Link';

export function Navbar() {
  return (
    <div className="w-full border-b border-b-neutral-200 py-3 shadow-sm">
      <div className="container mx-auto">
        <Link to="/" className="text-2xl font-bold">
          Podcaster
        </Link>
      </div>
    </div>
  );
}
