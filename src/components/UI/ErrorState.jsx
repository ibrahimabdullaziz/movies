import { useNavigate } from "react-router-dom";

export default function ErrorState({
  message = "Something went wrong!",
  type = "error",
  onRetry,
}) {
  const navigate = useNavigate();

  const config = {
    error: {
      icon: "⚠️",
      title: "Oops! Movie missing in action",
      color: "text-red-500",
    },
    empty: {
      icon: "🎬",
      title: "No movies found",
      color: "text-imdb-gold",
    },
    offline: {
      icon: "📡",
      title: "Connection Lost",
      color: "text-gray-400",
    },
  };

  const { icon, title, color } = config[type] || config.error;

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center animate-in fade-in zoom-in duration-300">
      <div className="relative mb-6">
        <span className="text-7xl block animate-bounce">{icon}</span>
        <div
          className={`absolute inset-0 blur-3xl opacity-20 bg-current ${color}`}
        />
      </div>

      <h2
        className={`text-2xl lg:text-3xl font-black italic uppercase tracking-tighter mb-3 ${color}`}
      >
        {title}
      </h2>
      <p className="text-gray-400 max-w-md mb-8 font-medium">{message}</p>

      <div className="flex gap-4">
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-8 py-3 bg-imdb-gold text-black font-black rounded-xl hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-imdb-gold/20"
          >
            TRY AGAIN
          </button>
        )}

        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
        >
          GO HOME
        </button>
      </div>
    </div>
  );
}
