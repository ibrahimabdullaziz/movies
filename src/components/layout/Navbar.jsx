import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

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
            <svg
              className="w-8 h-8 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.65 2.83H4.35A1.52 1.52 0 0 0 2.83 4.35v15.3a1.52 1.52 0 0 0 1.52 1.52h15.3a1.52 1.52 0 0 0 1.52-1.52V4.35a1.52 1.52 0 0 0-1.52-1.52zM12 17.17h-1.63V7.5H12v9.67zm4.55 0h-1.63V7.5h1.63v9.67zM7.45 17.17H5.82V7.5h1.63v9.67z" />
            </svg>
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
            className="hover:text-imdb-gold transition-colors font-semibold"
          >
            Watchlist
          </Link>

          <button className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
            🔍
          </button>
        </div>
      </div>
    </nav>
  );
}
