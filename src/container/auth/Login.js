import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../../actions/auth_action";
import LoadingOverlay from "react-loading-overlay";
import { redirectUser } from "../../config/redirect";
import facebook from "../../images/icon-3.png";
import google from "../../images/icon-1.png";
import { Link } from "react-router-dom";
const Login = () => {
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    password: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(user));
    // setUser({
    //   password: "",
    //   email: "",
    // });
  };

  if (localStorage.getItem("token")) {
    const userData = JSON.parse(localStorage.getItem("data"));
    if (userData.roles.includes("user")) {
      return <Navigate to="/users" />;
    }
    if (userData.roles.includes("provider")) {
      return <Navigate to="/learning-provider" />;
    }
    if (userData.roles.includes("organization")) {
      return <Navigate to="/organization" />;
    }
    if (userData.roles.includes("organization_user")) {
      return <Navigate to="/ou/home" />;
    }
    if (userData.roles.includes("admin")) {
      return <Navigate to="/admin/home" />;
    }
    if (userData.roles.includes("provider_user")) {
      return <Navigate to="/lpu-home" />;
    }
  }

  return (
    <LoadingOverlay active={auth.loading} spinner text="Loading...">
      <div className="main-wrap">
        {/* <NavBar /> */}
        <div className="container top-margin">
          <div className="row">
            <div className="col-xl-12 align-items-center d-flex bg-white rounded-lg ">
              <div className="card shadow-none border-0 ml-auto mr-auto login-card">
                <div className="card-body rounded-0 text-left login_border">
                  <h2 className="fw-700 font-xl display2-md-size login_heading">
                    Login Account
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-email text-grey-500 pr-0"></i>
                      <input
                        type="text"
                        className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                        placeholder="Your Email Address"
                        value={user.email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                      />
                      <span className="error-msg">
                        {auth.errors && auth.errors.email
                          ? auth.errors.email
                          : ""}{" "}
                      </span>
                    </div>
                    <div className="form-group icon-input mb-1">
                      <input
                        type="Password"
                        className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) =>
                          setUser({ ...user, password: e.target.value })
                        }
                      />
                      <span className="error-msg">
                        {auth.errors && auth.errors.password
                          ? auth.errors.password
                          : ""}{" "}
                      </span>
                      <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                    </div>
                    <div className="form-check text-left mb-3">
                      <input
                        type="checkbox"
                        className="form-check-input mt-2"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label font-xsss text-grey-500"
                        htmlFor="exampleCheck1"
                      >
                        Remember me
                      </label>
                      <a
                        href="forgot.html"
                        className="fw-600 font-xsss text-grey-700 mt-1 float-right"
                      >
                        Forgot your Password?
                      </a>
                    </div>
                    <div className="col-sm-12 p-0 text-left">
                      <div className="form-group mb-1">
                        <input
                          type="submit"
                          name="submit"
                          value="Login"
                          className="form-control text-center style2-input text-white fw-600 login_btn border-0 p-0 "
                        />
                      </div>

                      <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                        Dont have account{" "}
                        <Link to={"/register"} className="fw-700 ml-1">
                          Register
                        </Link>
                      </h6>
                    </div>
                  </form>

                  <div className="col-sm-12 p-0 text-center mt-2">
                    <h6 className="mb-0 d-inline-block bg-white fw-500 font-xsss text-grey-500 mb-3">
                      Or, Sign in with your social account{" "}
                    </h6>
                    <div className="form-group mb-1">
                      <a
                        href="#"
                        className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2"
                      >
                        <img
                          src={google}
                          alt="icon"
                          className="ml-2 w40 mb-1 mr-5"
                        />{" "}
                        Sign in with Google
                      </a>
                    </div>
                    <div className="form-group mb-1">
                      <a
                        href="#"
                        className="form-control text-left style2-input text-white fw-600 bg-twiiter border-0 p-0 "
                      >
                        <img
                          src={facebook}
                          alt="icon"
                          className="ml-2 w40 mb-1 mr-5"
                        />{" "}
                        Sign in with Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default Login;
