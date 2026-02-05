import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "./components/layout/Navbar";
import { TrailerProvider } from "./context/TrailerContext";

function App() {
  return (
    <div className="bg-imdb-black min-h-screen">
      <TrailerProvider>
        <Navbar />
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <div className="w-12 h-12 border-4 border-imdb-gold border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </TrailerProvider>
    </div>
  );
}

export default App;
