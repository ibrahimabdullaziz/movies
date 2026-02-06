export default function SectionHeader({ title, children }) {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      <h2 className="text-xl md:text-3xl font-black italic tracking-tighter text-white flex items-center gap-2 md:gap-3">
        <span className="w-1 md:w-1.5 h-6 md:h-8 bg-imdb-gold rounded-full" />
        {title}
      </h2>
      <div className="flex items-center gap-2 md:gap-4 shrink-0">{children}</div>
    </div>
  );
}
