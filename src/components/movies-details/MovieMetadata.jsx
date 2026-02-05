export default function Metadata({ isMovieAdult, releaseDate, className }) {
  const year = releaseDate ? releaseDate.split("-")[0] : "N/A";

  return (
    <div
      className={`flex items-center gap-3 text-[11px] text-gray-400 font-bold uppercase tracking-widest ${className}`}
    >
      <span className="text-white">{year}</span>
      <span className="w-1 h-1 bg-imdb-gold rounded-full shadow-[0_0_5px_#f5c518]" />
      <span className="border border-white/20 px-2 py-0.5 rounded-md text-gray-300">
        {isMovieAdult ? "18+" : "PG-13"}
      </span>
      <span className="w-1 h-1 bg-imdb-gold rounded-full shadow-[0_0_5px_#f5c518]" />
      <span>Movie</span>
    </div>
  );
}
