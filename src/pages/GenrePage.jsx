import { useParams } from "react-router-dom";
import { useMoviesByGenre } from "../hooks/useMovies";
import MovieCard from "../components/movies/MovieCard";

export default function GenrePage() {
  const { id, name } = useParams();
  const { data, isLoading } = useMoviesByGenre(id);

  return (
    <div className="p-8 min-h-screen bg-imdb-black">
      <h1 className="text-3xl text-imdb-gold font-bold mb-8">{name} Movies</h1>

      {isLoading ? (
        <div className="text-white">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {data?.results?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
