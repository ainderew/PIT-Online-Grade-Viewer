import isLoggedReducer from "./isLogged";
import logInfoReducer from "./logInfo";
import isLoading from "./isLoading"

import {combineReducers} from "redux";

const allReducers = combineReducers({
  isLoggedReducer,
  logInfoReducer,
  isLoading
})

export default allReducers