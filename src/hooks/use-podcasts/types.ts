export interface Payload {
  feed: {
    id: { label: string };
    title: { label: string };
    icon: { label: string };
    author: { name: { label: string }; uri: { label: string } };
    updated: { label: string };
    rights: { label: string };
    entry: {
      id: { label: string; attributes: { 'im:id': string } };
      title: { label: string };
      summary: { label: string };
      category: { attributes: { 'im:id': string; term: string; scheme: string; label: string } };
      'im:name': { label: string };
      'im:artist': { label: string; attributes: { href: string } };
      'im:image': { label: string; attributes: { height: number } }[];
      'im:price': { label: string; attributes: { amount: string; currency: string } };
      'im:contentType': { attributes: { term: string; label: string } };
      'im:releaseDate': { label: string; attributes: { label: string } };
      rights: { label: string };
    }[];
  };
}
