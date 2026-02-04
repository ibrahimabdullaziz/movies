import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { formatRating } from "../../utils/Formatter";
import { useTrailer } from "../../context/TrailerContext";
import { useWatchlist } from "../../hooks/useWatchList";
import Metadata from "../movies-details/MovieMetadata";

const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

const cardVariants = {
  initial: { scale: 1, zIndex: 1 },
  expanded: {
    scale: 1.4,
    zIndex: 50,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export default function MovieRowCard({ movie }) {
  const navigate = useNavigate();
  const { openTrailer } = useTrailer();
  const { toggleWatchlist, isInWatchlist } = useWatchlist();
  const isAdded = isInWatchlist(movie?.id);

  if (!movie) return null;

  const handleNavigate = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <motion.div
      initial="initial"
      variants={cardVariants}
      whileHover="expanded"
      onClick={handleNavigate}
      className="relative cursor-pointer flex-none w-[240px] h-[135px]"
      style={{ originX: 0.5, originY: 0.5 }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-lg bg-surface shadow-2xl ring-1 ring-white/10">
        <motion.img
          src={`${IMAGE_URL}${movie.poster_path}`}
          className="absolute inset-0 w-full h-full object-cover"
          variants={{
            initial: { opacity: 1 },
            expanded: { opacity: 0 },
          }}
        />

        <motion.img
          src={`${IMAGE_URL}${movie.backdrop_path}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          variants={{ expanded: { opacity: 1 } }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-3"
          initial={{ opacity: 0 }}
          variants={{ expanded: { opacity: 1 } }}
        >
          <div className="mb-2">
            <h3 className="text-white text-[10px] font-black truncate mb-1">
              {movie.title}
            </h3>
            <Metadata
              isMovieAdult={movie.adult}
              releaseDate={movie.release_date}
              className="scale-75 origin-left"
            />
          </div>

          <div className="flex items-center gap-1.5 mt-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                openTrailer(movie);
              }}
              className="flex-1 h-7 bg-imdb-gold text-black rounded-md flex items-center justify-center gap-1 font-black text-[9px] uppercase hover:bg-yellow-500 transition-colors"
            >
              <span>▶</span> Trailer
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleWatchlist(movie);
              }}
              className={`w-7 h-7 rounded-md flex items-center justify-center transition-all ${
                isAdded
                  ? "bg-green-500 text-white"
                  : "bg-white/20 text-white border border-white/10"
              }`}
            >
              <span className="text-sm">{isAdded ? "✓" : "+"}</span>
            </button>
          </div>
        </motion.div>

        <div className="absolute top-1 right-1 bg-black/60 px-1.5 py-0.5 rounded text-[8px] font-bold text-imdb-gold border border-white/10">
          ★ {formatRating(movie?.vote_average)}
        </div>
      </div>
    </motion.div>
  );
}
