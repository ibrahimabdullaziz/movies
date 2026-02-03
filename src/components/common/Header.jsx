export default function Header({ HeadTitle, SubTitle }) {
  return (
    <header className="flex items-center gap-4 mb-10 border-l-4 border-imdb-gold pl-4">
      <h1 className="text-3xl font-black uppercase tracking-wider">
        {HeadTitle} <span className="text-imdb-gold">Movies</span>
      </h1>
    </header>
  );
}
