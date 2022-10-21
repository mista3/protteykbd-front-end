import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { characterService } from '@/services';
import { CharacterEntity, CharacterFilterOptions } from '@/domain';
import { FETCH_STATUS } from '@/global';

interface SearchState {
  characters: CharacterEntity[];
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  fetchStatus: FETCH_STATUS;
}

const initialState: SearchState = {
  characters: [],
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  fetchStatus: FETCH_STATUS.IDLE,
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
    builder
      .addCase(searchCharacters.pending, (state) => {
        state.fetchStatus = FETCH_STATUS.PENDING;
      })
      .addCase(searchCharacters.fulfilled, (state, action) => {
        state.fetchStatus = FETCH_STATUS.FULFILLED;
        state.characters = action.payload;
      })
      .addCase(searchCharacters.rejected, (state) => {
        state.fetchStatus = FETCH_STATUS.REJECTED;
      });
  },
});

export const searchStoreActions = { ...searchStore.actions, searchCharacters };
export const searchStoreReducer = searchStore.reducer;
