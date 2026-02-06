import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMoviesByGenre } from "../hooks/useMovies";
import Pagination from "../components/Layout/Pagination";
import MovieList from "../components/Movies/MovieList";
import ScrollToTop from "../components/UI/ScrollToTop";

export default function GenrePage() {
  const { id, name } = useParams();
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("popularity.desc");

  const { data, isLoading, isPlaceholderData } = useMoviesByGenre(id, page, sortBy);

  return (
    <div className="bg-imdb-black min-h-screen pt-24 px-6 lg:px-16">
      <ScrollToTop trigger={page} />
      <div className="flex items-center justify-between gap-6 mb-12">
        <Header HeadTitle={name} />
        <SortMenu onSortChange={(value) => setSortBy(value)} />
      </div>

      <div
        className={`transition-opacity duration-300 ${
          isPlaceholderData ? "opacity-50" : "opacity-100"
        }`}
      >
        {isLoading ? (
          <MovieGridSkeleton />
        ) : (
          <>
            <MovieList movies={data?.results} />

            <Pagination
              currentPage={page}
              totalPages={data?.total_pages}
              onPageChange={(newPage) => {
                setPage(newPage);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
