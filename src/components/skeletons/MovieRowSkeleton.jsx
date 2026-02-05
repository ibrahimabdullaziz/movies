import Skeleton from "../UI/Skeleton";

export default function MovieRowSkeleton({ withTitle = false }) {
  return (
    <div className="space-y-4">
      {withTitle && <Skeleton className="h-8 w-48 mb-6" />}
      <div className="flex gap-6 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex-none w-[240px] space-y-2">
            <Skeleton className="h-[135px] w-full" variant="rectangular" />
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-8" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
