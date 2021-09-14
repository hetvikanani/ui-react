import { push } from "connected-react-router";
import { message, notification } from "antd";

import { axiosPost, axiosGet } from "modules/Axios";
import { loader } from "redux/app/actions";
import { apiConstant } from "modules/config";
import * as actions from "./constant";

export const login = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.LOGIN_INITIATED });
    let response = await axiosPost(apiConstant.AUTH_LOGIN, payload);
    if (response.id) {
      //&& (response.role === "employee" || response.role === "admin"))
      let data = {
        userName: payload.username,
        userId: response.id,
        role: response.role,
        type: response.type,
        adminId: response.adminId,
        login: new Date(),
      };
      if (response.role === "admin") data.company = response.company;
      localStorage.setItem("auth", JSON.stringify(data));
      await dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: response,
      });
      let msg = "Login as ";
      if (response.role === "employee") msg = msg + response.type;
      else msg = msg + response.role;
      if (window.innerWidth > 1000) {
        notification["success"]({
          message: "User Authorized",
          description: msg,
        });
      } else message.success(msg);
      dispatch(push("/dashboard")); // window.location.reload();
    } // else response.role && message.warning("You can't login as " + response.role);
    else
      dispatch({
        type: actions.LOGIN_ERROR,
        error: response.message,
      });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({
      type: actions.LOGIN_ERROR,
      error: "Network Error",
    });
  }
};
export const setAuth = (payload) => (dispatch) => {
  dispatch({
    type: actions.SET_AUTH,
    payload,
  });
};
export const setAuthUser = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.SET_AUTH_INITIATED });
    let response = await axiosGet(payload);
    if (response.ResponseCode === 200) {
      await dispatch({
        type: actions.SET_AUTH_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.SET_AUTH_ERROR,
        error: response,
      });
      dispatch(logout());
    }
  } catch (error) {
    console.log(error, "action catch");
    dispatch({
      type: actions.SET_AUTH_ERROR,
      error: "Network Error",
    });
  }
};
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: actions.LOGOUT_INITIATED });
    dispatch(loader(true));
    localStorage.removeItem("auth");
    dispatch({ type: actions.LOGOUT });
    dispatch(loader(false));
    window.location.pathname !== "/login" && dispatch(push("/login"));
    window.location.reload();
  } catch (error) {
    dispatch(loader(false));
    console.log(error, "Logout Error");
  }
};
