const logInfoReducer = (state={},action) =>{
  switch(action.type){
    case "valid":
      return state = action.userInfo;
    default:
      return state;
  }
}

export default logInfoReducer