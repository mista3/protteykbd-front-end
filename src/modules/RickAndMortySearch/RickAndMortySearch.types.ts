import { RickAndMortyCharacterEntity } from '@/domain';

export interface RickAndMortySearchState {
  characters: RickAndMortyCharacterEntity[];
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}
