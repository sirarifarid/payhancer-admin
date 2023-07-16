"use client";

import React from "react";
import {
  QueryClientProvider as QueryClientProvider_RQ,
  QueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function QueryClientProvider({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  return (
    <QueryClientProvider_RQ client={client}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider_RQ>
  );
}

export default QueryClientProvider;
