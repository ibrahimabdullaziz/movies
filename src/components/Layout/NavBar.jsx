import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useWatchlist } from "../../hooks/useWatchList";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // لمراقبة تغيير الصفحة
  const { watchlist } = useWatchlist();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // التأكد من قفل المنيو تلقائياً عند الانتقال لأي صفحة جديدة
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-gradient-to-b from-black/95 to-transparent backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="bg-imdb-gold p-1.5 rounded-lg group-hover:scale-110 transition-transform">
            <img
              src="/icon.svg"
              alt="App Logo"
              className="w-10 h-10 shadow-lg"
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            Ur<span className="text-imdb-gold">Movies</span>
          </span>
        </Link>

        <div className="flex-1 max-w-md hidden md:block">
          <SearchBar />
        </div>

        <div className="hidden md:flex items-center gap-8 shrink-0">
          <Link
            to="/"
            className="hover:text-imdb-gold transition-colors font-semibold"
          >
            Movies
          </Link>
          <Link
            to="/watchlist"
            className="relative hover:text-imdb-gold transition-colors font-semibold"
          >
            Watchlist
            {watchlist.length > 0 && (
              <span className="absolute -top-3 -right-4 bg-imdb-gold text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {watchlist.length}
              </span>
            )}
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 z-[130] relative focus:outline-none"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-imdb-gold transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-full h-0.5 bg-imdb-gold transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>

        <button
          onClick={() => navigate(-1)}
          className="fixed top-24 left-8 z-[110] bg-black/60 hover:bg-imdb-gold hover:text-black p-3 rounded-full backdrop-blur-md transition-all group border border-white/10 shadow-2xl"
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
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-start justify-center pt-24 px-6 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={closeMenu}
          />

          <div className="relative w-full max-w-sm bg-imdb-black border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-2xl animate-in zoom-in-95 duration-200">
            <div className="flex flex-col gap-6">
              <div className="mb-2">
                <SearchBar onSearchSuccess={closeMenu} />
              </div>

              <Link
                to="/"
                className="flex items-center gap-4 text-xl font-bold p-4 rounded-2xl hover:bg-white/5 transition-colors"
              >
                <span className="text-imdb-gold"></span> Movies
              </Link>

              <Link
                to="/watchlist"
                className="flex items-center justify-between text-xl font-bold p-4 rounded-2xl hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-imdb-gold"></span> Watchlist
                </div>
                {watchlist.length > 0 && (
                  <span className="bg-imdb-gold text-black px-3 py-1 rounded-full text-xs font-black">
                    {watchlist.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
