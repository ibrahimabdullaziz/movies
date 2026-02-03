export const formatRuntime = (minutes) => {
  if (!minutes) return "N/A";
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

export const formatRating = (rating) => {
  if (!rating) return "--";
  return rating.toFixed(1);
};

export function formatDate(release_date) {
  const releaseDate = release_date
    ? new Date(release_date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "TBA";

  return releaseDate;
}
