import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMoviesByGenre } from "../hooks/useMovies";
import Pagination from "../components/layout/Pagination";
import MovieList from "../components/movies/MoviesList";
import Header from "../components/common/Header";

export default function GenrePage() {
  const { id, name } = useParams();
  const [page, setPage] = useState(1);

  const { data, isLoading, isPlaceholderData } = useMoviesByGenre(id, page);

  return (
    <div className="bg-imdb-black min-h-screen pt-24 px-6 lg:px-16">
      <Header HeadTitle={name} />

      <div
        className={`transition-opacity duration-300 ${
          isPlaceholderData ? "opacity-50" : "opacity-100"
        }`}
      >
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 animate-pulse">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-white/5 aspect-[2/3] rounded-xl" />
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
