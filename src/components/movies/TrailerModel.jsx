import { motion, AnimatePresence } from "framer-motion";
import { useMovieVideos } from "../../hooks/useMovies";
import TrailerSkeleton from "../skeletons/TrailerSkeleton";

export default function TrailerModel({
  isOpen,
  onClose,
  trailerKey,
  title,
  movieId,
}) {
  const { data, isLoading } = useMovieVideos(isOpen ? movieId : null);

  const finalKey =
    trailerKey ||
    data?.results?.find((v) => v.type === "Trailer" && v.site === "YouTube")?.key ||
    data?.results?.[0]?.key;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-imdb-gold text-3xl z-50 transition-colors bg-black/50 w-10 h-10 rounded-full flex items-center justify-center"
            >
              ✕
            </button>

            {isLoading ? (
              <TrailerSkeleton />
            ) : finalKey ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${finalKey}?autoplay=1&rel=0&modestbranding=1`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
                <p className="text-xl">No Trailer Found</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
