export const login = (userInfo) =>{
  return{
    type: "valid",
    userInfo: userInfo
  }
}

export const isLoading = () =>{
  return{
    type: "loading"
  }
}