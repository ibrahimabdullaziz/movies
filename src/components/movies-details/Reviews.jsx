import { useState } from "react";

export function Reviews({ movie }) {
  const reviews = movie?.reviews?.results?.slice(0, 3);
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleReview = (id) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-black mb-6 flex items-center gap-3 tracking-tighter text-white">
        <span className="w-1.5 h-6 bg-imdb-gold rounded-full shadow-[0_0_10px_#f5c518]" />
        USER REVIEWS
      </h2>

      {reviews?.length > 0 ? (
        <div className="grid gap-4">
          {reviews.map((review) => {
            const isExpanded = expandedReviews[review.id];
            return (
              <div
                key={review.id}
                onClick={() => toggleReview(review.id)}
                className="bg-surface/50 backdrop-blur-md p-6 rounded-xl border border-white/5 hover:border-white/10 hover:bg-surface transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-imdb-gold to-yellow-600 text-black rounded-full flex items-center justify-center font-black text-lg shadow-lg">
                    {review.author?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white group-hover:text-imdb-gold transition-colors">
                      {review.author}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(review.created_at).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <p
                  className={`text-gray-300 text-sm leading-relaxed transition-all ${
                    isExpanded ? "" : "line-clamp-3"
                  }`}
                >
                  "{review.content}"
                </p>
                <button className="text-imdb-gold text-[10px] font-bold mt-2 hover:underline uppercase tracking-tighter">
                  {isExpanded ? "Show Less" : "Read More"}
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-6 text-center border border-dashed border-white/10 rounded-xl text-gray-500">
          No reviews yet. Be the first to add one!
        </div>
      )}
    </section>
  );
}
