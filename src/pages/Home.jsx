import { useState } from "react";
import MovieRow from "../components/movies/MovieRow";
import GenreRow from "../components/movies/GenreRow";
import { useGenres, useDiscoverMovies } from "../hooks/useMovies";
import Hero from "../components/layout/Hero";
import SortMenu from "../components/UI/SortMenu";
import { Link } from "react-router-dom";

export default function Home() {
  const [sortBy, setSortBy] = useState("popularity.desc");
  const { data, isLoading: isDiscoveryLoading } = useDiscoverMovies(1, sortBy);
  const { data: genresData, isLoading: isGenresLoading } = useGenres();

  const movies = data?.results;

  return (
    <div className="bg-imdb-black min-h-screen">
      <Hero />
      <div
        id="trending-section"
        className="container mx-auto px-4 py-12 space-y-12"
      >
        <div className=" bg-imdb-black pb-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h2 className="text-3xl font-black italic tracking-tighter text-white flex items-center gap-3">
              <span className="w-1.5 h-8 bg-imdb-gold rounded-full" />
              EXPLORE MOVIES
            </h2>
            <div className="flex items-center gap-4">
              <Link
                to="/trending"
                className="text-sm text-imdb-gold font-bold hover:underline"
              >
                EXPLORE ALL &rarr;
              </Link>
              <SortMenu onSortChange={(value) => setSortBy(value)} />
            </div>
          </div>

          {isDiscoveryLoading ? (
            <div className="h-64 bg-white/5 animate-pulse rounded-xl" />
          ) : (
            <MovieRow
              movies={movies?.slice(0, 10)}
              viewAllPath="/trending"
            />
          )}
        </div>

        {isGenresLoading ? (
          <div className="space-y-8 p-8">
            <div className="h-40 bg-white/5 animate-pulse rounded-xl" />
            <div className="h-40 bg-white/5 animate-pulse rounded-xl" />
          </div>
        ) : (
          genresData?.genres?.map((genre) => (
            <GenreRow key={genre.id} genre={genre} />
          ))
        )}
      </div>
    </div>
  );
}
