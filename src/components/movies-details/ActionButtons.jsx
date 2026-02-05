import Container from "../UI/Container";

export default function ActionButtons({
  movie,
  openTrailer,
  toggleWatchlist,
  isAdded,
}) {
  return (
    <Container classes="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
      <button
        onClick={() => openTrailer(movie)}
        className="group flex items-center gap-2 bg-imdb-gold hover:bg-white text-black px-8 py-3.5 rounded-xl font-bold transition-all duration-300 active:scale-95"
      >
        <span className="text-lg">▶</span>
        <span className="tracking-tight">WATCH TRAILER</span>
      </button>

      <button
        onClick={() => toggleWatchlist(movie)}
        className={`flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold border transition-all duration-300 active:scale-95 ${
          isAdded
            ? "bg-red-500/10 border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white"
            : "bg-white/5 border-white/20 text-white hover:bg-white hover:text-black"
        }`}
      >
        <span>{isAdded ? "✕" : "+"}</span>
        <span className="tracking-tight">
          {isAdded ? "REMOVE" : "WATCHLIST"}
        </span>
      </button>
    </Container>
  );
}
