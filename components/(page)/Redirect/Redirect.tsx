"use client";
import { redirect, useRouter } from "next/navigation";
import React, { FC, useLayoutEffect } from "react";

const Redirect: FC<{ path: string }> = ({ path }) => {
  const router = useRouter();
  useLayoutEffect(() => {
    redirect(path);
  }, [path]);
  return <></>;
};

export default Redirect;
