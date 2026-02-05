import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { LazyMotion, domMax, AnimatePresence } from "framer-motion";
import Navbar from "./components/Layout/NavBar";
import { TrailerProvider } from "./context/TrailerContext";
import HeroSkeleton from "./components/Skeletons/HeroSkeleton";
import ScrollToTop from "./components/UI/ScrollToTop";
import PageTransition from "./components/UI/PageTransition";

function App() {
  const location = useLocation();

  return (
    <div className="bg-imdb-black min-h-screen">
      <LazyMotion features={domMax} strict>
        <TrailerProvider>
          <ScrollToTop />
          <Navbar />
          <AnimatePresence mode="wait">
            <Suspense fallback={<HeroSkeleton />}>
              <PageTransition key={location.pathname}>
                <Outlet />
              </PageTransition>
            </Suspense>
          </AnimatePresence>
        </TrailerProvider>
      </LazyMotion>
    </div>
  );
}

export default App;
