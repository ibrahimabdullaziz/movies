export function BackdropImage({ url, path, title }) {
  return (
    <div className="absolute top-0 left-0 w-full h-[85vh] lg:h-screen">
      <img
        src={`${url}${path}`}
        className="w-full h-full object-cover object-top opacity-60"
        alt={title}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-imdb-black via-imdb-black/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-imdb-black via-transparent to-transparent hidden lg:block" />
    </div>
  );
}
