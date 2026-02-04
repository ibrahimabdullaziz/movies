import { Link } from "react-router-dom";

export default function Cast({ cast, image_url }) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <span className="w-2 h-8 bg-imdb-gold rounded-full" /> Top Cast
      </h2>
      <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
        {cast?.map((person) => (
          <Link
            key={person.id}
            to={`/actor/${person.id}`}
            className="flex-shrink-0 w-32 lg:w-40 group cursor-pointer"
          >
            <div className="aspect-square rounded-full overflow-hidden border-2 border-white/5 group-hover:border-imdb-gold transition-colors mb-3">
              <img
                src={
                  person.profile_path
                    ? `${image_url}${person.profile_path}`
                    : "https://via.placeholder.com/200x200?text=No+Image"
                }
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                alt={person.name}
              />
            </div>
            <p className="font-bold text-center line-clamp-1">{person.name}</p>
            <p className="text-sm text-gray-400 text-center line-clamp-1">
              {person.character}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
