export const login = (userInfo) =>{
  return{
    type: "valid",
    userInfo: userInfo
  }
}

export const teacherSubject = (subjectInfo) =>{
  return{
    type: "validSubject",
    subjectInfo: subjectInfo
  }
  
}