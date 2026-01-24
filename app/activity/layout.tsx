import React from "react";
import HeaderMobile from "@/components/headermobile.tsx";
import HeaderDesktop from "@/components/headerdesktop.tsx";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col w-full">
      <div>
        <HeaderMobile />
      </div>
      <div className="flex flex-row gap-0.5">
        <div className="hidden sm:block w-44 border-r border-gray-300">
          <HeaderDesktop />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
