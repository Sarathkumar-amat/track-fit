
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
            dispatch({type:"ADD_EXERCISE_SUCCESS",payload:data.exercise});
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

export const addFood = (newFood)=>async(dispatch)=>{
    try{
        const response = await fetch("https://fitness-tracker-backend.sarathkumarnall.repl.co/api/food",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(newFood)
        })
        const data = await response.json();
        console.log(data);
        if(data.success===true)
        {
            dispatch({type:"ADD_FOOD_SUCCESS",payload:data.addedFood});
        }
    }
    catch(error)
    {
        console.log(error);
        dispatch({type:"ADD_FOOD_FAILURE"});
    }
}

export const deleteExercise = (exerciseData) =>async(dispatch) =>{
    dispatch({type:"SET_LOADING_TRUE"});
    try{
        const response = await fetch("https://fitness-tracker-backend.sarathkumarnall.repl.co/api/exercises",{
                method:"DELETE",
                headers:{
                "Content-type":"application/json",
                },
                body:JSON.stringify(exerciseData)
        })
        const data = await response.json();
        console.log(data);
        if(data.success===true)
        {
            dispatch({type:"REMOVE_EXERCISE_SUCCESS",payload:data.deletedExercise});
        }
    }
    catch(error)
    {
        console.log(error);
        dispatch({type:"REMOVE_EXERCISE_FAILURE"});

    }
}

export const deleteFood = (foodData) =>async(dispatch)=>
{
    try{
        const response = await fetch("https://fitness-tracker-backend.sarathkumarnall.repl.co/api/food",{
            method:"DELETE",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(foodData)
        });
        const data = await response.json();
        if(data.success===true)
        {
            dispatch({type:"REMOVE_FOOD_SUCCESS",payload:data.removedFood});
        }
    }
    catch(error)
    {
        console.log(error);
        dispatch({type:"REMOVE_FOOD_FAILURE"});
    }
}