import React, { useEffect, useRef } from "react";
import ProductCard from "../components/pageComp/ProductCard";
import { CgClose, CgSpinner } from "react-icons/cg";
import ModalAlert from "../components/pageComp/ModalAlert";
import { deleteProduct, getAllProducts, updateProduct } from "../api/request";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

const Destination = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const url = "http://localhost:3000/city";

  const titleInput = useRef();
  const descriptionInput = useRef();
  const imageUrlInput = useRef();
  const priceInput = useRef();
  const typeInput = useRef();

  const handleDelete = async (id) => {
    await deleteProduct(url, id, dispatch);
    dispatch({ type: "TOGGLE_MODAL_ALERT" });
    await getAllProducts(url, dispatch);
  };

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    const data = {
      title: titleInput.current.value,
      description: descriptionInput.current.value,
      image: imageUrlInput.current.value,
      price: priceInput.current.value,
      categoryId: typeInput.current.value,
    };
    await updateProduct(url, id, data);
    await getAllProducts(url, dispatch);
    dispatch({ type: "TOGGLE_MODAL_ALERT" });
  };

  useEffect(() => {
    if (state.modalType === "update") {
      const selectedItem = state.products.find(
        (item) => item.id === state.selectItemId
      );
      (titleInput.current.value = selectedItem.name),
        (descriptionInput.current.value = selectedItem.about),
        (imageUrlInput.current.value = selectedItem.image),
        (priceInput.current.value = selectedItem.price),
        (typeInput.current.value = selectedItem.categoryId);
    }
  }, [state.modalType, state.selectItemId]);

  return (
    <div>
      {state.isProLoading ? (
        <div className="min-h-[calc(100vh-114px)] flex justify-center items-center gap-2 text-[16px] font-semibold ">
          <div className="text-indigo-600 animate-spin text-[24px]">
            <CgSpinner />
          </div>
          <span>Loading...</span>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2">
          {state.products?.map((item) => (
            <ProductCard key={item.id} item={item} categories={item.place} />
          ))}
        </div>
      )}

      <ModalAlert>
        {state.modalType === "update" ? (
          <div>
            <div className="flex justify-between items-center">
              <div className="text-[18px] font-semibold">
                Update product item
              </div>
              <button
                onClick={() => dispatch({ type: "TOGGLE_MODAL_ALERT" })}
                className="h-[30px] w-[30px] flex justify-center items-center hover:bg-gray-100 rounded-sm active:scale-95"
              >
                <CgClose />
              </button>
            </div>
            <div className="mt-[10px]">
              <form onSubmit={(e) => handleUpdate(e, state.selectItemId)}>
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
                  <input
                    required
                    ref={imageUrlInput}
                    className="border-[2px] hover:border-blue-100 focus:border-blue-700 outline-none py-[6px] px-[10px] rounded-sm"
                    type="text"
                    id="category-name"
                    placeholder="Enter the image url"
                  />
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
                    <option value="Ellikqala">Ellikqala</option>
                    <option value="Taxtakópir">Taxtakópir</option>
                    <option value="Shomanay">Shomanay</option>
                    <option value="Amudarya">Amudarya</option>
                    <option value="Shımbay">Shımbay</option>
                    <option value="Kegeyli">Kegeyli</option>
                    <option value="Qaraózek">Qaraózek</option>
                    <option value="Qanlikol">Qanlikol</option>
                    <option value="Nókis rayon">Nókis rayon</option>
                    {state.products?.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.place}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-end items-center gap-1 mt-[15px]">
                  <button
                    type="button"
                    onClick={() => dispatch({ type: "TOGGLE_MODAL_ALERT" })}
                    className="py-[5px] px-[10px] rounded-sm bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold text-[16px]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="py-[5px] px-[10px] rounded-sm bg-green-600 hover:bg-green-700 active:scale-95 text-white font-semibold text-[16px]"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center">
              <div className="text-[18px] font-semibold">
                Delete product item
              </div>
              <button
                onClick={() => dispatch({ type: "TOGGLE_MODAL_ALERT" })}
                className="h-[30px] w-[30px] flex justify-center items-center hover:bg-gray-100 rounded-sm active:scale-95"
              >
                <CgClose />
              </button>
            </div>
            <div className="mt-[10px]">
              <span>Are you sure you want to delete this product?</span>
              <div className="flex justify-end items-center gap-1 mt-[15px]">
                <button
                  onClick={() => dispatch({ type: "TOGGLE_MODAL_ALERT" })}
                  className="py-[5px] px-[10px] rounded-sm bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold text-[16px]"
                >
                  Cancel
                </button>
                <button
                  disabled={state.createLoading ? true : false}
                  onClick={() => {
                    handleDelete(state.selectItemId);
                  }}
                  className="py-[5px] px-[10px] rounded-sm bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold text-[16px]"
                >
                  {state.createLoading ? "Delete..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        )}
      </ModalAlert>
      <ToastContainer />
    </div>
  );
};

export default Destination;
