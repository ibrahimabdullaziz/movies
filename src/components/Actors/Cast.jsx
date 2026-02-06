import { Link, useParams } from "react-router-dom";
import ActorCard from "./ActorCard";

export default function Cast({ cast }) {
  const { id } = useParams();
  
  if (!cast || cast.length === 0) return null;

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-black flex items-center gap-3 tracking-tighter text-white">
          <span className="w-1.5 h-6 bg-imdb-gold rounded-full shadow-[0_0_10px_#f5c518]" />
          TOP CAST
        </h2>
        <Link
          to={`/movie/${id}/cast`}
          className="text-imdb-gold font-bold text-sm hover:underline flex items-center gap-1 group"
        >
          See All
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide mask-linear-fade">
        {cast.map((person) => (
          <div key={person.id} className="w-28 lg:w-32 flex-shrink-0">
            <ActorCard person={person} />
          </div>
        ))}
      </div>
    </section>
  );
}
