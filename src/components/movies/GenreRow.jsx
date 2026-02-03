import MovieRow from "./MovieRow";
import { useMoviesByGenre } from "../../hooks/useMovies";

export default function GenreRow({ genre }) {
  const { data: movies, isLoading } = useMoviesByGenre(genre.id);

  if (isLoading)
    return (
      <div className="h-48 bg-surface/10 animate-pulse my-4 mx-8 rounded-lg" />
    );

  return (
    <MovieRow
      title={genre.name}
      movies={movies?.results?.slice(0, 10)}
      viewAllPath={`/category/${genre.id}/${genre.name}`}
    />
  );
}
