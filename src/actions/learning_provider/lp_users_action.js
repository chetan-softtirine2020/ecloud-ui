import axios from "axios";
import { APP_URL } from "../../config/api";
const token = localStorage.getItem("token");

export const errorMessage = (err) => {
  switch (err.response.status) {
    case 422:
      console.log("Error In Switch 422");
      return { type: "ERROR", payload: err.response.data };
    case 405:
      return { type: "ERROR", payload: { other_error: "Method Not Allowed" } };
    case 500:
      return {
        type: "ERROR",
        payload: { other_error: "The given data was invalid"},
      };
    default:
      return {  
        type: "ERROR",
        payload: { other_error: "Something went worng." },
      };
  }
};
export const addUserTraining = (training) => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST_TRAINING",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/lp/add-training-user`,
        data: training,
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: "ADD_USER_TRAINING",
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const importUserTraining = (file) => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST_TRAINING",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/lp/import-training-user`,
        data: file,
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: "IMPORT_USER_TRAINING",
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const getAllTrainingUsers = (parm) => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST_TRAINING",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/lp/get-training-users`,
        data: parm,
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: "ALL_TRAINING_USRS",
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};
