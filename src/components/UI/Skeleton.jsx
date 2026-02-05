export default function Skeleton({
  className = "",
  variant = "rectangular",
}) {
  const baseClasses = "animate-pulse bg-white/10";
  const variants = {
    rectangular: "rounded-lg",
    circular: "rounded-full",
    text: "rounded-md h-4 w-full",
  };

  return (
    <div
      className={`${baseClasses} ${variants[variant] || variants.rectangular} ${className}`}
    />
  );
}
