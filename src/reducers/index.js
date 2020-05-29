import isLoggedReducer from "./isLLogged";
import logInfoReducer from "./logInfo";

import {combineReducers} from "redux";

const allReducers = combineReducers({
  isLoggedReducer,
  logInfoReducer
})

export default allReducers