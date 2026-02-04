export function Poster({ url, path, title }) {
  return (
    <div className="shrink-0 group">
      <img
        src={`${url}${path}`}
        className="w-64 lg:w-80 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group-hover:border-imdb-gold/50 transition-all duration-500"
        alt={title}
      />
    </div>
  );
}
