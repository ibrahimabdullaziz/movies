import { useTrendingMovies } from "../../hooks/useMovies";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
