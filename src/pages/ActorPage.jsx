import { useParams } from "react-router-dom";
import { useActorData } from "../hooks/useMovies";
import MovieCard from "../components/Movies/MovieCard";
import ActorSkeleton from "../components/Skeletons/ActorSkeleton";
import ActorProfile from "../components/Actors/ActorProfile";

export default function ActorPage() {
  const { id } = useParams();
  const { details, movies } = useActorData(id);

  if (details.isPending || movies.isPending || details.isLoading || !details.data)
    return <ActorSkeleton />;

  const actor = details.data;
  const actorMovies = movies.data?.cast
    ?.sort((a, b) => b.popularity - a.popularity)
    .slice(0, 18);

  return (
    <div className="min-h-screen bg-imdb-black text-white pt-32 px-6 lg:px-16 pb-20">
      <div className="flex flex-col md:flex-row gap-12">
        <ActorProfile actor={actor} />


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
