import { useState } from "react";
import { useTrendingMovies } from "../hooks/useMovies";
import MovieList from "../components/movies/MoviesList";
import Header from "../components/common/Header";
import Pagination from "../components/layout/Pagination";

export default function TrendingPage() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isPlaceholderData } = useTrendingMovies(page);

  return (
    <div className="p-8 pt-24 min-h-screen bg-imdb-black">
      <Header HeadTitle="Trending " />

      <div
        className={`transition-opacity duration-300 ${isPlaceholderData ? "opacity-50" : "opacity-100"}`}
      >
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-imdb-gold"></div>
          </div>
        ) : (
          <>
            <MovieList movies={data?.results} />

            <Pagination
              currentPage={page}
              totalPages={data?.total_pages}
              onPageChange={(newPage) => {
                setPage(newPage);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
