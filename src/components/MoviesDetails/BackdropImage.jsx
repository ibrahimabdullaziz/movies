const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";

export function BackdropImage({ path, title, isCard = false, size = "w1280", priority = false }) {
  if (!path) return null;

  return (
    <div
      className={`relative w-full aspect-video overflow-hidden bg-imdb-black ${
        isCard ? "h-full" : "h-auto max-h-[70vh] lg:max-h-screen"
      }`}
    >
      <img
        src={`${BASE_IMAGE_URL}${size}${path}`}
        className="w-full h-full object-cover object-top opacity-90 transition-opacity duration-1000"
        alt={title}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
      />

      {!isCard && (
        <>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-imdb-black via-imdb-black/80 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-imdb-black via-transparent to-transparent hidden lg:block" />
        </>
      )}
    </div>
  );
}
