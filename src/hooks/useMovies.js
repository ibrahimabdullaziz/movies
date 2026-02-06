import { useQuery, useSuspenseQuery, keepPreviousData } from "@tanstack/react-query";
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

import {
  fetchTrendingMovies,
  fetchDiscoverMovies,
  fetchAllGenres,
  fetchMoviesByGenre,
  fetchActorDetails,
  fetchActorMovies,
  fetchMovieVideos,
} from "../services/movieService";

export const useTrendingMovies = (page) => {
  return useSuspenseQuery({
    queryKey: ["trendingMovies", page],
    queryFn: () => fetchTrendingMovies(page),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });
};

export const useDiscoverMovies = (page = 1, sortBy = "popularity.desc") => {
  return useSuspenseQuery({
    queryKey: ["discoverMovies", page, sortBy],
    queryFn: () => fetchDiscoverMovies(page, sortBy),
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

export const useMoviesByGenre = (genreId, page = 1, sortBy = "popularity.desc") => {
  return useQuery({
    queryKey: ["moviesByGenre", genreId, page, sortBy],
    queryFn: () => fetchMoviesByGenre(genreId, page, sortBy),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    enabled: !!genreId,
  });
};

export const useMovieDetails = (id) => {
  return useSuspenseQuery({
    queryKey: ["movie", id],
    queryFn: () =>
      fetch(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits,recommendations,reviews`,
      ).then((res) => res.json()),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });
};

export function useActorData(id) {
  const details = useQuery({
    queryKey: ["actor", id],
    queryFn: () => fetchActorDetails(id),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    enabled: !!id,
  });

  const movies = useQuery({
    queryKey: ["actor-movies", id],
    queryFn: () => fetchActorMovies(id),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    enabled: !!id,
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

