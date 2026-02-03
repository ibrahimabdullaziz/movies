import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GenrePage from "./pages/GenrePage";
import TrendingPage from "./pages/TrendingPage";
import MovieDetails from "./pages/MovieDetailsPage";

function App() {
  return (
    <div className="bg-imdb-black min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/category/:id/:name" element={<GenrePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
