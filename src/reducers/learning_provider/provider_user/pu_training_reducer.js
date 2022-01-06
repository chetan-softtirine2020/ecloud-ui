export const initState = {
    isDone: false,
    is_done: false,
    loading: false,
    errors: [],
  };
  
  const puTrainingReducer = (state = initState, { type, payload }) => {
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
          errors: [],
        };
      case "UPDATE_USER_TRAINING":
        return {
          ...state,
          loading: false,
          errors: [],
          is_done: true,
        };
        case "USER_WISE_TRAINING":
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
  
  export default puTrainingReducer;
  