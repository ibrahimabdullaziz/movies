import { useTrendingMovies } from "./hooks/useMovies";

function App() {
  const { data: movies, isLoading, isError, error } = useTrendingMovies();

  if (isLoading)
    return <div className="p-10 text-white">Loading movies...</div>;
  if (isError)
    return <div className="p-10 text-red-500">Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Trending Movies</h1>
      <ul className="list-disc ml-6">
        {movies?.map((movie) => (
          <li key={movie.id} className="mb-2 text-lg">
            {movie.title} - ⭐ {movie.vote_average}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
