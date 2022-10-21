import { CharacterDto, CharacterEntity } from '@/domain';

export const characterAdapter = {
  toInternal: (data: CharacterDto[]): CharacterEntity[] =>
    data.map((character: CharacterDto) => {
      const { episode, ...rest } = character;
      return { ...rest, episodes: character.episode };
    }),
};
