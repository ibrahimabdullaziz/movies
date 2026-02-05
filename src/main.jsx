import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

const client = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <StrictMode>
        <App />
      </StrictMode>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </BrowserRouter>,
);
