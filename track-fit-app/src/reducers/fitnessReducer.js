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
        case "ADD_FOOD_SUCCESS":
            return {...state,loading:false,error:null,food:[...state.food,action.payload]};
        case "FETCH_FOOD_FAILURE":
            return {...state,loading:false,error:"Error fetching food data"};
        case "ADD_FOOD_FAILURE":
            return {...state,loading:false,error:"Error adding food data"};
        case "REMOVE_EXERCISE_SUCCESS":
            return {...state,loading:false,error:null,exercise:state.exercise.filter((exercise)=>exercise._id!==action.payload._id)};
        case "REMOVE_EXERCISE_FAILURE":
            return {...state,loading:false,error:"Error in removing exercise"};
        case "REMOVE_FOOD_SUCCESS":
            return {...state,loading:false,error:null,food:state.food.filter((food)=>food._id!==action.payload._id)};
        case "REMOVE_FOOD_FAILURE":
            return {...state,loading:false,error:"Error removing food"};
        case "SET_LOADING_TRUE":
            return {...state,loading:true,error:null};
        default:
            return {...state};
    }

}