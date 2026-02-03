import MovieRow from "./MovieRow";
import { useMoviesByGenre } from "../../hooks/useMovies";

export default function GenreRow({ genre }) {
  const { data, isLoading } = useMoviesByGenre(genre.id);

  if (isLoading)
    return (
      <div className="h-64 bg-surface/30 animate-pulse rounded-lg my-4 mx-8"></div>
    );

  return (
    <MovieRow
      title={genre.name}
      movies={data?.results?.slice(0, 10)}
      viewAllPath={`/category/${genre.id}/${genre.name}`}
    />
  );
}
