import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortySearchStoreReducer } from './modules/RickAndMortySearch';

export const store = configureStore({
  reducer: {
    rickAndMortySearch: rickAndMortySearchStoreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
