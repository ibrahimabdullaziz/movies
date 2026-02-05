import { useState } from "react";
import MovieRow from "../components/Movies/MovieRow";
import GenreRow from "../components/Movies/GenreRow";
import { useGenres, useDiscoverMovies } from "../hooks/useMovies";
import Hero from "../components/Layout/Hero";
import SortMenu from "../components/UI/SortMenu";
import { Link } from "react-router-dom";
import MovieRowSkeleton from "../components/Skeletons/MovieRowSkeleton";
import SectionHeader from "../components/Common/SectionHeader";

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
          <SectionHeader title="EXPLORE MOVIES">
            <Link
              to="/trending"
              className="text-sm text-imdb-gold font-bold hover:underline"
            >
              EXPLORE ALL &rarr;
            </Link>
            <SortMenu onSortChange={(value) => setSortBy(value)} />
          </SectionHeader>

          {isDiscoveryLoading ? (
            <MovieRowSkeleton />
          ) : (
            <MovieRow movies={movies?.slice(0, 10)} viewAllPath="/trending" />
          )}
        </div>

        {isGenresLoading ? (
          <div className="space-y-12">
            {[...Array(3)].map((_, i) => (
              <MovieRowSkeleton key={i} withTitle />
            ))}
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
