// src/hooks/useSearch.js
import { useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export function useSearchMovies(query) {
  return useQuery({
    queryKey: ["search", query],
    queryFn: async () => {
      if (!query) return [];

      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      return data.results;
    },
    enabled: !!query, // مش هيعمل Fetch غير لو فيه نص
    staleTime: 1000 * 60 * 5, // الكاش يفضل صالح لمدة 5 دقائق
  });
}
