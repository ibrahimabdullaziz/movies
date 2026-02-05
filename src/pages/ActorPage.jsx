import { useParams } from "react-router-dom";
import { useActorData } from "../hooks/useMovies";
import MovieCard from "../components/movies/MovieCard";
import ActorSkeleton from "../components/skeletons/ActorSkeleton";

const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

export default function ActorPage() {
  const { id } = useParams();
  const { details, movies } = useActorData(id);

  if (details.isLoading || movies.isLoading)
    return <ActorSkeleton />;

  const actor = details.data;
  const actorMovies = movies.data?.cast
    ?.sort((a, b) => b.popularity - a.popularity)
    .slice(0, 18);

  return (
    <div className="min-h-screen bg-imdb-black text-white pt-32 px-6 lg:px-16 pb-20">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/3 lg:w-1/4">
          <img
            src={`${IMAGE_URL}${actor.profile_path}`}
            className="w-full rounded-2xl shadow-2xl border border-white/10"
            alt={actor.name}
          />
          <div className="mt-6 space-y-4 bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-imdb-gold font-bold uppercase text-sm tracking-widest">
              Personal Info
            </h3>
            <div>
              <p className="text-gray-400 text-sm">Born</p>
              <p>
                {actor.birthday} (Age:{" "}
                {new Date().getFullYear() -
                  new Date(actor.birthday).getFullYear()}
                )
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Place of Birth</p>
              <p>{actor.place_of_birth}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-8">
          <h1 className="text-5xl lg:text-7xl font-black">{actor.name}</h1>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="w-1 h-6 bg-imdb-gold rounded-full" /> Biography
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg max-w-4xl whitespace-pre-line">
              {actor.biography || "No biography available for this actor."}
            </p>
          </div>

          <div className="space-y-6 pt-10">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="w-1 h-6 bg-imdb-gold rounded-full" /> Known For
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {actorMovies?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
