import { useSearchParams, Link } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useSearchMovies } from "../hooks/useSearch";
import MovieList from "../components/Movies/MovieList";
import Pagination from "../components/Layout/Pagination";
import ErrorState from "../components/UI/ErrorState";
import MovieGridSkeleton from "../components/Skeletons/MovieGridSkeleton";

import ScrollToTop from "../components/UI/ScrollToTop";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") || "";
  const pageFromUrl = parseInt(searchParams.get("page")) || 1;
  const currentPage = pageFromUrl > 500 ? 500 : pageFromUrl;

  const handlePageChange = (newPage) => {
    setSearchParams({ q: query, page: newPage });
  };

  return (
    <div className="min-h-screen bg-imdb-black pt-32 px-8 lg:px-16 text-white text-center">
      <ScrollToTop trigger={currentPage} />
      <Suspense fallback={<MovieGridSkeleton />}>
        <SearchContent 
          query={query} 
          currentPage={currentPage} 
          handlePageChange={handlePageChange} 
        />
      </Suspense>
    </div>
  );
}

function SearchContent({ query, currentPage, handlePageChange }) {
  const { data, isFetching } = useSearchMovies(query, currentPage);

  const movies = data?.results || [];
  const totalPages = data?.total_pages || 0;
  const totalResults = data?.total_results || 0;

  return (
    <>
      <div className="flex items-center justify-between mb-10 border-l-4 border-imdb-gold pl-4 gap-4 text-left">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter">
            Results for: <span className="text-imdb-gold">"{query}"</span>
          </h1>
          <p className="text-gray-500 font-mono text-sm mt-1">
            Found {totalResults.toLocaleString()} movies
          </p>
        </div>

        {isFetching && (
          <div className="text-imdb-gold text-xs font-bold animate-pulse">
            Updating results...
          </div>
        )}
      </div>

      {movies.length > 0 ? (
        <>
          <MovieList movies={movies} />

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center pt-20">
          <ErrorState
            type="empty"
            message={`We couldn't find any movies for "${query}"`}
          />
          <Link
            to="/"
            className="mt-6 text-imdb-gold hover:underline font-bold transition-all"
          >
            Back to Home
          </Link>
        </div>
      )}
    </>
  );
}
