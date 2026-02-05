import MovieRow from "./MovieRow";
import { useMoviesByGenre } from "../../hooks/useMovies";
import MovieRowSkeleton from "../Skeletons/MovieRowSkeleton";

export default function GenreRow({ genre }) {
  const { data: movies, isLoading } = useMoviesByGenre(genre.id);

  if (isLoading) return <MovieRowSkeleton withTitle />;

  return (
    <MovieRow
      title={genre.name}
      movies={movies?.results?.slice(0, 10)}
      viewAllPath={`/category/${genre.id}/${genre.name}`}
    />
  );
}
