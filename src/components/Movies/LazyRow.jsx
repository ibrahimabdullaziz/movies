import { motion } from "framer-motion";
import { useState } from "react";
import MovieRowSkeleton from "../Skeletons/MovieRowSkeleton";

export default function LazyRow({ children, title, withTitle = true }) {
  const [isInView, setIsInView] = useState(false);

  return (
    <div className="my-10 min-h-[300px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onViewportEnter={() => setIsInView(true)}
        viewport={{ once: true, margin: "200px" }}
      >
        {isInView ? (
          children
        ) : (
          <MovieRowSkeleton withTitle={withTitle} />
        )}
      </motion.div>
    </div>
  );
}
