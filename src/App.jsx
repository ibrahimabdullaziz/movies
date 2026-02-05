import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { LazyMotion, domMax } from "framer-motion";
import Navbar from "./components/Layout/NavBar";
import { TrailerProvider } from "./context/TrailerContext";
import HeroSkeleton from "./components/Skeletons/HeroSkeleton";

function App() {
  return (
    <div className="bg-imdb-black min-h-screen">
      <LazyMotion features={domMax} strict>
        <TrailerProvider>
          <Navbar />
          <Suspense fallback={<HeroSkeleton />}>
            <Outlet />
          </Suspense>
        </TrailerProvider>
      </LazyMotion>
    </div>
  );
}

export default App;
