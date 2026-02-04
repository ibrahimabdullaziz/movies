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

export const fetchActorDetails = (actorId) =>
  fetchFromTMDB(`/person/${actorId}`, "language=en-US");

export const fetchActorMovies = (actorId) =>
  fetchFromTMDB(`/person/${actorId}/movie_credits`, "language=en-US");

export const fetchMovieReviews = (id) =>
  fetchFromTMDB(`/movie/${id}/reviews`, "language=en-US&page=1");

export const fetchMovieVideos = (id) =>
  fetchFromTMDB(`/movie/${id}/videos`, "language=en-US");
