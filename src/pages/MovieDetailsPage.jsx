import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const { data: movie, isLoading, isError } = useMovieDetails(id);
  const { toggleWatchlist, isInWatchlist } = useWatchlist();
  const { openTrailer } = useTrailer();

  if (isLoading) {
    return <MovieDetailsSkeleton />;
  }

  if (isError || !movie)
    return (
      <div className="text-white p-20 text-center font-bold">
        Error loading movie details.
      </div>
    );

  const isAdded = isInWatchlist(movie?.id);
  const cast = movie?.credits?.cast?.slice(0, 12);
  const recommendations = movie?.recommendations?.results?.slice(0, 6);

  return (
    <div className="relative min-h-screen bg-imdb-black text-white pb-20 overflow-hidden">
      {/* Backdrop Layer */}
      <div className="absolute inset-0 z-0">
        <BackdropImage
          path={movie.backdrop_path}
          title={movie.title}
          isCard={false}
          size="original"
          priority={true}
        />
      </div>

      {/* Content Layer */}
      <Container classes="relative z-10 pt-[25vh] lg:pt-[35vh] px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-end -mt-16 lg:-mt-32 mb-20">
          <div className="shrink-0 transform hover:scale-105 transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden relative z-20 w-64 lg:w-80 border border-white/10">
            <Poster
              path={movie.poster_path}
              title={movie.title}
              size="w500"
              priority={true}
            />
          </div>

          <div className="flex-1 space-y-6 pb-4">
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
