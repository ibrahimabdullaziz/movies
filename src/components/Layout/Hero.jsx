import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useDiscoverMovies } from "../../hooks/useMovies";
import HeroSkeleton from "../Skeletons/HeroSkeleton";

const IMAGE_BASE = "https://image.tmdb.org/t/p/";

export default function Hero() {
  const { data, isLoading } = useDiscoverMovies(1);
  const [highResLoaded, setHighResLoaded] = useState(false);
  const movie = data?.results?.[0];

  const scrollToTrending = () => {
    const section = document.getElementById("trending-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) return <HeroSkeleton />;

  const backdropPath = movie?.backdrop_path;
  const placeholderUrl = backdropPath ? `${IMAGE_BASE}w300${backdropPath}` : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=20&w=300&auto=format&fit=crop";
  const highResUrl = backdropPath ? `${IMAGE_BASE}w1280${backdropPath}` : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-imdb-black">
     
      <div className="absolute inset-0 z-0">
        <img
          src={placeholderUrl}
          alt=""
          className={`w-full h-full object-cover blur-2xl scale-110 transition-opacity duration-1000 ${highResLoaded ? 'opacity-0' : 'opacity-100'}`}
          loading="eager"
          fetchpriority="high"
        />
      </div>

   
      <div className="absolute inset-0 z-0">
        <img
          src={highResUrl}
          alt={movie?.title || "Hero Background"}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${highResLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="eager"
          fetchpriority="high"
          onLoad={() => setHighResLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-imdb-black via-transparent to-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black text-white tracking-tighter"
        >
          Ur<span className="text-imdb-gold">Movies</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-200 font-light"
        >
          Your cinematic DNA <br />
          <span className="text-imdb-gold font-semibold">
            Track what you want to watch.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button
            onClick={scrollToTrending}
            className="mt-8 bg-imdb-gold text-black text-lg font-bold py-4 px-10 rounded-full hover:bg-amber-100 hover:text-imdb-gold transition-all shadow-[0_0_20px_rgba(245,197,24,0.3)]"
          >
            Explore Trending ⬇
          </button>
        </motion.div>
      </div>
    </div>
  );
}
