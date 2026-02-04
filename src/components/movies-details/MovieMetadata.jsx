export default function Metadata({ isMovieAdult, releaseDate }) {
  const year = releaseDate ? releaseDate.split("-")[0] : "N/A";
  return (
    <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
      <span>{year}</span>
      <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
      <span className="border border-gray-600 px-1.5 py-0.5 rounded text-white text-[9px]">
        {{ isMovieAdult } ? "18+" : "PG-13"}
      </span>
      <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
      <span>Movie</span>
    </div>
  );
}
