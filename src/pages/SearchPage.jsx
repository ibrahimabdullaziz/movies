import { useSearchParams, Link } from "react-router-dom";
import { useSearchMovies } from "../hooks/useSearch";
import MovieCard from "../components/movies/MovieCard";
import { useEffect } from "react";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const { data: results, isLoading, isFetching } = useSearchMovies(query);

  // عشان الصفحة تطلع لفوق أول ما نتايج البحث تظهر
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [query]);

  return (
    <div className="min-h-screen bg-imdb-black pt-32 px-8 lg:px-16 text-white">
      <div className="flex items-center justify-between mb-10 border-l-4 border-imdb-gold pl-4">
        <h1 className="text-3xl font-black uppercase tracking-tighter">
          Results for: <span className="text-imdb-gold">"{query}"</span>
        </h1>
        <span className="text-gray-500 font-mono text-sm">
          {results?.length || 0} movies found
        </span>
      </div>

      {isLoading ? (
        // شكل الـ Skeleton البدائي بدل الـ Spinner السادة
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 animate-pulse">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="bg-white/5 aspect-[2/3] rounded-xl"></div>
          ))}
        </div>
      ) : results?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center py-32 flex flex-col items-center gap-4">
          <span className="text-6xl grayscale opacity-30">🔍</span>
          <p className="text-gray-500 text-xl">
            We couldn't find any movies for "{query}"
          </p>
          <Link to="/" className="text-imdb-gold hover:underline font-bold">
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
}
