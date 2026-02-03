import { useTrendingMovies } from "../hooks/useMovies";
import MovieList from "../components/movies/MoviesList";
import Header from "../components/common/Header";

export default function TrendingPage() {
  const { data, isLoading } = useTrendingMovies();

  return (
    <div className="p-8 min-h-screen bg-imdb-black">
      <Header HeadTitle="Trending" />

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-imdb-gold"></div>
        </div>
      ) : (
        <MovieList movies={data} />
      )}
    </div>
  );
}
