import React, { Fragment } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import SignUp from "./container/auth/SignUp";
import Login from "./container/auth/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { hasRole } from "../src/config/auth";
import LandingPage from "./container/home/LandingPage";
import OrganizationDashboard from "./container/home/OrganizationDashboard";
import UserDashboard from "./container/home/UserDashboard";
import LearningProviderDashboard from "./container/home/LearningProviderDashboard";
import NotFoundPage from "./container/other/NotFoundPage";
import AddTrainingUser from "./container/learning_provider/AddTrainingUser";
import CreateTrainingPage from "./container/learning_provider/CreateTrainingPage";
import RegisterOrganization from "./container/organization/RegisterOrganization";
import ShowAllTrainings from "./container/learning_provider/ShowAllTrainings";
import ShowTrainingUser from "./container/learning_provider/ShowTrainingUser";
import UserWiseTraining from "./container/learning_provider/provider_user/UserWiseTraining";
import HomePage from "./container/home/HomePage";
import ProviderUserDashboard from "./container/learning_provider/provider_user/ProviderUserDashboard";
import OrganizationRequest from "./container/admin/OrganizationRequest";
import ShowAllOrg from "./container/admin/ShowAllOrg";
import NewRegisterOrganizations from "./container/admin/NewRegisterOrganizations";
import CreateOrgTrainingPage from "./container/organization/CreateOrgTrainingPage";
import ShowAllOrgTrainings from "./container/organization/ShowAllOrgTrainings";
import OrgUserDashboard from "./container/organization/org_user/OrgUserDashboard";

function App() {
  const auth = useSelector((state) => state.authReducer);
  return (
    <Router>
      <Routes>
        <Fragment>
          <Route
            path={"/admin/home"}
            caseSensitive={false}
            element={<HomePage />}
          />
          <Route
            path={"/admin/organizations"}
            caseSensitive={false}
            element={<ShowAllOrg />}
          />
          <Route
            path={"/admin/approve-organizations"}
            caseSensitive={false}
            element={<NewRegisterOrganizations />}
          />

          <Route
            path={"/lpu-home"}
            caseSensitive={false}
            element={<ProviderUserDashboard />}
          />
          <Route
            path={"/users"}
            caseSensitive={false}
            element={<UserDashboard />}
          />
          <Route
            path={"/organization"}
            caseSensitive={false}
            element={<OrganizationDashboard />}
          />
          <Route
            path={"/org/create-training"}
            caseSensitive={false}
            element={<CreateOrgTrainingPage />}
          />
          <Route
            path={"/org/all-trainings"}
            caseSensitive={false}
            element={<ShowAllOrgTrainings />}
          />

          <Route
            path={"/get-organizations"}
            caseSensitive={false}
            element={<OrganizationRequest />}
          />

          <Route
            path={"/ou/home"}
            caseSensitive={false}
            element={<OrgUserDashboard />}
          />

          <Route
            path={"/learning-provider"}
            caseSensitive={false}
            element={<LearningProviderDashboard />}
          />

          <Route
            path={"/add-training-user/:slug"}
            caseSensitive={false}
            element={<AddTrainingUser />}
          />
          <Route
            path={"/show-training-users/:slug"}
            caseSensitive={false}
            element={<ShowTrainingUser />}
          />

          <Route
            path={"/create-training"}
            caseSensitive={false}
            element={<CreateTrainingPage />}
          />
          <Route
            path={"/all-trainings"}
            caseSensitive={false}
            element={<ShowAllTrainings />}
          />
          <Route
            path={"/my-trainings"}
            caseSensitive={false}
            element={<UserWiseTraining />}
          />
        </Fragment>

        {Object.keys(auth).length && hasRole(auth, ["organization"]) && (
          <Fragment></Fragment>
        )}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" caseSensitive={false} element={<LandingPage />} />
        <Route path={"/login"} caseSensitive={false} element={<Login />} />
        <Route path={"/register"} caseSensitive={false} element={<SignUp />} />
        <Route
          path={"/register-organization"}
          caseSensitive={false}
          element={<RegisterOrganization />}
        />
      </Routes>
    </Router>
  );
}

export default App;
