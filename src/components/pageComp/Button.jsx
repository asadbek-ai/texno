import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const Button = ({ item }) => {
  const { pathname } = useLocation();
  const activeBtn = item.path === pathname ? true : false;
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
      className={`${
        activeBtn
          ? "bg-indigo-500 border-indigo-600 text-white hover:bg-indigo-600"
          : "bg-white text-gray-800 hover:bg-indigo-100"
      } duration-300 py-[6px] px-[15px] border-[1px]  active:scale-95 rounded-sm shadow-sm w-full flex justify-start font-semibold items-center gap-2 text-[16px]`}
    >
      <div className="text-[24px]">{item.icon()}</div>
      <span>{item.title}</span>
    </button>
  );
};

export default Button;
