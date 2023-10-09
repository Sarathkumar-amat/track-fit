
export const fetchExercise = () =>async (dispatch)=>{
    try{
        // dispatch({ type: "FETCH_DATA_LOADING" });
        const response = await fetch(
            'https://fitness-tracker-backend.sarathkumarnall.repl.co/api/exercises'
          ); 
        console.log(response);
        const data = await response.json();
        dispatch({ type: "FETCH_EXERCISE_SUCCESS", payload: data.allExercise });
    }
    catch(error)
    {
        console.log(error);
        dispatch({ type: "FETCH_EXERCISE_FAILURE"});
    }
}
export const addExercise = (newExercise)=> async (dispatch)=>{
    try{
        const response = await fetch("https://fitness-tracker-backend.sarathkumarnall.repl.co/api/exercises",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(newExercise)
        });
        const data = await response.json();
        if(data.success===true)
        {
            dispatch({type:"ADD_EXERCISE_SUCCESS",payload:data.exerciseData});
        }
    }
    catch(error)
    {
        console.log(error);
        dispatch({ type: "ADD_EXERCISE_FAILURE"});
    }
}
export const fetchFood = () => async(dispatch) =>{
    try{
        const response = await fetch("https://fitness-tracker-backend.sarathkumarnall.repl.co/api/food");
        console.log(response);
        const data = await response.json();
        dispatch({type:"FETCH_FOOD_SUCCESS",payload:data.allFood});
    }
    catch(error)
    {
        console.log(error);
        dispatch({ type: "FETCH_FOOD_FAILURE"});
    }
}