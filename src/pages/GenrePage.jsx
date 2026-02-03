import { useParams } from "react-router-dom";
import { useMoviesByGenre } from "../hooks/useMovies";
import MovieCard from "../components/movies/MovieCard";
import MovieList from "../components/movies/MoviesList";
import Header from "../components/common/Header";

export default function GenrePage() {
  const { id, name } = useParams();
  const { data, isLoading } = useMoviesByGenre(id);

  return (
    <div className="p-8 min-h-screen bg-imdb-black">
      <Header HeadTitle={name} />
      {isLoading ? (
        <div className="text-white">Loading...</div>
      ) : (
        <MovieList movies={data?.results} />
      )}
    </div>
  );
}
