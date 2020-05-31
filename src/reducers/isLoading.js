const isLoading = (state = false,action) =>{
    switch(action.type){
        case "loading":
            return !state;
        default:
            return state;
    }
}

export default isLoading;