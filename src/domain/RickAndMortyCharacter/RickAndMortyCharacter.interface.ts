import { RickAndMortyCharacterEntity, RickAndMortyCharacterFilterOptions } from '@/domain';

export interface RickAndMortyCharacterInterface {
  searchCharacters: (params?: RickAndMortyCharacterFilterOptions) => Promise<RickAndMortyCharacterEntity[]>;
}
