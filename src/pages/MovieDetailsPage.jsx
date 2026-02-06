import { useParams } from "react-router-dom";
import { Suspense } from "react";
import { useMovieDetails } from "../hooks/useMovies";
import { useWatchlist } from "../hooks/useWatchList";
import { BackdropImage } from "../components/MoviesDetails/BackdropImage";
import { Poster } from "../components/MoviesDetails/MoviePoster";
import Container from "../components/UI/Container";
import Cast from "../components/Actors/Cast";
import { States } from "../components/Movies/MovieStates";
import { Reviews } from "../components/MoviesDetails/Reviews";
import { useTrailer } from "../context/TrailerContext";
import MovieDetailsSkeleton from "../components/Skeletons/MovieDetailsSkeleton";
import GenreList from "../components/MoviesDetails/GenreList";
import MovieInfo from "../components/MoviesDetails/MovieInfo";
import ActionButtons from "../components/MoviesDetails/ActionButtons";
import MovieRecommendations from "../components/MoviesDetails/MovieRecommendations";

export default function MovieDetails() {
  const { id } = useParams();

  return (
    <Suspense fallback={<MovieDetailsSkeleton />}>
      <MovieDetailsContent id={id} />
    </Suspense>
  );
}

function MovieDetailsContent({ id }) {
  const { data: movie } = useMovieDetails(id);
  const { toggleWatchlist, isInWatchlist } = useWatchlist();
  const { openTrailer } = useTrailer();

  if (!movie) return null;

  const isAdded = isInWatchlist(movie?.id);
  const cast = movie?.credits?.cast?.slice(0, 12);
  const recommendations = movie?.recommendations?.results?.slice(0, 6);

  return (
    <div className="relative min-h-screen bg-imdb-black text-white pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BackdropImage
          path={movie.backdrop_path}
          title={movie.title}
          isCard={false}
          size="original"
          priority={true}
        />
      </div>

      <Container classes="relative z-10 pt-[25vh] lg:pt-[45vh] px-6 lg:px-20">
        <div className="relative flex flex-col lg:flex-row gap-12 items-center lg:items-start mb-20 min-h-[400px]">
          {/* Floating Poster */}
          <div className="shrink-0 lg:absolute lg:-top-48 lg:left-0 transform hover:scale-105 transition-all duration-500 shadow-[0_30px_70px_rgba(0,0,0,0.9)] rounded-2xl overflow-hidden z-30 w-64 lg:w-80 border border-white/10">
            <Poster
              path={movie.poster_path}
              title={movie.title}
              size="w500"
              priority={true}
            />
          </div>

          {/* Info Content - Offset and perfectly balanced with poster top */}
          <div className="flex-1 lg:pl-[24rem] lg:-mt-48 space-y-8 pb-4">
            <GenreList genres={movie.genres} />
            <MovieInfo movie={movie} />
            <ActionButtons
              movie={movie}
              openTrailer={openTrailer}
              toggleWatchlist={toggleWatchlist}
              isAdded={isAdded}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          <div className="lg:col-span-2 space-y-24">
            <Cast cast={cast} />
            <Reviews movie={movie} />
          </div>
          <div className="space-y-12">
            <States movie={movie} />
          </div>
        </div>

        <MovieRecommendations recommendations={recommendations} />
      </Container>
    </div>
  );
}
