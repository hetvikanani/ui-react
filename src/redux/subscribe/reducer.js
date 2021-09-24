import * as actions from "./constant";
const initialState = {
  error: false,
  loading: false,
  message: false,
  isAdded: false,

};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_PRODUCT_INITIATED:
      return {
        ...state,
        isAdded: false,
        message: false,
        error: false,
        loading: true,
      };
    case actions.SAVE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        isAdded: true,
      };
    case actions.SAVE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        isAdded: false,
        message: action.error,
      };
    default:
      return state;
  }
};
