"use client";

import {
  HydrationBoundaryProps,
  HydrationBoundary,
} from "@tanstack/react-query";

function Hydrate(props: HydrationBoundaryProps) {
  return <HydrationBoundary {...props} />;
}

export default Hydrate;
