import Skeleton from "../UI/Skeleton";

export default function MovieGridSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="aspect-[2/3] w-full">
          <Skeleton className="h-full w-full rounded-xl" />
        </div>
      ))}
    </div>
  );
}
