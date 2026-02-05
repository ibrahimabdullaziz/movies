import { useState } from "react";
import MovieCard from "../components/movies/MovieCard";
import { useWatchlist } from "../hooks/useWatchList.js";
import Pagination from "../components/layout/Pagination";
import ErrorState from "../components/UI/ErrorState";

export default function WatchlistPage() {
  const { watchlist } = useWatchlist();

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  const currentMovies = watchlist.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(watchlist.length / moviesPerPage);

  return (
    <div className="min-h-screen bg-imdb-black pt-28 px-6 lg:px-16">
      <div className="flex items-center gap-4 mb-10">
        <h1 className="text-4xl font-black text-white">
          My <span className="text-imdb-gold">Watchlist</span>
        </h1>
        <span className="bg-imdb-gold text-black px-3 py-1 rounded-full font-bold">
          {watchlist.length}
        </span>
      </div>

      {watchlist.length === 0 ? (
        <ErrorState type="empty" message="Your list is looking a bit empty..." />
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {currentMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          {watchlist.length > moviesPerPage && (
            <div className="mt-10">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
