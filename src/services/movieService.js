import { fetchFromTMDB } from "../api/tmdbClient";

export const fetchTrendingMovies = (page = 1) =>
  fetchFromTMDB("/trending/movie/day", `language=en-US&page=${page}`);

export const fetchAllMovies = (page = 1) =>
  fetchFromTMDB(
    "/discover/movie",
    `language=en-US&page=${page}&sort_by=popularity.desc`,
  );

export const fetchAllGenres = () =>
  fetchFromTMDB("/genre/movie/list", "language=en-US");

export const fetchMoviesByGenre = (genreId, page = 1) =>
  fetchFromTMDB("/discover/movie", `with_genres=${genreId}&page=${page}`);
