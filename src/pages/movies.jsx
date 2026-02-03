import Header from "../components/common/Header.jsx";
import MovieCard from "../components/movies/MovieCard.jsx";

export default function TrendingMoviesPage() {
  return (
    <div className="min-h-screen bg-imdb-black p-6">
      <Header HeadTitle="Trending" SubTitle="Movies" />
      <MovieCard />
    </div>
  );
}
