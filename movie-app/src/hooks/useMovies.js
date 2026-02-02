import { useQuery } from "@tanstack/react-query";
import { fetchTrendingMovies } from "../api/MovieApi";

export const useTrendingMovies = () => {
  return useQuery({
    queryKey: ["trendingMovies"],
    queryFn: fetchTrendingMovies,
    select: (data) => data.results,
  });
};
