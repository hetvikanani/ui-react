import * as actions from "./constant";
const initialState = {
  error: false,
  loading: false,
  message: false,
  isAdded: false,
  isDeleted: false,
  employee:{},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_PARTNER_INITIATED:
      return {
        ...state,
        message: false,
        error: false,
        loading: true,
      };
    case actions.SAVE_PARTNER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        message: false,

      };
    case actions.SAVE_PARTNER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.error,
      };
      case actions.GET_PARTNER_INITIATED:
        return {
          ...state,
          message: false,
          error: false,
          loading: true,
        };
      case actions.GET_PARTNER_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          message: false,
  
        };
      case actions.GET_PARTNER_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
          message: action.error,
        };
        case actions.DELETE_PARTNER_INITIATED:
            return {
              ...state,
              isDeleted: false,
              message: false,
              error: false,
              loading: true,
            };
          case actions.DELETE_PARTNER_SUCCESS:
            return {
              ...state,
              loading: false,
              error: false,
              isDeleted: true,
            };
          case actions.DELETE_PARTNER_ERROR:
            return {
              ...state,
              loading: false,
              error: true,
              isDeleted: false,
              message: action.error,
            };
            case actions.GET_PARTNER_BY_ID_INITIATED:
                return {
                  ...state,
                  message: false,
                  error: false,
                  loading: true,
                };
              case actions.GET_PARTNER_BY_ID_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  error: false,
                  message: false,
          
                };
              case actions.GET_PARTNER_BY_ID_ERROR:
                return {
                  ...state,
                  loading: false,
                  error: true,
                  message: action.error,
                };
    default:
      return state;
  }
};
