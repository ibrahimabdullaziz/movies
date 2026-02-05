import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovies";
import MovieList from "../components/movies/MoviesList";
import { formatDate, formatRating, formatRuntime } from "../utils/Formatter";
import { useWatchlist } from "../hooks/useWatchList";
import { BackdropImage } from "../components/movies-details/backdrop-image";
import { Poster } from "../components/movies-details/Movie-poster";
import Container from "../components/UI/Container";
import Cast from "../components/actors/Cast";
import { States } from "../components/movies/MovieStates";
import { Reviews } from "../components/movies-details/Reviews";
import { useTrailer } from "../context/TrailerContext";
import MovieDetailsSkeleton from "../components/skeletons/MovieDetailsSkeleton";
const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

export default function MovieDetails() {
  const { id } = useParams();
  const { data: movie, isLoading, isError } = useMovieDetails(id);
  const { toggleWatchlist, isInWatchlist } = useWatchlist();
  const { openTrailer } = useTrailer();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (isLoading) {
    return <MovieDetailsSkeleton />;
  }

  if (isError || !movie)
    return (
      <div className="text-white p-20 text-center font-bold">
        Error loading movie details.
      </div>
    );

  const isAdded = isInWatchlist(movie?.id);
  const cast = movie?.credits?.cast?.slice(0, 12);
  const recommendations = movie?.recommendations?.results?.slice(0, 6);

  const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <Container classes="relative min-h-screen bg-imdb-black text-white pb-20 overflow-x-hidden">
      <BackdropImage
        url={BACKDROP_BASE_URL}
        path={movie.backdrop_path}
        title={movie.title}
        isCard={false}
      />

      <Container classes="relative z-20 pt-[18vh] lg:pt-[28vh] px-6 lg:px-20 space-y-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start animate-fade-in -mt-15 lg:-mt-35">
          <div className="shrink-0 transform hover:scale-105 transition-all duration-500 shadow-[20px_20px_60px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden  relative z-30 lg:pt-10">
            <Poster
              url={IMAGE_URL}
              path={movie.poster_path}
              title={movie.title}
            />
          </div>

          <Container classes="flex-1 space-y-8 relative z-30 lg:pt-10">
            <div className="space-y-4 text-center lg:text-left">
              <Container classes="flex flex-wrap gap-2 justify-center lg:justify-start">
                {movie.genres?.map((g) => (
                  <span
                    key={g.id}
                    className="px-3 py-1 bg-imdb-gold/10 border border-imdb-gold/30 text-imdb-gold rounded-md text-[10px] font-black uppercase tracking-tighter backdrop-blur-md"
                  >
                    {g.name}
                  </span>
                ))}
              </Container>

              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] drop-shadow-2xl">
                {movie.title}
              </h1>

              {movie.tagline && (
                <p className="text-xl lg:text-2xl text-imdb-gold/60 font-medium italic">
                  "{movie.tagline}"
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 py-6 border-y border-white/10 uppercase text-[12px] font-bold tracking-widest text-gray-400">
              <div className="flex items-center gap-2 bg-imdb-gold/10 px-4 py-2 rounded-xl border border-imdb-gold/20 backdrop-blur-md">
                <span className="text-imdb-gold text-xl">★</span>
                <span className="text-white text-xl">
                  {formatRating(movie.vote_average)}
                </span>
                <span className="text-gray-500 text-xs font-medium ml-1">
                  / 10
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-imdb-gold font-black">RELEASE</span>
                <span className="text-white">
                  {formatDate(movie.release_date)}
                </span>
              </div>

              <span className="hidden sm:block w-1 h-1 bg-white/20 rounded-full" />

              <div className="flex items-center gap-3">
                <span className="text-imdb-gold font-black">RUNTIME</span>
                <span className="text-white">
                  {formatRuntime(movie.runtime)}
                </span>
              </div>

              <span className="hidden sm:block w-1 h-1 bg-white/20 rounded-full" />

              <span className="px-3 py-1 border border-white/20 rounded-lg text-[10px] text-white bg-white/5">
                {movie.adult ? "18+" : "PG-13"}
              </span>
            </div>

            <p className="text-lg lg:text-xl text-white/80 max-w-4xl leading-relaxed text-center lg:text-left font-light drop-shadow-md">
              {movie.overview}
            </p>

            <Container classes="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
              <button
                onClick={() => openTrailer(movie)}
                className="group flex items-center gap-2 bg-imdb-gold hover:bg-white text-black px-8 py-3.5 rounded-xl font-bold transition-all duration-300 active:scale-95"
              >
                <span className="text-lg">▶</span>
                <span className="tracking-tight">WATCH TRAILER</span>
              </button>

              <button
                onClick={() => toggleWatchlist(movie)}
                className={`flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold border transition-all duration-300 active:scale-95 ${
                  isAdded
                    ? "bg-red-500/10 border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white"
                    : "bg-white/5 border-white/20 text-white hover:bg-white hover:text-black"
                }`}
              >
                <span>{isAdded ? "✕" : "+"}</span>
                <span className="tracking-tight">
                  {isAdded ? "REMOVE" : "WATCHLIST"}
                </span>
              </button>
            </Container>
          </Container>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          <div className="lg:col-span-2 space-y-24">
            <Cast cast={cast} image_url={IMAGE_URL} />
            <Reviews movie={movie} />
          </div>
          <div className="space-y-12">
            <States movie={movie} />
          </div>
        </div>

        <section className="pt-24 border-t border-white/5">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl lg:text-5xl font-black italic tracking-tighter flex items-center gap-4">
              <span className="w-3 h-12 bg-imdb-gold -skew-x-12 rounded-sm" />
              MORE LIKE THIS
            </h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-imdb-gold/50 to-transparent ml-8 hidden md:block" />
          </div>
          <MovieList movies={recommendations} />
        </section>
      </Container>
    </Container>
  );
}
