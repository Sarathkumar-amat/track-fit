const initialState = {
    exercise:[],
    food:[],
    goals:[],
    loading:false,
    error:null,
}

export const fitnessReducer = (state=initialState,action) =>{
    switch(action.type)
    {
        case "FETCH_EXERCISE_SUCCESS":
            return {...state,loading:false,error:null,exercise:action.payload};
        case "ADD_EXERCISE_SUCCESS":
            return {...state,loading:false,error:null,exercise:[...state.exercise,action.payload]};
        case "FETCH_EXERCISE_FAILURE":
            return {...state,loading:false,error:"Error fetching exercise data"};
        case "ADD_EXERCISE_FAILURE":
            return {...state,loading:false,error:"Error adding exercise"};
        case "FETCH_FOOD_SUCCESS":
            return {...state,loading:false,error:null,food:action.payload};
        case "FETCH_FOOD_FAILURE":
            return {...state,loading:false,error:"Error fetching food data"}
        default:
            return {...state};
    }

}