import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { formatRating } from "../../utils/Formatter";
import Metadata from "../movies-details/MovieMetadata";
import { Poster } from "../movies-details/MoviePoster";
import { BackdropImage } from "../movies-details/BackdropImage";
import Buttons from "../UI/Buttons";

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
        <motion.div
          variants={{ initial: { opacity: 1 }, expanded: { opacity: 0 } }}
          className="absolute inset-0 z-10"
        >
          <Poster
            url={IMAGE_URL}
            path={movie.poster_path}
            title={movie.title}
            isCard
          />
        </motion.div>

        <motion.div
          variants={{ initial: { opacity: 0 }, expanded: { opacity: 1 } }}
          className="absolute inset-0 z-0"
        >
          <BackdropImage
            url={IMAGE_URL}
            path={movie.backdrop_path}
            title={movie.title}
            isCard
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-3"
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

          <Buttons movie={movie} />
        </motion.div>

        <div className="absolute top-1 right-1 bg-black/60 px-1.5 py-0.5 rounded text-[8px] font-bold text-imdb-gold border border-white/10">
          ★ {formatRating(movie?.vote_average)}
        </div>
      </div>
    </motion.div>
  );
}
