import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RickAndMortySearchInitialState } from './RickAndMortySearch.consts';

const rickAndMortySearchStore = createSlice({
  name: 'rickAndMortySearch',
  initialState: RickAndMortySearchInitialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const rickAndMortySearchStoreActions = rickAndMortySearchStore.actions;
export const rickAndMortySearchStoreReducer = rickAndMortySearchStore.reducer;
