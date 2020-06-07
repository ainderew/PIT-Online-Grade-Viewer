const teacherSubjectInfo = (state = {}, action) =>{
  switch(action.type){
    case "validSubject":
      return state = action.subjectInfo;
    default:
      return state;
  }
}

export default teacherSubjectInfo;