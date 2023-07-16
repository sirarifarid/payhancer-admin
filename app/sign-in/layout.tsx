import React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { RedirectType } from "next/dist/client/components/redirect";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return cookies().get("_sc_adm")
    ? redirect("/", RedirectType.replace)
    : children;
};

export default Layout;
