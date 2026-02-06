import { useSuspenseQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export function useSearchMovies(query, page = 1) {
  return useSuspenseQuery({
    queryKey: ["search", query, page],
    queryFn: async () => {
      if (!query) return { results: [], total_pages: 0 };

      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`,
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      return data;
    },
    staleTime: 1000 * 60 * 5,
  });
}
