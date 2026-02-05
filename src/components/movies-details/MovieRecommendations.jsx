import MovieList from "../movies/MoviesList";

export default function MovieRecommendations({ recommendations }) {
  if (!recommendations?.length) return null;

  return (
    <section className="pt-24 border-t border-white/5">
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-4xl lg:text-5xl font-black italic tracking-tighter flex items-center gap-4">
          <span className="w-3 h-12 bg-imdb-gold -skew-x-12 rounded-sm" />
          MORE LIKE THIS
        </h2>
        <div className="h-[2px] flex-1 bg-gradient-to-r from-imdb-gold/50 to-transparent ml-8 hidden md:block" />
      </div>
      <MovieList movies={recommendations} />
    </section>
  );
}
