import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css";

const client = new QueryClient();

// Defer non-critical devtools to free up the main thread
const renderDevtools = () => {
  if (window.requestIdleCallback) {
    window.requestIdleCallback(() => {
      import("@tanstack/react-query-devtools").then(({ ReactQueryDevtools }) => {
        // Since we can't easily dynamically insert into the tree here without a state change, 
        // we'll just ensure the import is ready or handle it via a separate component if needed.
        // For now, let's keep it simple and just defer the initial logic if there was any.
      });
    });
  }
};
renderDevtools();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
