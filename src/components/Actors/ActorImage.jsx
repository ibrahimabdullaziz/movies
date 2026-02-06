const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";

export default function ActorImage({ 
  path, 
  name, 
  size = "w185", 
  className = "", 
  priority = false 
}) {
  const imageUrl = path 
    ? `${BASE_IMAGE_URL}${size}${path}` 
    : "https://via.placeholder.com/200x200?text=No+Img";

  return (
    <img
      src={imageUrl}
      alt={name || "Actor"}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "low"}
      className={className}
    />
  );
}
