import { useState, useEffect } from "react";
import { useSearchMovies } from "../../hooks/useSearch";
import { useNavigate } from "react-router-dom";
import SearchResult from "../UI/SearchResultButton";

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

  const handleGetResults = (movieId) => {
    navigate(`/movie/${movieId}`);
    setSearchTerm("");
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
                <SearchResult
                  movie={movie}
                  key={movie.id}
                  handleGetResults={() => handleGetResults(movie.id)}
                />
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
