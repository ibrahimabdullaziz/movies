export function States({ movie }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 space-y-6">
      <h3 className="text-lg font-black text-white border-b border-white/10 pb-4 mb-4">
        MOVIE INFO
      </h3>

      <div className="space-y-1">
        <p className="text-imdb-gold text-xs font-bold uppercase tracking-widest">
          Status
        </p>
        <p className="text-white font-medium">{movie.status}</p>
      </div>

      <div className="space-y-1">
        <p className="text-imdb-gold text-xs font-bold uppercase tracking-widest">
          Budget
        </p>
        <p className="text-white font-medium">
          {movie.budget > 0 ? `$${movie.budget.toLocaleString()}` : "N/A"}
        </p>
      </div>

      <div className="space-y-1">
        <p className="text-imdb-gold text-xs font-bold uppercase tracking-widest">
          Revenue
        </p>
        <p className="text-white font-medium">
          {movie.revenue > 0 ? `$${movie.revenue.toLocaleString()}` : "N/A"}
        </p>
      </div>

      <div className="space-y-1">
        <p className="text-imdb-gold text-xs font-bold uppercase tracking-widest">
          Original Language
        </p>
        <p className="text-white font-medium uppercase">
          {movie.original_language}
        </p>
      </div>
    </div>
  );
}
