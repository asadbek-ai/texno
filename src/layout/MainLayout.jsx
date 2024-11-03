import { IoIosArrowForward } from "react-icons/io";
import React, { useEffect } from "react";

import { getAllProducts, getAllUsers } from "../api/request";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Content from "../components/Content";
import { useDispatch, useSelector } from "react-redux";

const MainLayout = () => {
  const showSidebar = useSelector((state) => state.showSidebar);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function getAllData() {
      await getAllProducts("http://localhost:3000/city", dispatch);
      await getAllUsers("http://localhost:3000/users", dispatch);
    })();
  }, []);

  return (
    <div className="m-[10px] flex justify-between gap-[10px] font-mont">
      <div
        className={`absolute ${
          showSidebar ? "left-[10px]" : "left-[-250px]"
        } duration-300 w-[250px] border-[1px] shadow-md rounded-sm p-[10px] top-[10px] bottom-[10px] z-20 bg-white md:relative md:top-0 md:bottom-0 md:left-0`}
      >
        <Sidebar />
        <button
          onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
          className="h-[40px] w-[30px] bg-indigo-500 text-white rounded-sm text-[20px] flex md:hidden justify-center items-center hover:bg-indigo-600 active:scale-95 absolute top-[50%] translate-y-[-50%] right-[-35px]"
        >
          <div
            className={`${
              showSidebar ? "rotate-[180deg]" : "rotate-[0]"
            } duration-300`}
          >
            <IoIosArrowForward />
          </div>
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-[10px]">
        <Header />
        <Content>
          <Outlet />
        </Content>
      </div>
    </div>
  );
};

export default MainLayout;
