import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';


export const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }).concat(shazamApi.middleware)
});