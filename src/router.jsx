import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "./App";
import RouteErrorBoundary from "./components/Common/RouteErrorBoundary";
import ErrorState from "./components/UI/ErrorState";

const Home = lazy(() => import("./pages/Home"));
const TrendingPage = lazy(() => import("./pages/TrendingPage"));
const GenrePage = lazy(() => import("./pages/GenrePage"));
const MovieDetails = lazy(() => import("./pages/MovieDetailsPage"));
const WatchlistPage = lazy(() => import("./pages/WatchlistPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const ActorPage = lazy(() => import("./pages/ActorPage"));
const MovieCastPage = lazy(() => import("./pages/MovieCastPage"));

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
      { path: "movie/:id/cast", element: <MovieCastPage /> },
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
