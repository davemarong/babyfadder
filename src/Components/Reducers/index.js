import { combineReducers } from "redux";
import isloggedReducer from "./islogged";
import usernameReducer from "./username";
import passwordReducer from "./password";
import emailReducer from "./email";

const allReducers = combineReducers({
  islogged: isloggedReducer,
  username: usernameReducer,
  password: passwordReducer,
  email: emailReducer,
});
export default allReducers;
