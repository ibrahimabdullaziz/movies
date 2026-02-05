import { fetchFromTMDB } from "../api/tmdbClient";

export const fetchDiscoverMovies = (page = 1, sortBy = "popularity.desc") => {
  let params = `language=en-US&page=${page}&sort_by=${sortBy}`;
  if (sortBy === "vote_average.desc") {
    params += "&vote_count.gte=1000";
  }
  return fetchFromTMDB("/discover/movie", params);
};

export const fetchTrendingMovies = (page = 1) =>
  fetchFromTMDB("/trending/movie/day", `language=en-US&page=${page}`);

export const fetchAllGenres = () =>
  fetchFromTMDB("/genre/movie/list", "language=en-US");

export const fetchMoviesByGenre = (genreId, page = 1, sortBy = "popularity.desc") => {
  let params = `with_genres=${genreId}&page=${page}&sort_by=${sortBy}`;
  if (sortBy === "vote_average.desc") {
    params += "&vote_count.gte=1000";
  }
  return fetchFromTMDB("/discover/movie", params);
};

export const fetchActorDetails = (actorId) =>
  fetchFromTMDB(`/person/${actorId}`, "language=en-US");

export const fetchActorMovies = (actorId) =>
  fetchFromTMDB(`/person/${actorId}/movie_credits`, "language=en-US");

export const fetchMovieReviews = (id) =>
  fetchFromTMDB(`/movie/${id}/reviews`, "language=en-US&page=1");

export const fetchMovieVideos = (id) =>
  fetchFromTMDB(`/movie/${id}/videos`, "language=en-US");
