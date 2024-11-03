import { createStore } from "redux";

export const initialState = {
  products: [],
  users: [],
  isProLoading: false,
  proError: null,
  showModal: false,
  selectItemId: null,
  modalType: "",
  createLoading: false,
  showSidebar: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_PRO_DATA":
      return {
        ...state,
        isProLoading: true,
      };
    case "FETCHED_PRO_DATA":
      return {
        ...state,
        isProLoading: false,
        products: action.payload,
      };
    case "FETCHED_PRO_DATA_ERR":
      return {
        ...state,
        isProLoading: false,
        catError: action.payload,
      };
    case "TOGGLE_MODAL_ALERT":
      return {
        ...state,
        showModal: state.showModal ? false : true,
      };
    case "SELECT_ITEM_ID":
      return {
        ...state,
        selectItemId: action.payload,
      };
    case "SELECT_MODAL_TYPE":
      return {
        ...state,
        modalType: action.payload,
      };
    case "SET_CREATE_LOADING":
      return {
        ...state,
        createLoading: action.payload,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        showSidebar: state.showSidebar ? false : true,
      };
    case "FETCHED_USER":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;
