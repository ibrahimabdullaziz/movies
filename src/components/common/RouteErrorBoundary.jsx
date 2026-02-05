import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import ErrorState from "../UI/ErrorState";

export default function RouteErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  let type = "error";
  let message = "Something went wrong.";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      type = "empty"; 
      message = "Page Not Found";
    } else {
      message = error.statusText || "Unexpected Error";
    }
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="bg-imdb-black min-h-screen pt-20 flex items-center justify-center">
      <ErrorState 
        type={type} 
        message={message} 
        onRetry={() => window.location.reload()} 
      />
    </div>
  );
}
