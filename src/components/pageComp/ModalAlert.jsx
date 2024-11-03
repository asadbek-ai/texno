import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const ModalAlert = ({ children }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div
      onClick={(e) => {
        if (e.target.classList.contains("overlay")) {
          dispatch({ type: "TOGGLE_MODAL_ALERT" });
        }
      }}
      className={`${
        state.showModal ? "flex" : "hidden"
      } overlay fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-25 z-40 px-[3%] backdrop-blur-[2px] justify-center items-start pt-[20vh] pb-[20px] overflow-y-auto`}
    >
      <div
        ref={ref}
        className={`${
          inView ? "opacity-100 top-0" : "opacity-0 top-[50px]"
        } duration-500 relative w-[500px] p-[10px] bg-white rounded-sm text-gray-700`}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalAlert;
