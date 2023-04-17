export interface PodcastResult {
  wrapperType: 'track';
  kind: 'podcast';
  releaseDate: string;
  trackId: number;
  trackName: string;
  trackCensoredName: string;
  trackViewUrl: string;
  trackPrice: number;
  trackCount: number;
  trackTimeMillis: number;
  trackExplicitness: string;
  collectionId: number;
  collectionName: string;
  collectionCensoredName: string;
  collectionViewUrl: string;
  collectionPrice: number;
  collectionHdPrice: number;
  collectionExplicitness: string;
  contentAdvisoryRating: string;
  primaryGenreName: string;
  genres: string[];
  genreIds: string[];
  artistId: string;
  artistName: string;
  artistViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  artworkUrl600: string;
  feedUrl: string;
  country: string;
  currency: string;
}

export interface EpisodeResult {
  wrapperType: 'podcastEpisode';
  kind: 'podcast-episode';
  releaseDate: string;
  episodeGuid: string;
  description: string;
  shortDescription: string;
  episodeFileExtension: string;
  episodeContentType: string;
  closedCaptioning: string;
  trackId: number;
  trackName: string;
  trackViewUrl: string;
  trackTimeMillis: number;
  collectionId: number;
  collectionName: string;
  collectionViewUrl: string;
  contentAdvisoryRating: string;
  genres: { id: string; name: string }[];
  artistIds: string[];
  artistViewUrl: string;
  artworkUrl60: string;
  artworkUrl160: string;
  artworkUrl600: string;
  feedUrl: string;
  episodeUrl: string;
  previewUrl: string;
  country: string;
}

export interface Payload {
  resultCount: number;
  results: (PodcastResult | EpisodeResult)[];
}
