import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import TrendingPage from "./pages/TrendingPage";
import GenrePage from "./pages/GenrePage";
import MovieDetails from "./pages/MovieDetailsPage";
import WatchlistPage from "./pages/WatchlistPage";
import SearchPage from "./pages/SearchPage";
import ActorPage from "./pages/ActorPage";
import RouteErrorBoundary from "./components/common/RouteErrorBoundary";
import ErrorState from "./components/UI/ErrorState";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: "trending", element: <TrendingPage /> },
      { path: "category/:id/:name", element: <GenrePage /> },
      { path: "movie/:id", element: <MovieDetails /> },
      { path: "watchlist", element: <WatchlistPage /> },
      { path: "search", element: <SearchPage /> },
      { path: "actor/:id", element: <ActorPage /> },
      {
        path: "*",
        element: (
          <div className="bg-imdb-black min-h-screen pt-20 flex items-center justify-center">
            <ErrorState type="empty" message="Page Not Found" />
          </div>
        ),
      },
    ],
  },
]);
