import { useState, lazy, Suspense } from "react";
import MovieRow from "../components/Movies/MovieRow";
import { useGenres, useDiscoverMovies } from "../hooks/useMovies";
import Hero from "../components/Layout/Hero";
import { Link } from "react-router-dom";
import MovieRowSkeleton from "../components/Skeletons/MovieRowSkeleton";
import HeroSkeleton from "../components/Skeletons/HeroSkeleton";
import SectionHeader from "../components/Common/SectionHeader";
import LazyRow from "../components/Movies/LazyRow";

const GenreRow = lazy(() => import("../components/Movies/GenreRow"));

export default function Home() {
  const { data: genresData, isLoading: isGenresLoading } = useGenres();

  return (
    <div className="bg-imdb-black min-h-screen">
      <Suspense fallback={<HeroSkeleton />}>
        <HomeContent genresData={genresData} isGenresLoading={isGenresLoading} />
      </Suspense>
    </div>
  );
}

function HomeContent({ genresData, isGenresLoading }) {
  const { data } = useDiscoverMovies(1, "popularity.desc");
  const movies = data?.results;

  return (
    <>
      <Hero />
      <div
        id="trending-section"
        className="container mx-auto px-4 py-12 space-y-12"
      >
        <div className=" bg-imdb-black pb-3">
          <SectionHeader title="EXPLORE MOVIES">
            <Link
              to="/trending"
              className="text-sm text-imdb-gold font-bold hover:underline"
            >
              EXPLORE ALL &rarr;
            </Link>
          </SectionHeader>

          <MovieRow movies={movies?.slice(0, 10)} viewAllPath="/trending" />
        </div>

        {isGenresLoading ? (
          <div className="space-y-12">
            {[...Array(3)].map((_, i) => (
              <MovieRowSkeleton key={i} withTitle />
            ))}
          </div>
        ) : (
          genresData?.genres?.map((genre) => (
            <LazyRow key={genre.id} title={genre.name}>
              <Suspense fallback={<MovieRowSkeleton withTitle />}>
                <GenreRow genre={genre} />
              </Suspense>
            </LazyRow>
          ))
        )}
      </div>
    </>
  );
}
