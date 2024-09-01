//initila State
//={}+[]

const initialState ={
    message:"Welcome",
};

//reducer stage
const reducer = (State = initialState,action)=>{
    const newState ={...State};
    
    if(action.type === 'Message Change'){
        newState.message= "bye"
    }

    return newState;
};

export default reducer;