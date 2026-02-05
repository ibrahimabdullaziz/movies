import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { formatRating } from "../../utils/Formatter";
import Metadata from "../MoviesDetails/MovieMetadata";
import { Poster } from "../MoviesDetails/MoviePoster";
import { BackdropImage } from "../MoviesDetails/BackdropImage";
import Buttons from "../UI/Buttons";

const cardVariants = {
  initial: { scale: 1, zIndex: 1 },
  expanded: {
    scale: 1.4,
    zIndex: 50,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const MovieRowCard = memo(({ movie }) => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    if (movie?.id) {
      navigate(`/movie/${movie.id}`);
    }
  }, [navigate, movie?.id]);

  if (!movie) return null;

  const rating = formatRating(movie?.vote_average);

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
            path={movie.poster_path}
            title={movie.title}
            size="w500"
            isCard
          />
          {/* Default state title and rating */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2 transition-opacity duration-300">
             <div className="flex items-center justify-between gap-1">
                <h3 className="text-white text-[10px] font-bold truncate max-w-[70%]">
                  {movie.title}
                </h3>
                <div className="flex items-center gap-0.5 text-imdb-gold text-[8px] font-black">
                  ★ {rating}
                </div>
             </div>
          </div>
        </motion.div>

        <motion.div
          variants={{ initial: { opacity: 0 }, expanded: { opacity: 1 } }}
          className="absolute inset-0 z-0"
        >
          <BackdropImage
            path={movie.backdrop_path}
            title={movie.title}
            size="w780"
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

        <motion.div 
          className="absolute top-1 right-1 bg-black/60 px-1.5 py-0.5 rounded text-[8px] font-bold text-imdb-gold border border-white/10"
          variants={{ initial: { opacity: 0 }, expanded: { opacity: 1 } }}
        >
          ★ {rating}
        </motion.div>
      </div>
    </motion.div>
  );
});

export default MovieRowCard;
