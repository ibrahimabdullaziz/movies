export default function MovieDetailSkeleton() {
  return (
    <div className="relative min-h-screen bg-imdb-black text-white animate-pulse">
      <div className="h-[60vh] lg:h-[85vh] bg-white/5 w-full" />

      <div className="relative -mt-64 px-6 lg:px-16 space-y-10">
        <div className="flex flex-col lg:flex-row gap-10 items-end lg:items-start">
          <div className="w-64 lg:w-80 aspect-[2/3] bg-white/10 rounded-2xl hidden md:block" />

          <div className="flex-1 space-y-6 w-full">
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-6 w-20 bg-white/5 rounded-full" />
              ))}
            </div>
            <div className="h-16 lg:h-24 bg-white/10 w-3/4 rounded-xl" />
            <div className="h-6 bg-white/5 w-1/2 rounded-lg" />
            <div className="space-y-3">
              <div className="h-4 bg-white/5 w-full rounded" />
              <div className="h-4 bg-white/5 w-full rounded" />
              <div className="h-4 bg-white/5 w-2/3 rounded" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="h-8 bg-white/10 w-40 rounded" />
          <div className="flex gap-6 overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-32 lg:w-40 flex flex-col items-center space-y-3"
              >
                <div className="w-32 lg:w-40 aspect-square bg-white/5 rounded-full" />
                <div className="h-4 bg-white/5 w-20 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
