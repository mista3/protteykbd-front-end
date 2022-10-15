import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from './Search.types';
import { characterService } from '@/services';
import { CharacterFilterOptions } from '@/domain';

const initialState: SearchState = {
  characters: [],
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
};

const searchCharacters = createAsyncThunk('search/searchCharacters', async (params: CharacterFilterOptions) => {
  const result = await characterService.searchCharacters(params);
  return result;
});

const searchStore = createSlice({
  name: 'search',
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

export const searchStoreActions = { ...searchStore.actions, searchCharacters };
export const searchStoreReducer = searchStore.reducer;
