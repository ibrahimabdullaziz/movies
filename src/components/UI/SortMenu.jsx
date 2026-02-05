import { useState } from "react";

export default function SortMenu({ onSortChange }) {
  const [currentSort, setCurrentSort] = useState("Default");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: "Popularity", value: "popularity.desc" },
    { label: "Top Rated", value: "vote_average.desc" },
    { label: "Newest", value: "primary_release_date.desc" },
    { label: "A-Z (Title)", value: "original_title.asc" },
  ];

  const handleSelect = (option) => {
    setCurrentSort(option.label);
    onSortChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 transition-all text-sm font-semibold text-gray-300"
      >
        <span>
          Sort by: <span className="text-imdb-gold">{currentSort}</span>
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden backdrop-blur-xl">
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt)}
                className="w-full text-left px-4 py-3 text-sm hover:bg-imdb-gold hover:text-black transition-colors border-b border-white/5 last:border-0"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
