import { m } from "framer-motion";
import { useState } from "react";


export default function Hero() {
  const [highResLoaded, setHighResLoaded] = useState(false);

  const scrollToTrending = () => {
    const section = document.getElementById("trending-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const placeholderUrl = "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=20&w=300&auto=format&fit=crop";
  const highResUrl = "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1280&auto=format&fit=crop";

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-imdb-black pt-20">

      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src={placeholderUrl}
          alt=""
          className={`w-full h-full object-cover blur-2xl scale-110 transition-opacity duration-1000 ${highResLoaded ? 'opacity-0' : 'opacity-100'}`}
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src={highResUrl}
          alt="Hero Background"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${highResLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="eager"
          fetchPriority="high"
          onLoad={() => setHighResLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-imdb-black via-transparent to-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl space-y-6">
        <m.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black text-white tracking-tighter"
        >
          Ur<span className="text-imdb-gold">Movies</span>
        </m.h1>

        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-200 font-light"
        >
          Your cinematic DNA <br />
          <span className="text-imdb-gold font-semibold">
            Track what you want to watch.
          </span>
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button
            onClick={scrollToTrending}
            className="mt-8 bg-imdb-gold text-black text-lg font-bold py-4 px-10 rounded-full hover:bg-amber-100 hover:text-imdb-gold transition-all "
          >
            Explore Trending ⬇
          </button>
        </m.div>
      </div>
    </div>
  );
}
