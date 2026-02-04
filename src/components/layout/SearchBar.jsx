import { useState, useEffect } from "react";
import { useSearchMovies } from "../../hooks/useSearch";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const { data: results, isLoading } = useSearchMovies(debouncedQuery);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  };

  return (
    <div className="relative group">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a movie..."
          className="w-64 lg:w-80 bg-white/5 border border-white/10 px-10 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-imdb-gold/50 focus:bg-white/10 transition-all text-white"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 grayscale group-focus-within:grayscale-0 transition-all">
          🔍
        </span>
      </form>

      {debouncedQuery && (
        <div className="absolute top-12 left-0 w-full bg-imdb-black border border-white/10 rounded-xl shadow-2xl overflow-hidden z-[200] backdrop-blur-xl">
          {isLoading ? (
            <div className="p-4 text-center text-sm text-gray-400 italic">
              Searching...
            </div>
          ) : (
            <>
              {results?.results?.slice(0, 6).map((movie) => (
                <button
                  key={movie.id}
                  onClick={() => {
                    navigate(`/movie/${movie.id}`);
                    setSearchTerm("");
                  }}
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
                    <p className="font-bold text-sm truncate text-white">
                      {movie.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {movie.release_date?.split("-")[0] || "N/A"}
                    </p>
                  </div>
                </button>
              ))}

              {results?.results?.length > 0 && (
                <button
                  onClick={handleSubmit}
                  className="w-full p-3 text-center text-imdb-gold text-xs font-bold hover:bg-imdb-gold hover:text-black transition-all"
                >
                  See all results
                </button>
              )}
            </>
          )}

          {!isLoading && results?.results?.length === 0 && (
            <div className="p-4 text-center text-sm text-gray-500">
              No results found 😕
            </div>
          )}
        </div>
      )}
    </div>
  );
}
