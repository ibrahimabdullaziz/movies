import { useState } from "react";
import { useParams, Link } from "react-router-dom"; // ضفنا Link
import { useMovieDetails } from "../hooks/useMovies";
import TrailerModal from "../components/movies/TrailerModel";
import MovieList from "../components/movies/MoviesList"; // لعرض الأفلام المقترحة
import { formatDate, formatRating, formatRuntime } from "../utils/Formatter";
import { useWatchlist } from "../hooks/useWatchList";
import MovieDetailSkeleton from "../components/skeleton/MovieDetailsSkeleton";

const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

export default function MovieDetails() {
  const { id } = useParams();
  const { data: movie, isLoading, isError } = useMovieDetails(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toggleWatchlist, isInWatchlist } = useWatchlist();

  if (isLoading) return <MovieDetailSkeleton />;

  const isAdded = isInWatchlist(movie?.id);
  const trailer = movie?.videos?.results?.find((vid) => vid.type === "Trailer");
  const cast = movie?.credits?.cast?.slice(0, 12); // أول 12 ممثل
  const recommendations = movie?.recommendations?.results?.slice(0, 6);

  return (
    <div className="relative min-h-screen bg-imdb-black text-white pb-20">
      {/* Hero Section - Backdrop */}
      <div className="relative h-[60vh] lg:h-[85vh] w-full">
        <img
          src={`${IMAGE_URL}${movie.backdrop_path}`}
          className="w-full h-full object-cover object-top"
          alt={movie.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-imdb-black via-imdb-black/40 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative -mt-64 px-6 lg:px-16 space-y-16">
        {/* Poster & Info Area */}
        <div className="flex flex-col lg:flex-row gap-10 items-end lg:items-start">
          <img
            src={`${IMAGE_URL}${movie.poster_path}`}
            className="w-64 lg:w-80 rounded-2xl shadow-2xl border border-white/10 hidden md:block"
            alt={movie.title}
          />

          <div className="flex-1 space-y-6">
            <div className="flex flex-wrap gap-2">
              {movie.genres?.map((g) => (
                <span
                  key={g.id}
                  className="px-3 py-1 bg-imdb-gold/10 border border-imdb-gold/20 text-imdb-gold rounded-full text-sm font-medium"
                >
                  {g.name}
                </span>
              ))}
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              {movie.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-400 font-bold">
              <span className="text-imdb-gold text-2xl">
                ★ {formatRating(movie.vote_average)}
              </span>
              <span>{formatDate(movie.release_date)}</span>
              <span>{formatRuntime(movie.runtime)}</span>
            </div>

            <p className="text-xl text-gray-300 max-w-4xl leading-relaxed italic">
              {movie.tagline}
            </p>
            <p className="text-lg text-gray-200 max-w-4xl leading-relaxed">
              {movie.overview}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-imdb-gold text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-all flex items-center gap-2"
              >
                ▶ Watch Trailer
              </button>
              <button
                onClick={() => toggleWatchlist(movie)}
                className={`px-8 py-4 rounded-xl font-bold border-2 transition-all ${isAdded ? "bg-red-600/20 border-red-600 text-red-500" : "bg-white/10 border-transparent text-white"}`}
              >
                {isAdded ? "✕ Remove" : "+ Watchlist"}
              </button>
            </div>
          </div>
        </div>

        {/* Cast Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-imdb-gold rounded-full" /> Top Cast
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {cast?.map((person) => (
              <Link
                key={person.id}
                to={`/actor/${person.id}`}
                className="flex-shrink-0 w-32 lg:w-40 group cursor-pointer"
              >
                <div className="aspect-square rounded-full overflow-hidden border-2 border-white/5 group-hover:border-imdb-gold transition-colors mb-3">
                  <img
                    src={
                      person.profile_path
                        ? `${IMAGE_URL}${person.profile_path}`
                        : "https://via.placeholder.com/200x200?text=No+Image"
                    }
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    alt={person.name}
                  />
                </div>
                <p className="font-bold text-center line-clamp-1">
                  {person.name}
                </p>
                <p className="text-sm text-gray-400 text-center line-clamp-1">
                  {person.character}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Detailed Info Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-white/5 rounded-3xl border border-white/10">
          <div>
            <p className="text-gray-400 text-sm uppercase tracking-widest">
              Status
            </p>
            <p className="text-xl font-bold">{movie.status}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm uppercase tracking-widest">
              Budget
            </p>
            <p className="text-xl font-bold">
              ${movie.budget?.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm uppercase tracking-widest">
              Revenue
            </p>
            <p className="text-xl font-bold">
              ${movie.revenue?.toLocaleString()}
            </p>
          </div>
        </section>

        {/* Recommendations */}
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-imdb-gold rounded-full" /> More Like
            This
          </h2>
          <MovieList movies={recommendations} />
        </section>
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
