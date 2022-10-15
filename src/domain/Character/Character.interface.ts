import { CharacterEntity, CharacterFilterOptions } from '@/domain';

export interface CharacterInterface {
  searchCharacters: (params?: CharacterFilterOptions) => Promise<CharacterEntity[]>;
}
