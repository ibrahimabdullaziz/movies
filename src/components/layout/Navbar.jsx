import { Link, useNavigate } from "react-router-dom";
import { useWatchlist } from "../../hooks/useWatchList";
import SearchBar from "./SearchBar";
export default function Navbar() {
  const navigate = useNavigate();

  const { watchlist } = useWatchlist();

  return (
    <nav className="fixed top-0 w-full z-[100] bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="fixed top-24 left-8 z-[110] bg-black/50 hover:bg-imdb-gold hover:text-black p-3 rounded-full backdrop-blur-md transition-all group"
        >
          <svg
            className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-imdb-gold p-1.5 rounded-lg group-hover:scale-110 transition-transform">
            <img
              src="/icon.svg"
              alt="App Logo"
              className="w-10 h-10 group-hover: transition-transform shadow-lg"
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            Ur<span className="text-imdb-gold">Movies</span>
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="hover:text-imdb-gold transition-colors font-semibold"
          >
            Movies
          </Link>
          <Link
            to="/watchlist"
            className="relative hover:text-imdb-gold transition-colors"
          >
            Watchlist
            {watchlist.length > 0 && (
              <span className="absolute -top-3 -right-4 bg-imdb-gold text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                {watchlist.length}
              </span>
            )}
          </Link>
          <div className="flex-1 max-w-md">
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  );
}
