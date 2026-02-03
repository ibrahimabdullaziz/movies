const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

export default function MovieCard({ movie }) {
  const releaseDate = movie?.release_date
    ? new Date(movie.release_date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "TBA";
  return (
    <div className="group bg-surface rounded-md overflow-hidden hover:ring-1 hover:ring-imdb-gold/50 transition-all duration-300">
      <div className="relative aspect-[2/3]">
        <img
          src={`${IMAGE_URL}${movie.poster_path}`}
          className="w-full h-full object-cover"
          alt={movie.title}
        />
        <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-1 rounded flex items-center gap-1">
          <span className="text-imdb-gold text-sm font-bold">★</span>
          <span className="text-white text-xs font-bold">
            {movie.vote_average.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="p-3">
        <h2 className="text-sm font-semibold line-clamp-2 group-hover:text-imdb-blue transition-colors">
          {movie.title}
        </h2>

        <div className="flex items-center justify-between mt-3">
          <span className="text-[11px] text-slate-400 font-semibold  ">
            {releaseDate}
          </span>
        </div>
      </div>
    </div>
  );
}
