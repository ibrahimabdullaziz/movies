import ActorImage from "./ActorImage";

export default function ActorProfile({ actor }) {
  if (!actor) return null;

  return (
    <div className="w-full md:w-1/3 lg:w-1/4">
      <ActorImage
        path={actor.profile_path}
        name={actor.name}
        size="h632"
        priority={true}
        className="w-full rounded-2xl shadow-2xl border border-white/10"
      />
      <div className="mt-6 space-y-4 bg-white/5 p-6 rounded-xl border border-white/10">
        <h3 className="text-imdb-gold font-bold uppercase text-sm tracking-widest">
          Personal Info
        </h3>
        <div>
          <p className="text-gray-400 text-sm">Born</p>
          <p>
            {actor.birthday} (Age:{" "}
            {new Date().getFullYear() - new Date(actor.birthday).getFullYear()})
          </p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Place of Birth</p>
          <p>{actor.place_of_birth}</p>
        </div>
      </div>
    </div>
  );
}
