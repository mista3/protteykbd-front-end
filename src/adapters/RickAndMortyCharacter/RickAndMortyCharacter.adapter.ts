import { RickAndMortyCharacterEntity } from '@/domain';

export const rickAndMortyCharacterAdapter = {
  toInternal: (data: any): RickAndMortyCharacterEntity[] =>
    data.map((item: any) => ({
      id: +item.id,
      name: `${item.name}`,
      status: `${item.status}`,
      species: `${item.species}`,
      type: `${item.type}`,
      gender: `${item.gender}`,
      origin: {
        name: `${item.origin?.name}`,
        url: `${item.origin?.url}`,
      },
      location: {
        name: `${item.location?.name}`,
        url: `${item.location?.url}`,
      },
      image: `${item.image}`,
      episode: ['1'],
      url: `${item.url}`,
      created: `${item.created}`,
    })),
};