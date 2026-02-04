import { useWatchlist } from "../../hooks/useWatchList";
import { useTrailer } from "../../context/TrailerContext";

export default function Buttons({ movie }) {
  const { openTrailer } = useTrailer();
  const { toggleWatchlist, isInWatchlist } = useWatchlist();
  const isAdded = isInWatchlist(movie?.id);

  return (
    <div className="flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
      <button
        onClick={(e) => {
          e.stopPropagation();
          openTrailer(movie);
        }}
        className="flex-1 h-10 bg-imdb-gold text-black rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-500 transition-all duration-300 font-black text-xs uppercase"
      >
        <span className="text-base">▶</span> Trailer
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleWatchlist(movie);
        }}
        className={`w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
          isAdded
            ? "bg-green-500 text-white"
            : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
        }`}
        title={isAdded ? "Remove from Watchlist" : "Add to Watchlist"}
      >
        <span className="text-xl">{isAdded ? "✓" : "+"}</span>
      </button>
    </div>
  );
}
