import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducer = () => {
  return combineReducers({
    authReducer,
  });
};

export default rootReducer;
