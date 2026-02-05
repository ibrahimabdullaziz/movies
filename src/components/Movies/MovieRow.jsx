import { Link } from "react-router-dom";
import MovieRowCard from "./MovieRowCard";

export default function MovieRow({ title, movies, viewAllPath }) {
  return (
    <div className="my-10">
      {title && (
        <div className="flex justify-between items-center mb-6 px-8">
          <h2 className="text-2xl text-white font-bold border-l-4 border-imdb-gold pl-4">
            {title}
          </h2>
          {viewAllPath && (
            <Link to={viewAllPath} className="text-sm text-imdb-gold font-bold">
              Explore All &rarr;
            </Link>
          )}
        </div>
      )}

      <div className="flex items-center overflow-x-scroll gap-6 px-12 py-20 scrollbar-hide group">
        {movies?.map((movie) => (
          <div
            key={movie.id}
            className="flex-none transition-all duration-300 group-hover:opacity-50 group-hover:scale-95 hover:!opacity-100 hover:!scale-100"
          >
            <MovieRowCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}