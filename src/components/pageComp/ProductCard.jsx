import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ item, categories }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const showModalAlert = (id, modalType) => {
    dispatch({ type: "SELECT_ITEM_ID", payload: id });
    dispatch({ type: "SELECT_MODAL_TYPE", payload: modalType });
    dispatch({ type: "TOGGLE_MODAL_ALERT" });
  };
  console.log(state);

  return (
    <div
      ref={ref}
      className={`${
        inView ? "opasity-100 top-0" : "opacity-0 top-[30px]"
      } duration-500 relative p-[10px] bg-white shadow-md rounded-sm border-[1px] flex flex-col`}
    >
      <div className="border-[1px] overflow-hidden rounded-sm relative flex-1">
        <img
          className="h-[250px] w-full object-cover"
          src={item?.image}
          alt={item.name}
        />
        <span className="absolute top-[10px] left-[10px] p-[5px] bg-black bg-opacity-50 rounded-sm text-white text-[12px] font-semibold">
          {item?.place}
        </span>
        <span className="absolute bottom-[10px] right-[10px] p-[5px] bg-orange-600 rounded-sm text-white text-[16px] font-semibold">
          price : {item.price} $
        </span>
      </div>
      <div className="mt-[10px] flex flex-col justify-between flex-1">
        <div className="flex-1">
          <h1 className="text-[18px] font-semibold">{item.name}</h1>
          <div className="h-[120px] p-[5px] border-[1px] rounded-sm overflow-y-auto text-[14px] mt-[5px]">
            {item.about}
          </div>
        </div>
        <div className="flex justify-between items-end gap-1 flex-1">
          <button
            onClick={() => showModalAlert(item.id, "update")}
            className="py-[7px] flex justify-center items-center gap-2 rounded-sm px-[10px] w-full bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-semibold text-[14px]"
          >
            <AiFillEdit />
            <span>Update</span>
          </button>
          <button
            onClick={() => showModalAlert(item.id, "delete")}
            className="py-[7px] flex justify-center items-center gap-2 rounded-sm px-[10px] w-full bg-red-500 hover:bg-red-600 active:scale-95 text-white font-semibold text-[14px]"
          >
            <FaTrash />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
