import { configureStore } from "@reduxjs/toolkit";
import MovieApi from "../features/MovieApi";

export const store = configureStore({
  reducer: {
    [MovieApi.reducerPath]: MovieApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MovieApi.middleware),
});
