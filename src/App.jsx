import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GenrePage from "./pages/GenrePage";
import MovieList from "./components/movies/MoviesList";

function App() {
  return (
    <div className="bg-imdb-black min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<MovieList />} />
        <Route path="/category/:id/:name" element={<GenrePage />} />
      </Routes>
    </div>
  );
}

export default App;
