import Container from "../UI/Container";

export default function GenreList({ genres }) {
  if (!genres?.length) return null;

  return (
    <Container classes="flex flex-wrap gap-2 justify-center lg:justify-start">
      {genres.map((g) => (
        <span
          key={g.id}
          className="px-4 py-1.5 bg-imdb-gold/10 border border-imdb-gold/30 text-imdb-gold rounded-xl text-[10px] font-black uppercase tracking-tighter backdrop-blur-md transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:bg-imdb-gold/20 cursor-default"
        >
          {g.name}
        </span>
      ))}
    </Container>
  );
}
