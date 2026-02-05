export default function SearchResult({ movie, handleGetResults }) {
  return (
    <button
      onClick={handleGetResults}
      className="w-full flex items-center gap-3 p-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 text-left"
    >
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
            : "https://via.placeholder.com/92x138?text=No+Img"
        }
        className="w-10 h-14 object-cover rounded"
        alt=""
      />
      <div className="overflow-hidden">
        <p className="font-bold text-sm truncate text-white">{movie.title}</p>
        <p className="text-xs text-gray-500">
          {movie.release_date?.split("-")[0] || "N/A"}
        </p>
      </div>
    </button>
  );
}
