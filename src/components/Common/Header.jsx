import { useNavigate } from "react-router-dom";

export default function Header({ HeadTitle, showBack = true }) {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between gap-3 mb-10">
      <div className="flex items-center gap-2 overflow-hidden -ml-2">
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            className="p-1.5 hover:bg-white/10 rounded-full transition-colors shrink-0 group"
            aria-label="Go Back"
          >
            <svg
              className="w-5 h-5 text-imdb-gold group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
        <h1 className="text-xl md:text-3xl font-black uppercase tracking-wider truncate">
          {HeadTitle} <span className="text-imdb-gold hidden sm:inline">Movies</span>
        </h1>
      </div>
    </header>
  );
}
