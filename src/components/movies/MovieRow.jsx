import MovieRowCard from "./MovieRowCard";
import { Link } from "react-router-dom";
export default function MovieRow({ title, movies, viewAllPath }) {
  return (
    <div className="my-10">
      <div className="flex justify-between items-center mb-6 px-8">
        <h2 className="text-2xl text-white font-bold border-l-4 border-imdb-gold pl-4">
          {title}
        </h2>
        {viewAllPath && (
          <Link
            to={viewAllPath}
            className="text-sm text-imdb-gold hover:text-white transition-colors font-bold flex items-center gap-1"
          >
            Explore All <span>&rarr;</span>
          </Link>
        )}
      </div>
      <div className="flex overflow-x-scroll gap-8 px-10 pb-10 scrollbar-hide snap-x">
        {movies?.map((movie) => (
          <MovieRowCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
