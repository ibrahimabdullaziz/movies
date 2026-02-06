export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-imdb-black flex flex-col items-center justify-center gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-imdb-gold/20 rounded-full" />
        <div className="absolute inset-0 border-4 border-imdb-gold border-t-transparent rounded-full animate-spin" />
      </div>
      <p className="text-imdb-gold font-bold tracking-widest text-sm animate-pulse">
        LOADING...
      </p>
    </div>
  );
}
