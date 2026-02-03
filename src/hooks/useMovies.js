import { useQuery } from "@tanstack/react-query";
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

import {
  fetchTrendingMovies,
  fetchAllGenres,
  fetchMoviesByGenre,
} from "../services/movieService";

export const useTrendingMovies = (page) => {
  return useQuery({
    queryKey: ["trendingMovies", page],
    queryFn: () => fetchTrendingMovies(page),
    select: (data) => data.results,
  });
};

export const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchAllGenres,
  });
};

export const useMoviesByGenre = (genreId, page = 1) => {
  return useQuery({
    queryKey: ["moviesByGenre", genreId, page],
    queryFn: () => fetchMoviesByGenre(genreId, page),
    enabled: !!genreId,
  });
};

export const useMovieDetails = (id) => {
  console.log("Hook received ID:", id);
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () =>
      fetch(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`,
      ).then((res) => res.json()),
    enabled: !!id,
  });
};
