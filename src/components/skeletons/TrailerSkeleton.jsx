import Skeleton from "../UI/Skeleton";

export default function TrailerSkeleton() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Skeleton className="w-16 h-16" variant="circular" />
    </div>
  );
}
