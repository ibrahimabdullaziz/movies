import { Shimmer } from "./MovieCardSkeleton";

export default function MovieDetailsSkeleton() {
  return (
    <div className="relative min-h-screen bg-imdb-black text-white overflow-hidden">
      <Shimmer className="absolute inset-0 h-[70vh] lg:h-screen" />
      <div className="absolute inset-0 bg-gradient-to-r from-imdb-black via-imdb-black/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-imdb-black via-transparent to-transparent" />

      <div className="relative pt-32 px-6 lg:px-16 flex flex-col lg:flex-row gap-10">
        <Shimmer className="w-64 lg:w-80 aspect-[2/3] rounded-2xl ring-1 ring-white/10" />

        <div className="max-w-3xl space-y-6 flex-1">
          <Shimmer className="h-14 lg:h-16 rounded-xl w-3/4" />
          <Shimmer className="h-5 rounded-lg w-1/2" />

          <div className="flex flex-wrap gap-4">
            <Shimmer className="h-8 rounded-full w-16" />
            <Shimmer className="h-5 rounded w-24" />
            <Shimmer className="h-5 rounded w-16" />
          </div>

          <div className="flex flex-wrap gap-2">
            {[...Array(4)].map((_, i) => (
              <Shimmer key={i} className="h-8 rounded-full w-20" />
            ))}
          </div>

          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <Shimmer
                key={i}
                className={`h-5 rounded ${i === 3 ? "w-2/3" : "w-full"}`}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Shimmer className="h-14 rounded-xl w-40" />
            <Shimmer className="h-14 rounded-xl w-36" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Shimmer className="h-3 rounded w-16" />
                <Shimmer className="h-5 rounded w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative px-6 lg:px-16 py-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-1 h-8 bg-imdb-gold/50 rounded" />
          <Shimmer className="h-7 rounded-lg w-28" />
        </div>
        <div className="flex gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex-none w-32 text-center space-y-3">
              <Shimmer className="w-24 h-24 mx-auto rounded-full" />
              <Shimmer className="h-4 rounded w-20 mx-auto" />
              <Shimmer className="h-3 rounded w-16 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
