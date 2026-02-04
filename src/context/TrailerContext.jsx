import { createContext, useContext, useState } from "react";
import TrailerModal from "../components/movies/TrailerModel";

const TrailerContext = createContext();

export function TrailerProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openTrailer = (movie) => {
    setSelectedMovie(movie);
    setIsOpen(true);
  };

  const closeTrailer = () => {
    setIsOpen(false);
    setSelectedMovie(null);
  };

  return (
    <TrailerContext.Provider value={{ openTrailer, closeTrailer }}>
      {children}
      <TrailerModal
        isOpen={isOpen}
        onClose={closeTrailer}
        movieId={selectedMovie?.id}
        title={selectedMovie?.title}
      />
    </TrailerContext.Provider>
  );
}

export const useTrailer = () => {
  const context = useContext(TrailerContext);
  if (!context) {
    throw new Error("useTrailer must be used within a TrailerProvider");
  }
  return context;
}
