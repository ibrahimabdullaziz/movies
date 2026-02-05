import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css";

const client = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </QueryClientProvider>
);
