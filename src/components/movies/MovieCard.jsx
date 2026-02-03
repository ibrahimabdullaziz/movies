const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;
import { useTrendingMovies } from "../../hooks/useMovies";

export default function MovieCard() {
  const { data: movies, isLoading, isError, error } = useTrendingMovies();

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen text-imdb-gold animate-pulse">
        Loading...
      </div>
    );
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
      {movies?.map((movie) => (
        <div
          key={movie.id}
          className="group bg-surface rounded-md overflow-hidden hover:ring-1 hover:ring-imdb-gold/50 transition-all duration-300"
        >
          <div className="relative aspect-[2/3]">
            <img
              src={`${IMAGE_URL}${movie.poster_path}`}
              className="w-full h-full object-cover"
              alt={movie.title}
            />
            <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-1 rounded flex items-center gap-1">
              <span className="text-imdb-gold text-sm font-bold">★</span>
              <span className="text-white text-xs font-bold">
                {movie.vote_average.toFixed(1)}
              </span>
            </div>
          </div>

          <div className="p-3">
            <h2 className="text-sm font-semibold line-clamp-2 group-hover:text-imdb-blue transition-colors">
              {movie.title}
            </h2>

            <div className="flex items-center justify-between mt-3">
              <span className="text-[11px] text-gray-400 font-medium">
                {movie.release_date?.split("-")[0]}
              </span>
              <button className="text-imdb-blue text-[11px] font-bold hover:underline cursor-pointer">
                Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
