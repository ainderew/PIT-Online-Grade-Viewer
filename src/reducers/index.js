import teacherSubjectInfoReducer from "./teacherSubjectInfo";
import logInfoReducer from "./logInfo";
import isLoading from "./isLoading"

import {combineReducers} from "redux";

const allReducers = combineReducers({
  teacherSubjectInfo: teacherSubjectInfoReducer,
  logInfoReducer,
  isLoading
})

export default allReducers