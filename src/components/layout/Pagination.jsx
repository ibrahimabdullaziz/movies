export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-4 py-10">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-6 py-2 bg-white/10 rounded-full hover:bg-imdb-gold hover:text-black disabled:opacity-30 disabled:hover:bg-white/10 disabled:hover:text-white transition-all font-bold"
      >
        Previous
      </button>

      <span className="text-imdb-gold font-bold">
        Page {currentPage}{" "}
        <span className="text-gray-500">
          of {totalPages > 500 ? 500 : totalPages}
        </span>
      </span>

      <button
        disabled={currentPage >= 500}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-6 py-2 bg-white/10 rounded-full hover:bg-imdb-gold hover:text-black disabled:opacity-30 transition-all font-bold"
      >
        Next
      </button>
    </div>
  );
}
