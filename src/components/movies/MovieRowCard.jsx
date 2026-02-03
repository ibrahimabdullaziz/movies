const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

export default function MovieRowCard({ movie }) {
  if (!movie) return null;

  return (
    <div className="group relative transition-all duration-500 ease-out cursor-pointer">
      <div
        className="relative overflow-hidden rounded-xl bg-surface 
                    w-[160px] h-[240px] 
                    group-hover:w-[320px] group-hover:h-[180px] 
                    transition-all duration-500 shadow-2xl ring-1 ring-white/10"
      >
        <img
          src={`${IMAGE_URL}${movie.poster_path}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          alt={movie.title}
        />

        <img
          src={`${IMAGE_URL}${movie.backdrop_path}`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          alt={movie.title}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
          <p className="text-imdb-gold font-bold text-xs">
            ★ {movie.vote_average.toFixed(1)}
          </p>
          <h3 className="text-white text-sm font-black truncate">
            {movie.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
