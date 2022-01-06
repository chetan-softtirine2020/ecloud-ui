import axios from "axios";
import { APP_URL } from "../config/api";
import { authHeader } from "../config/auth_header";
const tokenn = localStorage.getItem("token");

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
    case 403:
      return {
        type: "ERROR",
        payload: { other_error: "Username and Password Incorrect." },
      };
    default:
      return {
        type: "ERROR",
        payload: { other_error: "Something went worng." },
      };
  }
}

//action for singup
export const signUp = (user) => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/register`,
        data: user,
        authHeader,
      })
      .then((token) => {
        localStorage.setItem("token", JSON.stringify(token.data.success.token));
        localStorage.setItem("data", JSON.stringify(token.data.success));
        dispatch({
          type: "SINGUP",
          payload: token.data.success,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  }
}

export const logIn = (cred) => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
    axios
      .post(`${APP_URL}/login`, cred, authHeader())
      .then((token) => {
        localStorage.setItem("token", JSON.stringify(token.data.success.token));
        localStorage.setItem("data", JSON.stringify(token.data.success));
        dispatch({
          type: "SINGUP",
          payload: token.data.success,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};


export const getAllOrganizationRegister = () => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
    axios
      .request({
        method: "post",
        url: `${APP_URL}/get-org-register`,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: "GET_REGISTER_ORGANIZATIONS",
          payload: res.data.list,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));       
      });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState.auth.token;
    if (token) {
      dispatch({
        type: "LOAD_USER",
        token,
      });
    } else return null;
  };
};

export const singOut = () => {
  return (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
    dispatch({
      type: "SIGN_OUT",
    });
  };
  // return (dispatch) => {
  //   dispatch({
  //     type: "REQUEST",
  //   });
  //   axios
  //     .request({
  //       method: "post",
  //       url: `${APP_URL}/logout`,
  //       data: { token: tokenn },
  //       headers: {
  //         Authorization: `Bearer ${tokenn.substring(1, tokenn.length - 1)}`,
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((token) => {
  //       dispatch({
  //         type: "SIGN_OUT",
  //         payload: token.data.success,
  //       });
  //     })
  //     .catch((error) => {
  //       dispatch(dispatch(errorMessage(error)));
  //     });
  // };
};

// Action for the forgot password
export const forgotPassword = (cred) => {
  return (dispatch) => {
    axios
      .post(`${APP_URL}/forgot-password`, cred)
      .then((response) => {
        dispatch({
          type: "FORGOT_PASSWORD",
          token: response.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const resetPassword = (cred) => {
  return (dispatch) => {
    axios
      .post(`${APP_URL}/reset-password`, cred)
      .then((response) => {
        dispatch({
          type: "RESET_PASSWORD",
          token: response.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};

export const changePassword = (cred) => {
  return (dispatch) => {
    axios
      .post(`${APP_URL}/change-password`, cred)
      .then((response) => {
        dispatch({
          type: "CHANGE_PASSWORD",
          token: response.data,
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error));
      });
  };
};
