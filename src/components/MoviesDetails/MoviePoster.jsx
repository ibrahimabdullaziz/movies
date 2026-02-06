const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";

export function Poster({ path, title, isCard = false, size = "w500", priority = false }) {
  if (!path) return null;

  return (
    <div className={`relative overflow-hidden bg-surface aspect-[2/3] ${isCard ? "w-full h-full" : "w-full max-w-[320px] rounded-xl shadow-2xl border border-white/10"}`}>
      <img
        src={`${BASE_IMAGE_URL}${size}${path}`}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        alt={title}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
      />
      {!isCard && (
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
      )}
    </div>
  );
}
