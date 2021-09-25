import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import app from "./app/reducer";
import login from "./login/reducer";
import subscribe from "./subscribe/reducer";
import partner from "./partner/reducer";

const rootReducer = (history) =>
  combineReducers({
    app,
    login,
    subscribe,
    partner,
    router: connectRouter(history),
  });
export default rootReducer;
