import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GenrePage from "./pages/GenrePage";
import TrendingPage from "./pages/TrendingPage";
import MovieDetails from "./pages/MovieDetailsPage";
import Navbar from "./components/layout/navBar";
import WatchlistPage from "./pages/WatchlistPage";
import SearchPage from "./pages/SearchPage";
import ActorPage from "./pages/ActorPage";

function App() {
  return (
    <div className="bg-imdb-black min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/category/:id/:name" element={<GenrePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/actor/:id" element={<ActorPage />} />
      </Routes>
    </div>
  );
}

export default App;
