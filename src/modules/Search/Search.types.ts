import { CharacterEntity } from '@/domain';

export interface SearchState {
  characters: CharacterEntity[];
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}
