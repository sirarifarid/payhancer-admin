import React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { RedirectType } from "next/dist/client/components/redirect";
import Redirect from "@/components/(page)/Redirect/Redirect";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return cookies().get("_sc_adm") ? <Redirect path="/" /> : children;
};

export default Layout;
