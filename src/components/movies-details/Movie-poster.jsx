export function Poster({ url, path, title, isCard = false }) {
  return (
    <div className={`shrink-0 ${isCard ? "w-full h-full" : "group relative"}`}>
      <img
        src={`${url}${path}`}
        className={`${
          isCard
            ? "w-full h-full object-cover"
            : "w-64 lg:w-80 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group-hover:border-imdb-gold/50 transition-all duration-500 group-hover:scale-[1.02]"
        }`}
        alt={title}
      />

      {!isCard && (
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10  transition-all" />
      )}
    </div>
  );
}
