import React from "react";
import { cookies } from "next/headers";
import Redirect from "@/components/(page)/Redirect/Redirect";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return !cookies().get("_sc_adm") ? <Redirect path="/sign-in" /> : children;
};

export default Layout;
