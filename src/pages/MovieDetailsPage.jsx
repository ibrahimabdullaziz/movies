import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovies";
import TrailerModal from "../components/movies/TrailerModel";
import { formatDate, formatRating, formatRuntime } from "../utils/Formatter";
import { useWatchlist } from "../hooks/useWatchList";

const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

export default function MovieDetails() {
  const { id } = useParams();
  const { data: movie, isLoading, isError } = useMovieDetails(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toggleWatchlist, isInWatchlist } = useWatchlist();

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center text-white bg-imdb-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-imdb-gold"></div>
        <span className="ml-4 text-xl font-bold uppercase tracking-widest">
          Loading...
        </span>
      </div>
    );

  if (isError || !movie)
    return (
      <div className="h-screen flex items-center justify-center text-white bg-imdb-black">
        Movie not found!
      </div>
    );

  const isAdded = isInWatchlist(movie.id);

  const trailer = movie?.videos?.results?.find((vid) => vid.type === "Trailer");
  const releaseDate = formatDate(movie?.release_date);
  const runTime = formatRuntime(movie?.runtime);
  const rating = formatRating(movie?.vote_average);

  return (
    <div className="relative min-h-screen bg-imdb-black text-white overflow-x-hidden">
      <div className="absolute inset-0 h-[70vh] lg:h-screen">
        <img
          src={`${IMAGE_URL}${movie.backdrop_path}`}
          className="w-full h-full object-cover"
          alt={movie.title}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-imdb-black via-imdb-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-imdb-black via-transparent to-transparent" />
      </div>

      <div className="relative pt-32 px-8 lg:px-16 flex flex-col lg:flex-row gap-10">
        <img
          src={`${IMAGE_URL}${movie.poster_path}`}
          className="w-64 lg:w-80 rounded-2xl shadow-2xl border border-white/10"
          alt={movie.title}
        />

        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl lg:text-7xl font-black">{movie.title}</h1>
          <div className="flex items-center gap-4 text-imdb-gold font-bold">
            <span>★ {rating}</span>
            <span>{releaseDate}</span>
            <span>{runTime}</span>
          </div>
          <p className="text-xl text-gray-200 leading-relaxed">
            {movie.overview}
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-imdb-gold text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg active:scale-95"
            >
              Watch Trailer
            </button>

            <button
              onClick={() => toggleWatchlist(movie)}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all border-2 shadow-lg active:scale-95 ${
                isAdded
                  ? "bg-red-600/20 border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
                  : "bg-white/10 border-transparent text-white hover:bg-white/20"
              }`}
            >
              <span>{isAdded ? "✕ Remove" : "+ Watchlist"}</span>
            </button>
          </div>
        </div>
      </div>

      <TrailerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        trailerKey={trailer?.key}
        title={movie.title}
      />
    </div>
  );
}
