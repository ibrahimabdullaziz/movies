export const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
export const TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export const fetchFromTMDB = async (endpoint, params = "") => {
  const response = await fetch(`${BASE_URL}${endpoint}?${params}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/json",
    },
  });
  if (!response.ok) throw new Error("API Error");
  return response.json();
};
