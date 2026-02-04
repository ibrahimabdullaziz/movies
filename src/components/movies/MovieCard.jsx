const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;
import { useNavigate } from "react-router-dom";
import { formatDate, formatRating } from "../../utils/Formatter";
import { Poster } from "../movies-details/Movie-poster";
import { useWatchlist } from "../../hooks/useWatchList";
import { useTrailer } from "../../context/TrailerContext";
import Container from "../UI/Container";
import Metadata from "../movies-details/MovieMetadata";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { toggleWatchlist, isInWatchlist } = useWatchlist();
  const { openTrailer } = useTrailer();

  const releaseDate = formatDate(movie?.release_date);
  const rating = formatRating(movie?.vote_average);
  const isAdded = isInWatchlist(movie?.id);

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="group relative bg-surface rounded-xl overflow-hidden hover:ring-2 hover:ring-imdb-gold/50 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-imdb-gold/20"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <Poster url={IMAGE_URL} path={movie.poster_path} title={movie.title} />

        <Container classes="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[3px] p-4 flex flex-col justify-end">
          <Container classes="mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            <p className="text-imdb-gold italic text-[11px] leading-tight line-clamp-2 mb-2">
              "{movie.tagline || movie.overview?.substring(0, 50)}..."
            </p>

            <Metadata
              isMovieAdult={movie.adult}
              releaseDate={movie.release_date}
            />
          </Container>

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
        </Container>

        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 border border-white/10">
          <span className="text-imdb-gold text-xs">★</span>
          <span className="text-white text-[10px] font-bold">{rating}</span>
        </div>
      </div>

      {/* Movie Title Footer */}
      <div className="p-3">
        <h2 className="text-sm font-bold line-clamp-1 group-hover:text-imdb-gold transition-colors">
          {movie.title}
        </h2>
      </div>
    </div>
  );
}
