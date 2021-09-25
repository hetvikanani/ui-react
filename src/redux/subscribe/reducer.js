import * as actions from "./constant";
const initialState = {
  error: false,
  loading: false,
  message: false,
  isAdded: false,
  isDeleted: false,
  product:{},
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
    case actions.GET_PRODUCT_INITIATED:
      return {
        ...state,
        message: false,
        error: false,
        loading: true,
      };
    case actions.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        product: action.payload.data,
      };
    case actions.GET_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.error,
      };
      case actions.DELETE_PRODUCT_INITIATED:
        return {
          ...state,
          isDeleted: false,
          message: false,
          error: false,
          loading: true,
        };
      case actions.DELETE_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          isDeleted: true,
        };
      case actions.DELETE_PRODUCT_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
          isDeleted: false,
          message: action.error,
        };
    default:
      return state;
  }
};
