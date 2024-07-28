import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const MovieApi = createApi({
  reducerPath: "MovieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://yts.mx/api/v2",
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (query) => `/list_movies.json${query}`,
    }),
    getSingleMovies: builder.query({
      query: (id) =>
        `/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`,
    }),
    getSuggestionsMovies: builder.query({
      query: (id) => `/movie_suggestions.json?movie_id=${id}`,
    }),
    // getMoviesPagination: builder.query({
    //   query: (num) => `/list_movies.json?page=${num}`,
    // }),
  }),
});

export default MovieApi;
export const {
  useGetMoviesQuery,
  useGetSingleMoviesQuery,
  useGetSuggestionsMoviesQuery,
  // useGetMoviesPaginationQuery,
} = MovieApi;

// ?page=2
