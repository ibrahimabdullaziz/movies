import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovies";
import TrailerModal from "../components/movies/TrailerModel";
import MovieList from "../components/movies/MoviesList";
import { formatDate, formatRating, formatRuntime } from "../utils/Formatter";
import { useWatchlist } from "../hooks/useWatchList";
import MovieDetailSkeleton from "../components/skeleton/MovieDetailsSkeleton";
import { BackdropImage } from "../components/movies-details/backdrop-image";
import { Poster } from "../components/movies-details/Movie-poster";
import Container from "../components/UI/Container";
import Cast from "../components/actors/Cast";
import { States } from "../components/movies/MovieStates";
import { Reviews } from "../components/movies-details/Reviews";

const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

export default function MovieDetails() {
  const { id } = useParams();
  const { data: movie, isLoading, isError } = useMovieDetails(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toggleWatchlist, isInWatchlist } = useWatchlist();

  if (isLoading) return <MovieDetailSkeleton />;

  const isAdded = isInWatchlist(movie?.id);
  const trailer = movie?.videos?.results?.find((vid) => vid.type === "Trailer");
  const cast = movie?.credits?.cast?.slice(0, 12);
  const recommendations = movie?.recommendations?.results?.slice(0, 6);

  return (
    <Container classes="relative min-h-screen bg-imdb-black text-white pb-20 overflow-x-hidden">
      <BackdropImage
        url={IMAGE_URL}
        path={movie.backdrop_path}
        title={movie.title}
      />
      <Container classes="relative pt-[25vh] lg:pt-[35vh] px-6 lg:px-16 space-y-20">
        <Container classes="flex flex-col lg:flex-row gap-10 items-center lg:items-start text-center lg:text-left">
          <Poster
            url={IMAGE_URL}
            path={movie.poster_path}
            title={movie.title}
          />

          <Container classes="flex-1 space-y-6">
            <Container classes="flex flex-wrap gap-2 justify-center lg:justify-start">
              {movie.genres?.map((g) => (
                <span
                  key={g.id}
                  className="px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 text-imdb-gold rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  {g.name}
                </span>
              ))}
            </Container>

            {/* Title & Tagline */}
            <Container classes="space-y-2">
              <h1 className="text-5xl lg:text-8xl font-black tracking-tighter drop-shadow-2xl">
                {movie.title}
              </h1>
              {movie.tagline && (
                <p className="text-xl lg:text-2xl text-imdb-gold/80 font-medium italic">
                  "{movie.tagline}"
                </p>
              )}
            </Container>

            <Container classes="flex items-center justify-center lg:justify-start gap-6 text-gray-300 font-bold">
              <Container classes="flex items-center gap-2">
                <span className="text-imdb-gold text-2xl">★</span>
                <span className="text-2xl">
                  {formatRating(movie.vote_average)}
                </span>
              </Container>
              <Container classes="h-4 w-[1px] bg-white/20" />
              <span>{formatDate(movie.release_date)}</span>
              <div className="h-4 w-[1px] bg-white/20" />
              <span>{formatRuntime(movie.runtime)}</span>
            </Container>

            <p className="text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed mx-auto lg:mx-0">
              {movie.overview}
            </p>

            <Container classes="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-imdb-gold text-black px-10 py-4 rounded-2xl font-black hover:bg-yellow-400 hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_rgba(245,197,24,0.3)] flex items-center gap-3"
              >
                <span className="text-xl">▶</span> WATCH TRAILER
              </button>

              <button
                onClick={() => toggleWatchlist(movie)}
                className={`px-10 py-4 rounded-2xl font-black border-2 transition-all flex items-center gap-2 ${
                  isAdded
                    ? "bg-red-600/10 border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
                    : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                }`}
              >
                {isAdded ? "✕ REMOVE" : "+ WATCHLIST"}
              </button>
            </Container>
          </Container>
        </Container>

        <Cast cast={cast} image_url={IMAGE_URL} />

        <States movie={movie} />

        <Reviews movie={movie} />

        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-imdb-gold rounded-full" /> More Like
            This
          </h2>
          <MovieList movies={recommendations} />
        </section>
      </Container>

      <TrailerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        trailerKey={trailer?.key}
        title={movie.title}
      />
    </Container>
  );
}
