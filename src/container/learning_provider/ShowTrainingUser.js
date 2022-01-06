import React, { useEffect } from "react";
import AppBody from "../components/AppBody";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getAllTrainingUsers } from "../../actions/learning_provider/lp_users_action";
const ShowTrainingUser = () => {
  const state = useSelector((state) => state.trainingUserReducer);
  const dispatch = useDispatch();
  let { slug } = useParams();
  useEffect(() => {
    dispatch(getAllTrainingUsers({"slug":slug}));
  },[]);

//   const handelClick = (id) => {
//    navigate("/add-training-user");
//     // return < to="/add-training-user"/>          
//   };
  return (
    <AppBody
     loading={state.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
            <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-lg">
              <a href="default-settings.html" className="d-inline-block mt-2">
                <i className="ti-arrow-left font-sm text-white"></i>
              </a>
              <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                Training User
              </h4>
            </div>
            <div className="card-body p-lg-5 p-4 w-100 border-0 ">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>User Name</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Link</th>
                    <th>Join</th>
                   
                  </tr>
                </thead>
                <tbody>
                  {state.list &&
                    state.list.map((li, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{li.user_name}</td>
                        <td>{li.name}</td>
                        <td>{li.date}</td>
                        <td>{li.link}</td>  
                        <td>{li.join}</td>                       
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default ShowTrainingUser;
