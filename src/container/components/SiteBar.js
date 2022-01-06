import React from "react";
import { useDispatch } from "react-redux";
import { singOut } from "../../actions/auth_action";
import { useNavigate, Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.jpg";
const SiteBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelClick = () => {
    dispatch(singOut());
    navigate("/");
  };
  const location = useLocation();
  const userData = JSON.parse(localStorage.getItem("data"));
  return (
    <div>
      <nav class="navigation scroll-bar">
        <div class="container pl-0 pr-0">
          <div class="nav-content">
            <div class="nav-top">
              <Link to={"/"}>
                <img src={logo} className="site_logo" />
              </Link>
              <a href="/" class="close-nav d-inline-block d-lg-none">
                <i class="ti-close bg-grey mb-4 btn-round-sm font-xssss fw-700 text-dark ml-auto mr-2 "></i>
              </a>
            </div>

            {userData.roles.includes("provider") && (
              <ul class="site_ul">
                <li>
                  <Link
                    to={"/learning-provider"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/learning-provider" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-play-circle mr-3"></i>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/create-training"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/create-training" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-play-circle mr-3"></i>
                    <span>Create Training</span>
                  </Link>
                </li>
                <li class="flex-lg-brackets">
                  <Link
                    to={"/all-trainings"}
                    data-tab="archived"
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/all-trainings" ? "active" : ""
                    }`}
                  >
                    <i class="feather-video mr-3"></i>
                    <span>All Tranings</span>
                  </Link>
                </li>
              </ul>
            )}

            {userData.roles.includes("provider_user") && (
              <ul class="">
                <li>
                  <Link
                    to={"/lpu-home"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/lpu-home" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-play-circle mr-3"></i>
                    <span>Home</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/my-trainings"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/my-trainings" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-play-circle mr-3"></i>
                    <span>My Trainigs</span>
                  </Link>
                </li>
              </ul>
            )}

            {userData.roles.includes("user") && (
              <ul class="">
                <li>
                  <Link
                    to={"/users"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/users" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-play-circle mr-3"></i>
                    <span>Trainigs</span>
                  </Link>
                </li>
              </ul>
            )}

            {userData.roles.includes("organization") && (
              <ul>
                <li>
                  <Link
                    to={"/organization"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/get-organizations" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-globe mr-3"></i>
                    <span> Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/org/create-training"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/org/create-training" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-globe mr-3"></i>
                    <span> Create Training</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/org/all-trainings"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/all-trainings" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-globe mr-3"></i>
                    <span> All Trainings</span>
                  </Link>
                </li>
              </ul>
            )}

            {userData.roles.includes("organization_user") && (
              <ul>
                <li>
                  <Link
                    to={"/ou/home"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/get-organizations" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-globe mr-3"></i>
                    <span> Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/org/create-training"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/org/create-training" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-globe mr-3"></i>
                    <span> Create Training</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/org/all-trainings"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/all-trainings" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-globe mr-3"></i>
                    <span> All Trainings</span>
                  </Link>
                </li>
              </ul>
            )}            

            {userData.roles.includes("admin") && (
              <ul>
                <li>
                  <Link
                    to={"/admin/home"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/admin/home" ? "active" : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-globe mr-3"></i>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/admin/organizations"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/admin/organizations"
                        ? "active"
                        : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-globe mr-3"></i>
                    <span>Organizations</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/admin/approve-organizations"}
                    class={`nav-content-bttn open-font ${
                      location.pathname === "/admin/approve-organizations"
                        ? "active"
                        : ""
                    }`}
                    data-tab="favorites"
                  >
                    <i class="feather-globe mr-3"></i>
                    <span>Approve Organizations</span>
                  </Link>
                </li>
              </ul>
            )}

            <ul>
              <li class="logo d-none d-xl-block d-lg-block"></li>
              <li>
                <a href="#" class="nav-content-bttn open-font h-auto pt-2 pb-2">
                  <i class="font-sm feather-pie-chart mr-3 "></i>
                  <span>Change Password</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => handelClick()}
                  class="nav-content-bttn open-font h-auto pt-2 pb-2"
                >
                  <i class="font-sm feather-pie-chart mr-3"></i>
                  <span>Logout</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-content-bttn open-font h-auto pt-2 pb-2">
                  <i class="font-sm feather-settings mr-3 "></i>
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SiteBar;
