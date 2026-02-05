export default function SectionHeader({ title, children }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <h2 className="text-3xl font-black italic tracking-tighter text-white flex items-center gap-3">
        <span className="w-1.5 h-8 bg-imdb-gold rounded-full" />
        {title}
      </h2>
      <div className="flex items-center gap-4">{children}</div>
    </div>
  );
}
