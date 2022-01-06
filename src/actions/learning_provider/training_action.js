import axios from "axios";
import { APP_URL } from "../../config/api";
const token = localStorage.getItem("token");
// Create New Training

export const errorMessage = (err) => {
  switch (err.response.status) {
    case 422:
      return { type: "ERROR", payload: err.response.data };
    case 405:
      return { type: "ERROR", payload: { other_error: "Method Not Allowed" } };
    case 500:
      return {
        type: "ERROR",
        payload: { other_error: "Internal Server Error." },
      };
    default:
      return {
        type: "ERROR",
        payload: { other_error: "Something went worng." },
      };
  }
};

export const createTraining = (training) => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/create-training`,
        data: training,
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {        
        dispatch({
          type: "CREATE_TRAINING",
          payload: res.data.message,
        });
      })
      .catch((error) => {
          dispatch(errorMessage(error));
      });
  };
};

//Update New Training
export const updateTraining = (training) => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/update-training`,
        data: training,
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: "UPDATE_TRAINING",
          data: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const getTraining = (id) => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-training`,
        data: id,
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: "GET_TRAINING",
          payload: res.data.details,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const getAllTrainings = () => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/all-trainings`,
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: "ALL_TRAINING",
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const deleteTraining = (id) => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/delete-trainings`,
        headers: {
          Authorization: `Bearer ${token.substring(1, token.length - 1)}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: "DELETE_TRAINING",
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};
