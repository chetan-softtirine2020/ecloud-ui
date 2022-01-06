import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserWiseTraining } from "../../../actions/learning_provider/provider_user/training_action";
import AppBody from "../../components/AppBody";
const UserWiseTraining = () => {
  const state = useSelector((state) => state.puTrainingReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserWiseTraining());
  },[]);

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
                Trainings 
              </h4>
            </div>
            <div className="card-body p-lg-5 p-4 w-100 border-0 ">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Sr.No</th>                   
                    <th>Name</th>
                    <th>Date</th>
                    <th>Link</th>
                    <th>Join</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {state.list &&
                    state.list.map((li, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>                      
                        <td>{li.name}</td>
                        <td>{li.date}</td>
                        <td>{li.link}</td>  
                        <td>{li.join}</td>               
                        <td><a href={li.link}><button className={"btn"}>Join </button> </a></td>                               
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

export default UserWiseTraining;
