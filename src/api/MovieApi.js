const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export const fetchTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}/trending/movie/day`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) throw new Error("Check your API Key or Token");
  return response.json();
};
