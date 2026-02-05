import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <div className="flex flex-col space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {movies?.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
          <p className="text-gray-500 font-medium">
            No movies found in this list.
          </p>
        </div>
      )}
    </div>
  );
}
