import Sidebar from "@/components/Sidebar/Sidebar";
import { Center } from "@/components/layout/Center";
import React, { FC } from "react";

const Layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Center className="h-screen overflow-hidden flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <Sidebar />
      <div className="flex-1 p-4 self-start">{children}</div>
    </Center>
  );
};

export default Layout;
