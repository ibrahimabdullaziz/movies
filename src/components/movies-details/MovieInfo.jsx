import Container from "../UI/Container";
import { formatDate, formatRating, formatRuntime } from "../../utils/Formatter";

export default function MovieInfo({ movie }) {
  return (
    <div className="space-y-4 text-center lg:text-left">
      <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] drop-shadow-2xl">
        {movie.title}
      </h1>

      {movie.tagline && (
        <p className="text-xl lg:text-2xl text-imdb-gold/60 font-medium italic">
          "{movie.tagline}"
        </p>
      )}

      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 py-6 border-y border-white/10 uppercase text-[12px] font-bold tracking-widest text-gray-400">
        <div className="flex items-center gap-2 bg-imdb-gold/10 px-4 py-2 rounded-xl border border-imdb-gold/20 backdrop-blur-md">
          <span className="text-imdb-gold text-xl">★</span>
          <span className="text-white text-xl">
            {formatRating(movie.vote_average)}
          </span>
          <span className="text-gray-500 text-xs font-medium ml-1">/ 10</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-imdb-gold font-black">RELEASE</span>
          <span className="text-white">{formatDate(movie.release_date)}</span>
        </div>

        <span className="hidden sm:block w-1 h-1 bg-white/20 rounded-full" />

        <div className="flex items-center gap-3">
          <span className="text-imdb-gold font-black">RUNTIME</span>
          <span className="text-white">{formatRuntime(movie.runtime)}</span>
        </div>

        <span className="hidden sm:block w-1 h-1 bg-white/20 rounded-full" />

        <span className="px-3 py-1 border border-white/20 rounded-lg text-[10px] text-white bg-white/5">
          {movie.adult ? "18+" : "PG-13"}
        </span>
      </div>

      <p className="text-lg lg:text-xl text-white/80 max-w-4xl leading-relaxed text-center lg:text-left font-light drop-shadow-md">
        {movie.overview}
      </p>
    </div>
  );
}
