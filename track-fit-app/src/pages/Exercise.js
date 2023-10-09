import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteExercise, fetchExercise } from "../redux/action";

export function Exercise()
{
    const dispatch = useDispatch();
    let exercise = useSelector((state)=>state.exercise);
    let loadingStatus = useSelector((state)=>state.loading);

    useEffect(()=>{
        dispatch(fetchExercise());
    },[dispatch]);

    const handleDeleteExercise = (exerciseData)=>{
        dispatch(deleteExercise(exerciseData));
    }
    return (<div>
       {loadingStatus?<h2>Loading...</h2> :<ul> 
            {exercise?.map((exerciseData,index)=>
            <li key={index}>
                {exerciseData?.name}
                <button onClick={()=>handleDeleteExercise(exerciseData)}>Delete</button>
            </li>)}
        </ul>}
    </div>)
}