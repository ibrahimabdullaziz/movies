import Skeleton from "../UI/Skeleton";

export default function HeroSkeleton() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-imdb-black">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-surface/20 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-imdb-black via-transparent to-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl space-y-6 flex flex-col items-center">
        <Skeleton className="h-20 md:h-28 w-64 md:w-96 mb-4" />
        <div className="space-y-2 flex flex-col items-center">
          <Skeleton className="h-6 w-48 md:w-64" />
          <Skeleton className="h-6 w-32 md:w-48" />
        </div>
        <Skeleton className="h-14 w-48 rounded-full mt-8" />
      </div>
    </div>
  );
}
