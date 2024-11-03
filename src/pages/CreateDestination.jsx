import React, { useRef } from "react";
import { BiShowAlt } from "react-icons/bi";
import { CgSpinner } from "react-icons/cg";
import { CiImageOff } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, getAllProducts } from "../api/request";

const url = "http://localhost:3000/city";
const CreateDestination = () => {
  const data = useSelector((state) => state.products);
  const load = useSelector((state) => state.isLoad);
  const titleInput = useRef();
  const descriptionInput = useRef();
  const imageUrlInput = useRef();
  const priceInput = useRef();
  const typeInput = useRef();
  const urlImage = useRef();
  const state = useSelector((state) => state);
  const submitForm = useRef();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: titleInput.current.value,
      description: descriptionInput.current.value,
      image: imageUrlInput.current.value,
      price: priceInput.current.value,
      categoryId: typeInput.current.value,
    };
    await createProduct(url, data, dispatch);
    submitForm.current.reset();
    await getAllProducts(url, dispatch);
  };
  function showImageInput() {
    if (imageUrlInput.current.value.length > 0) {
      urlImage.current.src = imageUrlInput.current.value;
    } else {
      imageUrlInput.current.focus();
      urlImage.current.src =
        "https://cdn-icons-png.freepik.com/512/2530/2530593.png";
    }
  }
  return (
    <div>
      <div className="mt-[5px]">
        <div className="flex justify-center items-center relative">
          <img
            ref={urlImage}
            src="https://cdn-icons-png.freepik.com/512/2530/2530593.png"
            className="p-[5px] z-10 border-[2px] shadow-sm rounded-sm max-h-[200px] min-h-[200px] max-w-[300px] min-w-[300px] object-contain"
            alt=""
          />
          <div className="absolute left-0 right-0 flex justify-center items-center text-[30px]">
            <CiImageOff />
          </div>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} ref={submitForm}>
          <div className="flex flex-col mt-[10px]">
            <label
              className="text-[16px] font-semibold"
              htmlFor="category-name"
            >
              Title:
            </label>
            <input
              required
              ref={titleInput}
              className="border-[2px] hover:border-blue-100 focus:border-blue-700 outline-none py-[6px] px-[10px] rounded-sm"
              type="text"
              id="category-name"
              placeholder="Enter the product name"
            />
          </div>
          <div className="flex flex-col mt-[10px]">
            <label
              className="text-[16px] font-semibold"
              htmlFor="category-name"
            >
              Description:
            </label>
            <textarea
              ref={descriptionInput}
              className="border-[2px] resize-none hover:border-blue-100 focus:border-blue-700 outline-none py-[6px] px-[10px] rounded-sm"
              type="text"
              id="category-name"
              placeholder="Enter the description"
            />
          </div>
          <div className="flex flex-col mt-[10px]">
            <label
              className="text-[16px] font-semibold"
              htmlFor="category-name"
            >
              Image url:
            </label>
            <div className="relative">
              <input
                required
                ref={imageUrlInput}
                className="border-[2px] pr-[60px] w-full hover:border-blue-100 focus:border-blue-700 outline-none py-[6px] px-[10px] rounded-sm"
                type="text"
                id="category-name"
                placeholder="Enter the image url"
              />
              <div className="absolute top-0 right-0 bottom-0 p-[3px]">
                <button
                  onClick={() => showImageInput()}
                  type="button"
                  className="px-[15px] text-[18px] h-full bg-gray-200 hover:bg-gray-300 active:scale-95 rounded-sm"
                >
                  <BiShowAlt />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-[10px]">
            <label
              className="text-[16px] font-semibold"
              htmlFor="category-name"
            >
              Price:
            </label>
            <input
              required
              ref={priceInput}
              className="border-[2px] hover:border-blue-100 focus:border-blue-700 outline-none py-[6px] px-[10px] rounded-sm"
              type="number"
              id="category-name"
              placeholder="Enter the price"
            />
          </div>
          <div className="flex flex-col mt-[10px]">
            <label
              className="text-[16px] font-semibold"
              htmlFor="category-name"
            >
              Category
            </label>
            <select
              required
              ref={typeInput}
              className="border-[2px] hover:border-blue-100 focus:border-blue-700 outline-none py-[6px] px-[10px] rounded-sm"
              type="text"
              id="category-name"
              placeholder="Enter the category name"
            >
              {data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.place}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end items-center gap-1 mt-[15px]">
            <button
              type="submit"
              disabled={load ? true : false}
              className="py-[5px] px-[10px] rounded-sm bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold text-[16px]"
            >
              {load ? (
                <div className="flex justify-center items-center gap-1 cursor-wait">
                  <span className="animate-spin">
                    <CgSpinner />
                  </span>
                  Send...
                </div>
              ) : (
                <span>Send</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDestination;
