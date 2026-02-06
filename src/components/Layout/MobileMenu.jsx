import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function MobileMenu({ isOpen, closeMenu, watchlist }) {
  if (!isOpen) return null;

  return (
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
  );
}
