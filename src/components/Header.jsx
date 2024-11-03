import React from "react";
import { btnData } from "../constants/conts";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const selectItem = btnData?.find((item) => item.path === pathname);
  return (
    <div className="border-[1px] rounded-sm shadow-md p-[10px] h-[60px] flex justify-between items-center">
      <div className="flex-1 flex justify-start items-center gap-2 text-[20px] font-bold text-gray-700">
        <div className="h-[40px] w-[40px] rounded-sm text-white flex justify-center items-center bg-orange-500">
          {selectItem.icon}
        </div>
         <span>{selectItem.title}</span>
      </div>
    </div>
  );
};

export default Header;
