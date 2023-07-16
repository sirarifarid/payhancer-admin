import React from "react";
import type { Metadata } from "next";
import SignIn from "@/components/(page)/Sign-in/SignIn";

export const metadata: Metadata = {
  title: "Sign in",
  description: "",
};

const Page = () => {
  return <SignIn />;
};

export default Page;
