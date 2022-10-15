import { configureStore } from '@reduxjs/toolkit';
import { searchStoreReducer } from '@/modules';

export const store = configureStore({
  reducer: {
    search: searchStoreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
