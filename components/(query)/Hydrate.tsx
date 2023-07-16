"use client";

import { Hydrate as RQ_Hydrate, HydrateProps } from "@tanstack/react-query";

function Hydrate(props: HydrateProps) {
  return <RQ_Hydrate {...props} />;
}

export default Hydrate;
