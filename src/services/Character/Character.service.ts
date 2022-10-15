import axios from 'axios';
import { characterAdapter } from '@/adapters';
import { CharacterFilterOptions, CharacterInterface } from '@/domain';

export const characterService: CharacterInterface = {
  searchCharacters: async (params?: CharacterFilterOptions) => {
    const res = await axios.get('https://rickandmortyapi.com/api/character/', { params });
    return characterAdapter.toInternal(res.data.results);
  },
};
