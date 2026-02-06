import { Link } from "react-router-dom";
import ActorImage from "./ActorImage";

export default function ActorCard({ person }) {
  return (
    <Link
      to={`/actor/${person.id}`}
      className="flex-shrink-0 group cursor-pointer text-center"
    >
      <div className="relative w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-3">
        <div className="absolute inset-0 rounded-full bg-imdb-gold blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
        <ActorImage
          path={person.profile_path}
          name={person.name}
          className="relative w-full h-full object-cover rounded-full border-2 border-white/10 group-hover:border-imdb-gold transition-all duration-300 group-hover:scale-105"
        />
      </div>

      <p className="font-bold text-sm text-white truncate group-hover:text-imdb-gold transition-colors">
        {person.name}
      </p>
      <p className="text-xs text-gray-500 truncate mt-0.5 px-2">
        {person.character}
      </p>
    </Link>
  );
}
