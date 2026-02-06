import { useState, Suspense } from "react";
import { useDiscoverMovies } from "../hooks/useMovies";
import MovieList from "../components/Movies/MovieList";
import Header from "../components/Common/Header";
import Pagination from "../components/Layout/Pagination";
import SortMenu from "../components/UI/SortMenu";
import MovieGridSkeleton from "../components/Skeletons/MovieGridSkeleton";

import ScrollToTop from "../components/UI/ScrollToTop";

export default function TrendingPage() {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("popularity.desc");

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="p-8 pt-24 min-h-screen bg-imdb-black px-6 lg:px-16">
      <ScrollToTop trigger={page} />
      <div className="flex items-center justify-between gap-6 mb-12">
        <Header HeadTitle="Trending" />
        <SortMenu onSortChange={(value) => {
          setSortBy(value);
          setPage(1);
        }} />
      </div>

      <Suspense fallback={<MovieGridSkeleton />}>
        <TrendingContent 
          page={page} 
          sortBy={sortBy} 
          onPageChange={handlePageChange} 
        />
      </Suspense>
    </div>
  );
}

function TrendingContent({ page, sortBy, onPageChange }) {
  const { data } = useDiscoverMovies(page, sortBy);

  return (
    <>
      <MovieList movies={data?.results} />

      <Pagination
        currentPage={page}
        totalPages={data?.total_pages}
        onPageChange={onPageChange}
      />
    </>
  );
}
