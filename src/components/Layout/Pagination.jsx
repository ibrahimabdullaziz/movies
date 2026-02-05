export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const maxPages = totalPages > 500 ? 500 : totalPages;
  if (maxPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const showMax = 2;

    pages.push(1);

    if (currentPage > showMax + 2) {
      pages.push("...");
    }

    for (
      let i = Math.max(2, currentPage - showMax);
      i <= Math.min(maxPages - 1, currentPage + showMax);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < maxPages - (showMax + 1)) {
      pages.push("...");
    }

    if (maxPages > 1) {
      pages.push(maxPages);
    }

    return pages;
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-10">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 bg-white/5 rounded-lg hover:bg-imdb-gold hover:text-black disabled:opacity-20 transition-all font-bold mr-2"
      >
        <span className="text-xl">{"<"}</span>
      </button>

      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={page === "..."}
          className={`w-10 h-10 rounded-lg font-bold transition-all ${
            page === currentPage
              ? "bg-imdb-gold text-black scale-110 shadow-[0_0_15px_rgba(245,197,24,0.4)]"
              : page === "..."
                ? "cursor-default text-gray-500"
                : "bg-white/5 hover:bg-white/20 text-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage >= maxPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 bg-white/5 rounded-lg hover:bg-imdb-gold hover:text-black disabled:opacity-20 transition-all font-bold ml-2"
      >
        <span className="text-xl">{">"}</span>
      </button>
    </div>
  );
}
