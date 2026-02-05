import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { formatRating } from "../../utils/Formatter";
import { Poster } from "../MoviesDetails/MoviePoster";
import Container from "../UI/Container";
import Metadata from "../MoviesDetails/MovieMetadata";
import Buttons from "../UI/Buttons";

const MovieCard = memo(({ movie }) => {
  const navigate = useNavigate();

  const rating = formatRating(movie?.vote_average);

  const handleNavigate = useCallback(() => {
    navigate(`/movie/${movie.id}`);
  }, [navigate, movie.id]);

  return (
    <div
      onClick={handleNavigate}
      className="group relative bg-surface rounded-xl overflow-hidden hover:ring-2 hover:ring-imdb-gold/50 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-imdb-gold/20"
    >
      <Container classes="relative aspect-[2/3] overflow-hidden">
        <Poster path={movie.poster_path} title={movie.title} size="w300" />

        <Container classes="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[3px] p-4 flex flex-col justify-end">
          <Container classes="mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            <p className="text-imdb-gold italic text-[11px] leading-tight line-clamp-2 mb-2">
              "{movie.tagline || movie.overview?.substring(0, 50)}..."
            </p>

            <Metadata
              isMovieAdult={movie.adult}
              releaseDate={movie.release_date}
            />
          </Container>

          <Buttons movie={movie} />
        </Container>

        <Container classes="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 border border-white/10">
          <span className="text-imdb-gold text-xs">★</span>
          <span className="text-white text-[10px] font-bold">{rating}</span>
        </Container>
      </Container>

      <div className="p-3">
        <h2 className="text-sm font-bold line-clamp-1 group-hover:text-imdb-gold transition-colors">
          {movie.title}
        </h2>
      </div>
    </div>
  );
});

export default MovieCard;
