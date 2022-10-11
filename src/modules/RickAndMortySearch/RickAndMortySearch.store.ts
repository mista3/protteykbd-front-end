import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RickAndMortySearchState } from './RickAndMortySearch.types';
import { rickAndMortyCharacterService } from '@/services';

export const initialState: RickAndMortySearchState = {
  characters: [],
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
};

const searchCharacters = createAsyncThunk('rickAndMortySearch/searchCharacters', async () => {
  const result = await rickAndMortyCharacterService.searchCharacters();
  return result;
});

const rickAndMortySearchStore = createSlice({
  name: 'rickAndMortySearch',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setSpecies: (state, action: PayloadAction<string>) => {
      state.species = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchCharacters.fulfilled, (state, action) => {
      state.characters = action.payload;
    });
  },
});

export const rickAndMortySearchStoreActions = { ...rickAndMortySearchStore.actions, searchCharacters };
export const rickAndMortySearchStoreReducer = rickAndMortySearchStore.reducer;
