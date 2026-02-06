import Skeleton from "../UI/Skeleton";

export default function MovieDetailsSkeleton() {
  return (
    <div className="relative min-h-screen bg-imdb-black overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-[70vh] lg:h-screen z-0">
        <Skeleton className="h-full w-full" variant="rectangular" />
        <div className="absolute inset-0 bg-gradient-to-t from-imdb-black via-imdb-black/50 to-transparent" />
      </div>

      <div className="relative z-20 pt-[25vh] lg:pt-[45vh] px-6 lg:px-20 space-y-24">
        <div className="relative flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          <div className="shrink-0 lg:absolute lg:-top-48 lg:left-0 z-30 w-64 lg:w-80">
            <Skeleton className="w-full h-[384px] lg:h-[480px] rounded-2xl shadow-2xl" />
          </div>

          <div className="flex-1 lg:pl-[24rem] space-y-8 relative z-30 w-full">
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-6 w-20 rounded-md" />
                ))}
              </div>

              <div className="space-y-3 flex flex-col items-center lg:items-start">
                <Skeleton className="h-16 w-3/4 lg:w-full" />
                <Skeleton className="h-6 w-1/2 lg:w-1/3" />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 py-6 border-y border-white/10">
              <Skeleton className="h-10 w-24 rounded-xl" />
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-24" />
            </div>

            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
              <Skeleton className="h-14 w-48 rounded-xl" />
              <Skeleton className="h-14 w-48 rounded-xl" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          <div className="lg:col-span-2 space-y-24">
            <div className="space-y-8">
              <Skeleton className="h-8 w-48" />
              <div className="flex gap-4 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex-none w-28 space-y-3">
                    <Skeleton className="w-full aspect-[2/3] rounded-xl" />
                    <div className="space-y-1">
                      <Skeleton className="h-3 w-3/4 mx-auto" />
                      <Skeleton className="h-2 w-1/2 mx-auto" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-40 w-full rounded-xl" />
            </div>
          </div>

          <div className="space-y-12">
            <Skeleton className="h-[400px] w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
