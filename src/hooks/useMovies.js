import { useQuery, keepPreviousData } from "@tanstack/react-query";
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

import {
  fetchTrendingMovies,
  fetchAllGenres,
  fetchMoviesByGenre,
  fetchActorDetails,
  fetchActorMovies,
  fetchMovieVideos,
} from "../services/movieService";

export const useTrendingMovies = (page) => {
  return useQuery({
    queryKey: ["trendingMovies", page],
    queryFn: () => fetchTrendingMovies(page),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });
};

export const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchAllGenres,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });
};

export const useMoviesByGenre = (genreId, page = 1) => {
  return useQuery({
    queryKey: ["moviesByGenre", genreId, page],
    queryFn: () => fetchMoviesByGenre(genreId, page),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    enabled: !!genreId,
  });
};

export const useMovieDetails = (id) => {
  console.log("Hook received ID:", id);
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () =>
      fetch(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits,recommendations,reviews`,
      ).then((res) => res.json()),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    enabled: !!id,
  });
};

export function useActorData(id) {
  const details = useQuery({
    queryKey: ["actor", id],
    queryFn: () => fetchActorDetails(id),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });

  const movies = useQuery({
    queryKey: ["actor-movies", id],
    queryFn: () => fetchActorMovies(id),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });

  return { details, movies };
}

export const useMovieVideos = (id) => {
  return useQuery({
    queryKey: ["movie-videos", id],
    queryFn: () => fetchMovieVideos(id),
    enabled: !!id,
  });
};
