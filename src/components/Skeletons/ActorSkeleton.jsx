import Skeleton from "../UI/Skeleton";
import Container from "../UI/Container";

export default function ActorSkeleton() {
  return (
    <div className="min-h-screen bg-imdb-black text-white pt-32 px-6 lg:px-16 pb-20">
      <div className="flex flex-col md:flex-row gap-12">
       
        <div className="w-full md:w-1/3 lg:w-1/4 space-y-6">
          <Skeleton className="w-full aspect-[2/3] rounded-2xl shadow-2xl" />
          <div className="space-y-4 p-6 bg-white/5 border border-white/10 rounded-xl">
            <Skeleton className="h-4 w-1/3 bg-imdb-gold/20" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-5 w-3/4" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-5 w-full" />
            </div>
          </div>
        </div>

         <div className="flex-1 space-y-8">
          <Skeleton className="h-16 lg:h-20 w-3/4 mb-4" />

          <div className="space-y-6">
            <Skeleton className="h-8 w-40 flex items-center gap-2">
              <div className="w-1 h-6 bg-imdb-gold/40 rounded-full" />
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>

          <div className="space-y-6 pt-10">
            <Skeleton className="h-8 w-48 flex items-center gap-2">
              <div className="w-1 h-6 bg-imdb-gold/40 rounded-full" />
            </Skeleton>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="aspect-[2/3] w-full rounded-xl shadow-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
