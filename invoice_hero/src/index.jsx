import React, { Suspense } from "react";
import { render } from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Skeleton } from "antd";

const queryClient = new QueryClient();

render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <Suspense fallback={<Skeleton active />}> */}
      <App />
      {/* </Suspense> */}
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
