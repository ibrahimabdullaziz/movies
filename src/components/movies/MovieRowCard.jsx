import { motion } from "framer-motion";

const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

const cardVariants = {
  initial: {
    scale: 1,
    opacity: 1,
    width: 280, // لازم عرض ثابت
    height: 160, // لازم ارتفاع ثابت
  },
  // لما نقف على "الصف نفسه" كل الكروت هتاخد dimmed
  hovered: {
    scale: 0.9,
    opacity: 0.5,
    filter: "grayscale(50%)",
  },
  // لما نقف على "الكارت ده بالذات" هياخد expanded ويلغي الـ dimmed
  expanded: {
    scale: 1.3,
    opacity: 1,
    filter: "grayscale(0%)",
    zIndex: 50,
    transition: { duration: 0.3 },
  },
};

export default function MovieRowCard({ movie }) {
  if (!movie) return null;

  return (
    <motion.div
      initial="initial"
      layout
      variants={cardVariants}
      // whileHover هنا بتعمل Override للـ variants اللي جاية من الأب
      whileHover="expanded"
      className="relative cursor-pointer flex-none"
      style={{ originX: 0.5, originY: 0.5 }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-xl bg-surface shadow-2xl ring-1 ring-white/10">
        {/* Poster Image (تختفي في الـ expanded) */}
        <motion.img
          src={`${IMAGE_URL}${movie.poster_path}`}
          className="absolute inset-0 w-full h-full object-cover"
          variants={{
            initial: { opacity: 1 },
            expanded: { opacity: 0 },
          }}
        />

        {/* Backdrop Image (تظهر في الـ expanded) */}
        <motion.img
          src={`${IMAGE_URL}${movie.backdrop_path}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          variants={{
            expanded: { opacity: 1 },
          }}
        />

        {/* Info Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-4"
          initial={{ opacity: 0 }}
          variants={{
            expanded: { opacity: 1 },
          }}
        >
          <p className="text-imdb-gold font-bold text-xs">
            ★ {movie.vote_average?.toFixed(1)}
          </p>
          <h3 className="text-white text-sm font-black truncate">
            {movie.title}
          </h3>
        </motion.div>
      </div>
    </motion.div>
  );
}
