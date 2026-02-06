import { useNavigate } from "react-router-dom";

export default function Header({ HeadTitle }) {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between gap-3 mb-10">
      <div className="flex items-center gap-3 overflow-hidden">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-white/10 rounded-full transition-colors shrink-0 group"
          aria-label="Go Back"
        >
          <svg
            className="w-6 h-6 text-imdb-gold group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-xl md:text-3xl font-black uppercase tracking-wider truncate">
          {HeadTitle} <span className="text-imdb-gold hidden sm:inline">Movies</span>
        </h1>
      </div>
    </header>
  );
}
