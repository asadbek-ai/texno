import { SiDoordash } from "react-icons/si";
import React from "react";
import Button from "./pageComp/Button";
import { btnData } from "../constants/conts";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Sidebar = () => {
  return (
    <div>
      <div className=" py-5 flex justify-center items-center gap-1 text-[12px] font-bold h-[20px] text-indigo-600">
        <div className=" flex items-center">
          <h3 className="text-[30px] font-bold ">
            <img className=" w-[150px] p-1" src={logo} alt="" />
          </h3>
        </div>
      </div>
      <hr className="my-[10px]" />
      <div className="flex flex-col gap-2">
        {btnData.map((item) => (
          <Link to={item.path} key={item.id}>
            <Button item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
