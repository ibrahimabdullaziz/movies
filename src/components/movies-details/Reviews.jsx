export function Reviews({ movie }) {
  const reviews = movie?.reviews?.results?.slice(0, 5);
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold flex items-center gap-3">
        <span className="w-2 h-8 bg-imdb-gold rounded-full" /> User Reviews
      </h2>

      {reviews?.length > 0 ? (
        <div className="grid gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-imdb-gold text-black rounded-full flex items-center justify-center font-bold text-xl uppercase">
                  {review.author?.charAt(0) || "U"}
                </div>
                <div>
                  <p className="font-bold text-lg">{review.author}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(review.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed line-clamp-4 hover:line-clamp-none cursor-pointer transition-all">
                "{review.content}"
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">No reviews yet for this movie.</p>
      )}
    </section>
  );
}
