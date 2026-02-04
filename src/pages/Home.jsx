import MovieRow from "../components/movies/MovieRow";
import GenreRow from "../components/movies/GenreRow";
import { useGenres, useTrendingMovies } from "../hooks/useMovies";
import Hero from "../components/layout/Hero";

export default function Home() {
  const { data, isLoading: isTrendingLoading } = useTrendingMovies(1);
  const { data: genresData, isLoading: isGenresLoading } = useGenres();

  const trendingMovies = data?.results;

  return (
    <div className="bg-imdb-black min-h-screen">
      <Hero />
      <div
        id="trending-section"
        className="container mx-auto px-4 py-12 space-y-12"
      >
        <div className=" bg-imdb-black pb-3">
          {isTrendingLoading ? (
            <div className="h-64 bg-white/5 animate-pulse m-8 rounded-xl" />
          ) : (
            <MovieRow
              title="Trending Today"
              // هنا التأكد إننا بنبعت الـ Array صح
              movies={trendingMovies?.slice(0, 10)}
              viewAllPath="/trending"
            />
          )}
        </div>

        {isGenresLoading ? (
          <div className="space-y-8 p-8">
            <div className="h-40 bg-white/5 animate-pulse rounded-xl" />
            <div className="h-40 bg-white/5 animate-pulse rounded-xl" />
          </div>
        ) : (
          genresData?.genres?.map((genre) => (
            <GenreRow key={genre.id} genre={genre} />
          ))
        )}
      </div>
    </div>
  );
}
