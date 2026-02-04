export function States({ movie }) {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-white/5 rounded-3xl border border-white/10">
      <div>
        <p className="text-gray-400 text-sm uppercase tracking-widest">
          Status
        </p>
        <p className="text-xl font-bold">{movie.status}</p>
      </div>
      <div>
        <p className="text-gray-400 text-sm uppercase tracking-widest">
          Budget
        </p>
        <p className="text-xl font-bold">${movie.budget?.toLocaleString()}</p>
      </div>
      <div>
        <p className="text-gray-400 text-sm uppercase tracking-widest">
          Revenue
        </p>
        <p className="text-xl font-bold">${movie.revenue?.toLocaleString()}</p>
      </div>
    </section>
  );
}
