import axios from 'axios';
import { rickAndMortyCharacterAdapter } from '@/adapters';
import { RickAndMortyCharacterFilterOptions, RickAndMortyCharacterInterface } from '@/domain';

export const rickAndMortyCharacterService: RickAndMortyCharacterInterface = {
  searchCharacters: async (params?: RickAndMortyCharacterFilterOptions) => {
    const res = await axios.get('https://rickandmortyapi.com/api/character/', { params });
    return rickAndMortyCharacterAdapter.toInternal(res.data);
  },
};
