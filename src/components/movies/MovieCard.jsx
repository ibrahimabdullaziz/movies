const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;
import { useNavigate } from "react-router-dom";
import { formatDate, formatRating } from "../../utils/Formatter";
import { Poster } from "../movies-details/Movie-poster";
import { useWatchlist } from "../../hooks/useWatchList"; // تأكد من المسار
import { useTrailer } from "../../context/TrailerContext";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { toggleWatchlist, isInWatchlist } = useWatchlist();
  const { openTrailer } = useTrailer();

  const releaseDate = formatDate(movie?.release_date);
  const rating = formatRating(movie?.vote_average);
  const isAdded = isInWatchlist(movie?.id);

  const handleTrailerClick = (e) => {
    e.stopPropagation(); // عشان ميعملش navigate لصفحة الفيلم
    openTrailer(movie);
  };

  const handleWatchlistClick = (e) => {
    e.stopPropagation();
    toggleWatchlist(movie);
  };

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="group relative bg-surface rounded-xl overflow-hidden hover:ring-2 hover:ring-imdb-gold/50 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-imdb-gold/10"
    >
      {/* Container للصورة والـ Overlay */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <Poster url={IMAGE_URL} path={movie.poster_path} title={movie.title} />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
          {/* Play Trailer Button */}
          <button
            onClick={handleTrailerClick}
            className="w-12 h-12 bg-white/20 hover:bg-imdb-gold hover:text-black rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
            title="Watch Trailer"
          >
            <span className="text-xl ml-1">▶</span>
          </button>

          {/* Add to Watchlist Button */}
          <button
            onClick={handleWatchlistClick}
            className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75 ${
              isAdded
                ? "bg-imdb-gold text-black scale-110"
                : "bg-white/20 hover:bg-white/40 text-white"
            }`}
            title={isAdded ? "Remove from Watchlist" : "Add to Watchlist"}
          >
            <span className="text-2xl font-light">{isAdded ? "✓" : "+"}</span>
          </button>
        </div>

        {/* Rating Badge (دايماً ظاهر) */}
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10">
          <span className="text-imdb-gold text-xs">★</span>
          <span className="text-white text-[10px] font-bold">{rating}</span>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4">
        <h2 className="text-sm font-bold line-clamp-1 group-hover:text-imdb-gold transition-colors">
          {movie.title}
        </h2>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[10px] text-slate-400 font-medium tracking-wider">
            {releaseDate?.split(",")[1] || releaseDate}{" "}
            {/* عرض السنة فقط لشكل أنضف */}
          </span>
        </div>
      </div>
    </div>
  );
}
