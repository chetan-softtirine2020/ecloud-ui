const initState = {
  name: null,
  email: null,
  token: localStorage.getItem("token"),
  _id: null,
  roles: [],
  isLoggedIn: false,
  is_done:false,
   errors:[],
   list:[] 
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "ERROR":
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case "REQUEST":
      return {
        ...state,
        loading: true,
        is_done: false,
        errors: [],
      };
    
    case "SINGUP":
    case "SINGIN":
      // toast("Welcome......", {
      //   position: toast.POSITION.BOTTOM_RIGHT,
      // });
      const user = payload;
      return {
        ...initState,
        token: user.token,
        name: user.name,
        email: user.email,
        _id: user._id,
        roles: user.roles,
        isLoggedIn: true,
      };
    case "FORGOT_PASSWORD":
      // toast("Password rest link share on your email.", {
      //   position: toast.POSITION.BOTTOM_RIGHT,
      // });
      break;
      
    case "SIGN_OUT":
      localStorage.removeItem("token");
      localStorage.removeItem("data");      
      return {
        name: null,
        email: null,
        token: null,
        _id: null,
        roles: [],
        isLoggedIn: false,
      };
     case "GET_REGISTER_ORGANIZATIONS":
      return {
        ...state,
        loading: false,
        errors: [],
        list: payload,
      };     
       
    default:
      return state;
  }
};

export default authReducer;
