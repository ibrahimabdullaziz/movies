import { useTrendingMovies } from "../../hooks/useMovies";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const { data: movies, isLoading, isError, error } = useTrendingMovies();

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen text-imdb-gold animate-pulse">
        Loading...
      </div>
    );
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
