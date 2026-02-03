import { useQuery } from "@tanstack/react-query";
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
