import MovieCard from "../components/movies/MovieCard";
import { useWatchlist } from "../hooks/useWatchList.js";

export default function WatchlistPage() {
  const { watchlist } = useWatchlist();

  return (
    <div className="min-h-screen bg-imdb-black pt-28 px-6 lg:px-16">
      <div className="flex items-center gap-4 mb-10">
        <h1 className="text-4xl font-black text-white">
          My <span className="text-imdb-gold">Watchlist</span>
        </h1>
        <span className="bg-imdb-gold text-black px-3 py-1 rounded-full font-bold">
          {watchlist.length}
        </span>
      </div>

      {watchlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[50vh] text-gray-500">
          <p className="text-2xl font-semibold">
            Your list is looking a bit empty...
          </p>
          <p className="mt-2 text-gray-600">
            Add movies to keep track of what you want to watch!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
