import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovies";
import { useWatchlist } from "../hooks/useWatchList";
import { BackdropImage } from "../components/movies-details/backdrop-image";
import { Poster } from "../components/movies-details/Movie-poster";
import Container from "../components/UI/Container";
import Cast from "../components/actors/Cast";
import { States } from "../components/movies/MovieStates";
import { Reviews } from "../components/movies-details/Reviews";
import { useTrailer } from "../context/TrailerContext";
import MovieDetailsSkeleton from "../components/skeletons/MovieDetailsSkeleton";
import GenreList from "../components/movies-details/GenreList";
import MovieInfo from "../components/movies-details/MovieInfo";
import ActionButtons from "../components/movies-details/ActionButtons";
import MovieRecommendations from "../components/movies-details/MovieRecommendations";

const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

export default function MovieDetails() {
  const { id } = useParams();
  const { data: movie, isLoading, isError } = useMovieDetails(id);
  const { toggleWatchlist, isInWatchlist } = useWatchlist();
  const { openTrailer } = useTrailer();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

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

  const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <Container classes="relative min-h-screen bg-imdb-black text-white pb-20 overflow-x-hidden">
      <BackdropImage
        url={BACKDROP_BASE_URL}
        path={movie.backdrop_path}
        title={movie.title}
        isCard={false}
      />

      <Container classes="relative z-20 pt-[18vh] lg:pt-[28vh] px-6 lg:px-20 space-y-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start animate-fade-in -mt-15 lg:-mt-35">
          <div className="shrink-0 transform hover:scale-105 transition-all duration-500 shadow-[20px_20px_60px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden  relative z-30 lg:pt-10">
            <Poster
              url={IMAGE_URL}
              path={movie.poster_path}
              title={movie.title}
            />
          </div>

          <Container classes="flex-1 space-y-8 relative z-30 lg:pt-10">
            <GenreList genres={movie.genres} />
            <MovieInfo movie={movie} />
            <ActionButtons
              movie={movie}
              openTrailer={openTrailer}
              toggleWatchlist={toggleWatchlist}
              isAdded={isAdded}
            />
          </Container>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          <div className="lg:col-span-2 space-y-24">
            <Cast cast={cast} image_url={IMAGE_URL} />
            <Reviews movie={movie} />
          </div>
          <div className="space-y-12">
            <States movie={movie} />
          </div>
        </div>

        <MovieRecommendations recommendations={recommendations} />
      </Container>
    </Container>
  );
}
