import React from "react";
import HeaderDesktop from "@/components/headerdesktop.tsx";
import HeaderMobile from "@/components/headermobile.tsx";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col w-full">
      <div>
        <HeaderMobile />
      </div>
      <div className="flex flex-row gap-0.5">
        <div className="hidden sm:block w-2/12 border-r border-gray-300">
          <HeaderDesktop />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
