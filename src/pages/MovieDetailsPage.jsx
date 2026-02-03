import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovies";
import TrailerModal from "../components/movies/TrailerModel";

const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

export default function MovieDetails() {
  const { id } = useParams();
  const { data: movie, isLoading, isError } = useMovieDetails(id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  if (isError || !movie)
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Movie not found!
      </div>
    );

  const trailer = movie?.videos?.results?.find((vid) => vid.type === "Trailer");

  return (
    <div className="relative min-h-screen bg-imdb-black text-white overflow-x-hidden">
      <div className="absolute inset-0 h-[70vh] lg:h-screen">
        <img
          src={`${IMAGE_URL}${movie.backdrop_path}`}
          className="w-full h-full object-cover"
          alt={movie.title}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-imdb-black via-imdb-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-imdb-black via-transparent to-transparent" />
      </div>

      <div className="relative pt-32 px-8 lg:px-16 flex flex-col lg:flex-row gap-10">
        <img
          src={`${IMAGE_URL}${movie.poster_path}`}
          className="w-64 lg:w-80 rounded-2xl shadow-2xl"
          alt={movie.title}
        />

        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl lg:text-7xl font-black">{movie.title}</h1>
          <div className="flex items-center gap-4 text-imdb-gold font-bold">
            <span>★ {movie.vote_average?.toFixed(2)}</span>
            <span>{movie.release_date?.split("-")[0]}</span>
            <span>{movie.runtime} min</span>
          </div>
          <p className="text-xl text-gray-200">{movie.overview}</p>

          <div className="flex gap-4 pt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-imdb-gold text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all"
            >
              Watch Trailer
            </button>
          </div>
        </div>
      </div>

      <TrailerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        trailerKey={trailer?.key}
        title={movie.title}
      />
    </div>
  );
}
