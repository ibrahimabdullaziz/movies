import { Link } from "react-router-dom";

export default function Cast({ cast, image_url }) {
  if (!cast || cast.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-black mb-6 flex items-center gap-3 tracking-tighter text-white">
        <span className="w-1.5 h-6 bg-imdb-gold rounded-full shadow-[0_0_10px_#f5c518]" />
        TOP CAST
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide mask-linear-fade">
        {cast.map((person) => (
          <Link
            key={person.id}
            to={`/actor/${person.id}`}
            className="flex-shrink-0 w-28 lg:w-32 group cursor-pointer text-center"
          >
            <div className="relative w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-3">
              <div className="absolute inset-0 rounded-full bg-imdb-gold blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <img
                src={
                  person.profile_path
                    ? `${image_url}${person.profile_path}`
                    : "https://via.placeholder.com/200x200?text=No+Img"
                }
                className="relative w-full h-full object-cover rounded-full border-2 border-white/10 group-hover:border-imdb-gold transition-all duration-300 group-hover:scale-105"
                alt={person.name}
              />
            </div>

            <p className="font-bold text-sm text-white truncate group-hover:text-imdb-gold transition-colors">
              {person.name}
            </p>
            <p className="text-xs text-gray-500 truncate mt-0.5">
              {person.character}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
