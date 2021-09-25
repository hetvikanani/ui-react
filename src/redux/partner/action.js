import { message } from "antd";

import { partnerConst } from "modules/config";
import { axiosAuthPost, axiosAuthGet } from "modules/Axios";
import * as actions from "./constant";


export const savePartner = (id) => async (dispatch) => {
    try {
      dispatch({ type: actions.SAVE_PARTNER_INITIATED });
      let response = await axiosAuthPost(partnerConst.SAVE_PARTNER+ id);
      if (response.status || response.code === "200") {
        message.success(response.message);
        await dispatch({
          type: actions.SAVE_PARTNER_SUCCESS,
          payload: response,
        });
      } else {
        dispatch({
          type: actions.SAVE_PARTNER_ERROR,
          error: response,
        });
      }
    } catch (error) {
      console.log(error, "action catch");
      dispatch({
        type: actions.SAVE_PARTNER_ERROR,
        error: "Network Error",
      });
    }
  };

  export const getPartner = () => async (dispatch) => {
    try {
      dispatch({ type: actions.GET_PARTNER_INITIATED });
      let response = await axiosAuthPost(partnerConst.GET_PARTNER);
      if (response.status || response.code === "200") {
        message.success(response.message);
        await dispatch({
          type: actions.GET_PARTNER_SUCCESS,
          payload: response,
        });
      } else {
        dispatch({
          type: actions.GET_PARTNER_ERROR,
          error: response,
        });
      }
    } catch (error) {
      console.log(error, "action catch");
      dispatch({
        type: actions.GET_PARTNER_ERROR,
        error: "Network Error",
      });
    }
  };


  export const deletePartner = (id) => async (dispatch) => {
    try {
      dispatch({ type: actions.DELETE_PARTNER_INITIATED });
      let response = await axiosAuthGet(partnerConst.DELETE_PARTNER + id);
      if (response.status || response.code === "200") {
        message.success(response.message);
        await dispatch({
          type: actions.DELETE_PARTNER_SUCCESS,
          payload: response,
        });
      } else {
        dispatch({
          type: actions.DELETE_PARTNER_ERROR,
          error: response,
        });
      }
    } catch (error) {
      console.log(error, "action catch");
      dispatch({
        type: actions.DELETE_PARTNER_ERROR,
        error: "Network Error",
      });
    }
  };


  export const getPartnerById = (id) => async (dispatch) => {
    try {
      dispatch({ type: actions.GET_PARTNER_BY_ID_INITIATED });
      let response = await axiosAuthPost(partnerConst.GET_PARTNER_BY_ID + id);
      if (response.status || response.code === "200") {
        message.success(response.message);
        await dispatch({
          type: actions.GET_PARTNER_BY_ID_SUCCESS,
          payload: response,
        });
      } else {
        dispatch({
          type: actions.GET_PARTNER_BY_ID_ERROR,
          error: response,
        });
      }
    } catch (error) {
      console.log(error, "action catch");
      dispatch({
        type: actions.GET_PARTNER_BY_ID_ERROR,
        error: "Network Error",
      });
    }
  };