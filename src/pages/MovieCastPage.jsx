import { useParams, useNavigate } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovies";
import Container from "../components/UI/Container";
import ActorCard from "../components/Actors/ActorCard";
import MovieGridSkeleton from "../components/Skeletons/MovieGridSkeleton";
import { m } from "framer-motion";

export default function MovieCastPage() {
  const { id } = useParams();
  const { data: movie, isLoading, isError } = useMovieDetails(id);

  if (isLoading)
    return (
      <div className="pt-32 px-6 lg:px-16">
        <MovieGridSkeleton />
      </div>
    );
  if (isError || !movie) return <div className="text-white p-20 text-center">Error loading cast.</div>;

  const cast = movie?.credits?.cast || [];

  return (
    <div className="min-h-screen bg-imdb-black text-white pt-32 pb-20">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 ml-6 border-b border-white/10 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
              Full Cast & Crew
            </h1>
            <p className="text-gray-400 mt-2 text-lg">
              for <span className="text-white font-medium">{movie.title}</span>
            </p>
          </div>
          
          <div className="md:ml-auto">
            <span className="bg-imdb-gold/10 text-imdb-gold px-4 py-2 rounded-full border border-imdb-gold/20 text-sm font-bold">
              {cast.length} Actors Found
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-12">
          {cast.map((person) => (
            <m.div
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ActorCard person={person} />
            </m.div>
          ))}
        </div>

        {cast.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl font-light">No cast information available for this title.</p>
          </div>
        )}
      </Container>
    </div>
  );
}
