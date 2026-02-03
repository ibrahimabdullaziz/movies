import MovieRow from "../components/movies/MovieRow";
import { useGenres, useTrendingMovies } from "../hooks/useMovies";
import GenreRow from "../components/movies/GenreRow";

export default function Home() {
  const { data: trendingData } = useTrendingMovies();
  const { data: genresData } = useGenres();

  console.log("Trending Data:", trendingData);

  return (
    <div className="min-h-screen bg-imdb-black pb-10">
      <MovieRow
        title="Trending Today"
        movies={trendingData?.slice(0, 10)}
        viewAllPath="/trending"
      />
      {genresData?.genres?.map((genre) => (
        <GenreRow key={genre.id} genre={genre} />
      ))}
    </div>
  );
}
