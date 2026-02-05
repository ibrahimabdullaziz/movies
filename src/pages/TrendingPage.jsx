import { useState } from "react";
import { useTrendingMovies } from "../hooks/useMovies";
import MovieList from "../components/Movies/MovieList";
import Header from "../components/Common/Header";
import Pagination from "../components/Layout/Pagination";
import Skeleton from "../components/UI/Skeleton";

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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="aspect-[2/3] w-full">
                <Skeleton className="h-full w-full rounded-xl" />
              </div>
            ))}
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
