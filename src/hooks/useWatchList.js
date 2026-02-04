import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useWatchlist() {
  const queryClient = useQueryClient();

  const { data: watchlist = [] } = useQuery({
    queryKey: ["watchlist"],
    queryFn: () => {
      const saved = localStorage.getItem("my_watchlist");
      return saved ? JSON.parse(saved) : [];
    },

    staleTime: Infinity,
  });

  const toggleWatchlist = (movie) => {
    if (!movie) return;

    const isExist = watchlist.some((m) => m.id === movie.id);
    let updatedList;

    if (isExist) {
      updatedList = watchlist.filter((m) => m.id !== movie.id);
    } else {
      updatedList = [...watchlist, movie];
    }

    queryClient.setQueryData(["watchlist"], updatedList);

    localStorage.setItem("my_watchlist", JSON.stringify(updatedList));
  };

  return {
    watchlist,
    toggleWatchlist,
    isInWatchlist: (id) => watchlist.some((m) => m.id === id),
  };
}
