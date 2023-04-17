export interface EpisodePlayerProps {
  title: string;
  description: string;
  url: string;
}

export function EpisodePlayer({ title, description, url }: EpisodePlayerProps) {
  return (
    <div className="flex flex-col divide-y rounded border shadow">
      <div className="flex flex-col space-y-1.5 px-4 py-5">
        <h2 className="font-sans text-xl font-bold text-black">{title}</h2>
        <p
          className="font-sans text-sm font-normal italic text-neutral-700"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="px-4 py-5">
        <audio controls className="w-full">
          <source src={url} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}
